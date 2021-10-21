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

	new PageInfo(undefined, "organizations/cults/to-build.html", "Cults to be Built", "cults-to-build"),

	new PageInfo(
		undefined,
		"organizations/cults/devil/akkus/fallenfeather-sisterhood.html",
		"The Fallenfeather Sisterhood",
		"fallenfeather-sisterhood"
	),
	new PageInfo(undefined, "organizations/cults/devil/akkus/akkus.html", "Akkus, the Fallen Angel", "akkus"),

	new PageInfo(undefined, "organizations/cults/devil/vano/liberation-guild.html", "The Liberation Guild", "liberation-guild"),

	new PageInfo(
		undefined,
		"organizations/cults/demon/ilvith/servants-of-perfect-beauty.html",
		"The Servants of Perfect Beauty",
		"servants-of-perfect-beauty"
	),

	new PageInfo(
		undefined,
		"organizations/cults/demon/kugmoxon/calmers-of-the-flame-lord.html",
		"The Calmers of the Flame Lord",
		"calmers-of-the-flame-lord"
	),

	new PageInfo(
		undefined,
		"organizations/cults/demon/ragrunnoth/ragrunnoths-ruminators.html",
		"Ragrunnoth's Ruminators",
		"ragrunnoths-ruminators"
	),

	new PageInfo(
		undefined,
		"organizations/cults/good/jeha/seekers-of-the-better-path.html",
		"Seekers of the Better Path",
		"seekers-of-the-better-path"
	),

	new PageInfo(
		undefined,
		"organizations/cults/good/pearl-cat/followers-of-the-pearl-cat.html",
		"The Followers of the Pearl Cat",
		"followers-of-the-pearl-cat"
	),

	new PageInfo(
		undefined,
		"organizations/cults/good/zarach/order-glowing-hound.html",
		"The Order of the Glowing Hound",
		"order-glowing-hound"
	),

	new PageInfo(undefined, "organizations/cults/good/seros/freedoms-light.html", "Freedom's Light", "freedoms-light"),

	new PageInfo(undefined, "organizations/cults/good/baraq/speakers-of-clarity.html", "The Speakers of Clarity", "speakers-of-clarity"),

	new PageInfo(undefined, "organizations/cults/good/muriel/muriels-cleansers.html", "Muriel's Cleansers", "muriels-cleansers"),

	new PageInfo(undefined, "organizations/cults/evil/yephim/kings-hounds.html", "The King's Hounds", "kings-hounds"),

	new PageInfo(undefined, "organizations/cults/evil/lecha/second-order.html", "The Second Order", "second-order"),

	new PageInfo(undefined, "locations/tiathiloth/main.html", "The County of Tiathiloth", "tiathiloth"),
	new PageInfo(undefined, "locations/tiathiloth/mensharra.html", "Mensharra, Capital City of Tiathiloth", "mensharra"),

	new PageInfo(undefined, "locations/methnaes/main.html", "The Duchy of Methnaes", "methnaes"),

	new PageInfo(undefined, "locations/taaira-ruzara/main.html", "The Duchy of Taaira Ruzara", "taaira-ruzara"),

	new PageInfo(undefined, "locations/taaira-ruzara/misc/desserr-nobility.html", "Desserr Nobility", "desserr-nobility"),
	new PageInfo(undefined, "locations/taaira-ruzara/misc/regional-nobility.html", "Regional Nobility", "regional-nobility"),

	new PageInfo(undefined, "locations/taaira-ruzara/cats-retreat/main.html", "The County of Cat's Retreat", "cats-retreat"),
	new PageInfo(undefined, "locations/taaira-ruzara/cats-retreat/yine.html", "Yine, Capital City of Cat's Retreat", "yine"),
	new PageInfo(undefined, "locations/taaira-ruzara/cats-retreat/blue-field.html", "Blue Field, Village of Blue Lilies", "blue-field"),

	new PageInfo(undefined, "locations/taaira-ruzara/deaavh-hilluk/main.html", "The County of Deaavh Hilluk", "deaavh-hilluk"),
	new PageInfo(undefined, "locations/taaira-ruzara/deaavh-hilluk/zo-gedad.html", "Zo Gedad", "zo-gedad"),
	new PageInfo(undefined, "locations/taaira-ruzara/deaavh-hilluk/kala.html", "Kala", "kala"),

	new PageInfo(undefined, "locations/taaira-ruzara/desserr/main.html", "Desserr County", "desserr-county"),
	new PageInfo(undefined, "locations/taaira-ruzara/desserr/desserr.html", "Desserr, Capital City of Taaira Ruzara", "desserr"),

	new PageInfo(undefined, "locations/taaira-ruzara/dhaer-quesss-shal/main.html", "Dhaer'quess's Shal County", "dhaer-quesss-shal"),

	new PageInfo(undefined, "locations/taaira-ruzara/forslag/main.html", "Forslag County", "forslag"),
	new PageInfo(undefined, "locations/taaira-ruzara/forslag/keldhall.html", "Keldhall, Human Trade Town", "keldhall"),
	new PageInfo(undefined, "locations/taaira-ruzara/forslag/mam-daruhm.html", "Mam Daruhm, Dwarven Fortress City", "mam-daruhm"),

	new PageInfo(undefined, "locations/taaira-ruzara/lindado/main.html", "Lindado County", "lindado"),
	new PageInfo(undefined, "locations/taaira-ruzara/lindado/shrienhus.html", "Shrienhus, Town of Shrines", "shrienhus"),
	new PageInfo(undefined, "locations/taaira-ruzara/lindado/chillbreak.html", "Chillbreak", "chillbreak"),
	new PageInfo(undefined, "locations/taaira-ruzara/lindado/dragonwatch.html", "Dragonwatch, the Aging City of Towers", "dragonwatch"),

	new PageInfo(undefined, "locations/taaira-ruzara/little-river/main.html", "Little River County", "little-river"),
	new PageInfo(undefined, "locations/taaira-ruzara/little-river/old-castle.html", "Old Castle, Guardian of the Ang River", "old-castle"),

	new PageInfo(undefined, "locations/taaira-ruzara/nelluon-enial/main.html", "Nelloun Enial County", "nelluon-enial"),
	new PageInfo(undefined, "locations/taaira-ruzara/nelluon-enial/inmakadi.html", "Inmakadi, Elven Port Town", "inmakadi"),
	new PageInfo(undefined, "locations/taaira-ruzara/nelluon-enial/kyho-elunore.html", "Kyho Elunore, Elven Trade Town", "kyho-elunore"),

	new PageInfo(undefined, "locations/taaira-ruzara/rivers-pass/main.html", "The County of River's Pass", "rivers-pass"),
	new PageInfo(undefined, "locations/taaira-ruzara/rivers-pass/new-castle.html", "New Castle, Fortress on the River and Sea", "new-castle"),

	new PageInfo(undefined, "locations/taaira-ruzara/russia/main.html", "The County of Russia", "russia"),
	new PageInfo(undefined, "locations/taaira-ruzara/russia/sharnwick.html", "The Village of Sharnwick", "sharnwick"),
	new PageInfo(undefined, "locations/taaira-ruzara/russia/dawnflow.html", "Dawnflow, Russia's River Town", "dawnflow"),
	new PageInfo(undefined, "locations/taaira-ruzara/russia/dalhurst.html", "Dalhurst, Capital of Russia", "dalhurst"),
	new PageInfo(undefined, "locations/taaira-ruzara/russia/rocnest.html", "Rocnest, the Flying Town", "rocnest"),

	new PageInfo(undefined, "locations/taaira-ruzara/shanta-revar/main.html", "Shanta Revar County", "shanta-revar"),
	new PageInfo(undefined, "locations/taaira-ruzara/shanta-revar/antys.html", "Antys, Livingwood Glade", "antys"),
	new PageInfo(undefined, "locations/taaira-ruzara/shanta-revar/baytide.html", "The Village of Baytide", "baytide"),
	new PageInfo(undefined, "locations/taaira-ruzara/shanta-revar/inar.html", "The Hidden Village of Inar", "inar"),

	new PageInfo(undefined, "locations/taaira-ruzara/verth-di-lokipk/main.html", "The County of Verth Di Lokipk", "verth-di-lokipk"),
	new PageInfo(undefined, "locations/taaira-ruzara/verth-di-lokipk/deathfall.html", "The Village of Deathfall", "deathfall"),

	new PageInfo(undefined, "locations/taaira-ruzara/wolfs-run/main.html", "Wolf's Run County", "wolfs-run"),
	new PageInfo(undefined, "locations/taaira-ruzara/wolfs-run/boulderfort.html", "Boulderfort, Guardian of Howler's Valley", "boulderfort"),
	new PageInfo(undefined, "locations/taaira-ruzara/wolfs-run/silverwood.html", "Silverwood", "silverwood"),

	new PageInfo(undefined, "locations/taaira-ruzara/wolfs-run/rivers-plains/main.html", "The Barony of Rivers Plains", "rivers-plains"),
	new PageInfo(undefined, "locations/taaira-ruzara/wolfs-run/rivers-plains/freebrooke.html", "The Ex-Village of Freebrooke", "freebrooke"),
	new PageInfo(undefined, "locations/taaira-ruzara/wolfs-run/rivers-plains/blackhide.html", "The Ex-Village of Blackhide", "blackhide"),

	new PageInfo(undefined, "locations/taaira-ruzara/ruins/askomoat.html", "The Black City of Askomoat", "askomoat"),
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
	new PageInfo(undefined, "plotlines/missions/journey-to-the-river-cain.html", "Journey to the River Cain", "journey-to-the-river-cain"),
	new PageInfo(undefined, "plotlines/missions/keldhall-sewer-hunt.html", "Keldhall Sewer Hunt", "keldhall-sewer-hunt"),
	new PageInfo(undefined, "plotlines/missions/becoming-a-prophet.html", "Becoming a Prophet", "becoming-a-prophet"),

	new PageInfo(undefined, "plotlines/missions/methnaes/sariels-investigation.html", "Sariel's Investigation", "sariels-investigation"),

	new PageInfo(undefined, "plotlines/missions/slayer/salamander-cave.html", "The Salamander Cave", "salamander-cave"),

	new PageInfo(undefined, "plotlines/missions/cults/investigating-chillbreak.html", "Investigating Chillbreak", "investigating-chillbreak"),
	new PageInfo(undefined, "plotlines/missions/cults/lodestone-report.html", "Lodestone Report", "lodestone-report"),

	new PageInfo(undefined, "plotlines/missions/fey/the-goblin-party.html", "The Goblin Party", "goblin-party"),
	new PageInfo(undefined, "plotlines/missions/fey/goblin-party/urdes.html", "Urdes, the Goblin Rogue/Fighter", "urdes"),
	new PageInfo(undefined, "plotlines/missions/fey/goblin-party/starr.html", "Starr the (masc female) Bugbear Barbarian/Druid", "starr"),
	new PageInfo(undefined, "plotlines/missions/fey/goblin-party/verdak.html", "Verdak the Female Hobgoblin Monk/Wizard", "verdak"),
	new PageInfo(undefined, "plotlines/missions/fey/goblin-party/khog.html", "Khog the Female Hobgoblin Blackguard Cleric", "khog"),

	new PageInfo(undefined, "spellbooks/main.html", "Noble Rising Spellbooks", "spellbooks"),
	new PageInfo(undefined, "spellbooks/yasrena-spellbook.html", "Yasrena's Spellbook", "yasrena-spellbook"),
	new PageInfo(undefined, "spellbooks/kali-spellbook.html", "Kali's Spellbook", "kali-spellbook"),
	new PageInfo(undefined, "spellbooks/auction-spellbook.html", "Kali's Auction Spellbook", "auction-spellbook"),
	new PageInfo(undefined, "spellbooks/vampire-wizard-spellbook.html", "Vampire Wizard Spellbook", "vampire-wizard-spellbook"),
	new PageInfo(undefined, "spellbooks/camilia-spellbook.html", "Camilia's Spellbook", "camilia-spellbook"),
	new PageInfo(undefined, "spellbooks/nate-spellbook.html", "Nate's Spellbook", "nate-spellbook"),
	new PageInfo(undefined, "spellbooks/verdak-spellbook.html", "Verdak's Spellbook", "verdak-spellbook"),

	new PageInfo(undefined, "enemies/bandits/human-commoner.html", "Human Commoner", "human-commoner"),
	new PageInfo(undefined, "enemies/bandits/catfolk-adept.html", "Catfolk Adept", "catfolk-adept"),
	new PageInfo(undefined, "enemies/bandits/catfolk-barbarian.html", "Catfolk Barbarian", "catfolk-barbarian"),
	new PageInfo(undefined, "enemies/bandits/catfolk-ranger.html", "Catfolk Ranger", "catfolk-ranger"),
	new PageInfo(undefined, "enemies/bandits/catfolk-sorcerer.html", "Catfolk Sorcerer", "catfolk-sorcerer"),
	new PageInfo(undefined, "enemies/bandits/mutant-bandit-chief.html", "Mutant Bandit Chief", "mutant-bandit-chief"),
	new PageInfo(undefined, "enemies/bandits/elf-fighter-2.html", "Elf Fighter", "elf-fighter-2"),

	new PageInfo(undefined, "enemies/red-king/kaitlyn-evans.html", "Kaitlyn Evans, Red Princess of Baytide", "kaitlyn-evans"),
	new PageInfo(undefined, "enemies/red-king/skrutenicencul.html", "Skrutenicencul, Kaitlyn Evans' Monstrous Child", "skrutenicencul"),

	new PageInfo(undefined, "enemies/minor-gods/ulath/ulath.html", "Ulath, God of Reptiles and the Foul", "ulath"),
	new PageInfo(
		undefined,
		"enemies/minor-gods/ulath/revived-ulath.html",
		"Ulath, the Revived God of Reptiles and the Foul",
		"revived-ulath"
	),
	new PageInfo(undefined, "enemies/minor-gods/ulath/ulath-abductor.html", "Ulath Abductor", "ulath-abductor"),
	new PageInfo(undefined, "enemies/minor-gods/ulath/ulath-guard.html", "Ulath Guard", "ulath-guard"),
	new PageInfo(undefined, "enemies/minor-gods/ulath/ulath-priest.html", "Ulath Priest", "ulath-priest"),
	new PageInfo(undefined, "enemies/minor-gods/ulath/ulath-worshiper.html", "Ulath Worshiper", "ulath-worshiper"),
	new PageInfo(undefined, "enemies/minor-gods/ulath/heavy-trog.html", "Heavy Troglodyte", "heavy-trog"),

	new PageInfo(undefined, "enemies/minor-gods/doaug/the-mighty-doaug.html", "The Mighty Doaug", "doaug"),

	new PageInfo(
		undefined,
		"enemies/minor-gods/akkus/nevaeh-byrne.html",
		"Nevaeh Byrne, Kata of the Fallenfeather Sisterhood",
		"nevaeh-byrne"
	),
	new PageInfo(undefined, "enemies/minor-gods/akkus/sister.html", "Sister of the Fallenfeather Sisterhood", "fallenfeather-sister"),
	new PageInfo(undefined, "enemies/minor-gods/akkus/kata.html", "Kata of the Fallenfeather Sisterhood", "fallenfeather-kata"),
	new PageInfo(undefined, "enemies/minor-gods/akkus/fury.html", "Fury of the Fallenfeather Sisterhood", "fallenfeather-fury"),
	new PageInfo(undefined, "enemies/minor-gods/akkus/fone.html", "Fone of the Fallenfeather Sisterhood", "fallenfeather-fone"),

	new PageInfo(undefined, "enemies/hands-of-kriotz/enforcer.html", "Hands of Kriotz Enforcer", "kriotz-enforcer"),
	new PageInfo(undefined, "enemies/hands-of-kriotz/priest.html", "Hands of Kriotz Priest", "kriotz-priest"),
	new PageInfo(undefined, "enemies/hands-of-kriotz/cleric.html", "Hands of Kriotz Cleric", "kriotz-cleric"),

	new PageInfo(undefined, "enemies/animals/alligator-snapping-turtle.html", "Alligator Snapping Turtle", "alligator-snapping-turtle"),

	new PageInfo(undefined, "enemies/mutated-animals/flying-wolf.html", "Flying Wolf", "flying-wolf"),
	new PageInfo(undefined, "enemies/mutated-animals/scale-wolf.html", "Scaly Wolf", "scale-wolf"),
	new PageInfo(undefined, "enemies/mutated-animals/mutant-dire-wolf.html", "Mutant Dire Wolf", "mutant-dire-wolf"),
	new PageInfo(undefined, "enemies/mutated-animals/mutant-swindlespitter.html", "Mutant Swindlespitter", "mutant-swindlespitter"),

	new PageInfo(undefined, "enemies/kobolds/mutated-kobold.html", "Mutated Kobold", "mutated-kobold"),

	new PageInfo(undefined, "enemies/nen/nen-drone.html", "Nen Drone", "nen-drone"),
	new PageInfo(undefined, "enemies/nen/nen-warrior.html", "Nen Warrior", "nen-warrior"),
	new PageInfo(undefined, "enemies/nen/nen-queen.html", "Nen Queen", "nen-queen"),

	new PageInfo(undefined, "enemies/future/bjork-2.html", "Bjork 2", "bjork-2"),

	new PageInfo(undefined, "enemies/orcs/orc-sergeant.html", "Orc Sergeant", "orc-sergeant"),
	new PageInfo(undefined, "enemies/orcs/orc-lieutenant.html", "Orc Lieutenant", "orc-lieutenant"),
	new PageInfo(undefined, "enemies/orcs/orc-captain.html", "Orc Captain", "orc-captain"),

	new PageInfo(undefined, "enemies/undead/pseudo-reaper.html", "Pseudo Reaper, Guardian of the River Cain", "pseudo-reaper"),
	new PageInfo(undefined, "enemies/undead/vampire-wizard.html", "Vampire Wizard", "vampire-wizard"),
	new PageInfo(undefined, "enemies/undead/adventurer-skeleton.html", "Adventurer's Skeleton", "adventurer-skeleton"),
	new PageInfo(undefined, "enemies/undead/commoner-ghost.html", "Commoner's Ghost", "commoner-ghost"),
	new PageInfo(undefined, "enemies/undead/elf-warrior-ghost.html", "Elf Warrior's Ghost", "elf-warrior-ghost"),

	new PageInfo(undefined, "enemies/goblins/bugbear-lieutenant.html", "Bugbear Lieutenant", "bugbear-lieutenant"),
	new PageInfo(undefined, "enemies/goblins/bugbear-sergeant.html", "Bugbear Sergeant", "bugbear-sergeant"),
	new PageInfo(undefined, "enemies/goblins/hobgoblin-lieutenant.html", "Hobgoblin Lieutenant", "hobgoblin-lieutenant"),
	new PageInfo(undefined, "enemies/goblins/hobgoblin-sergeant.html", "Hobgoblin Sergeant", "hobgoblin-sergeant"),

	new PageInfo(undefined, "enemies/aberrations/aberration-dragon.html", "Aberration Dragon", "aberration-dragon"),
	new PageInfo(undefined, "enemies/aberrations/cryptstalker.html", "Cryptstalker", "cryptstalker"),

	new PageInfo(undefined, "enemies/amofs/amof-race.html", "Amofs", "amof-race"),

	new PageInfo(undefined, "npcs/mysterious-stranger.html", "The Mysterious Stranger", "mysterious-stranger"),
	new PageInfo(undefined, "npcs/reth-mailynath.html", "Reth Mailynath, Adamantine Slayer", "reth-mailynath"),
	new PageInfo(undefined, "npcs/yasrena.html", "Yasrena Telenna, Drow Escapee", "yasrena"),
	new PageInfo(undefined, "npcs/dolph.html", "Dolph Lundgren, Grafted Gnome Monk", "dolph"),
	new PageInfo(undefined, "npcs/zigni.html", "Zigni Lundgren, Kobold Beast Grafter", "zigni"),
	new PageInfo(undefined, "npcs/pildrylth.html", "Pildrylth the Calm, Tyrant of the Forest", "pildrylth"),
	new PageInfo(undefined, "npcs/kane.html", "Sir Kane Houghton, Knight of the Order of the Full Moon", "kane"),
	new PageInfo(undefined, "npcs/ivy-cooke.html", "Ivy Cooke, Tiefling with Her Own Plans", "ivy-cooke"),
	new PageInfo(undefined, "npcs/quilynn-loreweaver.html", "Dame Quilynn Loreweaver, Mayor Captain of Deathfall", "quilynn-loreweaver"),
	new PageInfo(undefined, "npcs/belben-huntinghawk.html", "High Gravekeeper Belben Huntinghawk", "belben-huntinghawk"),

	new PageInfo(undefined, "npcs/retainers/turzk.html", "Turzk, Ancient Lizardfolk", "turzk"),
	new PageInfo(undefined, "npcs/retainers/chonk.html", "Chonk, Turzk's Trainee", "chonk"),
	new PageInfo(undefined, "npcs/retainers/phidove.html", "Phidove Amakiir (Gemflower), Elven Info Broker", "phidove"),
	new PageInfo(undefined, "npcs/retainers/sebas.html", "Sebas, Awakened Tiger Wizard", "sebas"),
	new PageInfo(undefined, "npcs/retainers/lola-ward.html", "Lola Ward, Human Rogue", "lola-ward"),
	new PageInfo(undefined, "npcs/retainers/juliette-walker.html", "Juliette Walker, Personal Blade of Nera", "juliette-walker"),

	new PageInfo(undefined, "characters/camilia.html", "Camilia Famia, Wild Beauty", "camilia"),
	new PageInfo(undefined, "characters/animal-companions/cackles.html", "Cackles the Spotted Hyena", "cackles"),
	new PageInfo(undefined, "characters/zarsra.html", "Zarsra Telyn, Drow Slave of Sariel", "zarsra"),
	new PageInfo(undefined, "characters/skellyball.html", "Skellyball, Rollable Human Skeleton", "skellyball"),
	new PageInfo(undefined, "characters/nate-sutton.html", "Nate Sutton, Wizard Follower of Elizabeth", "nate-sutton"),

	new PageInfo(undefined, "characters/misc/skellyball-powers.html", "Skellyball Powers", "skellyball-powers"),

	new PageInfo(undefined, "misc/kali-rituals.html", "Kali Rituals", "kali-rituals"),
	new PageInfo(undefined, "misc/the-buried-turd.html", "The Buried Turd", "the-buried-turd"),
	new PageInfo(undefined, "misc/the-farm.html", "The Farm", "the-farm"),
	new PageInfo(undefined, "misc/brown-eye-whores.html", "Brown Eye Whores", "brown-eye-whores"),
	new PageInfo(undefined, "misc/whore-house-events.html", "Whore House Events", "whore-house-events"),
	new PageInfo(undefined, "misc/paintings-gallery.html", "Paintings Gallery", "paintings-gallery"),
	new PageInfo(undefined, "misc/sins-hunt-found-info.html", "Sin's Hunt Found Info", "sins-hunt-found-info"),
	new PageInfo(undefined, "misc/neras-captured.html", "Random People Nera Has Captured Or Is Working With", "neras-captured"),
	new PageInfo(undefined, "misc/deathfall-warehouse.html", "Nera's Deathfall Warehouse", "deathfall-warehouse"),
	new PageInfo(undefined, "misc/elizabeths-works.html", "Elizabeth's Works", "elizabeths-works"),
	new PageInfo(undefined, "misc/note-to-kali.html", "Note to Kali", "note-to-kali"),

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
	new PageInfo(undefined, "images/npcs/chonk.jpg", "", "chonk-img", true),
	new PageInfo(undefined, "images/npcs/lola-ward.jpg", "", "lola-ward-img", true),
	new PageInfo(undefined, "images/npcs/juliette-walker.jpg", "", "juliette-walker-img", true),
	new PageInfo(undefined, "images/npcs/juliette-walker-alt.jpg", "", "juliette-walker-alt-img", true),
	new PageInfo(undefined, "images/npcs/nevaeh-byrne.jpg", "", "nevaeh-byrne-img", true),

	new PageInfo(undefined, "images/npcs/cults/akkus.jpg", "", "akkus-img", true),
	new PageInfo(undefined, "images/npcs/cults/ilvith.jpg", "", "ilvith-img", true),
	new PageInfo(undefined, "images/npcs/cults/vano.jpg", "", "vano-img", true),

	new PageInfo(undefined, "http://anthonyparsch.com/images/noble-map.png", "", "map-img", true),

	new PageInfo(undefined, "images/creatures/red-knight.jpg", "", "red-knight-img", true),
	new PageInfo(undefined, "images/creatures/red-squire.jpg", "", "red-squire-img", true),
	new PageInfo(undefined, "images/creatures/red-page.jpg", "", "red-page-img", true),
	new PageInfo(undefined, "images/creatures/aberration-dragon.png", "", "aberration-dragon-img", true),
	new PageInfo(undefined, "images/creatures/cryptstalker.png", "", "cryptstalker-img", true),
	new PageInfo(undefined, "images/creatures/pophagite.png", "", "pophagite-img", true),
	new PageInfo(undefined, "images/creatures/mimic-armor.jpg", "", "mimic-armor-img", true),

	new PageInfo(undefined, "http://www.d20srd.org/srd/monsters/elf.htm", "", "srd-elf", true),
	new PageInfo(undefined, "http://www.d20srd.org/srd/equipment/goodsAndServices.htm#thunderstone", "", "srd-tunderstone", true),
];

nobleNav.forEach((pageInfo) => {
	if (!pageInfo.external) {
		pageInfo.url = nobleUrlStart + pageInfo.url;
	}

	pageInfo.name = nobleNameStart + pageInfo.name;
});
