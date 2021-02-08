import { globals } from "../globals.js";
import { RaceSexualFeatureRolls, Sex, SexRollRange } from "../sexual-characteristics.js";
import * as Utilities from "../utilities.js";

const instructions = Object.freeze(`
To generate a birthday, enter the character's age in the input below and click the 'Generate Birthday' button.
The birthday, along with how long ago it was, will be displayed directly below this sentence.
`);

const randomOption = "Random";

class SexGeneratorElement extends HTMLElement {
	raceSelect: HTMLSelectElement;
	sexSelect: HTMLSelectElement;
	isHeroicCheckbox: HTMLInputElement;
	generateCountInput: HTMLInputElement;
	output: HTMLDivElement;

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

		this.raceSelect.id = "race-select-box";
		this.sexSelect.id = "sex-select-box";

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

		if (sexInfo.dickLength) {
			div.innerHTML += '<br/>\n<i class="power">Dick Length:</i> ' + sexInfo.dickLength + '"';
		}

		if (sexInfo.cupSize) {
			div.innerHTML += '<br/>\n<i class="power">Cup Size:</i> ' + sexInfo.cupSize;
		}
	}

	GenerateSexualCharacteristics(): SexInfo {
		let race: RaceSexualFeatureRolls;
		let sex: SexRollRange;

		if (this.raceSelect.value === randomOption) {
			race = this.races[Utilities.getRndInteger(0, this.races.length - 1)];
		} else {
			let toFind = this.raceSelect.value;
			race = this.races.find((race) => race.races.firstElement() === toFind);
		}

		if (this.sexSelect.value === randomOption) {
			sex = this.GetRandomSex();
		} else {
			sex = globals.sexRanges.find((sexRange) => sexRange.value === this.sexSelect.value);
		}

		const toReturn: SexInfo = { race: race.races.firstElement(), sex: sex.value };

		if (sex.hasDick) {
			toReturn.dickLength = this.isHeroicCheckbox.checked ? race.heroicDickLength.roll().total : race.dickLength.roll().total;
		}

		if (sex.hasBoobs) {
			if (race.breastSize) {
				const boobsRoll = race.breastSize.roll().total;
				const breastSize = globals.breastSizes.find((size) => size.roll === boobsRoll);

				toReturn.breastSize = breastSize.inchesSize;
				toReturn.cupSize = breastSize.cupSize;
			} else {
				toReturn.breastSize = 0;
				toReturn.cupSize = "N/A";
			}
		}

		return toReturn;
	}

	GetRandomSex(): SexRollRange {
		const roll = Utilities.getRndInteger(globals.sexRanges.firstElement().from, globals.sexRanges.lastElement().to);

		return globals.sexRanges.find((sexRange) => Utilities.isInRange(roll, sexRange.from, sexRange.to));
	}
}

customElements.define("ap-sex-generator", SexGeneratorElement);

interface SexInfo {
	race: string;
	sex: string;
	dickLength?: number;
	cupSize?: string;
	breastSize?: number;
}
