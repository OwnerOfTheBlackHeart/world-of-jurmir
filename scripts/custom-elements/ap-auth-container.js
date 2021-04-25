import { Auth } from "../auth.js";
export class AuthContainer extends HTMLElement {
    constructor() {
        super();
        if (this.inline) {
            this.startingDisplay = "inline";
        }
        else {
            this.startingDisplay = this.style.display || this.defaultDisplay || "block";
        }
        if (this.startingDisplay === "inline" || this.startingDisplay === "inline-block") {
            this.innerHTML = this.innerHTML.trim();
        }
        AuthContainers.push(this);
    }
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
    set inline(val) {
        this.toggleAttribute("inline", val);
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
                this.style.display = this.startingDisplay;
            }
            else {
                this.style.display = "none";
            }
        }
        else {
            this.style.display = "none";
        }
    }
    static UpdateAll() {
        AuthContainers.forEach((container) => container.Render());
    }
}
customElements.define("ap-auth-container", AuthContainer);
let AuthContainers = [];
Auth.onAuthChangedList.push(AuthContainer.UpdateAll);
//# sourceMappingURL=ap-auth-container.js.map