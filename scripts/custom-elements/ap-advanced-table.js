import * as Utilities from "../utilities.js";
export class AdvancedTable extends HTMLElement {
    constructor() {
        super();
        this.rows = [];
        this.columns = [];
        this.mainNode = this;
        if (Utilities.IsGoodString(this.innerHTML)) {
            const jsonRows = Utilities.StringToObject(this.innerHTML);
            if (jsonRows && Array.isArray(jsonRows) && jsonRows[0] && Array.isArray(jsonRows[0])) {
                this.rows = jsonRows.map((row) => row.reduce((fields, current) => {
                    const field = typeof current === "string" ? { value: current, isCompressing: current.startsWith("~~") } : current;
                    if (field.isCompressing === true) {
                        fields.lastElement().value += field.value.slice(2);
                        return fields;
                    }
                    return [...fields, field];
                }, []));
            }
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
            this.columns = this.rows[0];
            this.rows.forEach((row) => {
                const tableRow = document.createElement("tr");
                this.table.appendChild(tableRow);
                row.forEach((field, colIndex) => {
                    tableRow.appendChild(this.BuildCell(field, this.columns[colIndex]));
                });
            });
        }
    }
    BuildCell(field, column) {
        let cell;
        if (field.isHeader) {
            cell = Utilities.CreateTableHeader(field.value);
        }
        else {
            cell = Utilities.CreateTableData(field.value);
        }
        if (field.colSpan) {
            cell.colSpan = field.colSpan;
        }
        else if (column === null || column === void 0 ? void 0 : column.columnColSpan) {
            cell.colSpan = column.columnColSpan;
        }
        if (field.rowSpan) {
            cell.rowSpan = field.rowSpan;
        }
        else if (column === null || column === void 0 ? void 0 : column.columnRowSpan) {
            cell.rowSpan = column.columnRowSpan;
        }
        if (field.style) {
            cell.setAttribute("style", `${cell.getAttribute("style")}; ${field.style}`);
        }
        else if (column === null || column === void 0 ? void 0 : column.columnStyle) {
            cell.setAttribute("style", `${cell.getAttribute("style")}; ${column.columnStyle}`);
        }
        if (column === null || column === void 0 ? void 0 : column.columnClass) {
            column.columnClass.forEach((cssClass) => {
                cell.classList.add(cssClass);
            });
        }
        if (field.class) {
            field.class.forEach((cssClass) => {
                if (cssClass && cssClass[0] === "~") {
                    cell.classList.remove(cssClass.slice(1));
                }
                else {
                    cell.classList.add(cssClass);
                }
            });
        }
        if (field.align) {
            cell.setAttribute("align", field.align);
        }
        else if (column === null || column === void 0 ? void 0 : column.columnAlign) {
            cell.setAttribute("align", column.columnAlign);
        }
        if (field.attributes) {
            for (let key in field.attributes) {
                cell.setAttribute(key, field.attributes[key]);
            }
        }
        return cell;
    }
}
customElements.define("ap-advanced-table", AdvancedTable);
//# sourceMappingURL=ap-advanced-table.js.map