import * as Utilities from "../utilities.js";
import { TimeRef, Time } from "../time.js";
import { globals } from "../globals.js";

export class TimeTable extends HTMLElement {
	get showSeason() {
		return this.hasAttribute("show-season");
	}

	set showSeason(val) {
		if (val) {
			this.setAttribute("show-season", "");
		} else {
			this.removeAttribute("show-season");
		}
	}

	get showAllMonths() {
		return this.hasAttribute("show-all-months");
	}

	set showAllMonths(val) {
		if (val) {
			this.setAttribute("show-all-months", "");
		} else {
			this.removeAttribute("show-all-months");
		}
	}

	get currentDateValue() {
		return this.getAttribute("current-date-value");
	}

	set currentDateValue(val) {
		this.setAttribute("current-date-value", val);
	}

	rows: any[];
	table: HTMLTableElement;
	mainNode: HTMLElement;
	currentDate: Time;

	constructor() {
		// Always call super first in constructor
		super();

		this.rows = [];
		this.table;
		this.mainNode = this;

		if (Utilities.IsGoodString(this.innerHTML)) {
			this.rows = Utilities.StringToObject(this.innerHTML);
		}

		if (this.currentDateValue) {
			this.currentDate = Utilities.getDescendantProperty<Time>(globals, this.currentDateValue);
		}
	}

	connectedCallback() {
		this.Render();
	}

	Render() {
		this.innerHTML = "";

		if (this.rows.length > 0) {
			this.table = document.createElement("table");
			this.mainNode.appendChild(this.table);

			for (let row of this.rows) {
				switch (row[0]) {
					case "header":
						this.table.appendChild(this.BuildHeaderRow(row));
						break;
					default:
						this.table.appendChild(this.BuildNormalRow(row));
				}
			}
		} else if (this.showAllMonths) {
			this.table = document.createElement("table");
			this.mainNode.appendChild(this.table);

			this.BuildAllMonths(this.table);
		}
	}

	BuildHeaderRow(row: any[]) {
		let node = document.createElement("tr");
		let data = Utilities.CreateTableHeader(row[1]);

		node.appendChild(data);
		data.setAttribute("colspan", "3");

		return node;
	}

	BuildNormalRow(row: any[]) {
		// Setup
		let date = new Time(row[0], row[1], row[2]);
		let node = document.createElement("tr");

		// Offset
		if (this.currentDate) {
			const diffString = Time.BuildDiffString(this.currentDate, date);
			const dataNode = Utilities.CreateTableData(diffString);

			if (diffString.search("ago") >= 0) {
				dataNode.classList.add("previous-date");
			} else if (diffString.search("from now") >= 0) {
				dataNode.classList.add("future-date");
			} else {
				dataNode.classList.add("current-date");
			}

			node.appendChild(dataNode);
		}

		// Date Display
		node.appendChild(Utilities.CreateTableData(date.toString(this.showSeason)));

		// Notes Column
		if (row[3] != undefined) {
			node.appendChild(Utilities.CreateTableData(row[3]));
		}

		return node;
	}

	BuildAllMonths(table: HTMLTableElement) {
		// The header
		let node = document.createElement("tr");
		let data = Utilities.CreateTableHeader("List of Months");

		table.appendChild(node);
		node.appendChild(data);
		data.setAttribute("colspan", "3");

		node = document.createElement("tr");
		data = Utilities.CreateTableHeader("#");
		table.appendChild(node);
		node.appendChild(data);

		data = Utilities.CreateTableHeader("Month Name");
		table.appendChild(node);
		node.appendChild(data);

		data = Utilities.CreateTableHeader("Season");
		table.appendChild(node);
		node.appendChild(data);

		// The months
		for (let i = 0; i < TimeRef.months.length; i++) {
			node = document.createElement("tr");
			table.appendChild(node);

			// Month Number
			data = Utilities.CreateTableData((TimeRef.months[i].position + 1).toString());
			node.appendChild(data);

			// Month Name
			data = Utilities.CreateTableData(TimeRef.months[i].name);
			node.appendChild(data);

			// Month Season
			data = Utilities.CreateTableData(TimeRef.months[i].season);
			node.appendChild(data);
		}
	}
}

customElements.define("ap-time-table", TimeTable);
