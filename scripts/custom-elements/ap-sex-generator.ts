import { globals } from "../globals.js";
import { ClassChance, Race } from "../race.js";
import { DiceRoll } from "../roll.js";
import { RaceSexualFeatureRolls, Sex, SexRollRange } from "../sexual-characteristics.js";
import * as Utilities from "../utilities.js";
import { SortType } from "../utilities.js";

const randomOption = "Random";
const noneOption = "None";

export enum ClassType {
	random = "random",
	noCommoner = "No Commoner",
	npc = "NPC",
	player = "Player",
}

export enum SpecialSexTypes {
	feminine = "feminine",
	masculine = "masculine",
	herm = "hermaphrodite-any",
	inverse = "inverse",
}

export const SpecialOptions = {
	sex: {
		feminine: {
			name: SpecialSexTypes.feminine,
			displayName: "Feminine",
			rollTable: [
				{ from: 1, to: 1, sex: Sex.dickGirl },
				{ from: 2, to: 5, sex: Sex.female },
				{ from: 6, to: 6, sex: Sex.feminineHerm },
			],
		} as SexEntry,
		masculine: {
			name: SpecialSexTypes.masculine,
			displayName: "Masculine",
			rollTable: [
				{ from: 1, to: 1, sex: Sex.masculineHerm },
				{ from: 2, to: 5, sex: Sex.male },
				{ from: 6, to: 6, sex: Sex.cuntBoy },
			],
		} as SexEntry,
		hermaphrodite: {
			name: SpecialSexTypes.herm,
			displayName: "Herm (any)",
			rollTable: [
				{ from: 1, to: 3, sex: Sex.feminineHerm },
				{ from: 4, to: 6, sex: Sex.masculineHerm },
			],
		} as SexEntry,
		inverse: {
			name: SpecialSexTypes.inverse,
			displayName: "Trap/Inverse",
			rollTable: [
				{ from: 1, to: 3, sex: Sex.dickGirl },
				{ from: 4, to: 6, sex: Sex.cuntBoy },
			],
		} as SexEntry,
		values: [] as SexEntry[],
	},
	attractiveness: {
		none: { name: "none", displayName: "None" } as AttractivenessEntry,
		any: {
			name: "any",
			displayName: "Any",
			valueRange: { from: 1, to: 10 },
		} as AttractivenessEntry,
		ugly: {
			name: "ugly",
			displayName: "Ugly",
			valueRange: { from: 1, to: 5 },
		} as AttractivenessEntry,
		average: {
			name: "average",
			displayName: "Average",
			valueRange: { from: 3, to: 7 },
		} as AttractivenessEntry,
		pretty: {
			name: "pretty",
			displayName: "Pretty",
			valueRange: { from: 5, to: 10 },
		} as AttractivenessEntry,
		veryPretty: {
			name: "very-pretty",
			displayName: "Very Pretty",
			valueRange: { from: 7, to: 10 },
		} as AttractivenessEntry,
		values: [] as AttractivenessEntry[],
	},
	level: {
		levelOne: {
			from: 1,
			to: 10,
			formula: function (level: number) {
				return 1;
			},
		} as LevelEntry,
		quarterLevel: {
			from: 11,
			to: 16,
			formula: function (level: number) {
				return Math.ceil(level / 4);
			},
		} as LevelEntry,
		halfLevel: {
			from: 17,
			to: 19,
			formula: function (level: number) {
				return Math.ceil(level / 2);
			},
		} as LevelEntry,
		fullLevel: {
			from: 20,
			to: 20,
			formula: function (level: number) {
				return level;
			},
		} as LevelEntry,
		values: [] as LevelEntry[],
	},
};

SpecialOptions.sex.values.push(
	SpecialOptions.sex.feminine,
	SpecialOptions.sex.masculine,
	SpecialOptions.sex.hermaphrodite,
	SpecialOptions.sex.inverse
);

