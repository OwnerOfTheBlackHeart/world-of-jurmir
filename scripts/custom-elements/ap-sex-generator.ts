import { globals } from "../globals.js";
import { ClassChance, Race } from "../race.js";
import { DiceRoll } from "../roll.js";
import { RaceSexualFeatureRolls, Sex, SexRollRange } from "../sexual-characteristics.js";
import * as Utilities from "../utilities.js";

const randomOption = "Random";
const noneOption = "None";

export enum ClassType {
	random = "random",
	npc = "NPC",
	player = "Player",
}

export const AttractivenessTypes = {
	none: { name: "none", displayName: "None" } as AttractivenessInfo,
	any: {
		name: "any",
		displayName: "Any",
		valueRange: { from: 1, to: 10 },
	} as AttractivenessInfo,
	ugly: {
		name: "ugly",
		displayName: "Ugly",
		valueRange: { from: 1, to: 5 },
	} as AttractivenessInfo,
	average: {
		name: "average",
		displayName: "Average",
		valueRange: { from: 3, to: 7 },
	} as AttractivenessInfo,
	pretty: {
		name: "pretty",
		displayName: "Pretty",
		valueRange: { from: 5, to: 10 },
	} as AttractivenessInfo,
	veryPretty: {
		name: "very-pretty",
		displayName: "Very Pretty",
		valueRange: { from: 7, to: 10 },
	} as AttractivenessInfo,
	values: [] as AttractivenessInfo[],
};

AttractivenessTypes.values.push(
	AttractivenessTypes.none,
	AttractivenessTypes.any,
	AttractivenessTypes.ugly,
	AttractivenessTypes.average,
	AttractivenessTypes.pretty,
	AttractivenessTypes.veryPretty
);

class SexGeneratorElement extends HTMLElement {
	raceSelect: HTMLSelectElement;
	sexSelect: HTMLSelectElement;
	attractivenessSelect: HTMLSelectElement;
	settingSelect: HTMLSelectElement;
	classTypeSelect: HTMLSelectElement;
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

		row = document.createElement("tr");
		table.appendChild(row);

		row.appendChild(Utilities.CreateTableData("<b>Attractiveness:</b>"));
		data = document.createElement("td");
		data.appendChild(this.attractivenessSelect);
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

		this.BuildSortingRow(table);

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

		this.raceSelect.id = "race-select-box";
		this.sexSelect.id = "sex-select-box";
		this.attractivenessSelect.id = "attractiveness-select-box";
		this.settingSelect.id = "setting-select-box";
		this.classTypeSelect.id = "class-type-select-box";

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

		globals.sexRanges.forEach((sexRange) => {
			option = document.createElement("option");
			option.value = sexRange.value;
			option.text = sexRange.value;
			this.sexSelect.appendChild(option);
		});

		// Attractiveness
		AttractivenessTypes.values.forEach((attractivenessType) => {
			option = document.createElement("option");
			option.value = attractivenessType.name;
			option.text = attractivenessType.displayName;
			this.attractivenessSelect.appendChild(option);
		});

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

	BuildSortingRow(table: HTMLTableElement) {
		// TODO: Setup sorting
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

		// TODO: Add sorting here

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
				race = Utilities.getRandomItemFromRange(raceTable);
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
			sex = globals.sexRanges.find((sexRange) => sexRange.value === this.sexSelect.value);
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

		if (this.attractivenessSelect.value !== AttractivenessTypes.none.name) {
			const attractiveness = AttractivenessTypes.values.find(
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

			const isPC =
				this.classTypeSelect.value === ClassType.random
					? Utilities.getRandomInteger(1, 100) <= race.pcChance
					: this.classTypeSelect.value === ClassType.player;
			let characterClass = isPC ? Utilities.getRandomItemFromRange(race.pcClasses) : Utilities.getRandomItemFromRange(race.npcClasses);

			toReturn.class = characterClass.name;
			toReturn.level = new DiceRoll(characterClass.levelRoll).roll().total + this.communityModifierInput.valueAsNumber;
		}

		return toReturn;
	}

	GetRandomSex(): SexRollRange {
		return Utilities.getRandomItemFromRange(globals.sexRanges);
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
}

interface AttractivenessInfo {
	name: string;
	displayName: string;
	valueRange?: Utilities.NumberRange;
}
