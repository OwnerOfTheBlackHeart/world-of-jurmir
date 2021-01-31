import { globals } from "../globals.js";
import * as Utilities from "../utilities.js";

class SexTablesElement extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();
	}

	connectedCallback() {
		this.Render();
	}

	Render() {
		const container = document.createElement("div");
		container.classList.add("table-container");
		this.appendChild(container);

		let column = document.createElement("div");
		column.classList.add("table-column");
		column.appendChild(this.BuildSexTable());
		container.appendChild(column);

		column = document.createElement("div");
		column.classList.add("table-column");
		column.appendChild(this.BuildRacesTable());
		container.appendChild(column);

		column = document.createElement("div");
		column.classList.add("table-column");
		column.appendChild(this.BuildBreastsTable());
		container.appendChild(column);
	}

	BuildSexTable(): HTMLTableElement {
		const table = document.createElement("table");

		let row = document.createElement("tr");
		table.appendChild(row);

		row.appendChild(Utilities.CreateTableHeader("Roll"));
		row.appendChild(Utilities.CreateTableHeader("Sex"));

		globals.sexRanges.forEach((sexRange) => {
			row = document.createElement("tr");
			table.appendChild(row);

			let rollString = sexRange.to === sexRange.from ? sexRange.to.toString() : `${sexRange.from.toString()} to ${sexRange.to.toString()}`;

			row.appendChild(Utilities.CreateTableData(rollString));
			row.appendChild(Utilities.CreateTableData(sexRange.value));
		});

		return table;
	}

	BuildRacesTable(): HTMLTableElement {
		const table = document.createElement("table");

		let row = document.createElement("tr");
		table.appendChild(row);

		row.appendChild(Utilities.CreateTableHeader("Race"));
		row.appendChild(Utilities.CreateTableHeader("Erect Dick Length<br/>(in inches)"));
		row.appendChild(Utilities.CreateTableHeader("Heroic Erect Dick Length<br/>(in inches)"));
		row.appendChild(Utilities.CreateTableHeader("Natural Breast Size<br/>(See Cup Size Chart)"));

		globals.sexualCharacteristics.forEach((raceSet) => {
			row = document.createElement("tr");
			table.appendChild(row);

			row.appendChild(Utilities.CreateTableData(Utilities.compressStringArray(raceSet.races)));

			let data = Utilities.CreateTableData(raceSet.dickLength.toString());
			data.setAttribute("align", "center");
			row.appendChild(data);

			data = Utilities.CreateTableData(raceSet.heroicDickLength.toString());
			data.setAttribute("align", "center");
			row.appendChild(data);

			data = Utilities.CreateTableData(raceSet.breastSize ? raceSet.breastSize.toString() : "N/A");
			data.setAttribute("align", "center");
			row.appendChild(data);
		});

		return table;
	}

	BuildBreastsTable(): HTMLTableElement {
		const table = document.createElement("table");

		let row = document.createElement("tr");
		table.appendChild(row);

		row.appendChild(Utilities.CreateTableHeader("Roll"));
		row.appendChild(Utilities.CreateTableHeader("Cup Size"));
		row.appendChild(Utilities.CreateTableHeader("Breast Size<br/>(in inches)"));

		globals.breastSizes.forEach((breastSize) => {
			row = document.createElement("tr");
			table.appendChild(row);

			row.appendChild(Utilities.CreateTableData(breastSize.roll.toString()));
			row.appendChild(Utilities.CreateTableData(breastSize.cupSize));
			row.appendChild(Utilities.CreateTableData(breastSize.inchesSize + '"'));
		});

		return table;
	}
}

customElements.define("ap-sex-tables", SexTablesElement);
