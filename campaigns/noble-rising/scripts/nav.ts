/// <reference path="../../../scripts/page-info.ts" />

const nobleUrlStart = "campaigns/noble-rising/";
const nobleNameStart = "noble-";

const nobleNav = [
	new PageInfo(undefined, "main.html", "Noble Rising", "main"),
	new PageInfo(undefined, "notes.html", "Noble Rising Notes", "notes"),
	new PageInfo(undefined, "timeline.html", "Noble Rising Timeline", "timeline"),
	new PageInfo(undefined, "gm-notes.html", "Private GM Notes", "gm-notes"),

	new PageInfo(undefined, "locations/tiathiloth/main.html", "The County of Tiathiloth", "tiathiloth"),
	new PageInfo(undefined, "locations/tiathiloth/mensharra.html", "Mensharra, Capital City of Tiathiloth", "mensharra"),

	new PageInfo(undefined, "locations/taaira-ruzara/main.html", "The County of Taaira Ruzara", "taaira-ruzara"),
	new PageInfo(undefined, "locations/taaira-ruzara/desserr.html", "Desserr, Capital City of Taaira Ruzara", "desserr"),

	new PageInfo(undefined, "plotlines/main.html", "Noble Rising Plotline Index", "plotline-index"),

	new PageInfo(undefined, "spellbooks/main.html", "Noble Rising Spellbooks", "spellbooks"),

	new PageInfo(undefined, "enemies/bandits/human-commoner.html", "Human Commoner", "human-commoner"),
	new PageInfo(undefined, "enemies/bandits/catfolk-adept.html", "Catfolk Adept", "catfolk-adept"),

	new PageInfo(undefined, "images/fang-at-desk.jpg", "", "fang-img", true),
	new PageInfo(undefined, "http://www.d20srd.org/srd/monsters/elf.htm", "", "srd-elf", true),
	new PageInfo(undefined, "http://www.d20srd.org/srd/equipment/goodsAndServices.htm#thunderstone", "", "srd-tunderstone", true),
];

nobleNav.forEach(pageInfo =>
    {
        if (!pageInfo.external) { pageInfo.url = nobleUrlStart + pageInfo.url; }

        pageInfo.name = nobleNameStart + pageInfo.name;
    }
);

// nobleNav.push(
	
// );