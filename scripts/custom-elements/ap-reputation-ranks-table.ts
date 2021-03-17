import { globals, ReputationRank } from "../globals.js";
import * as Utilities from "../utilities.js";

export class ReputationRanksTable extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();
	}

	connectedCallback() {
		this.Render();
	}

	Render() {
		this.innerHTML = "";

		const table = document.createElement("table");
		this.appendChild(table);

		table.appendChild(this.BuildHeaderRow());

		globals.reputationRanks.forEach((rank) => {
			table.appendChild(this.BuildRankRow(rank));
		});
	}

	BuildHeaderRow(): HTMLTableRowElement {
		const row = document.createElement("tr");

		row.appendChild(Utilities.CreateTableHeader("Level"));
		row.appendChild(Utilities.CreateTableHeader("Reputation<br/>XP/Points"));
		row.appendChild(Utilities.CreateTableHeader("Title"));

		return row;
	}

	BuildRankRow(rank: ReputationRank): HTMLTableRowElement {
		const row = document.createElement("tr");

		row.appendChild(Utilities.CreateTableData(rank.level.toString()));

		if (rank.xpRange.lower && rank.xpRange.upper) {
			row.appendChild(Utilities.CreateTableData(`${rank.xpRange.lower} to ${rank.xpRange.upper}`));
		} else if (rank.xpRange.lower) {
			row.appendChild(Utilities.CreateTableData(`${rank.xpRange.lower} or more`));
		} else if (rank.xpRange.upper) {
			row.appendChild(Utilities.CreateTableData(`${rank.xpRange.upper} or less`));
		} else {
			row.appendChild(Utilities.CreateTableData(""));
		}

		row.appendChild(Utilities.CreateTableData(rank.title));

		return row;
	}
}

customElements.define("ap-reputation-ranks-table", ReputationRanksTable);
