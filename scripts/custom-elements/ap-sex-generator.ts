import { globals } from "../globals.js";
import { ClassChance, Race } from "../race.js";
import { DiceRoll } from "../roll.js";
import { RaceSexualFeatureRolls, Sex, SexRollRange } from "../sexual-characteristics.js";
import * as Utilities from "../utilities.js";

const randomOption = "Random";
const noneOption = "None";

class SexGeneratorElement extends HTMLElement {
	raceSelect: HTMLSelectElement;
	sexSelect: HTMLSelectElement;
	settingSelect: HTMLSelectElement;
	isHeroicCheckbox: HTMLInputElement;
	generateCountInput: HTMLInputElement;
	output: HTMLDivElement;

	communityModifierInput: HTMLInputElement;
	communityModifierContainer: HTMLTableRowElement;

	races: RaceSexualFeatureRolls[];

	constructor() {
		// Always call super first in constructor
		super();
	}

	connectedCallback() {
		this.Render();
	}

	Render() {
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

		row.appendChild(Utilities.CreateTableData("<b>Setting:</b>"));
		data = document.createElement("td");
		data.appendChild(this.settingSelect);
		row.appendChild(data);

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

		this.output = document.createElement("div");
		this.appendChild(this.output);
	}

	BuildSelectBoxes() {
		this.races = [];

		this.raceSelect = document.createElement("select");
		this.sexSelect = document.createElement("select");
		this.settingSelect = document.createElement("select");

		this.raceSelect.id = "race-select-box";
		this.sexSelect.id = "sex-select-box";
		this.settingSelect.id = "setting-select-box";

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
		} else {
			this.communityModifierContainer.style.display = "table-row";
			this.communityModifierInput.valueAsNumber = 0;
		}
	}

	OnGenerateClick() {
		this.output.innerHTML = "";
		const generateCount = this.generateCountInput.valueAsNumber;

		for (let i = 0; i < generateCount; i++) {
			const sexInfo = this.GenerateSexualCharacteristics();
			this.DisplaySexualCharacteristics(sexInfo);
		}
	}

	DisplaySexualCharacteristics(sexInfo: SexInfo) {
		const div = document.createElement("div");
		div.classList.add("tile");
		this.output.appendChild(div);

		div.innerHTML = '<i class="power">Race:</i> ' + sexInfo.race + '<br/>\n<i class="power">Sex:</i> ' + sexInfo.sex;

		if (sexInfo.class) {
			div.innerHTML += '<br/><i class="power">Class:</i> ' + sexInfo.class + " (" + sexInfo.level + ")";
		}

		if (sexInfo.dickLength) {
			div.innerHTML += '<br/>\n<i class="power">Dick Length:</i> ' + sexInfo.dickLength + '"';
		}

		if (sexInfo.cupSize) {
			div.innerHTML += '<br/>\n<i class="power">Cup Size:</i> ' + sexInfo.cupSize;
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
				raceSexualFeatures = this.races[Utilities.getRndInteger(0, this.races.length - 1)];
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

		if (race) {
			if (race.subName) {
				toReturn.race += ` (${race.subName})`;
			}

			const isPC = Utilities.getRndInteger(1, 100) <= race.pcChance;
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
	class?: string;
	level?: number;
}