SpecialOptions.attractiveness.values.push(
	SpecialOptions.attractiveness.none,
	SpecialOptions.attractiveness.any,
	SpecialOptions.attractiveness.ugly,
	SpecialOptions.attractiveness.average,
	SpecialOptions.attractiveness.pretty,
	SpecialOptions.attractiveness.veryPretty
);

SpecialOptions.level.values.push(
	SpecialOptions.level.levelOne,
	SpecialOptions.level.quarterLevel,
	SpecialOptions.level.halfLevel,
	SpecialOptions.level.fullLevel
);

class SexGeneratorElement extends HTMLElement {
	raceSelect: HTMLSelectElement;
	sexSelect: HTMLSelectElement;
	attractivenessSelect: HTMLSelectElement;
	settingSelect: HTMLSelectElement;
	classTypeSelect: HTMLSelectElement;
	attractivenessSortSelect: HTMLSelectElement;
	sexSortSelect: HTMLSelectElement;
	isHeroicCheckbox: HTMLInputElement;
	generateCountInput: HTMLInputElement;
	output: HTMLDivElement;
	saveAnchor: HTMLAnchorElement;
	loadButton: HTMLInputElement;

	communityModifierInput: HTMLInputElement;
	communityModifierContainer: HTMLTableRowElement;
	classTypeContainer: HTMLTableRowElement;

	races: RaceSexualFeatureRolls[];
	currentData = [] as SexInfo[];

	constructor() {
		// Always call super first in constructor
		super();
	}

	connectedCallback() {
		this.Render();
	}

	Render() {
		this.saveAnchor = document.createElement("a");
		this.saveAnchor.style.display = "none";
		this.appendChild(this.saveAnchor);

		this.BuildSelectBoxes();

		const inputContainer = document.createElement("div");
		this.appendChild(inputContainer);

		const table = document.createElement("table");
		table.classList.add("invisible");
		inputContainer.appendChild(table);

		let row = document.createElement("tr");
		table.appendChild(row);

		row.appendChild(Utilities.CreateTableData("<b>Race:</b>"));
		let data = document.createElement("td");
		data.appendChild(this.raceSelect);
		row.appendChild(data);

		row = document.createElement("tr");
		table.appendChild(row);

		row.appendChild(Utilities.CreateTableData("<b>Sex:</b>"));
		data = document.createElement("td");
		data.appendChild(this.sexSelect);
		row.appendChild(data);

		row.appendChild(Utilities.CreateTableData("<b>Sort By:</b>"));
		data = document.createElement("td");
		data.appendChild(this.sexSortSelect);
		row.appendChild(data);

		row = document.createElement("tr");
		table.appendChild(row);

		row.appendChild(Utilities.CreateTableData("<b>Attractiveness:</b>"));
		data = document.createElement("td");
		data.appendChild(this.attractivenessSelect);
		row.appendChild(data);

		row.appendChild(Utilities.CreateTableData("<b>Sort By:</b>"));
		data = document.createElement("td");
		data.appendChild(this.attractivenessSortSelect);
		row.appendChild(data);

		row = document.createElement("tr");
		table.appendChild(row);

		row.appendChild(Utilities.CreateTableData("<b>Setting:</b>"));
		data = document.createElement("td");
		data.appendChild(this.settingSelect);
		row.appendChild(data);

		this.classTypeContainer = document.createElement("tr");
		this.classTypeContainer.style.display = "none";
		table.appendChild(this.classTypeContainer);

		this.classTypeContainer.appendChild(Utilities.CreateTableData("<b>Class Type:</b>"));
		data = document.createElement("td");
		data.appendChild(this.classTypeSelect);
		this.classTypeContainer.appendChild(data);

		table.appendChild(this.BuildCommunityModifier());

		row = document.createElement("tr");
		table.appendChild(row);

		data = document.createElement("td");
		data.colSpan = 2;

		this.isHeroicCheckbox = document.createElement("input");
		this.isHeroicCheckbox.type = "checkbox";
		this.isHeroicCheckbox.id = "is-heroic-checkbox";
		data.appendChild(this.isHeroicCheckbox);

		const isHeroicLabel = document.createElement("label");
		isHeroicLabel.htmlFor = "is-heroic-checkbox";
		isHeroicLabel.textContent = "Heroic Dick Size";
		data.appendChild(isHeroicLabel);
		row.appendChild(data);

		row = document.createElement("tr");
		table.appendChild(row);

		row.appendChild(Utilities.CreateTableData("<b>Generate Count:</b>"));
		data = document.createElement("td");
		this.generateCountInput = document.createElement("input");
		this.generateCountInput.type = "number";
		this.generateCountInput.valueAsNumber = 1;
		this.generateCountInput.id = "generate-count-input";
		data.appendChild(this.generateCountInput);
		row.appendChild(data);

		row = document.createElement("tr");
		table.appendChild(row);

		data = document.createElement("td");
		data.colSpan = 2;

		const button = document.createElement("button");
		button.textContent = "Generate Sexual Attributes";
		button.onclick = () => this.OnGenerateClick();
		data.appendChild(button);
		row.appendChild(data);

		row = document.createElement("tr");
		table.appendChild(row);

		data = document.createElement("td");
		data.colSpan = 2;

		const saveButton = document.createElement("button");
		saveButton.textContent = "Save Results";
		saveButton.classList.add("sex-generator-save");
		saveButton.onclick = () => this.OnSaveClick();
		data.appendChild(saveButton);

		this.loadButton = document.createElement("input");
		this.loadButton.type = "file";
		this.loadButton.accept = ".json";
		this.loadButton.textContent = "Load Results";
		this.loadButton.onchange = (ev) => {
			this.OnLoadClick(ev);
		};
		data.appendChild(this.loadButton);
		row.appendChild(data);

		this.output = document.createElement("div");
		this.appendChild(this.output);
	}

