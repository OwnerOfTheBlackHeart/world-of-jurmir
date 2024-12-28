import * as Utilities from "../utilities.js";
export class SettlementDisplayElement extends HTMLElement {
    get permissions() {
        return this.getAttribute("breakdown-permissions");
    }
    set permissions(val) {
        this.setAttribute("breakdown-permissions", val);
    }
    constructor() {
        super();
        if (Utilities.IsGoodString(this.innerHTML)) {
            this.settlement = Utilities.StringToObject(this.innerHTML);
        }
    }
    connectedCallback() {
        this.Render();
    }
    Render() {
        this.innerHTML = "";
        const header = document.createElement("h2");
        header.id = "town-information";
        header.innerText = "Town Information";
        this.appendChild(header);
        this.appendChild(this.BuildTownInformation());
        this.appendChild(this.BuildPopulationBreakdown());
    }
    BuildTownInformation() {
        const table = document.createElement("table");
        table.classList.add("statBlock");
        table.appendChild(this.BuildTableRow("Town Size:", this.settlement.townSize));
        table.appendChild(this.BuildTableRow("Population:", this.settlement.population.toLocaleString() + " adults"));
        const onHand = (this.settlement.goldLimit * this.settlement.population) / 20;
        table.appendChild(this.BuildTableRow("Gold Limit:", `${this.settlement.goldLimit.toLocaleString()} gp (${onHand.toLocaleString()} gp on hand)`));
        this.settlement.powerCenters.forEach((powerCenter) => table.appendChild(this.BuildTableRow("Power Center:", powerCenter)));
        table.appendChild(this.BuildTableRow("Guard Captain:", this.settlement.captain));
        table.appendChild(this.BuildTableRow("Guard Count:", this.BuildGuardsString()));
        if (this.settlement.demographicsType) {
            table.appendChild(this.BuildTableRow("Demographics Type:", this.settlement.demographicsType));
        }
        if (this.settlement.politicalSystem) {
            table.appendChild(this.BuildTableRow("Political System:", this.settlement.politicalSystem));
        }
        return table;
    }
    BuildPopulationBreakdown() {
        const container = document.createElement("ap-auth-container");
        container.permissions = this.permissions;
        const header = document.createElement("h2");
        header.id = "population-breakdown";
        header.innerText = "Population Breakdown";
        container.appendChild(header);
        const popTable = document.createElement("ap-population-table");
        popTable.rows = this.settlement.populationDistribution;
        container.appendChild(popTable);
        return container;
    }
    BuildTableRow(header, data) {
        const row = document.createElement("tr");
        row.appendChild(Utilities.CreateTableHeader(header));
        row.appendChild(Utilities.CreateTableData(data));
        return row;
    }
    BuildGuardsString() {
        const guardCount = Math.floor(this.settlement.population / 100);
        const militiaCount = Math.floor(this.settlement.population / 20);
        const nightShift = Math.floor(guardCount * 0.35);
        const eveningShift = Math.floor(guardCount * 0.35);
        const dayShift = guardCount - nightShift - eveningShift;
        return (`${guardCount.toLocaleString()} guards (` +
            `${dayShift.toLocaleString()} day shift (0800 to 1600), ` +
            `${eveningShift.toLocaleString()} evening shift (1600 to 0000), ` +
            `${nightShift.toLocaleString()} night shift (0000 to 0800)), ` +
            `${militiaCount.toLocaleString()} militia members`);
    }
}
customElements.define("ap-settlement-display", SettlementDisplayElement);
//# sourceMappingURL=ap-settlement-display.js.map