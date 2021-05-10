import * as Utilities from "../utilities.js";
export class PopulationTableElement extends HTMLElement {
    constructor() {
        super();
        this.rows = [];
        if (Utilities.IsGoodString(this.innerHTML)) {
            this.rows = Utilities.StringToObject(this.innerHTML);
        }
    }
    connectedCallback() {
        if (this.rows && this.rows.length > 0) {
            this.Render();
        }
        else {
            this.innerHTML = "";
        }
    }
    Render() {
        this.innerHTML = "";
        const table = document.createElement("table");
        this.appendChild(table);
        table.appendChild(this.BuildHeaderRow());
        this.rows.forEach((row) => {
            table.appendChild(this.BuildClassRow(row));
        });
    }
    BuildHeaderRow() {
        const row = document.createElement("tr");
        row.appendChild(Utilities.CreateTableHeader("Level:", "population-name-header"));
        for (let i = 1; i <= 20; i++) {
            row.appendChild(Utilities.CreateTableHeader(i.toString(), "population-value-header"));
        }
        return row;
    }
    BuildClassRow(rowData) {
        const row = document.createElement("tr");
        row.appendChild(Utilities.CreateTableData(rowData.class, "population-name-cell"));
        for (let i = 1; i <= 20; i++) {
            const toDisplay = rowData[i] ? rowData[i].toString() : "";
            row.appendChild(Utilities.CreateTableData(toDisplay, "population-value-cell"));
        }
        return row;
    }
}
customElements.define("ap-population-table", PopulationTableElement);
//# sourceMappingURL=ap-population-table.js.map