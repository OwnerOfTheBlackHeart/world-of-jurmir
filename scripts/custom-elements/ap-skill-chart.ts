/// <reference path="../utilities.ts" />

class SkillChart extends HTMLElement 
{
    skills: string[][];

    constructor() 
    {
        // Always call super first in constructor
        super();
    }

    connectedCallback()
    {
        this.skills = Utilities.StringToObject(this.innerHTML);
        this.innerHTML = "";
        this.Render();
    }

    Render()
    {
        let baseNode = this;
        let table = document.createElement('table');
        baseNode.appendChild(table);

        this.BuildHeaders(table);

        if (this.skills.length > 0)
        {
            this.skills.forEach(element => 
            {
                this.BuildRow(table, element);
            });
        }
    }

    BuildHeaders(node: HTMLTableElement)
    {
        let tableRow = document.createElement('tr');
        node.appendChild(tableRow);

        tableRow.appendChild(Utilities.CreateHeader("Skill"));
        tableRow.appendChild(Utilities.CreateHeader("Ranks"));
        tableRow.appendChild(Utilities.CreateHeader("Bonus"));

        return node;
    }

    BuildRow(node: HTMLTableElement, row: string[])
    {
        let tableRow = document.createElement('tr');
        node.appendChild(tableRow);

        tableRow.appendChild(Utilities.CreateData(row[0]));
        tableRow.appendChild(Utilities.CreateData(row[1]));
        tableRow.appendChild(Utilities.CreateData(row[2]));

        return node;
    }
};

customElements.define('ap-skill-chart', SkillChart);