import * as Utilities from "./utilities.js";
import { Coin } from "./coins.js";
import { Encumbrance } from "./encumbrance.js";
export class EncItem {
    constructor(data) {
        this.name = data[0];
        this.count = data[1];
        this.value = new Coin(data[2]);
        this.weight = data[3];
    }
}
export class Inventory {
    constructor(inv) {
        this.strength = inv.strength;
        this.strengthAlt = inv.strengthAlt;
        this.multiplier = inv.multiplier;
        this.carryWeight = inv.carryWeight;
        this.contents = inv.contents;
        this.name = inv.name;
        this.coins = Coin.NewCoin();
        this.value = Coin.NewCoin();
        this.weight = 0;
        this.enc = undefined;
        this.encAlt = undefined;
        this.ComputeInventory();
    }
    ComputeInventory() {
        this.weight = 0;
        if (this.strength != undefined && this.strength > 0) {
            this.enc = new Encumbrance(this.strength, this.multiplier);
        }
        if (this.strengthAlt != undefined && this.strengthAlt > 0) {
            this.encAlt = new Encumbrance(this.strengthAlt, this.multiplier);
        }
        if (!Array.isArray(this.contents[0][2])) {
            this.coins = this.coins.Add(new Coin(this.contents[0]));
            this.contents.shift();
        }
        this.value = this.coins.Copy();
        this.weight += this.coins.weight;
        let item;
        this.contents.forEach((data) => {
            item = new EncItem(data);
            this.weight += item.weight * item.count;
            this.value = this.value.Add(item.value.Multiply(item.count));
        });
    }
    BuildTable(mainNode) {
        this.BuildTitle(mainNode);
        this.BuildGoldTable(mainNode, this.coins);
        if (this.enc != undefined) {
            this.BuildEncTable(mainNode, this.enc);
            if (this.encAlt != undefined) {
                this.BuildEncTable(mainNode, this.encAlt);
            }
        }
        else if (this.carryWeight != undefined) {
            this.BuildCarryWeightTable(mainNode, this.carryWeight);
        }
        this.BuildItemTable(mainNode, this.contents);
        return mainNode;
    }
    BuildTitle(node) {
        let title = document.createElement("h4");
        title.innerHTML = this.name;
        node.appendChild(title);
    }
    BuildItemRow(item) {
        let node = document.createElement("tr");
        node.appendChild(Utilities.CreateTableData(item.name));
        node.appendChild(Utilities.CreateTableData(item.count.toString(), "count-column"));
        node.appendChild(Utilities.CreateTableData(item.value.toString()));
        node.appendChild(Utilities.CreateTableData("" + item.weight + " lbs"));
        node.appendChild(Utilities.CreateTableData(item.value.Multiply(item.count).Condense().toString()));
        node.appendChild(Utilities.CreateTableData("" + item.weight * item.count + " lbs"));
        return node;
    }
    BuildItemTable(node, contents) {
        if (contents.length > 0) {
            let itemTable = document.createElement("table");
            itemTable.className = "item-table";
            let row = document.createElement("tr");
            let totalsRow = document.createElement("tr");
            itemTable.appendChild(totalsRow);
            row.appendChild(Utilities.CreateTableHeader("Item"));
            row.appendChild(Utilities.CreateTableHeader("Count"));
            row.appendChild(Utilities.CreateTableHeader("Value"));
            row.appendChild(Utilities.CreateTableHeader("Weight"));
            row.appendChild(Utilities.CreateTableHeader("Row Value"));
            row.appendChild(Utilities.CreateTableHeader("Row Weight"));
            itemTable.appendChild(row);
            let item;
            contents.forEach((data) => {
                item = new EncItem(data);
                itemTable.appendChild(this.BuildItemRow(item));
            });
            this.BuildTotalsRow(this.value, this.weight, totalsRow);
            node.appendChild(itemTable);
        }
        return node;
    }
    BuildGoldTable(node, coins) {
        if (coins != undefined) {
            let table = document.createElement("table");
            table.className = "gold-table";
            let subNode = document.createElement("tr");
            subNode.appendChild(Utilities.CreateTableHeader("PP"));
            subNode.appendChild(Utilities.CreateTableHeader("GP"));
            subNode.appendChild(Utilities.CreateTableHeader("SP"));
            subNode.appendChild(Utilities.CreateTableHeader("CP"));
            subNode.appendChild(Utilities.CreateTableHeader("Value"));
            subNode.appendChild(Utilities.CreateTableHeader("Weight"));
            table.appendChild(subNode);
            subNode = document.createElement("tr");
            subNode.appendChild(Utilities.CreateTableData(Utilities.numberWithCommas(coins.pp, 0), "coins-cell"));
            subNode.appendChild(Utilities.CreateTableData(Utilities.numberWithCommas(coins.gp, 0), "coins-cell"));
            subNode.appendChild(Utilities.CreateTableData(Utilities.numberWithCommas(coins.sp, 0), "coins-cell"));
            subNode.appendChild(Utilities.CreateTableData(Utilities.numberWithCommas(coins.cp, 0), "coins-cell"));
            subNode.appendChild(Utilities.CreateTableData(coins.Condense().toString()));
            subNode.appendChild(Utilities.CreateTableData(Utilities.numberWithCommas(coins.weight, 2) + " lbs"));
            table.appendChild(subNode);
            node.appendChild(table);
        }
        return node;
    }
    BuildEncTable(node, enc) {
        let encTable = document.createElement("table");
        encTable.className = "encumbrance-table";
        let row = document.createElement("tr");
        encTable.appendChild(row);
        row.appendChild(Utilities.CreateTableHeader("Strength"));
        row.appendChild(Utilities.CreateTableHeader("Light Load"));
        row.appendChild(Utilities.CreateTableHeader("Medium Load"));
        row.appendChild(Utilities.CreateTableHeader("Heavy Load"));
        row.appendChild(Utilities.CreateTableHeader("Lift Load"));
        row.appendChild(Utilities.CreateTableHeader("Drag Load"));
        row = document.createElement("tr");
        encTable.appendChild(row);
        row.appendChild(Utilities.CreateTableData(Utilities.numberWithCommas(enc.strength, 0)));
        row.appendChild(Utilities.CreateTableData(Utilities.numberWithCommas(enc.light, 2) + " lbs"));
        row.appendChild(Utilities.CreateTableData(Utilities.numberWithCommas(enc.medium, 2) + " lbs"));
        row.appendChild(Utilities.CreateTableData(Utilities.numberWithCommas(enc.heavy, 2) + " lbs"));
        row.appendChild(Utilities.CreateTableData(Utilities.numberWithCommas(enc.lift, 2) + " lbs"));
        row.appendChild(Utilities.CreateTableData(Utilities.numberWithCommas(enc.drag, 2) + " lbs"));
        node.appendChild(encTable);
        return node;
    }
    BuildCarryWeightTable(node, carryWeight) {
        let cwTable = document.createElement("table");
        let row = document.createElement("tr");
        cwTable.appendChild(row);
        row.appendChild(Utilities.CreateTableHeader("Carry Weight"));
        row.appendChild(Utilities.CreateTableData(Utilities.numberWithCommas(carryWeight, 2) + " lbs"));
        node.appendChild(cwTable);
        return node;
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
//# sourceMappingURL=inventory.js.map