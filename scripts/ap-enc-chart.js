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

        if ((this.innerHTML != undefined) && (this.innerHTML != ""))
        {
            this.inventory = JSON.parse(this.innerHTML);
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
        // Encumbrance Table
        this.encTable = document.createElement('table');
        let row = document.createElement('tr');
        this.encTable.appendChild(row);
        
        row.appendChild(this.CreateHeader('Strength'));
        row.appendChild(this.CreateHeader('Light Load'));
        row.appendChild(this.CreateHeader('Medium Load'));
        row.appendChild(this.CreateHeader('Heavy Load'));
        row.appendChild(this.CreateHeader('Lift Load'));
        row.appendChild(this.CreateHeader('Drag Load'));

        row = document.createElement('tr');
        this.encTable.appendChild(row);

        row.appendChild(this.CreateData(this.strength));
        row.appendChild(this.CreateData(this.enc.light));
        row.appendChild(this.CreateData(this.enc.medium));
        row.appendChild(this.CreateData(this.enc.heavy));
        row.appendChild(this.CreateData(this.enc.lift));
        row.appendChild(this.CreateData(this.enc.drag));

        this.appendChild(this.encTable);

        // Item Table
        if (this.inventory.length > 0)
        {
            this.itemTable = document.createElement('table');
            let row = document.createElement('tr');
            let totalsRow = document.createElement('tr');
            this.itemTable.appendChild(totalsRow);
 
            // Table Start
            row.appendChild(this.CreateHeader('Item'));
            row.appendChild(this.CreateHeader('Count'));
            row.appendChild(this.CreateHeader('Value'));
            row.appendChild(this.CreateHeader('Weight'));
            row.appendChild(this.CreateHeader('Row Value'));
            row.appendChild(this.CreateHeader('Row Weight'));
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

            // Build totals row
            this.BuildTotalsRow(totalValue, totalWeight, totalsRow);

            this.appendChild(this.itemTable);
        }
    }

    CreateHeader(data)
    {
        let header = document.createElement('th');
        header.innerHTML = data;

        return header;
    }

    CreateData(data)
    {
        let dataElement = document.createElement('td');
        dataElement.innerHTML = data;

        return dataElement;
    }

    BuildItemRow(item)
    {
        let node = document.createElement('tr');

        node.appendChild(this.CreateData(item.name));
        node.appendChild(this.CreateData(item.count));
        node.appendChild(this.CreateData(item.value.ToString()));
        node.appendChild(this.CreateData("" + item.weight + "lbs"));
        node.appendChild(this.CreateData(item.value.Multiply(item.count).Condense().ToString()));
        node.appendChild(this.CreateData("" + (item.weight * item.count) + "lbs"));
        
        return node;
    }

    BuildTotalsRow(totalValue, totalWeight, row)
    {
        let node;
        let data;

        if (row != undefined) { node = row; }
        else { node = document.createElement('tr'); }

        node.appendChild(this.CreateHeader('Total Value'));
        data = this.CreateData(totalValue.Condense().ToString());
        data.setAttribute('colspan', '2');
        node.appendChild(data);

        node.appendChild(this.CreateHeader('Total Weight'));
        data = this.CreateData("" + totalWeight + "lbs");
        data.setAttribute('colspan', '2');
        node.appendChild(data);

        return node;
    }
}

customElements.define('ap-enc-chart', EncumbranceChart);