import * as Utilities from "../utilities.js";
import { TimeRef, Time } from "../time.js";
import { globals } from "../globals.js";

interface TimeRow {
	time: Time;
	note: string;
}

interface CurrentDateSet {
	date: string;
	display: string;
}

interface CurrentTimeSet {
	time: Time;
	display: string;
}

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
		const currentDate = this.getAttribute("current-date-value");
		if (currentDate) {
			if (currentDate[0] === "[") {
				return JSON.parse(currentDate.replaceAll(`'`, `"`));
			} else {
				return currentDate;
			}
		} else {
			return undefined;
		}
	}

	set currentDateValue(val: string | CurrentDateSet[]) {
		let attribute = val;
		if (typeof attribute === "object") {
			attribute = JSON.stringify(attribute);
		}

		this.setAttribute("current-date-value", attribute);
	}

	get disableSort() {
		return this.hasAttribute("disable-sort");
	}

	set disableSort(val) {
		if (val) {
			this.setAttribute("disable-sort", "");
		} else {
			this.removeAttribute("disable-sort");
		}
	}

	headerTitle: string;
	rows: TimeRow[];
	table: HTMLTableElement;
	mainNode: HTMLElement;
	currentDate: Time | CurrentTimeSet[];

	constructor() {
		// Always call super first in constructor
		super();

		this.headerTitle = "";
		this.rows = [];
		this.table;
		this.mainNode = this;

		if (Utilities.IsGoodString(this.innerHTML)) {
			const data = Utilities.StringToObject<any[]>(this.innerHTML);
			if (data[0][0] === "header") {
				this.headerTitle = data[0][1];
				data.shift();
			}

			const dates: TimeRow[] = [];
			data.forEach((row) => {
				if (Number.isInteger(row?.[0])) {
					dates.push({
						time: new Time(row[0], row[1], row[2]).DistributeDays(),
						note: row[3], // TODO: Make this so that it can take multiple columns and combine them into one note
					});
				} else if (row?.[0]?.global) {
					dates.push({
						time: Utilities.getDescendantProperty<Time>(globals, row[0].global).DistributeDays(),
						note: row[1],
					});
				} else {
					dates.push({
						time: Time.FromInitializer(row[0]).DistributeDays(),
						note: row[1],
					});
				}
			});

			this.rows = dates;
		}

		const dateValue = this.currentDateValue;
		if (dateValue) {
			if (typeof dateValue === "string") {
				this.currentDate = Utilities.getDescendantProperty<Time>(globals, dateValue);
			} else {
				this.currentDate = dateValue.map<CurrentTimeSet>((set) => {
					return { display: set.display, time: Utilities.getDescendantProperty<Time>(globals, set.date) };
				});
			}
		}
	}

	connectedCallback() {
		this.Render();
	}

	Render() {
		this.innerHTML = "";

		if (this.rows.length > 0) {
			if (!this.disableSort) {
				this.rows.sort((a, b) => Time.Compare(a.time, b.time));
			}

			this.table = document.createElement("table");
			this.mainNode.appendChild(this.table);

			if (this.headerTitle) {
				this.table.appendChild(this.BuildHeaderRow(this.headerTitle));
			}

			for (let row of this.rows) {
				this.table.appendChild(this.BuildNormalRow(row));
			}
		} else if (this.showAllMonths) {
			this.table = document.createElement("table");
			this.mainNode.appendChild(this.table);

			this.BuildAllMonths(this.table);
		}
	}

	BuildHeaderRow(title: string) {
		let node = document.createElement("tr");
		let data = Utilities.CreateTableHeader(title);

		node.appendChild(data);
		data.setAttribute("colspan", "3");

		return node;
	}

	BuildNormalRow(dateRow: TimeRow) {
		// Setup
		let node = document.createElement("tr");

		// Date Diff String
		if (this.currentDate) {
			const dataNode = Utilities.CreateTableData("");

			if (Array.isArray(this.currentDate)) {
				this.currentDate.forEach((set, index) => {
					if (index > 0) {
						dataNode.appendChild(document.createElement("br"));
					}

					dataNode.appendChild(document.createTextNode(`${set.display}: `));
					dataNode.appendChild(this.BuildDiffNode(set.time, dateRow.time));
				});
			} else {
				dataNode.appendChild(this.BuildDiffNode(this.currentDate, dateRow.time));
			}

			node.appendChild(dataNode);
		}

		// Date Display
		node.appendChild(Utilities.CreateTableData(dateRow.time.toString(this.showSeason)));

		// Notes Column
		if (dateRow.note != undefined) {
			node.appendChild(Utilities.CreateTableData(dateRow.note));
		}

		return node;
	}

	BuildDiffNode(currentDate: Time, entryDate: Time) {
		const diffString = Time.BuildDiffString(currentDate, entryDate);
		const diffNode = document.createElement("span");
		diffNode.innerText = diffString;

		if (diffString.search("ago") >= 0) {
			diffNode.classList.add("previous-date");
		} else if (diffString.search("from now") >= 0) {
			diffNode.classList.add("future-date");
		} else {
			diffNode.classList.add("current-date");
		}

		return diffNode;
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
