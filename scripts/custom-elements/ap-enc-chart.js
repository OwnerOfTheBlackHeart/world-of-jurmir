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
        this.inventory = [];
        this.mainNode;
        this.freeGold;

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
        this.mainNode = this;
        let inventories = [];
        let items = [];

        // Pull out inventories and items
        for (let row of this.inventory)
        {
            if (Array.isArray(row)) { items.push(row); }
            else 
            {
                inventories.push(new Inventory(row)); 
            }
        }

        // Make an inventory out of items
        if (items.length > 0)
        {
            inventories.unshift(new Inventory({
                name: "Main Inventory",
                strength: this.strength,
                multiplier: this.multiplier,
                contents: items
            }));
        }

        // Build Inventories
        for (let inv of inventories)
        {
            inv.BuildTable(this.mainNode);
        }
    }
}

customElements.define('ap-enc-chart', EncumbranceChart);