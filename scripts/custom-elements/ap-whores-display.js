import * as Utilities from "../utilities.js";
const defaultNameWhoreCountsAs = 1;
export class WhoresDisplayElement extends HTMLElement {
    constructor() {
        super();
        this.averageAttractiveness = 0;
        this.whoreCount = 0;
        if (!this.data && Utilities.IsGoodString(this.innerHTML)) {
            this.data = Utilities.StringToObject(this.innerHTML);
            this.PrepData();
        }
    }
    connectedCallback() {
        this.Render();
    }
    Render() {
        this.innerHTML = "";
        let header;
        this.appendChild(this.BuildAnalyticsTable());
        if (this.data.namedWhores) {
            header = document.createElement("h2");
            header.innerText = "Named Whores";
            this.appendChild(header);
            this.data.namedWhores.forEach((whore) => this.BuildNamedWhoreDisplay(whore, this));
        }
        if (this.data.unnamedWhores) {
            header = document.createElement("h2");
            header.innerText = "Unnamed Whores";
            this.appendChild(header);
            this.appendChild(this.BuildUnnamedWhoreTable(this.data.unnamedWhores));
        }
    }
    BuildAnalyticsTable() {
        const table = document.createElement("table");
        let row = document.createElement("tr");
        row.appendChild(Utilities.CreateTableHeader("Average Attractiveness"));
        row.appendChild(Utilities.CreateTableData(this.averageAttractiveness.toString()));
        table.appendChild(row);
        row = document.createElement("tr");
        row.appendChild(Utilities.CreateTableHeader("Whore Count"));
        row.appendChild(Utilities.CreateTableData(this.whoreCount.toString()));
        table.appendChild(row);
        return table;
    }
    BuildNamedWhoreDisplay(whore, baseNode) {
        if (!baseNode) {
            baseNode = document.createElement("span");
        }
        let currentNode = document.createElement("h3");
        currentNode.innerText = whore.name;
        currentNode.id = whore.name.trim().toLowerCase().replace(" ", "-");
        baseNode.appendChild(currentNode);
        currentNode = document.createElement("p");
        currentNode.innerHTML = `<b>Sex:</b> ${whore.sex} <br/><b>Race:</b> ${whore.race} <br/><b>Attractiveness:</b> ${whore.attractiveness} 
			<br/><b>Counts as (for average attractiveness)</b> ${whore.countsAs} whores`;
        baseNode.appendChild(currentNode);
        whore.description = [whore.description.reduce((previousValue, currentValue) => previousValue + currentValue, "")];
        if (whore.description[0].startsWith("<")) {
            baseNode.innerHTML += whore.description[0];
        }
        else {
            currentNode = document.createElement("p");
            currentNode.innerHTML = whore.description[0];
            baseNode.appendChild(currentNode);
        }
        return baseNode;
    }
    BuildUnnamedWhoreTable(whoreGroups) {
        const table = document.createElement("table");
        table.id = "unnamed-whores-table";
        let row = document.createElement("tr");
        let headerCell = Utilities.CreateTableHeader("Unnamed Whores");
        headerCell.colSpan = 2;
        row.appendChild(headerCell);
        table.appendChild(row);
        row = document.createElement("tr");
        row.appendChild(Utilities.CreateTableHeader("Attractiveness"));
        row.appendChild(Utilities.CreateTableHeader("Number of Whores"));
        table.appendChild(row);
        whoreGroups.forEach((whoreGroup) => {
            row = document.createElement("tr");
            row.appendChild(Utilities.CreateTableData(whoreGroup.attractiveness.toString()));
            row.appendChild(Utilities.CreateTableData(whoreGroup.count.toString()));
            table.appendChild(row);
        });
        return table;
    }
    PrepData() {
        if (this.data && this.data.namedWhores) {
            this.data.namedWhores.forEach((whore) => {
                if (whore.countsAs === undefined || whore.countsAs <= 0) {
                    whore.countsAs = defaultNameWhoreCountsAs;
                }
            });
        }
        if (this.data.unnamedWhores) {
            this.data.unnamedWhores.sort((a, b) => b.attractiveness - a.attractiveness);
        }
        let effectiveWhoreCount = 0;
        let totalAttractiveness = 0;
        if (this.data.namedWhores) {
            this.data.namedWhores.forEach((whore) => {
                effectiveWhoreCount += whore.countsAs;
                totalAttractiveness += whore.attractiveness * whore.countsAs;
            });
        }
        if (this.data.unnamedWhores) {
            this.data.unnamedWhores.forEach((whoreGroup) => {
                effectiveWhoreCount += whoreGroup.count;
                totalAttractiveness += whoreGroup.attractiveness * whoreGroup.count;
            });
        }
        this.averageAttractiveness = Math.floor(totalAttractiveness / effectiveWhoreCount);
        this.whoreCount = 0;
        if (this.data.namedWhores) {
            this.whoreCount += this.data.namedWhores.length;
        }
        if (this.data.unnamedWhores) {
            this.whoreCount += this.data.unnamedWhores.reduce((counted, whoreGroup) => counted + whoreGroup.count, 0);
        }
    }
}
customElements.define("ap-whores-display", WhoresDisplayElement);
//# sourceMappingURL=ap-whores-display.js.map