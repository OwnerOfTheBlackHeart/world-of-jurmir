import { Coin } from "../coins.js";
import { Encumbrance } from "../encumbrance.js";
import * as Utilities from "../utilities.js";
import { Inventory } from "../inventory.js";

export class EncumbranceChart extends HTMLElement {
	get strength(): number {
		return Number(this.getAttribute("strength"));
	}

	set strength(val: number) {
		this.setAttribute("strength", val.toString());
	}

	get strengthAlt(): number {
		return Number(this.getAttribute("strengthAlt"));
	}

	set strengthAlt(val: number) {
		this.setAttribute("strengthAlt", val.toString());
	}

	get multiplier(): number {
		return Number(this.getAttribute("multiplier"));
	}

	set multiplier(val: number) {
		this.setAttribute("multiplier", val.toString());
	}

	inventory: any[];
	mainNode: HTMLElement;

	constructor() {
		// Always call super first in constructor
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
		} else {
			this.inventory = [];
		}

		this.innerHTML = "";
	}

	connectedCallback() {
		this.Render();
	}

	Render() {
		this.mainNode = this;
		let inventories: Inventory[] = [];
		let items: any[] = [];
		let totalWeight = 0;
		let totalValue = Coin.NewCoin();
		let totalCoins = Coin.NewCoin();

		let totalsTable = document.createElement("table");
		this.mainNode.appendChild(totalsTable);

		// Pull out inventories and items
		for (let row of this.inventory) {
			if (Array.isArray(row)) {
				items.push(row);
			} else {
				inventories.push(new Inventory(row));
			}
		}

		// Make an inventory out of items
		if (items.length > 0) {
			inventories.unshift(
				new Inventory({
					name: "Main Inventory",
					strength: this.strength,
					strengthAlt: this.strengthAlt,
					multiplier: this.multiplier,
					contents: items,
				} as Inventory)
			);
		}

		// Build Inventories
		for (let inv of inventories) {
			inv.BuildTable(this.mainNode);
			totalWeight += inv.weight;
			totalValue = totalValue.Add(inv.value);
			totalCoins = totalCoins.Add(inv.coins);
		}

		this.BuildTotalsTable(totalsTable, totalValue, totalWeight, totalCoins);
	}

	BuildTotalsTable(table: HTMLTableElement, totalValue: Coin, totalWeight: number, totalCoins: Coin) {
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

	BuildTotalsRow(totalValue: Coin, totalWeight: number, row: HTMLTableRowElement) {
		let node;
		let data;

		if (row != undefined) {
			node = row;
		} else {
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
