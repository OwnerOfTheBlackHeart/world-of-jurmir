import * as Utilities from "../utilities.js";

export class SkillChart extends HTMLElement {
	skills: string[][];

	constructor() {
		// Always call super first in constructor
		super();
	}

	connectedCallback() {
		this.skills = Utilities.StringToObject(this.innerHTML);
		this.innerHTML = "";
		this.Render();
	}

	Render() {
		let baseNode = this;
		let table = document.createElement("table");
		baseNode.appendChild(table);

		this.BuildHeaders(table);

		if (this.skills.length > 0) {
			this.skills.forEach((element) => {
				this.BuildRow(table, element);
			});
		}
	}

	BuildHeaders(node: HTMLTableElement) {
		let tableRow = document.createElement("tr");
		node.appendChild(tableRow);

		tableRow.appendChild(Utilities.CreateTableHeader("Skill"));
		tableRow.appendChild(Utilities.CreateTableHeader("Ranks"));
		tableRow.appendChild(Utilities.CreateTableHeader("Bonus"));

		return node;
	}

	BuildRow(node: HTMLTableElement, row: string[]) {
		let tableRow = document.createElement("tr");
		node.appendChild(tableRow);

		tableRow.appendChild(Utilities.CreateTableData(row[0]));
		tableRow.appendChild(Utilities.CreateTableData(row[1]));
		tableRow.appendChild(Utilities.CreateTableData(row[2]));

		return node;
	}
}

customElements.define("ap-skill-chart", SkillChart);
