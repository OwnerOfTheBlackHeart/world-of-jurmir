import { PageInfo } from "../../../scripts/page-info.js";

const nobleUrlStart = "campaigns/noble-rising/";
const nobleNameStart = "noble-";

export const nobleNav = [
	new PageInfo(undefined, "main.html", "Noble Rising", "main"),
	new PageInfo(undefined, "notes.html", "Noble Rising Notes", "notes"),
	new PageInfo(undefined, "timeline.html", "Noble Rising Timeline", "timeline"),
	new PageInfo(undefined, "gm-notes.html", "Private GM Notes", "gm-notes"),

	new PageInfo(undefined, "organizations/hands-of-kriotz.html", "Hands of Kriotz", "hands-of-kriotz"),
	new PageInfo(undefined, "organizations/claws-of-kyranious.html", "Claws of Kyranious", "claws-of-kyranious"),
	new PageInfo(undefined, "organizations/silver-daggers.html", "Silver Daggers Thieves' Guild", "silver-daggers"),
	new PageInfo(undefined, "organizations/tae-gilonnalia-empire.html", "The Tae`Gilonnalia Empire", "tae-gilonnalia-empire"),

	new PageInfo(undefined, "organizations/kobold-clans/main.html", "Kobold Clans", "kobold-clans"),
	new PageInfo(undefined, "organizations/kobold-clans/hidden-pond-clan.html", "Hidden Pond Clan", "hidden-pond-clan"),
	new PageInfo(undefined, "organizations/kobold-clans/spelllake-clan.html", "Spelllake Clan", "spelllake-clan"),
	new PageInfo(undefined, "organizations/kobold-clans/strongwald-clan.html", "Strongwald Clan", "strongwald-clan"),
	new PageInfo(undefined, "organizations/kobold-clans/vertbridge-clan.html", "Vertbridge Clan", "vertbridge-clan"),
	new PageInfo(undefined, "organizations/kobold-clans/howlingcliff-clan.html", "Howlingcliff Clan", "howlingcliff-clan"),

	new PageInfo(undefined, "locations/tiathiloth/main.html", "The County of Tiathiloth", "tiathiloth"),
	new PageInfo(undefined, "locations/tiathiloth/mensharra.html", "Mensharra, Capital City of Tiathiloth", "mensharra"),

	new PageInfo(undefined, "locations/methnaes/main.html", "The Duchy of Methnaes", "methnaes"),

	new PageInfo(undefined, "locations/taaira-ruzara/main.html", "The Duchy of Taaira Ruzara", "taaira-ruzara"),

	new PageInfo(undefined, "locations/taaira-ruzara/misc/desserr-nobility.html", "Desserr Nobility", "desserr-nobility"),
	new PageInfo(undefined, "locations/taaira-ruzara/misc/regional-nobility.html", "Regional Nobility", "regional-nobility"),

	new PageInfo(undefined, "locations/taaira-ruzara/cats-retreat/main.html", "The County of Cat's Retreat", "cats-retreat"),

	new PageInfo(undefined, "locations/taaira-ruzara/deaavh-hilluk/main.html", "The County of Deaavh Hilluk", "deaavh-hilluk"),

	new PageInfo(undefined, "locations/taaira-ruzara/desserr/main.html", "Desserr County", "desserr-county"),
	new PageInfo(undefined, "locations/taaira-ruzara/desserr/desserr.html", "Desserr, Capital City of Taaira Ruzara", "desserr"),

	new PageInfo(undefined, "locations/taaira-ruzara/dhaer-quesss-shal/main.html", "Dhaer'quess's Shal County", "dhaer-quesss-shal"),

	new PageInfo(undefined, "locations/taaira-ruzara/forslag/main.html", "Forslag County", "forslag"),
	new PageInfo(undefined, "locations/taaira-ruzara/forslag/keldhall.html", "Keldhall, Human Trade Town", "keldhall"),
	new PageInfo(undefined, "locations/taaira-ruzara/forslag/mam-daruhm.html", "Mam Daruhm, Dwarven Fortress City", "mam-daruhm"),

	new PageInfo(undefined, "locations/taaira-ruzara/lindado/main.html", "Lindado County", "lindado"),

	new PageInfo(undefined, "locations/taaira-ruzara/little-river/main.html", "Little River County", "little-river"),

	new PageInfo(undefined, "locations/taaira-ruzara/nelluon-enial/main.html", "Nelloun Enial County", "nelluon-enial"),

	new PageInfo(undefined, "locations/taaira-ruzara/rivers-pass/main.html", "The County of River's Pass", "rivers-pass"),

	new PageInfo(undefined, "locations/taaira-ruzara/russia/main.html", "The County of Russia", "russia"),
	new PageInfo(undefined, "locations/taaira-ruzara/russia/sharnwick.html", "The Village of Sharnwick", "sharnwick"),

	new PageInfo(undefined, "locations/taaira-ruzara/shanta-revar/main.html", "Shanta Revar County", "shanta-revar"),
	new PageInfo(undefined, "locations/taaira-ruzara/shanta-revar/antys.html", "Antys, Livingwood Glade", "antys"),
	new PageInfo(undefined, "locations/taaira-ruzara/shanta-revar/baytide.html", "The Village of Baytide", "baytide"),
	new PageInfo(undefined, "locations/taaira-ruzara/shanta-revar/inar.html", "The Hidden Village of Inar", "inar"),

	new PageInfo(undefined, "locations/taaira-ruzara/verth-di-lokipk/main.html", "The County of Verth Di Lokipk", "verth-di-lokipk"),
	new PageInfo(undefined, "locations/taaira-ruzara/verth-di-lokipk/deathfall.html", "The Village of Deathfall", "deathfall"),

	new PageInfo(undefined, "locations/taaira-ruzara/wolfs-run/main.html", "Wolf's Run County", "wolfs-run"),

	new PageInfo(undefined, "locations/taaira-ruzara/wolfs-run/rivers-plains/main.html", "The Barony of Rivers Plains", "rivers-plains"),
	new PageInfo(undefined, "locations/taaira-ruzara/wolfs-run/rivers-plains/cherryvale.html", "The Ex-Village of Cherryvale", "cherryvale"),
	new PageInfo(undefined, "locations/taaira-ruzara/wolfs-run/rivers-plains/blackhide.html", "The Ex-Village of Blackhide", "blackhide"),

	new PageInfo(undefined, "locations/taaira-ruzara/ruins/asokmoat.html", "The Black City of Asokmoat", "asokmoat"),
	new PageInfo(undefined, "locations/taaira-ruzara/ruins/eight-great-towers.html", "The Eight Great Towers", "eight-great-towers"),
	new PageInfo(undefined, "locations/taaira-ruzara/ruins/red-wing-burrow.html", "Red Wing Burrow", "red-wing-burrow"),

	new PageInfo(undefined, "plotlines/main.html", "Noble Rising Plotline Index", "plotline-index"),
	new PageInfo(undefined, "plotlines/the-grafter.html", "The Grafter", "the-grafter"),
	new PageInfo(undefined, "plotlines/hunting-ulath.html", "Hunting the God Ulath", "hunting-ulath"),
	new PageInfo(undefined, "plotlines/rise-of-the-bandit-king.html", "Rise of the Bandit King", "rise-of-the-bandit-king"),
	new PageInfo(undefined, "plotlines/the-methnaes-situation.html", "The Methnaes Situation", "the-methnaes-situation"),

	new PageInfo(
		undefined,
		"plotlines/missions/hunting-down-goblins-in-the-fields.html",
		"Hunting Down the Goblins in the Fields",
		"hunting-down-goblins-in-the-fields"
	),
	new PageInfo(
		undefined,
		"plotlines/missions/finding-the-lizard-cult.html",
		"Finding the Lizard Cult in Desserr",
		"finding-the-lizard-cult"
	),
	new PageInfo(undefined, "plotlines/missions/amassing-bandits.html", "Amassing Bandits", "amassing-bandits"),
	new PageInfo(undefined, "plotlines/missions/rats-in-the-grain-house.html", "Rats in the Grain House", "rats-in-the-grain-house"),
	new PageInfo(undefined, "plotlines/missions/the-grafted-wolf.html", "The Grafted Wolf", "the-grafted-wolf"),
	new PageInfo(undefined, "plotlines/missions/turzks-search.html", "Turzk's Hunt", "turzks-search"),
	new PageInfo(undefined, "plotlines/missions/red-wings-fang.html", "Red Wing's Fang", "red-wings-fang"),
	new PageInfo(undefined, "plotlines/missions/finding-zigni.html", "Finding Zigni", "finding-zigni"),
	new PageInfo(undefined, "plotlines/missions/zitts-rod.html", "Zitt's Rod", "zitts-rod"),

	new PageInfo(undefined, "plotlines/missions/methnaes/sariels-investigation.html", "Sariel's Investigation", "sariels-investigation"),

	new PageInfo(undefined, "spellbooks/main.html", "Noble Rising Spellbooks", "spellbooks"),
	new PageInfo(undefined, "spellbooks/yasrena-spellbook.html", "Yasrena's Spellbook", "yasrena-spellbook"),
	new PageInfo(undefined, "spellbooks/kali-spellbook.html", "Kali's Spellbook", "kali-spellbook"),
	new PageInfo(undefined, "spellbooks/auction-spellbook.html", "Kali's Auction Spellbook", "auction-spellbook"),
	new PageInfo(undefined, "spellbooks/vampire-wizard-spellbook.html", "Vampire Wizard Spellbook", "vampire-wizard-spellbook"),

	new PageInfo(undefined, "enemies/bandits/human-commoner.html", "Human Commoner", "human-commoner"),
	new PageInfo(undefined, "enemies/bandits/catfolk-adept.html", "Catfolk Adept", "catfolk-adept"),
	new PageInfo(undefined, "enemies/bandits/catfolk-barbarian.html", "Catfolk Barbarian", "catfolk-barbarian"),
	new PageInfo(undefined, "enemies/bandits/catfolk-ranger.html", "Catfolk Ranger", "catfolk-ranger"),
	new PageInfo(undefined, "enemies/bandits/catfolk-sorcerer.html", "Catfolk Sorcerer", "catfolk-sorcerer"),
	new PageInfo(undefined, "enemies/bandits/mutant-bandit-chief.html", "Mutant Bandit Chief", "mutant-bandit-chief"),
	new PageInfo(undefined, "enemies/bandits/elf-fighter-2.html", "Elf Fighter", "elf-fighter-2"),

	new PageInfo(undefined, "enemies/minor-gods/ulath/ulath.html", "Ulath, God of Reptiles and the Foul", "ulath"),
	new PageInfo(undefined, "enemies/minor-gods/ulath/ulath-abductor.html", "Ulath Abductor", "ulath-abductor"),
	new PageInfo(undefined, "enemies/minor-gods/ulath/ulath-guard.html", "Ulath Guard", "ulath-guard"),
	new PageInfo(undefined, "enemies/minor-gods/ulath/ulath-priest.html", "Ulath Priest", "ulath-priest"),
	new PageInfo(undefined, "enemies/minor-gods/ulath/ulath-worshiper.html", "Ulath Worshiper", "ulath-worshiper"),
	new PageInfo(undefined, "enemies/minor-gods/ulath/heavy-trog.html", "Heavy Troglodyte", "heavy-trog"),

	new PageInfo(undefined, "enemies/minor-gods/doaug/the-mighty-doaug.html", "The Mighty Doaug", "doaug"),

	new PageInfo(undefined, "enemies/hands-of-kriotz/enforcer.html", "Hands of Kriotz Enforcer", "kriotz-enforcer"),
	new PageInfo(undefined, "enemies/hands-of-kriotz/priest.html", "Hands of Kriotz Priest", "kriotz-priest"),
	new PageInfo(undefined, "enemies/hands-of-kriotz/cleric.html", "Hands of Kriotz Cleric", "kriotz-cleric"),

	new PageInfo(undefined, "enemies/animals/alligator-snapping-turtle.html", "Alligator Snapping Turtle", "alligator-snapping-turtle"),

	new PageInfo(undefined, "enemies/mutated-animals/flying-wolf.html", "Flying Wolf", "flying-wolf"),
	new PageInfo(undefined, "enemies/mutated-animals/scale-wolf.html", "Scaly Wolf", "scale-wolf"),
	new PageInfo(undefined, "enemies/mutated-animals/mutant-dire-wolf.html", "Mutant Dire Wolf", "mutant-dire-wolf"),
	new PageInfo(undefined, "enemies/mutated-animals/mutant-swindlespitter.html", "Mutant Swindlespitter", "mutant-swindlespitter"),

	new PageInfo(undefined, "enemies/nen/nen-drone.html", "Nen Drone", "nen-drone"),
	new PageInfo(undefined, "enemies/nen/nen-warrior.html", "Nen Warrior", "nen-warrior"),
	new PageInfo(undefined, "enemies/nen/nen-queen.html", "Nen Queen", "nen-queen"),

	new PageInfo(undefined, "enemies/future/bjork-2.html", "Bjork 2", "bjork-2"),

	new PageInfo(undefined, "enemies/orcs/orc-sergeant.html", "Orc Sergeant", "orc-sergeant"),
	new PageInfo(undefined, "enemies/orcs/orc-lieutenant.html", "Orc Lieutenant", "orc-lieutenant"),
	new PageInfo(undefined, "enemies/orcs/orc-captain.html", "Orc Captain", "orc-captain"),

	new PageInfo(undefined, "enemies/undead/pseudo-reaper.html", "Pseudo Reaper, Guardian of the River Cain", "pseudo-reaper"),
	new PageInfo(undefined, "enemies/undead/vampire-wizard.html", "Vampire Wizard", "vampire-wizard"),

	new PageInfo(undefined, "npcs/mysterious-stranger.html", "The Mysterious Stranger", "mysterious-stranger"),
	new PageInfo(undefined, "npcs/reth-mailynath.html", "Reth Mailynath, Adamantine Slayer", "reth-mailynath"),
	new PageInfo(undefined, "npcs/turzk.html", "Turzk, Ancient Lizardfolk", "turzk"),
	new PageInfo(undefined, "npcs/yasrena.html", "Yasrena Telenna, Drow Escapee", "yasrena"),
	new PageInfo(undefined, "npcs/dolph.html", "Dolph Lundgren, Grafted Gnome Monk", "dolph"),
	new PageInfo(undefined, "npcs/zigni.html", "Zigni Lundgren, Kobold Beast Grafter", "zigni"),
	new PageInfo(undefined, "npcs/phidove.html", "Phidove Amakiir (Gemflower), Elven Info Broker", "phidove"),
	new PageInfo(undefined, "npcs/pildrylth.html", "Pildrylth the Calm, Tyrant of the Forest", "pildrylth"),
	new PageInfo(undefined, "npcs/kane.html", "Sir Kane Houghton, Knight of the Order of the Full Moon", "kane"),
	new PageInfo(undefined, "npcs/sebas.html", "Sebas, Awakened Tiger Wizard", "sebas"),
	new PageInfo(undefined, "npcs/ivy-cooke.html", "Ivy Cooke, Tiefling with Her Own Plans", "ivy-cooke"),
	new PageInfo(undefined, "npcs/quilynn-loreweaver.html", "Dame Quilynn Loreweaver, Mayor Captain of Deathfall", "quilynn-loreweaver"),
	new PageInfo(undefined, "npcs/belben-huntinghawk.html", "High Gravekeeper Belben Huntinghawk", "belben-huntinghawk"),

	new PageInfo(undefined, "characters/camilia.html", "Camilia Famia, Wild Beauty", "camilia"),
	new PageInfo(undefined, "characters/animal-companions/cackles.html", "Cackles the Spotted Hyena", "cackles"),
	new PageInfo(undefined, "characters/zarsra.html", "Zarsra Telyn, Drow Slave of Sariel", "zarsra"),
	new PageInfo(undefined, "characters/skellyball.html", "Skellyball, Rollable Human Skeleton", "skellyball"),

	new PageInfo(undefined, "characters/misc/skellyball-powers.html", "Skellyball Powers", "skellyball-powers"),

	new PageInfo(undefined, "misc/kali-rituals.html", "Kali Rituals", "kali-rituals"),
	new PageInfo(undefined, "misc/the-buried-turd.html", "The Buried Turd", "the-buried-turd"),
	new PageInfo(undefined, "misc/the-farm.html", "The Farm", "the-farm"),
	new PageInfo(undefined, "misc/brown-eye-whores.html", "Brown Eye Whores", "brown-eye-whores"),
	new PageInfo(undefined, "misc/whore-house-events.html", "Whore House Events", "whore-house-events"),
	new PageInfo(undefined, "misc/paintings-gallery.html", "Paintings Gallery", "paintings-gallery"),

	new PageInfo(undefined, "images/fang-at-desk.jpg", "", "fang-img", true),
	new PageInfo(undefined, "images/mysterious-stranger.jpg", "", "mysterious-stranger-img", true),
	new PageInfo(undefined, "images/turzk.jpg", "", "turzk-img", true),
	new PageInfo(undefined, "images/yasrena.jpg", "", "yasrena-img", true),
	new PageInfo(undefined, "images/camilia.png", "", "camilia-img", true),
	new PageInfo(undefined, "images/zarsra.jpg", "", "zarsra-img", true),
	new PageInfo(undefined, "images/ulath.png", "", "ulath-img", true),
	new PageInfo(undefined, "images/morasha.jpg", "", "morasha-img", true),
	new PageInfo(undefined, "images/phidove.jpg", "", "phidove-img", true),
	new PageInfo(undefined, "images/pildrylth.jpg", "", "pildrylth-img", true),
	new PageInfo(undefined, "images/sebas.png", "", "sebas-img", true),
	new PageInfo(undefined, "images/ivy-cooke.jpg", "", "ivy-cooke-img", true),
	new PageInfo(undefined, "images/quilynn-loreweaver.jpg", "", "quilynn-loreweaver-img", true),
	new PageInfo(undefined, "images/reaper.jpg", "", "reaper-img", true),
	new PageInfo(undefined, "images/sariel-revealing-painting.jpg", "", "sariel-revealing-painting-img", true),

	new PageInfo(undefined, "images/npcs/ivy-cooke-alt.png", "", "ivy-cooke-alt", true),

	new PageInfo(undefined, "http://anthonyparsch.com/images/noble-map.png", "", "map-img", true),

	new PageInfo(undefined, "images/creatures/red-knight.jpg", "", "red-knight-img", true),
	new PageInfo(undefined, "images/creatures/red-squire.jpg", "", "red-squire-img", true),
	new PageInfo(undefined, "images/creatures/red-page.jpg", "", "red-page-img", true),

	new PageInfo(undefined, "http://www.d20srd.org/srd/monsters/elf.htm", "", "srd-elf", true),
	new PageInfo(undefined, "http://www.d20srd.org/srd/equipment/goodsAndServices.htm#thunderstone", "", "srd-tunderstone", true),
];

nobleNav.forEach((pageInfo) => {
	if (!pageInfo.external) {
		pageInfo.url = nobleUrlStart + pageInfo.url;
	}

	pageInfo.name = nobleNameStart + pageInfo.name;
});
