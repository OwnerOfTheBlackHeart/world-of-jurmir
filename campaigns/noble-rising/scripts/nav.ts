/// <reference path="../../../scripts/page-info.ts" />

const nobleUrlStart = "campaigns/noble-rising/";
const nobleNameStart = "noble-";

const nobleNav = [
	new PageInfo(undefined, "main.html", "Noble Rising", "main"),
	new PageInfo(undefined, "notes.html", "Noble Rising Notes", "notes"),
	new PageInfo(undefined, "timeline.html", "Noble Rising Timeline", "timeline"),

	new PageInfo(undefined, "plotlines/main.html", "Noble Rising Plotline Index", "plotline-index"),

	new PageInfo(undefined, "spellbooks/main.html", "Noble Rising Spellbooks", "spellbooks"),
];

nobleNav.forEach(pageInfo =>
    {
        if (!pageInfo.external) { pageInfo.url = nobleUrlStart + pageInfo.url; }

        pageInfo.name = nobleNameStart + pageInfo.name;
    }
);

nobleNav.push(
	new PageInfo(undefined, "images/fang-at-desk.jpg", "", "noble-fang-img", true)
);