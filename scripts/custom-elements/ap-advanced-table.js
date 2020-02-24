import * as Utilities from "../utilities.js";
export class AdvancedTable extends HTMLElement {
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
    get classTable() {
        return this.hasAttribute("class-table");
    }
    set classTable(val) {
        if (val) {
            this.setAttribute("class-table", "");
        }
        else {
            this.removeAttribute("class-table");
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
                this.table.classList.add("statBlock");
                this.table.setAttribute("cellspacing", "0");
            }
            else if (this.classTable) {
                this.table.setAttribute("cellspacing", "0");
            }
            this.rows.forEach(row => {
                const tableRow = document.createElement("tr");
                this.table.appendChild(tableRow);
                row.forEach(field => {
                    tableRow.appendChild(this.BuildCell(field));
                });
            });
        }
    }
    BuildCell(field) {
        let cell;
        if (typeof field === "string") {
            cell = Utilities.CreateData(field);
        }
        else {
            if (field.isHeader) {
                cell = Utilities.CreateHeader(field.value);
            }
            else {
                cell = Utilities.CreateData(field.value);
            }
            if (field.colSpan) {
                cell.colSpan = field.colSpan;
            }
            if (field.rowSpan) {
                cell.rowSpan = field.rowSpan;
            }
            if (field.style) {
                cell.setAttribute('style', `${cell.getAttribute('style')}; ${field.style}`);
            }
            if (field.class) {
                field.class.forEach(cssClass => {
                    cell.classList.add(cssClass);
                });
            }
            if (field.align) {
                cell.setAttribute("align", field.align);
            }
            if (field.attributes) {
                for (let key in field.attributes) {
                    cell.setAttribute(key, field.attributes[key]);
                }
            }
        }
        return cell;
    }
}
customElements.define("ap-advanced-table", AdvancedTable);
//# sourceMappingURL=ap-advanced-table.js.map