	BuildSelectBoxes() {
		this.races = [];

		this.raceSelect = document.createElement("select");
		this.sexSelect = document.createElement("select");
		this.attractivenessSelect = document.createElement("select");
		this.settingSelect = document.createElement("select");
		this.classTypeSelect = document.createElement("select");
		this.attractivenessSortSelect = document.createElement("select");
		this.sexSortSelect = document.createElement("select");

		this.raceSelect.id = "race-select-box";
		this.sexSelect.id = "sex-select-box";
		this.attractivenessSelect.id = "attractiveness-select-box";
		this.settingSelect.id = "setting-select-box";
		this.classTypeSelect.id = "class-type-select-box";
		this.attractivenessSortSelect.id = "attractiveness-sort-select-box";
		this.sexSortSelect.id = "sex-sort-select-box";

		this.settingSelect.onchange = () => this.OnSettingChanged();

		let option: HTMLOptionElement;

		// Races
		option = document.createElement("option");
		option.value = randomOption;
		option.text = randomOption;
		this.raceSelect.appendChild(option);

		globals.sexualCharacteristics.forEach((characteristic) =>
			characteristic.races.forEach((race) => {
				option = document.createElement("option");
				option.value = race;
				option.text = race;
				this.raceSelect.appendChild(option);

				this.races.push({
					races: [race],
					dickLength: characteristic.dickLength,
					heroicDickLength: characteristic.heroicDickLength,
					breastSize: characteristic.breastSize,
				});
			})
		);

		// Sexes
		option = document.createElement("option");
		option.value = randomOption;
		option.text = randomOption;
		this.sexSelect.appendChild(option);

		SpecialOptions.sex.values.forEach((sexOption) => {
			option = document.createElement("option");
			option.value = sexOption.name;
			option.text = sexOption.displayName;
			this.sexSelect.appendChild(option);
		});

		globals.sexRanges.forEach((sexRange) => {
			option = document.createElement("option");
			option.value = sexRange.value;
			option.text = sexRange.value;
			this.sexSelect.appendChild(option);
		});

		// Attractiveness
		SpecialOptions.attractiveness.values.forEach((attractivenessType) => {
			option = document.createElement("option");
			option.value = attractivenessType.name;
			option.text = attractivenessType.displayName;
			this.attractivenessSelect.appendChild(option);
		});

		this.attractivenessSelect.value = SpecialOptions.attractiveness.any.name;

		// Settings
		option = document.createElement("option");
		option.value = noneOption;
		option.text = noneOption;
		this.settingSelect.appendChild(option);

		globals.randomRaceTables.ids.forEach((id) => {
			option = document.createElement("option");
			option.value = id;
			option.text = id;
			this.settingSelect.appendChild(option);
		});

		// Class Types
		option = document.createElement("option");
		option.value = ClassType.random;
		option.text = ClassType.random;
		this.classTypeSelect.appendChild(option);

		option = document.createElement("option");
		option.value = ClassType.player;
		option.text = ClassType.player;
		this.classTypeSelect.appendChild(option);

		option = document.createElement("option");
		option.value = ClassType.npc;
		option.text = ClassType.npc;
		this.classTypeSelect.appendChild(option);

		option = document.createElement("option");
		option.value = ClassType.noCommoner;
		option.text = ClassType.noCommoner;
		this.classTypeSelect.appendChild(option);

		// Sorts
		this.BuildSortOptions(this.attractivenessSortSelect);
		this.BuildSortOptions(this.sexSortSelect, true);

		this.attractivenessSortSelect.onchange = () => this.DisplayCurrentData();
		this.sexSortSelect.onchange = () => this.DisplayCurrentData();
	}

