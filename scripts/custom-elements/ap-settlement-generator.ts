import { getRandomItemFromRange } from "../utilities.js";
import {
	BuildSettlementFromPopulation,
	BuildSettlementFromTownSize,
	BuildSettlementFromTownSizeName,
	Settlement,
} from "../generators/settlement/settlements.js";
import { townSizes, townSizesValues } from "../generators/settlement/town-sizes.js";

const randomValue = "Random";
const selectPopulationValue = "Select Population";

export class SettlementGeneratorElement extends HTMLElement {
	displayDiv: HTMLDivElement;

	constructor() {
		// Always call super first in constructor
		super();
	}

	connectedCallback() {
		this.innerHTML = "";

		const inputDiv = document.createElement("div");
		this.appendChild(inputDiv);

		this.buildInputs(inputDiv);

		this.displayDiv = document.createElement("div");
		this.appendChild(this.displayDiv);
	}

	buildInputs(container: HTMLDivElement) {
		const townSizeSelect = document.createElement("select");
		container.appendChild(townSizeSelect);

		this.buildOptions(townSizeSelect);

		const populationInput = document.createElement("input");
		populationInput.type = "number";
		populationInput.disabled = true;
		populationInput.valueAsNumber = 0;
		container.appendChild(populationInput);

		townSizeSelect.onchange = (ev) => {
			populationInput.disabled = !(townSizeSelect.value === selectPopulationValue);
		};

		const button = document.createElement("button");
		button.innerText = "Generate Population";
		button.onclick = (ev) => {
			this.buildOutput(townSizeSelect.value, populationInput.valueAsNumber);
		};
		container.appendChild(button);
	}

	buildOptions(select: HTMLSelectElement) {
		let option = document.createElement("option");
		option.value = randomValue;
		option.innerText = randomValue;
		select.appendChild(option);

		option = document.createElement("option");
		option.value = selectPopulationValue;
		option.innerText = selectPopulationValue;
		select.appendChild(option);

		townSizes.forEach(([key, townSize]) => {
			option = document.createElement("option");
			option.value = key;
			option.innerText = townSize.name;
			select.appendChild(option);
		});

		select.value = randomValue;
	}

	buildOutput(townType: string, population?: number) {
		let settlement: Settlement;

		if (townType === randomValue) {
			settlement = BuildSettlementFromTownSize(getRandomItemFromRange(townSizesValues));
		} else if (townType === selectPopulationValue) {
			settlement = BuildSettlementFromPopulation(population);
		} else {
			settlement = BuildSettlementFromTownSizeName(townType);
		}

		this.displayDiv.innerHTML = "";

		let prettyRows = JSON.stringify(settlement, null, 4);
		prettyRows = prettyRows.replace(/\[[\w\d\s": \n\r{,}]+?\]/g, function (arrayString) {
			return arrayString.replace(/{\s+|,\s+"|"\s+}/g, function (substr) {
				if (substr.startsWith("{")) {
					return "{ ";
				} else if (substr.startsWith(",")) {
					return ', "';
				} else {
					return '" }';
				}
			});
		});

		const codeElement = document.createElement("code");
		const preElement = document.createElement("pre");
		preElement.innerHTML = prettyRows;
		codeElement.appendChild(preElement);
		this.displayDiv.appendChild(codeElement);
	}
}

customElements.define("ap-settlement-generator", SettlementGeneratorElement);
