import * as Utilities from "../utilities.js";
class BasicTable extends HTMLElement {
    constructor() {
        super();
        this.rows = [];
        this.mainNode = this;
        if (Utilities.IsGoodString(this.innerHTML)) {
            this.rows = Utilities.StringToObject(this.innerHTML);
        }
    }
    get characterTable() {
        return this.hasAttribute("character-table");
    }
    set characterTable(val) {
        if (val) {
            this.setAttribute("character-table", "");
        }
        else {
            this.removeAttribute("character-table");
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
            if (this.characterTable) {
                this.table.setAttribute("class", "statBlock");
                this.table.setAttribute("cellspacing", "0");
            }
            for (let row of this.rows) {
                switch (row[0]) {
                    case "header":
                        this.table.appendChild(this.BuildHeaderRow(row));
                        break;
                    default:
                        this.table.appendChild(this.BuildNormalRow(row));
                }
            }
        }
    }
    BuildNormalRow(row) {
        let node = document.createElement("tr");
        this.CleanRow(row);
        node.appendChild(Utilities.CreateTableHeader(row[0]));
        node.appendChild(Utilities.CreateTableData(row[1]));
        return node;
    }
    BuildHeaderRow(row) {
        let node = document.createElement("tr");
        let header = Utilities.CreateTableHeader(row[1]);
        this.CleanRow(row);
        node.appendChild(header);
        header.setAttribute("colspan", "2");
        header.classList.add("headerRow");
        return node;
    }
    CleanRow(row) {
        for (let i = 2; i < row.length; i++) {
            row[1] = row[1].concat(" ", row[i]);
        }
    }
}
customElements.define("ap-basic-table", BasicTable);
//# sourceMappingURL=ap-basic-table.js.map