	BuildSortOptions(el: HTMLSelectElement, isSex = false) {
		let option = document.createElement("option");
		option.value = SortType.none;
		option.text = SortType.none;
		el.appendChild(option);

		option = document.createElement("option");
		option.value = SortType.asc;
		option.text = isSex ? "By Feminity" : SortType.asc;
		el.appendChild(option);

		option = document.createElement("option");
		option.value = SortType.desc;
		option.text = isSex ? "By Masculinity" : SortType.desc;
		el.appendChild(option);

		el.value = SortType.none;
	}

	BuildCommunityModifier(): HTMLTableRowElement {
		this.communityModifierContainer = document.createElement("tr");
		this.communityModifierContainer.style.display = "none";

		this.communityModifierContainer.appendChild(Utilities.CreateTableData("<b>Level Modifier:</b>"));
		const data = document.createElement("td");
		this.communityModifierInput = document.createElement("input");
		this.communityModifierInput.type = "number";
		this.communityModifierInput.valueAsNumber = 1;
		this.communityModifierInput.id = "community-modifier-input";
		data.appendChild(this.communityModifierInput);
		this.communityModifierContainer.appendChild(data);

		return this.communityModifierContainer;
	}

	OnSettingChanged() {
		if (this.settingSelect.value === noneOption) {
			this.communityModifierContainer.style.display = "none";
			this.classTypeContainer.style.display = "none";
		} else {
			this.communityModifierContainer.style.display = "table-row";
			this.communityModifierInput.valueAsNumber = 0;

			this.classTypeContainer.style.display = "table-row";
			this.classTypeSelect.value = ClassType.random;
		}
	}

	OnGenerateClick() {
		this.currentData = [];
		const generateCount = this.generateCountInput.valueAsNumber;

		for (let i = 0; i < generateCount; i++) {
			const sexInfo = this.GenerateSexualCharacteristics();
			this.currentData.push(sexInfo);
		}

		this.DisplayCurrentData();
	}

	OnSaveClick() {
		const file = new Blob([JSON.stringify(this.currentData, null, "\t")], { type: "application/json" });
		this.saveAnchor.href = URL.createObjectURL(file);
		this.saveAnchor.download = "npc-info.json";
		this.saveAnchor.click();
	}

