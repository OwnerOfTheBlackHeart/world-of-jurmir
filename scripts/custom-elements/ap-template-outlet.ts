import { appFetch, pageAreaQuerySelector } from "../io.js";
import { TemplateFolderGroup, TemplateFolderInfo } from "../template-folder-info.js";
import { templateGroups } from "../template-groups.js";
import { showElement } from "../utilities.js";

export class TemplateOutlet extends HTMLElement {
	templateUrl: string;

	get templatePath() {
		return this.getAttribute("templatePath");
	}

	set templatePath(val) {
		this.setAttribute("templatePath", val);
	}

	get headerLevel() {
		const hl = Number(this.getAttribute("headerLevel"));
		return hl ? hl : 3;
	}

	set headerLevel(val) {
		this.setAttribute("headerLevel", val.toString());
	}

	constructor() {
		// Always call super first in constructor
		super();

		this.innerHTML = "";
		this.templateUrl = this.buildTemplateUrl(this.templatePath);

		if (this.templateUrl && this.templateUrl !== "") {
			appFetch(this.templateUrl)
				.then((response) => response.text())
				.then((html) => {
					if (html && this.templateUrl !== "") {
						this.innerHTML = this.updateHtmlToHeaderLevel(html);
					}

					if (location.hash) {
						const element = this.querySelector<HTMLElement>(location.hash);

						if (element) {
							const pageArea = document.querySelector<HTMLElement>(pageAreaQuerySelector);
							showElement(pageArea, element);
						}
					}
				});
		} else {
			this.innerHTML = '<div class="warning">Invalid templatePath</div>';
		}

		if (!this.innerHTML || this.innerHTML.trim() === "") {
			this.innerHTML = '<div class="warning">Failed to load template data</div>';
		}
	}

	buildTemplateUrl(path: string): string {
		let templateFolder: TemplateFolderInfo;
		let templateGroup: TemplateFolderGroup;
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
		} else {
			return `${templateFolder.path}/${names[2]}.${templateFolder.fileType}`;
		}
	}

	updateHtmlToHeaderLevel(html: string) {
		var updatedHtml = html;

		updatedHtml = updatedHtml.replaceAll("h5", `h${this.headerLevel + 4}`);
		updatedHtml = updatedHtml.replaceAll("h4", `h${this.headerLevel + 3}`);
		updatedHtml = updatedHtml.replaceAll("h3", `h${this.headerLevel + 2}`);
		updatedHtml = updatedHtml.replaceAll("h2", `h${this.headerLevel + 1}`);
		updatedHtml = updatedHtml.replaceAll("h1", `h${this.headerLevel}`);

		return updatedHtml;
	}
}

customElements.define("ap-template-outlet", TemplateOutlet);
