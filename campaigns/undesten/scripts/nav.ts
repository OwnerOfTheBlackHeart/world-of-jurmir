import { PageInfo } from "../../../scripts/page-info.js";

const undestenUrlStart = "campaigns/undesten/";
const undestenNameStart = "undesten-";

export const undestenNav = [
	new PageInfo(undefined, "main.html", "Undesten Business Adventure", "main"),
	new PageInfo(undefined, "notes.html", "Undesten Business Adventure Notes", "notes"),
	new PageInfo(undefined, "timeline.html", "Undesten Business Adventure Timeline", "timeline"),
	new PageInfo(undefined, "gm-notes.html", "Private GM Notes", "gm-notes"),
	new PageInfo(undefined, "http://anthonyparsch.com/images/undesten-map.png", "", "map-img", true),

	new PageInfo(undefined, "locations/oceanside/junkberg.html", "Junkberg, The Capital of Yuru Khan", "junkberg"),
	new PageInfo(undefined, "locations/oceanside/wavescraper.html", "Wavescraper, The Oceanside Trade Hub", "wavescraper"),
	new PageInfo(undefined, "locations/oceanside/khov.html", "Khov, The Fields of Wavescraper", "khov"),
	new PageInfo(undefined, "locations/oceanside/jijig.html", "Jijig, Humble Hamlet", "jijig"),
	new PageInfo(undefined, "locations/oceanside/khuuk.html", "Khuuk, The Great Coral Town", "khuuk"),
	new PageInfo(undefined, "locations/oceanside/zogsool.html", "Zogsool, The River Docks", "zogsool"),
	new PageInfo(undefined, "locations/oceanside/unsunk-evdsen.html", "The Unsunk Evdsen", "unsunk-evdsen"),
	new PageInfo(undefined, "locations/oceanside/unasan-ruins.html", "The Unasan Ruins", "unasan-ruins"),

	new PageInfo(undefined, "locations/desertside/shehar.html", "Shehar, The Jewel at the Fork", "shehar"),
	new PageInfo(undefined, "locations/desertside/grass-foot-tribe.html", "Grass Foot Tribe", "grass-foot-tribe"),
	new PageInfo(undefined, "locations/desertside/temple-of-khon.html", "Temple of Khon", "temple-of-khon"),
	new PageInfo(undefined, "locations/desertside/fallen-amid.html", "Fallen Amid", "fallen-amid"),

	new PageInfo(undefined, "organizations/ming.html", "The Ming", "ming"),

	new PageInfo(undefined, "npcs/random.html", "Random/Seen Once NPCs", "random-npcs"),
	new PageInfo(undefined, "npcs/touran-dara.html", "Touran Dara, Unwilling Lady of the Flumphs", "touran-dara"),

	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/humanoids/gillman/", "", "gillman", true),
	new PageInfo(undefined, "enemies/gillman/gillman-magus.html", "Gillman Magus", "gillman-magus"),
	new PageInfo(undefined, "enemies/gillman/gillman-heavy.html", "Gillman Heavy", "gillman-heavy"),

	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/humanoids/merfolk/", "", "merfolk", true),
	new PageInfo(undefined, "enemies/merfolk/merfolk-cleric.html", "Merfolk Cleric", "merfolk-cleric"),
	new PageInfo(undefined, "enemies/merfolk/merfolk-sorcerer.html", "Merfolk Sorcerer", "merfolk-sorcerer"),

	new PageInfo(undefined, "enemies/goblinoids/half-demon-hobgoblin.html", "Half-Demon Hobgoblin", "half-demon-hobgoblin"),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/humanoids/hobgoblin/", "", "hobgoblin", true),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/humanoids/goblin/", "", "goblin", true),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/humanoids/bugbear/", "", "bugbear", true),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/magical-beasts/worg/", "", "worg", true),

	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/monstrous-humanoids/skum/", "", "skum", true),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/monstrous-humanoids/sahuagin/", "", "sahuagin", true),
	new PageInfo(
		undefined,
		"https://www.d20pfsrd.com/bestiary/monster-listings/monstrous-humanoids/sahuagin/mutant/",
		"",
		"sahuagin-mutant",
		true
	),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/npc-s/npcs-cr-6/lord-achimair/", "", "sahuagin-lord", true),

	new PageInfo(undefined, "plotlines/main.html", "Plotline Index", "plotline-index"),

	new PageInfo(undefined, "misc/children.html", "Children", "children"),
	new PageInfo(undefined, "misc/boat-rules.html", "Boat/Ship Rules", "boat-rules"),

	new PageInfo(undefined, "images/undesten/touran-dara.webp", "", "touran-dara-img", true),
];

undestenNav.forEach((pageInfo) => {
	if (!pageInfo.external) {
		pageInfo.url = undestenUrlStart + pageInfo.url;
	}

	pageInfo.name = undestenNameStart + pageInfo.name;
});