	OnLoadClick(ev: Event) {
		ev.preventDefault();

		// Don't act on empty files
		if (this.loadButton.value.length && this.loadButton.files.length) {
			const reader = new FileReader();
			reader.onload = (loadEv) => {
				const newData = JSON.parse(loadEv.target.result as string) as SexInfo[];
				if (Array.isArray(newData)) {
					this.currentData = newData;
					this.DisplayCurrentData();
				}
			};
			reader.readAsText(this.loadButton.files[0]);
		}
	}

	DisplayCurrentData() {
		this.output.innerHTML = "";

		if (this.attractivenessSortSelect.value !== SortType.none || this.sexSortSelect.value !== SortType.none) {
			this.currentData.sort((lhs, rhs) => {
				let result = 0;
				if (lhs.attractiveness !== undefined) {
					if (this.attractivenessSortSelect.value === SortType.asc) {
						result = Utilities.Sorts.NumberAsc(lhs.attractiveness, rhs.attractiveness);
					} else if (this.attractivenessSortSelect.value === SortType.desc) {
						result = Utilities.Sorts.NumberDesc(lhs.attractiveness, rhs.attractiveness);
					}
				}

				if (result !== 0) {
					return result;
				}

				// Feminity = asc | Masculinity = desc
				if (this.sexSortSelect.value === SortType.asc) {
					result = Utilities.Sorts.NumberDesc(
						globals.sexRangeByKey[lhs.sex as Sex].feminity,
						globals.sexRangeByKey[rhs.sex as Sex].feminity
					);
				} else if (this.sexSortSelect.value === SortType.desc) {
					result = Utilities.Sorts.NumberAsc(
						globals.sexRangeByKey[lhs.sex as Sex].feminity,
						globals.sexRangeByKey[rhs.sex as Sex].feminity
					);
				}

				return result;
			});
		}

		this.currentData.forEach((sexInfo) => this.DisplaySexualCharacteristics(sexInfo));
	}

	DisplaySexualCharacteristics(sexInfo: SexInfo) {
		const div = document.createElement("div");
		div.classList.add("tile");
		this.output.appendChild(div);

		div.innerHTML = '<i class="power">Race:</i> ' + sexInfo.race + '<br/>\n<i class="power">Sex:</i> ' + sexInfo.sex;

		if (sexInfo.attractiveness) {
			div.innerHTML += '<br/>\n<i class="power">Attractiveness:</i> ' + sexInfo.attractiveness;
		}

		if (sexInfo.dickLength) {
			div.innerHTML += '<br/>\n<i class="power">Dick Length:</i> ' + sexInfo.dickLength + '"';
		}

		if (sexInfo.cupSize) {
			div.innerHTML += '<br/>\n<i class="power">Cup Size:</i> ' + sexInfo.cupSize;
		}

		if (sexInfo.class) {
			div.innerHTML += '<br/><i class="power">Class:</i> ' + sexInfo.class + " (" + sexInfo.level + ")";
		}

		if (sexInfo.cost) {
			div.innerHTML += '<br/><i class="power">Cost:</i> ' + sexInfo.cost + " gp";
		}
	}

