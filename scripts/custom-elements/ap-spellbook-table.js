import * as Utilities from "../utilities.js";
export class SpellbookData {
    constructor() {
        this.pagesUsed = 0;
        this.spellLevels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    AddSpell(name, level) {
        this.spellLevels[level] += 1;
        if (level === 0) {
            this.pagesUsed += 1;
        }
        else {
            this.pagesUsed += level;
        }
    }
}
export class SpellbookTable extends HTMLElement {
    constructor() {
        super();
        this.spells = [[], [], [], [], [], [], [], [], [], []];
        this.mainNode = this;
        this.spellbookData = new SpellbookData();
        if (Utilities.IsGoodString(this.innerHTML)) {
            this.rows = Utilities.StringToObject(this.innerHTML);
        }
    }
    connectedCallback() {
        this.Render();
    }
    Render() {
        this.innerHTML = "";
        if (this.rows.length > 0) {
            for (let row of this.rows) {
                this.spells[row[1]].push(row);
            }
            let table = document.createElement("table");
            this.mainNode.appendChild(table);
            let pageNumberNode = document.createElement("td");
            this.BuildPagesUsed(table, pageNumberNode);
            for (let spellLevel of this.spells) {
                if (spellLevel.length > 0) {
                    table = document.createElement("table");
                    table.className = "spellbook-table";
                    this.mainNode.appendChild(table);
                    this.BuildHeader(table, spellLevel[0][1]);
                    this.BuildBody(table, spellLevel, this.spellbookData);
                }
            }
            pageNumberNode.innerHTML = this.spellbookData.pagesUsed.toString();
        }
    }
    BuildPagesUsed(table, pageNumberNode) {
        let node = document.createElement("tr");
        node.appendChild(Utilities.CreateTableHeader("Total Pages"));
        node.appendChild(pageNumberNode);
        table.appendChild(node);
    }
    BuildHeader(table, spellLevel) {
        let node = document.createElement("tr");
        let spellLevelNode = document.createElement("th");
        spellLevelNode.innerHTML = "Spell Level " + spellLevel;
        spellLevelNode.setAttribute("colspan", "2");
        node.appendChild(spellLevelNode);
        table.appendChild(node);
        node = document.createElement("tr");
        node.appendChild(Utilities.CreateTableHeader("Spell"));
        node.appendChild(Utilities.CreateTableHeader("Spell Level"));
        table.appendChild(node);
    }
    BuildBody(table, rows, spellbookData) {
        let node;
        for (let row of rows) {
            node = document.createElement("tr");
            node.appendChild(Utilities.CreateTableData(row[0]));
            node.appendChild(Utilities.CreateTableData(row[1]));
            table.appendChild(node);
            spellbookData.AddSpell(row[0], row[1]);
        }
    }
}
customElements.define("ap-spellbook-table", SpellbookTable);
//# sourceMappingURL=ap-spellbook-table.js.map