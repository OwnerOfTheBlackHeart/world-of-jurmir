class SpellbookData
{
    pagesUsed: number;
    spellLevels: number[];

    constructor()
    {
        this.pagesUsed = 0;
        this.spellLevels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    AddSpell(name: string, level: number)
    {
        this.spellLevels[level] += 1;

        if (level === 0)
        {
            this.pagesUsed += 1;
        }
        else
        {
            this.pagesUsed += level;
        }
    }
}

class SpellbookTable extends HTMLElement 
{
    rows: any[][];
    spells: any[][];
    mainNode: HTMLElement;
    spellbookData: SpellbookData;

    constructor() 
    {
        // Always call super first in constructor
        super();

        this.spells = [[], [], [], [], [], [], [], [], [], []];
        this.mainNode = this;
        this.spellbookData = new SpellbookData();

        if (Utilities.IsGoodString(this.innerHTML))
        {
            // [spell name, spell level]
            this.rows = Utilities.StringToObject(this.innerHTML);
        }
    }

    connectedCallback()
    {
        this.Render();        
    }

    Render()
    {
        this.innerHTML = "";

        if (this.rows.length > 0)
        {
            // Organize spells by spell slot
            for (let row of this.rows)
            {
                this.spells[row[1]].push(row);
            }

            // Setup page number section
            let table = document.createElement('table');
            this.mainNode.appendChild(table);
            let pageNumberNode = document.createElement('td');

            this.BuildPagesUsed(table, pageNumberNode);

            for (let spellLevel of this.spells) // level of the spells
            {
                if (spellLevel.length > 0)
                {
                    table = document.createElement('table');
                    table.className = "spellbook-table";
                    this.mainNode.appendChild(table);

                    this.BuildHeader(table, spellLevel[0][1]);
                    this.BuildBody(table, spellLevel, this.spellbookData);
                }
            }

            pageNumberNode.innerHTML = this.spellbookData.pagesUsed.toString();
        }
    }

    BuildPagesUsed(table: HTMLTableElement, pageNumberNode: HTMLTableDataCellElement)
    {
        let node = document.createElement('tr');
        node.appendChild(Utilities.CreateHeader('Total Pages'));
        node.appendChild(pageNumberNode);
        table.appendChild(node);
    }

    BuildHeader(table: HTMLTableElement, spellLevel: number)
    {
        let node = document.createElement('tr');
        let spellLevelNode = document.createElement('th');
        spellLevelNode.innerHTML = "Spell Level " + spellLevel;
        spellLevelNode.setAttribute("colspan", "2");
        node.appendChild(spellLevelNode);
        table.appendChild(node);
        
        node = document.createElement('tr');
        node.appendChild(Utilities.CreateHeader('Spell'));
        node.appendChild(Utilities.CreateHeader('Spell Level'));
        table.appendChild(node);
    }

    BuildBody(table: HTMLTableElement, rows: any[], spellbookData: SpellbookData)
    {
        let node;

        for (let row of rows)
        {
            node = document.createElement('tr');
            node.appendChild(Utilities.CreateData(row[0]));
            node.appendChild(Utilities.CreateData(row[1]));
            table.appendChild(node);

            spellbookData.AddSpell(row[0], row[1]);
        }
    }
}

customElements.define('ap-spellbook-table', SpellbookTable);