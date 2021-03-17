import { appFetch, pageAreaQuerySelector } from "../io.js";
import { templateGroups } from "../template-groups.js";
import { showElement } from "../utilities.js";
export class TemplateOutlet extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = "";
        this.templateUrl = this.buildTemplateUrl(this.templatePath);
        if (this.templateUrl && this.templateUrl !== "") {
            appFetch(this.templateUrl)
                .then((response) => response.text())
                .then((html) => {
                if (html && this.templateUrl !== "") {
                    this.innerHTML = html;
                }
                if (location.hash) {
                    const element = this.querySelector(location.hash);
                    if (element) {
                        const pageArea = document.querySelector(pageAreaQuerySelector);
                        showElement(pageArea, element);
                    }
                }
            });
        }
        else {
            this.innerHTML = '<div class="warning">Invalid templatePath</div>';
        }
        if (!this.innerHTML || this.innerHTML.trim() === "") {
            this.innerHTML = '<div class="warning">Failed to load template data</div>';
        }
    }
    get templatePath() {
        return this.getAttribute("templatePath");
    }
    set templatePath(val) {
        this.setAttribute("templatePath", val);
    }
    buildTemplateUrl(path) {
        let templateFolder;
        let templateGroup;
        const names = path.split("/");
        if (names.length !== 3) {
            return undefined;
        }
        templateGroup = templateGroups.find((group) => group.name === names[0]);
        if (!templateGroup || !templateGroup.folders || templateGroup.folders.length <= 0) {
            return undefined;
        }
        templateFolder = templateGroup.folders.find((folder) => folder.name === names[1]);
        if (!templateFolder) {
            return undefined;
        }
        if (templateGroup.basePath) {
            return `${templateGroup.basePath}/${templateFolder.path}/${names[2]}.${templateFolder.fileType}`;
        }
        else {
            return `${templateFolder.path}/${names[2]}.${templateFolder.fileType}`;
        }
    }
}
customElements.define("ap-template-outlet", TemplateOutlet);
//# sourceMappingURL=ap-template-outlet.js.map