	GenerateSexualCharacteristics(): SexInfo {
		let raceSexualFeatures: RaceSexualFeatureRolls;
		let race: Race;
		let sex: SexRollRange;

		if (this.raceSelect.value === randomOption) {
			let raceTable: Race[];

			if (this.settingSelect.value !== noneOption) {
				raceTable = globals.randomRaceTables.values[this.settingSelect.value];
			}

			if (raceTable) {
				race = Utilities.getRandomEntryFromRange(raceTable);
				raceSexualFeatures = this.races.find((r) => r.races.firstElement() === race.name);
			} else {
				raceSexualFeatures = this.races[Utilities.getRandomInteger(0, this.races.length - 1)];
			}
		} else {
			let toFind = this.raceSelect.value;
			raceSexualFeatures = this.races.find((race) => race.races.firstElement() === toFind);

			if (this.settingSelect.value !== noneOption) {
				const raceTable = globals.randomRaceTables.values[this.settingSelect.value];

				if (raceTable) {
					race = raceTable.find((r) => r.name === toFind);
				}
			}
		}

		if (this.sexSelect.value === randomOption) {
			sex = this.GetRandomSex();
		} else {
			let selectedSex = this.sexSelect.value;
			let sexEntry = SpecialOptions.sex.values.find((sexOption) => sexOption.name === selectedSex);

			if (sexEntry) {
				selectedSex = Utilities.getRandomEntryFromRange(sexEntry.rollTable).sex;
			}

			sex = globals.sexRanges.find((sexRange) => sexRange.value === selectedSex);
		}

		const toReturn: SexInfo = { race: raceSexualFeatures.races.firstElement(), sex: sex.value };

		if (sex.hasDick) {
			toReturn.dickLength = this.isHeroicCheckbox.checked
				? raceSexualFeatures.heroicDickLength.roll().total
				: raceSexualFeatures.dickLength.roll().total;
		}

		if (sex.hasBoobs) {
			if (raceSexualFeatures.breastSize) {
				const boobsRoll = raceSexualFeatures.breastSize.roll().total;
				const breastSize = globals.breastSizes.find((size) => size.roll === boobsRoll);

				toReturn.breastSize = breastSize.inchesSize;
				toReturn.cupSize = breastSize.cupSize;
			} else {
				toReturn.breastSize = 0;
				toReturn.cupSize = "N/A";
			}
		}

		if (this.attractivenessSelect.value !== SpecialOptions.attractiveness.none.name) {
			const attractiveness = SpecialOptions.attractiveness.values.find(
				(attractivenessType) => attractivenessType.name === this.attractivenessSelect.value
			);

			if (attractiveness) {
				toReturn.attractiveness = Utilities.getRandomInteger(attractiveness.valueRange.from, attractiveness.valueRange.to);
			}
		}

		if (race) {
			if (race.subName) {
				toReturn.race += ` (${race.subName})`;
			}

			let characterClass: ClassChance;
			const classType = this.classTypeSelect.value as ClassType;
			const isNoCommoner = classType === ClassType.noCommoner;

			do {
				const isPC =
					classType === ClassType.random || classType === ClassType.noCommoner
						? Utilities.getRandomInteger(1, 100) <= race.pcChance
						: classType === ClassType.player;
				characterClass = isPC ? Utilities.getRandomEntryFromRange(race.pcClasses) : Utilities.getRandomEntryFromRange(race.npcClasses);
			} while (isNoCommoner && characterClass.name === "Commoner");

			toReturn.class = characterClass.name;
			toReturn.level = this.GetLevel(characterClass);
		}

		if (this.settingSelect.value === "Undesten" || this.settingSelect.value === "Prince's Reclamation") {
			toReturn.cost = this.CalculateSlaveCost(toReturn);
		}

		return toReturn;
	}

	GetRandomSex(): SexRollRange {
		return Utilities.getRandomEntryFromRange(globals.sexRanges);
	}

	GetLevel(characterClass: ClassChance): number {
		let level = new DiceRoll(characterClass.levelRoll).roll().total;
		level = Utilities.getRandomEntryFromRange(SpecialOptions.level.values).formula(level + this.communityModifierInput.valueAsNumber);
		return Math.max(level, 1);
	}

