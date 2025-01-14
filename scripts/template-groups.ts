import { nobleRisingTemplates } from "../campaigns/noble-rising/scripts/templates.js";
import { TemplateFolderGroup } from "./template-folder-info.js";

export const templateGroups: TemplateFolderGroup[] = [
	{
		name: "app",
		basePath: "",
		folders: [
			{ path: "templates/3-5", name: "3.5", fileType: "html" },
			{ path: "templates/pathfinder", name: "pathfinder", fileType: "html" },
		],
	},
	{ name: "noble-rising", basePath: "campaigns/noble-rising", folders: nobleRisingTemplates },
];
