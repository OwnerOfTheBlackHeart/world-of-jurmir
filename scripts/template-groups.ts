import { nobleRisingTemplates } from "../campaigns/noble-rising/scripts/templates.js";
import { TemplateFolderGroup } from "./template-folder-info.js";

export const templateGroups: TemplateFolderGroup[] = [
	{ name: "app", basePath: "", folders: [{ path: "3-5", name: "3.5", fileType: "html" }] },
	{ name: "noble-rising", basePath: "campaigns/noble-rising", folders: nobleRisingTemplates },
];