	CalculateSlaveCost(info: SexInfo): number {
		if (info.race === undefined || info.attractiveness === undefined || info.class === undefined || info.sex === undefined) {
			return 0;
		}

		let baseCost = 0;
		let attractivenessMult = 1;
		let racialMult = 1;
		let sexMult = 1;

		// Base Cost
		switch (info.class) {
			case "Commoner":
				baseCost = (info.level ** 2 + 9) * 5;
				break;
			// NPC
			case "Warrior":
			case "Expert":
			case "Adept":
			case "Aristocrat":
				baseCost = (info.level ** 2 + 2) * 25;
				break;
			// Martial PC
			case "Barbarian":
			case "Fighter":
			case "Monk":
			case "Ranger":
			case "Rogue":
			case "Ninja":
			case "Shifter":
			case "Cavalier":
			case "Gunslinger":
			case "Samurai":
			case "Bloodrager":
			case "Paladin":
			case "Brawler":
			case "Slayer":
			case "Swashbuckler":
			case "Scout (CAdv, 10)":
				baseCost = info.level ** 2 * 250;
				break;
			// Divine PC
			case "Cleric":
			case "Oracle":
			case "Druid":
			case "Witch":
			case "Vampire Hunter":
			case "Inquisitor":
			case "Omdura":
			case "Antipaladin":
			case "Hunter":
			case "Shaman":
			case "Warpriest":
			case "Medium":
			case "Spiritualist":
			case "Favored Soul (CDiv, 6)":
			case "Dragon Shaman (PH2, 12)":
				baseCost = info.level ** 2 * 400;
				break;
			// Arcane PC
			case "Bard":
			case "Sorcerer":
			case "Wizard":
			case "Magus":
			case "Elementalist":
			case "Kineticist":
			case "Alchemist":
			case "Arcanist":
			case "Investigator":
			case "Skald":
			case "Mesmerist":
			case "Occultist":
			case "Psychic":
			case "Duskblade (PH2, 19)":
			case "Warlock (CArc, 5)":
			case "Warmage (CArc, 10)":
				baseCost = info.level ** 2 * 500;
				break;
		}

		// Attractiveness Multiplier
		if (info.attractiveness >= 7) {
			attractivenessMult = (info.attractiveness - 6) * 0.5 + 1;
		}

		// Racial Multiplier
		if (this.settingSelect.value === "Undesten") {
			switch (info.race) {
				case "Elf":
				case "Gnome":
				case "Drow":
					racialMult = 1.25;
					break;
				case "Aasimar":
				case "Tiefling":
					racialMult = 1.1;
					break;
				case "Ratfolk":
					racialMult = 0.75;
					break;
			}
		} else if (this.settingSelect.value === "Prince's Reclamation") {
			switch (info.race) {
				case "Lizardfolk":
				case "Drow (drustkin)":
					racialMult = 1.25;
					break;
				case "Aasimar":
				case "Tiefling":
				case "Goliath":
					racialMult = 1.1;
					break;
				case "Orc":
				case "Halfling":
					racialMult = 0.9;
					break;
			}
		}

		// Sex Multiplier
		switch (info.sex) {
			case Sex.feminineHerm:
			case Sex.masculineHerm:
				sexMult = 1.1;
				break;
			case Sex.cuntBoy:
			case Sex.dickGirl:
				sexMult = 0.9;
				break;
		}

		// Final Value
		return Math.round(baseCost * attractivenessMult * racialMult * sexMult);
	}
}

customElements.define("ap-sex-generator", SexGeneratorElement);

interface SexInfo {
	race: string;
	sex: string;
	dickLength?: number;
	cupSize?: string;
	breastSize?: number;
	attractiveness?: number;
	class?: string;
	level?: number;
	cost?: number;
}

interface SpecialOptionsEntry {
	name: string;
	displayName: string;
}

interface AttractivenessEntry extends SpecialOptionsEntry {
	valueRange?: Utilities.NumberRange;
}

interface SexEntry extends SpecialOptionsEntry {
	rollTable: SexEntryRange[];
}

interface SexEntryRange extends Utilities.NumberRange {
	sex: string;
}

interface LevelEntry extends Utilities.NumberRange {
	formula: (level: number) => number;
}
