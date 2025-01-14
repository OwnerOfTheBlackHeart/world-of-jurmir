import { nobleRisingTemplates } from "../campaigns/noble-rising/scripts/templates.js";
export const templateGroups = [
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
//# sourceMappingURL=template-groups.js.map