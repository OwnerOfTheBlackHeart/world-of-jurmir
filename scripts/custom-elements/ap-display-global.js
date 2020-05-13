import { getDescendantProperty } from "../utilities.js";
import { globals } from "../globals.js";
class DisplayGlobalElement extends HTMLElement {
    get propertyPath() {
        return this.getAttribute("property-path");
    }
    set propertyPath(val) {
        this.setAttribute("property-path", val);
    }
    constructor() {
        super();
    }
    connectedCallback() {
        this.Render();
    }
    Render() {
        const value = getDescendantProperty(globals, this.propertyPath, undefined);
        if (value) {
            this.innerHTML = value.toString();
        }
        else {
            this.innerHTML = "";
        }
    }
}
customElements.define("ap-display-global", DisplayGlobalElement);
//# sourceMappingURL=ap-display-global.js.map