class EncItem
{
    constructor(data)
    {
        this.name = data[0];
        this.count = data[1];
        this.value = new Coin(data[2]);
        this.weight = data[3];
    }
}

class EncumbranceChart extends HTMLElement 
{
    get strength()
    {
        return this.getAttribute('strength');
    }

    set strength(val)
    {
        this.setAttribute('strength', val);
    }

    get multiplier()
    {
        return this.getAttribute('multiplier');
    }

    set multiplier(val)
    {
        this.setAttribute('multiplier', val);
    }

    constructor() 
    {
        // Always call super first in constructor
        super();

        if (!this.hasAttribute('strength'))
        {
            this.strength = 10;
        }

        if (!this.hasAttribute('multiplier'))
        {
            this.multiplier = 1;
        }

        this.enc = new Encumbrance(this.strength, this.multiplier);
        this.encTable;
        this.inventory = [];
        this.mainNode;
        this.freeGold;

        if ((this.innerHTML != undefined) && (this.innerHTML != ""))
        {
            this.inventory = JSON.parse(this.innerHTML);
            
            // Check for gold row
            if(!Array.isArray(this.inventory[0][2]))
            {
                this.freeGold = new Coin(this.inventory[0]);
                this.inventory.shift();
            }
        }
        else
        {
            this.inventory = [];
        }

        this.innerHTML = "";
    }

    connectedCallback()
    {
        this.Render();        
    }

    Render()
    {
        this.mainNode = this;

        // Gold Table
        this.BuildGoldTable(this.mainNode, this.freeGold);

        // Encumbrance Table
        this.BuildEncTable(this.mainNode);

        // Item Table
        this.BuildItemTable(this.mainNode);
    }

    BuildItemRow(item)
    {
        let node = document.createElement('tr');
        let subNode;

        node.appendChild(Utilities.CreateData(item.name));
        node.appendChild(Utilities.CreateData(item.count, "count-column"));
        node.appendChild(Utilities.CreateData(item.value.toString()));
        node.appendChild(Utilities.CreateData("" + item.weight + " lbs"));
        node.appendChild(Utilities.CreateData(item.value.Multiply(item.count).Condense().toString()));
        node.appendChild(Utilities.CreateData("" + (item.weight * item.count) + " lbs"));
        
        return node;
    }

    BuildTotalsRow(totalValue, totalWeight, row)
    {
        let node;
        let data;

        if (row != undefined) { node = row; }
        else { node = document.createElement('tr'); }

        node.appendChild(Utilities.CreateHeader('Total Value'));
        data = Utilities.CreateData(totalValue.Condense().toString());
        data.setAttribute('colspan', '2');
        node.appendChild(data);

        node.appendChild(Utilities.CreateHeader('Total Weight'));
        data = Utilities.CreateData("" + totalWeight + " lbs");
        data.setAttribute('colspan', '2');
        node.appendChild(data);

        return node;
    }

    BuildItemTable(node)
    {
        if (this.inventory.length > 0)
        {
            this.itemTable = document.createElement('table');
            this.itemTable.className = "item-table";
            let row = document.createElement('tr');
            let totalsRow = document.createElement('tr');
            this.itemTable.appendChild(totalsRow);
 
            // Table Start
            row.appendChild(Utilities.CreateHeader('Item'));
            row.appendChild(Utilities.CreateHeader('Count'));
            row.appendChild(Utilities.CreateHeader('Value'));
            row.appendChild(Utilities.CreateHeader('Weight'));
            row.appendChild(Utilities.CreateHeader('Row Value'));
            row.appendChild(Utilities.CreateHeader('Row Weight'));
            this.itemTable.appendChild(row);
            
            let item;
            let totalWeight = 0;
            let totalValue = Coin.NewCoin();
            this.inventory.forEach((data) =>
            {;
                item = new EncItem(data);
                this.itemTable.appendChild(this.BuildItemRow(item));

                totalWeight += item.weight * item.count;
                totalValue = totalValue.Add(item.value.Multiply(item.count));
            });

            if (this.freeGold != undefined)
            {
                totalWeight += this.freeGold.weight;
                totalValue = totalValue.Add(this.freeGold);
            }

            // Build totals row
            this.BuildTotalsRow(totalValue, totalWeight, totalsRow);

            node.appendChild(this.itemTable);
        }

        return node;
    }

    BuildGoldTable(node, coins)
    {
        if (coins != undefined)
        {
            let table = document.createElement('table');
            let dataNode;
            table.className = "gold-table";

            let subNode = document.createElement('tr');

            subNode.appendChild(Utilities.CreateHeader('PP'));
            subNode.appendChild(Utilities.CreateHeader('GP'));
            subNode.appendChild(Utilities.CreateHeader('SP'));
            subNode.appendChild(Utilities.CreateHeader('CP'));
            subNode.appendChild(Utilities.CreateHeader('Value'));
            subNode.appendChild(Utilities.CreateHeader('Weight'));
            table.appendChild(subNode);
            
            subNode = document.createElement('tr');
            subNode.appendChild(Utilities.CreateData(coins.pp, "coins-cell"));
            subNode.appendChild(Utilities.CreateData(coins.gp, "coins-cell"));
            subNode.appendChild(Utilities.CreateData(coins.sp, "coins-cell"));
            subNode.appendChild(Utilities.CreateData(coins.cp, "coins-cell"));

            subNode.appendChild(Utilities.CreateData(coins.Condense().toString()));
            subNode.appendChild(Utilities.CreateData(coins.weight + " lbs"));
            table.appendChild(subNode);
            node.appendChild(table);
        }

        return node;
    }

    BuildEncTable(node)
    {
        this.encTable = document.createElement('table');
        this.encTable.className = "encumbrance-table";

        let row = document.createElement('tr');
        this.encTable.appendChild(row);
        
        row.appendChild(Utilities.CreateHeader('Strength'));
        row.appendChild(Utilities.CreateHeader('Light Load'));
        row.appendChild(Utilities.CreateHeader('Medium Load'));
        row.appendChild(Utilities.CreateHeader('Heavy Load'));
        row.appendChild(Utilities.CreateHeader('Lift Load'));
        row.appendChild(Utilities.CreateHeader('Drag Load'));

        row = document.createElement('tr');
        this.encTable.appendChild(row);

        row.appendChild(Utilities.CreateData(this.strength));
        row.appendChild(Utilities.CreateData(this.enc.light + " lbs"));
        row.appendChild(Utilities.CreateData(this.enc.medium + " lbs"));
        row.appendChild(Utilities.CreateData(this.enc.heavy + " lbs"));
        row.appendChild(Utilities.CreateData(this.enc.lift + " lbs"));
        row.appendChild(Utilities.CreateData(this.enc.drag + " lbs"));

        node.appendChild(this.encTable);
        return node;
    }
}

customElements.define('ap-enc-chart', EncumbranceChart);