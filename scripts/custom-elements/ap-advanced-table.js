class AdvancedTable extends HTMLElement {
    constructor() {
        super();
        this.rows = [];
        this.mainNode = this;
        if (Utilities.IsGoodString(this.innerHTML)) {
            this.rows = Utilities.StringToObject(this.innerHTML);
        }
    }
    get characterTable() {
        return this.hasAttribute('character-table');
    }
    set characterTable(val) {
        if (val) {
            this.setAttribute('character-table', '');
        }
        else {
            this.removeAttribute('character-table');
        }
    }
    connectedCallback() {
        this.Render();
    }
    Render() {
        this.innerHTML = "";
        if (this.rows.length > 0) {
            this.table = document.createElement('table');
            this.mainNode.appendChild(this.table);
            if (this.characterTable) {
                this.table.setAttribute('class', 'statBlock');
                this.table.setAttribute('cellspacing', '0');
            }
            this.rows.forEach(row => {
                const tableRow = document.createElement('tr');
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
        }
        return cell;
    }
}
customElements.define('ap-advanced-table', AdvancedTable);
//# sourceMappingURL=ap-advanced-table.js.map