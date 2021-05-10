import { globals, ReputationRank } from "../globals.js";
import * as Utilities from "../utilities.js";

export class ReputationDisplay extends HTMLElement {
	reputations: OrganizationReputation[] = [];

	constructor() {
		// Always call super first in constructor
		super();

		if (Utilities.IsGoodString(this.innerHTML)) {
			this.reputations = Utilities.StringToObject(this.innerHTML);

			this.reputations.forEach((reputation) => {
				reputation.organization.id = reputation.organization.id ? reputation.organization.id : reputation.organization.name;
				reputation.allies.forEach((ally) => (ally.id = ally.id ? ally.id : ally.name));
				reputation.enemies.forEach((enemy) => (enemy.id = enemy.id ? enemy.id : enemy.name));
			});
		}
	}

	connectedCallback() {
		this.Render();
	}

	Render() {
		this.innerHTML = "";

		this.reputations.forEach((reputation) => {
			this.appendChild(this.BuildOrganizationBlock(reputation));
		});
	}

	BuildOrganizationBlock(reputation: OrganizationReputation): HTMLDivElement {
		const container = document.createElement("div");
		container.classList.add("reputation-container");

		container.id = reputation.organization.id;

		// This organization
		let rowContainer = this.BuildRowContainer();
		rowContainer.classList.add("reputation-organization-name-row");
		rowContainer.innerHTML = `<b class="reputation-organization-name">${reputation.organization.name}</b>`;
		container.appendChild(rowContainer);

		// Value and rank
		const repRank = this.GetReputationRank(reputation.value);
		if (repRank) {
			rowContainer = this.BuildRowContainer();
			rowContainer.innerHTML = `${repRank.title} (${reputation.value})`;
			container.appendChild(rowContainer);
		}

		// Allies
		rowContainer = this.BuildRowContainer();
		rowContainer.innerHTML = `<div class="reputation-allies-title">Allies</div>`;
		this.AppendOrganizationRows(rowContainer, reputation.allies);
		container.appendChild(rowContainer);

		// Enemies
		rowContainer = this.BuildRowContainer();
		rowContainer.innerHTML = `<div class="reputation-enemies-title">Enemies</div>`;
		this.AppendOrganizationRows(rowContainer, reputation.enemies);
		container.appendChild(rowContainer);

		return container;
	}

	BuildRowContainer(): HTMLDivElement {
		const container = document.createElement("div");
		container.classList.add("reputation-container-row");

		return container;
	}

	GetReputationRank(reputation: number): ReputationRank {
		return globals.reputationRanks.find((rank) => {
			return Utilities.Bounds.isInBounds(reputation, rank.xpRange);
		});
	}

	AppendOrganizationRows(container: HTMLElement, organizations: Organization[]) {
		container.classList.add("reputation-allies-enemy-tile");

		if (organizations && organizations.length > 0) {
			organizations.forEach((organization) => {
				const anchor = document.createElement("a");
				anchor.classList.add("reputation-link");
				anchor.href = `#${organization.id}`;
				anchor.innerHTML = organization.name;

				container.appendChild(anchor);
			});
		}
	}
}

interface Organization {
	name: string;
	id?: string;
}

interface OrganizationReputation {
	organization: Organization;
	value: number;
	enemies: Organization[];
	allies: Organization[];
}

customElements.define("ap-reputation-display", ReputationDisplay);
