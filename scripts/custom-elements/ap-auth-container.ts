import { Auth } from "../auth.js";

export class AuthContainerElement extends HTMLElement {
	get permissions() {
		return this.getAttribute("permissions");
	}

	set permissions(val) {
		this.setAttribute("permissions", val);
	}

	get defaultDisplay() {
		return this.getAttribute("defaultDisplay");
	}

	set defaultDisplay(val) {
		this.setAttribute("defaultDisplay", val);
	}

	get inline() {
		return this.hasAttribute("inline");
	}

	set inline(val: boolean) {
		this.toggleAttribute("inline", val);
	}

	startingDisplay: string;

	constructor() {
		// Always call super first in constructor
		super();

		if (this.inline) {
			this.startingDisplay = "inline";
		} else {
			this.startingDisplay = this.style.display || this.defaultDisplay || "block";
		}

		if (this.startingDisplay === "inline" || this.startingDisplay === "inline-block") {
			this.innerHTML = this.innerHTML.trim();
		}

		AuthContainers.push(this);
	}

	connectedCallback() {
		this.Render();
	}

	disconnectedCallback() {
		AuthContainers = AuthContainers.filter((container) => container != this);
	}

	Render() {
		if (this.permissions) {
			if (Auth.CheckAccessLevel(this.permissions)) {
				// We have permissions
				this.style.display = this.startingDisplay;
			} // We don't have permissions
			else {
				this.style.display = "none";
			}
		} else {
			this.style.display = "none";
		}
	}

	static UpdateAll() {
		AuthContainers.forEach((container) => container.Render());
	}
}

customElements.define("ap-auth-container", AuthContainerElement);

let AuthContainers: AuthContainerElement[] = [];
Auth.onAuthChangedList.push(AuthContainerElement.UpdateAll);
