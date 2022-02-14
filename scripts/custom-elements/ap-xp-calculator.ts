import { PullCharacterList, UpdatedCalculateXp, XpCharacterList, XpEnemy } from "./xp/3_5-xp.js";

export class XpCalculator extends HTMLElement {
	enemiesInputs: { cr: HTMLInputElement; count: HTMLInputElement }[] = [];
	selectedCharacters: Record<string, boolean> = {};
	characterList: XpCharacterList;
	outputDiv: HTMLDivElement;
	characterSelectDiv: HTMLDivElement;
	enemyInputDiv: HTMLDivElement;
	campaignSelect: HTMLSelectElement;

	private dynamicElementIdCount = 0;

	constructor() {
		// Always call super first in constructor
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		if (this.characterList) {
			this.Render();
		} else {
			PullCharacterList().then((characterList) => {
				this.characterList = characterList;
				this.Render();
			});
		}
	}

	Render() {
		this.innerHTML = "";

		this.shadowRoot.appendChild(this.BuildStyleElement("styles/main.css"));
		this.shadowRoot.appendChild(this.BuildStyleElement("styles/jurmir.css"));
		this.shadowRoot.appendChild(this.BuildStyleElement("styles/xp-calculator.css"));

		const containerDiv = document.createElement("div");
		containerDiv.classList.add("xp-calculator-container");

		let characterSelectArea: HTMLDivElement;
		let enemySelectArea: HTMLDivElement;
		let outputArea: HTMLDivElement;

		({ container: characterSelectArea, characterSelectDiv: this.characterSelectDiv } = this.BuildCharacterSelectArea());
		({ container: enemySelectArea, enemyGroupContainer: this.enemyInputDiv } = this.BuildEnemyInputArea());
		({ container: outputArea, outputDiv: this.outputDiv } = this.BuildOutputArea());

		this.shadowRoot.appendChild(containerDiv);
		containerDiv.appendChild(characterSelectArea);
		containerDiv.appendChild(enemySelectArea);
		containerDiv.appendChild(outputArea);
	}

	BuildStyleElement(filepath: string) {
		const linkElem = document.createElement("link");
		linkElem.setAttribute("rel", "stylesheet");
		linkElem.setAttribute("href", filepath);

		return linkElem;
	}

	BuildCharacterSelectArea() {
		const containerDiv = document.createElement("div");
		const characterSelectDiv = document.createElement("div");

		containerDiv.classList.add("characters-select-panel");
		containerDiv.appendChild(this.BuildCampaignSelect());
		containerDiv.appendChild(characterSelectDiv);

		characterSelectDiv.appendChild(this.BuildCharactersDisplay());

		return { container: containerDiv, characterSelectDiv };
	}

	BuildCampaignSelect() {
		const containerDiv = document.createElement("div");
		const header = document.createElement("h2");
		this.campaignSelect = document.createElement("select");

		containerDiv.classList.add("campaign-select-container");
		containerDiv.appendChild(header);
		containerDiv.appendChild(this.campaignSelect);

		header.innerText = "Campaign:";

		for (const campaignName in this.characterList) {
			const entry = document.createElement("option");
			entry.innerText = campaignName;
			entry.value = campaignName;

			if (this.campaignSelect.childNodes.length === 0) {
				entry.selected = true;
			}

			this.campaignSelect.appendChild(entry);
		}

		this.campaignSelect.onchange = () => this.RebuildCharactersDisplay();

		return containerDiv;
	}

	BuildCharactersDisplay() {
		const container = document.createElement("div");

		const campaign = this.characterList[this.campaignSelect.value];

		for (const groupName in campaign) {
			container.appendChild(this.BuildCharacterGroupHeader(groupName));
			campaign[groupName].forEach((character) => container.appendChild(this.BuildCheckboxRow(character.name)));
		}

		return container;
	}

	RebuildCharactersDisplay() {
		this.characterSelectDiv.innerHTML = "";
		this.characterSelectDiv.appendChild(this.BuildCharactersDisplay());

		this.selectedCharacters = {};
	}

	BuildCharacterGroupHeader(groupName: string) {
		const header = document.createElement("h3");
		header.innerText = groupName;

		return header;
	}

	BuildCheckboxRow(characterName: string) {
		this.dynamicElementIdCount += 1;
		const checkboxId = `ap-xp-calculator-${this.dynamicElementIdCount}`;

		const containerDiv = document.createElement("div");
		const checkbox = document.createElement("input");
		const label = document.createElement("label");

		containerDiv.classList.add("checkbox-container");
		containerDiv.appendChild(checkbox);
		containerDiv.appendChild(label);

		checkbox.id = checkboxId;
		checkbox.type = "checkbox";
		checkbox.onclick = () => this.OnCheckboxClicked(characterName, checkbox);

		label.innerText = characterName;
		label.htmlFor = checkboxId;

		return containerDiv;
	}

