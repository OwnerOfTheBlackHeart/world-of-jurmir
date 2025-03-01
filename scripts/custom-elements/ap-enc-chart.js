import { Coin } from "../coins.js";
import * as Utilities from "../utilities.js";
import { Inventory } from "../inventory.js";
export class EncumbranceChart extends HTMLElement {
    get strength() {
        return Number(this.getAttribute("strength"));
    }
    set strength(val) {
        this.setAttribute("strength", val.toString());
    }
    get strengthAlt() {
        return Number(this.getAttribute("strengthAlt"));
    }
    set strengthAlt(val) {
        this.setAttribute("strengthAlt", val.toString());
    }
    get multiplier() {
        return Number(this.getAttribute("multiplier"));
    }
    set multiplier(val) {
        this.setAttribute("multiplier", val.toString());
    }
    constructor() {
        super();
        if (!this.hasAttribute("strength")) {
            this.strength = 10;
        }
        if (!this.hasAttribute("multiplier")) {
            this.multiplier = 1;
        }
        this.inventory = [];
        if (this.innerHTML != undefined && this.innerHTML != "") {
            this.inventory = Utilities.StringToObject(this.innerHTML);
        }
        else {
            this.inventory = [];
        }
        this.innerHTML = "";
    }
    connectedCallback() {
        this.Render();
    }
    Render() {
        this.mainNode = this;
        let inventories = [];
        let items = [];
        let totalWeight = 0;
        let totalValue = Coin.NewCoin();
        let totalCoins = Coin.NewCoin();
        let totalsTable = document.createElement("table");
        this.mainNode.appendChild(totalsTable);
        for (let row of this.inventory) {
            if (Array.isArray(row)) {
                items.push(row);
            }
            else {
                inventories.push(new Inventory(row));
            }
        }
        if (items.length > 0) {
            inventories.unshift(new Inventory({
                name: "Main Inventory",
                strength: this.strength,
                strengthAlt: this.strengthAlt,
                multiplier: this.multiplier,
                contents: items,
            }));
        }
        for (let inv of inventories) {
            inv.BuildTable(this.mainNode);
            totalWeight += inv.weight;
            totalValue = totalValue.Add(inv.value);
            totalCoins = totalCoins.Add(inv.coins);
        }
        this.BuildTotalsTable(totalsTable, totalValue, totalWeight, totalCoins);
    }
    BuildTotalsTable(table, totalValue, totalWeight, totalCoins) {
        let row = document.createElement("tr");
        table.appendChild(row);
        row.appendChild(Utilities.CreateTableHeader("Total Value"));
        row.appendChild(Utilities.CreateTableData(totalValue.Condense().toString()));
        row.appendChild(Utilities.CreateTableHeader("Total Weight"));
        row.appendChild(Utilities.CreateTableData("" + Utilities.numberWithCommas(totalWeight, 2) + " lbs"));
        row = document.createElement("tr");
        table.appendChild(row);
        let data = Utilities.CreateTableHeader("Total Coins");
        data.setAttribute("colspan", "2");
        row.appendChild(data);
        data = Utilities.CreateTableData(totalCoins.toString());
        data.setAttribute("colspan", "2");
        row.appendChild(data);
    }
    BuildTotalsRow(totalValue, totalWeight, row) {
        let node;
        let data;
        if (row != undefined) {
            node = row;
        }
        else {
            node = document.createElement("tr");
        }
        node.appendChild(Utilities.CreateTableHeader("Total Value"));
        data = Utilities.CreateTableData(totalValue.Condense().toString());
        data.setAttribute("colspan", "2");
        node.appendChild(data);
        node.appendChild(Utilities.CreateTableHeader("Total Weight"));
        data = Utilities.CreateTableData("" + Utilities.numberWithCommas(totalWeight, 2) + " lbs");
        data.setAttribute("colspan", "2");
        node.appendChild(data);
        return node;
    }
}
customElements.define("ap-enc-chart", EncumbranceChart);
//# sourceMappingURL=ap-enc-chart.js.map