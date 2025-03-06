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
	new PageInfo(undefined, "locations/desertside/iirie.html", "Iirie, the Human Conclave", "iirie"),
	new PageInfo(undefined, "locations/desertside/grass-foot-tribe.html", "Grass Foot Tribe", "grass-foot-tribe"),
	new PageInfo(undefined, "locations/desertside/temple-of-khon.html", "Temple of Khon", "temple-of-khon"),
	new PageInfo(undefined, "locations/desertside/fallen-amid.html", "Fallen Amid", "fallen-amid"),

	new PageInfo(undefined, "organizations/ming.html", "The Ming", "ming"),
	new PageInfo(undefined, "organizations/adventurers-league.html", "Adventurers' League", "adventurers-league"),

	new PageInfo(undefined, "organizations/cults/iron-serpents.html", "Iron Serpents", "iron-serpents"),

	new PageInfo(undefined, "npcs/random.html", "Random/Seen Once NPCs", "random-npcs"),
	new PageInfo(undefined, "npcs/touran-dara.html", "Touran Dara, Unwilling Lady of the Flumphs", "touran-dara"),
	new PageInfo(undefined, "npcs/svala-vikardottir.html", "Svala Vikardottir, Fallenfeather Kata of Iirie", "svala-vikardottir"),
	new PageInfo(undefined, "npcs/freydis-haukdottir.html", "Freydis Haukdottir, Fallenfeather Fury of Iirie", "freydis-haukdottir"),
	new PageInfo(undefined, "npcs/pildrylth-pathfinder.html", "Pildrylth the Calm, Tyrant of the Forest", "pildrylth"),
	new PageInfo(undefined, "npcs/vida-amini.html", "Vida Amini", "vida-amini"),
	new PageInfo(undefined, "npcs/seki-kayo.html", "Seki Kayo, Silverwolf Magic Hunter", "seki-kayo"),
	new PageInfo(undefined, "npcs/yanaba.html", "Yanaba, Hellhound Sorceress", "yanaba"),

	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/humanoids/gillman/", "", "gillman", true),
	new PageInfo(undefined, "enemies/gillman/gillman-magus.html", "Gillman Magus", "gillman-magus"),
	new PageInfo(undefined, "enemies/gillman/gillman-heavy.html", "Gillman Heavy", "gillman-heavy"),

	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/humanoids/merfolk/", "", "merfolk", true),
	new PageInfo(undefined, "enemies/merfolk/merfolk-cleric.html", "Merfolk Cleric", "merfolk-cleric"),
	new PageInfo(undefined, "enemies/merfolk/merfolk-sorcerer.html", "Merfolk Sorcerer", "merfolk-sorcerer"),

	new PageInfo(undefined, "enemies/humanoids/tiefling-wizard.html", "Tiefling Wizard", "tiefling-wizard"),
	new PageInfo(undefined, "enemies/humanoids/aasimar-paladin.html", "Aasimar Paladin", "aasimar-paladin"),

	new PageInfo(undefined, "enemies/cultists/hecks-hounds/zoes-hellhound.html", "Heck's Hounds Hellhound", "zoes-hellhound"),
	new PageInfo(undefined, "enemies/cultists/hecks-hounds/zoes-silverwolf.html", "Heck's Hounds Silverwolf", "zoes-silverwolf"),

	new PageInfo(undefined, "enemies/cultists/red-king/catfolk-cultist.html", "Catfolk Cultist", "catfolk-cultist"),
	new PageInfo(undefined, "enemies/cultists/red-king/dwarf-cultist.html", "Dwarf Cultist", "dwarf-cultist"),
	new PageInfo(undefined, "enemies/cultists/red-king/elf-cultist.html", "Elf Cultist", "elf-cultist"),
	new PageInfo(undefined, "enemies/cultists/red-king/kobold-cultist.html", "Kobold Cultist", "kobold-cultist"),
	new PageInfo(undefined, "enemies/cultists/red-king/orc-cultist.html", "Orc Cultist", "orc-cultist"),
	new PageInfo(undefined, "enemies/cultists/red-king/luta-dagdottir.html", "Luta Dagdottir", "luta-dagdottir"),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/aberrations/grick/", "", "grick", true),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/mephit/mephit-water/", "", "water-mephit", true),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/outsiders/mephit/mephit-earth/", "", "earth-mephit", true),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/dragons/drakes/drake-river/", "", "river-drake", true),

	new PageInfo(undefined, "enemies/goblinoids/half-demon-hobgoblin.html", "Half-Demon Hobgoblin", "half-demon-hobgoblin"),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/humanoids/hobgoblin/", "", "hobgoblin", true),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/humanoids/goblin/", "", "goblin", true),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/humanoids/bugbear/", "", "bugbear", true),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/magical-beasts/worg/", "", "worg", true),

	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/humanoids/gnoll/", "", "gnoll", true),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/humanoids/gnoll/gnoll-flind-tohc/", "", "flind", true),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/npc-s/npcs-cr-4/gnoll-sergeant-cr-4/", "", "gnoll-sergeant", true),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/animals/hyena/", "", "hyena", true),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/monster-listings/animals/hyena/hyena-dire/", "", "dire-hyena", true),

	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/npc-s/npcs-cr-2/catfolk-sneak-cr-2/", "", "catfolk-sneak", true),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/npc-s/npcs-cr-1/noble-indiscretion/", "", "tiefling-fighter-rogue", true),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/npc-s/npcs-cr-1/guard-human-warrior-3-npcguide/", "", "human-guard", true),

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

	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/npc-s/npcs-cr-0/pirate-sailor-human-rogue-1/", "", "pirate-sailor", true),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/npc-s/npcs-cr-0/human-pirate-buccaneer/", "", "pirate-buccaneer", true),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/npc-s/npcs-cr-2/pirate-smuggler-human-rogue-3/", "", "pirate-smuggler", true),
	new PageInfo(undefined, "https://www.d20pfsrd.com/bestiary/npc-s/npcs-cr-3/pirate-officer-half-elf-bard-4/", "", "pirate-officer", true),

	new PageInfo(undefined, "plotlines/plotlines.html", "Plotline Index", "plotline-index"),
	new PageInfo(undefined, "plotlines/hunt-them-first.html", "Hunt Them First", "hunt-them-first"),
	new PageInfo(undefined, "plotlines/hobgod.html", "Hobgod", "hobgod"),
	new PageInfo(undefined, "plotlines/dragons-return.html", "Dragon's Return", "dragons-return"),
	new PageInfo(undefined, "plotlines/bring-the-deserts-inline.html", "Bring the Deserts Inline", "bring-the-deserts-inline"),
	new PageInfo(undefined, "plotlines/track-the-cause.html", "Track the Cause", "track-the-cause"),

	new PageInfo(undefined, "misc/children.html", "Children", "children"),
	new PageInfo(undefined, "misc/boat-rules.html", "Boat/Ship Rules", "boat-rules"),
	new PageInfo(undefined, "misc/zoes-hounds.html", "Zoe's Hounds", "zoes-hounds"),

	new PageInfo(undefined, "images/undesten/touran-dara.webp", "", "touran-dara-img", true),
	new PageInfo(undefined, "images/undesten/svala-vikardottir.png", "", "svala-vikardottir-img", true),
	new PageInfo(undefined, "images/undesten/freydis-haukdottir.png", "", "freydis-haukdottir-img", true),
	new PageInfo(undefined, "images/undesten/ariana-fraser.jpg", "", "ariana-fraser-img", true),
	new PageInfo(undefined, "images/undesten/leah-fraser.jpg", "", "leah-fraser-img", true),
	new PageInfo(undefined, "images/undesten/kihu-thajos.jpg", "", "kihu-thajos-img", true),
	new PageInfo(undefined, "images/undesten/rinisre.jpg", "", "rinisre-img", true),
	new PageInfo(undefined, "images/undesten/seki-kayo.jpg", "", "seki-kayo-img", true),
	new PageInfo(undefined, "images/undesten/yanaba.webp", "", "yanaba-img", true),
];

undestenNav.forEach((pageInfo) => {
	if (!pageInfo.external) {
		pageInfo.url = undestenUrlStart + pageInfo.url;
	}

	pageInfo.name = undestenNameStart + pageInfo.name;
});