	OnCheckboxClicked(characterName: string, checkbox: HTMLInputElement) {
		this.selectedCharacters[characterName] = checkbox.checked;
	}

	BuildEnemyInputArea() {
		const containerDiv = document.createElement("div");
		const enemyGroupContainer = document.createElement("div");

		const header = document.createElement("h2");
		header.innerText = "Enemies";

		containerDiv.classList.add("enemies-select-panel");
		containerDiv.appendChild(header);
		containerDiv.appendChild(enemyGroupContainer);
		containerDiv.appendChild(this.BuildEnemyInputAreaButtons());

		enemyGroupContainer.appendChild(this.BuildEnemyInputRow());

		return { container: containerDiv, enemyGroupContainer };
	}

	BuildEnemyInputRow() {
		const containerDiv = document.createElement("div");
		containerDiv.classList.add("enemy-input-row");

		const { container: crDiv, input: crInput } = this.BuildEnemyInputSubrow("CR");
		const { container: countDiv, input: countInput } = this.BuildEnemyInputSubrow("Count");

		containerDiv.appendChild(crDiv);
		containerDiv.appendChild(countDiv);

		this.enemiesInputs.push({ cr: crInput, count: countInput });

		return containerDiv;
	}

	BuildEnemyInputSubrow(label: string) {
		const containerDiv = document.createElement("div");
		const labelElem = document.createElement("label");
		const input = document.createElement("input");

		containerDiv.classList.add("enemy-input-subrow");
		containerDiv.appendChild(labelElem);
		containerDiv.appendChild(input);

		labelElem.innerText = label;

		input.type = "number";
		input.valueAsNumber = 0;

		return { container: containerDiv, input };
	}

	BuildEnemyInputAreaButtons() {
		const containerDiv = document.createElement("div");
		containerDiv.classList.add("enemy-input-buttons-row");

		const addRowButton = document.createElement("button");
		const removeLastRowButton = document.createElement("button");
		const clearRowsButton = document.createElement("button");

		addRowButton.innerText = "Add Row";
		addRowButton.onclick = () => this.enemyInputDiv.appendChild(this.BuildEnemyInputRow());

		removeLastRowButton.innerText = "Remove Last Row";
		removeLastRowButton.onclick = () => {
			if (this.enemyInputDiv.childNodes.length !== 0) {
				this.enemyInputDiv.childNodes[this.enemyInputDiv.childNodes.length - 1].remove();
				this.enemiesInputs.pop();
			}
		};

		clearRowsButton.innerText = "Clear";
		clearRowsButton.onclick = () => {
			this.enemyInputDiv.innerHTML = "";
			this.enemiesInputs = [];
			this.enemyInputDiv.appendChild(this.BuildEnemyInputRow());
		};

		containerDiv.appendChild(addRowButton);
		containerDiv.appendChild(removeLastRowButton);
		containerDiv.appendChild(clearRowsButton);
		return containerDiv;
	}

	BuildOutputArea() {
		const containerDiv = document.createElement("div");
		const outputDiv = document.createElement("div");
		const header = document.createElement("h2");
		const calculateButton = document.createElement("button");

		containerDiv.classList.add("output-panel");
		containerDiv.appendChild(header);
		containerDiv.appendChild(calculateButton);
		containerDiv.appendChild(outputDiv);

		outputDiv.classList.add("xp-display");

		header.innerText = "Experience Gains";

		calculateButton.innerText = "Calculate Experience";
		calculateButton.onclick = () => this.CalculateExperience();

		return { container: containerDiv, outputDiv };
	}

	CalculateExperience() {
		this.outputDiv.innerHTML = "";

		const enemies: XpEnemy[] = this.enemiesInputs.map((enemyGroup) => ({
			cr: enemyGroup.cr.valueAsNumber,
			count: enemyGroup.count.valueAsNumber,
		}));

		this.outputDiv.innerHTML = "";

		UpdatedCalculateXp(this.campaignSelect.value, this.selectedCharacters, enemies).then((calculatedXp) => {
			calculatedXp.forEach((xpGroup) => {
				const containerDiv = document.createElement("div");
				const names = document.createElement("b");
				const xp = document.createElement("span");

				containerDiv.classList.add("xp-display-row");

				names.innerText = xpGroup.names + ": ";

				xp.innerText = xpGroup.xp.toString();

				containerDiv.appendChild(names);
				containerDiv.appendChild(xp);
				this.outputDiv.appendChild(containerDiv);
			});
		});
	}
}

customElements.define("ap-xp-calculator", XpCalculator);
