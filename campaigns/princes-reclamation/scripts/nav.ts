import { PageInfo } from "../../../scripts/page-info.js";

const princeUrlStart = "campaigns/princes-reclamation/";
const princeNameStart = "prince-";

export const princeNav = [
	new PageInfo(undefined, "main.html", "Price Reclamation", "main"),
	new PageInfo(undefined, "notes.html", "Price Reclamation Notes", "notes"),
	new PageInfo(undefined, "timeline.html", "Price Reclamation Timeline", "timeline"),
	new PageInfo(undefined, "gm-notes.html", "Private GM Notes", "gm-notes"),

	new PageInfo(undefined, "reputation.html", "Reputation", "reputation"),

	new PageInfo(undefined, "spellbooks/main.html", "Private GM Notes", "spellbooks"),

	new PageInfo(undefined, "plotlines/main.html", "Private GM Notes", "plotline-index"),

	new PageInfo(undefined, "characters/kaja.html", "Kaja, Tiefling Wizard", "kaja"),
	new PageInfo(undefined, "characters/dithe-rainwalker.html", "Dithe Rainwalker Nola-Kupine", "dithe-rainwalker"),
	new PageInfo(undefined, "characters/rayner.html", "Rayner of Clan Ozeanvulkan, Noble Sorcerer", "rayner"),
	new PageInfo(undefined, "characters/ekku.html", "Ekku, Kobold Ranger", "ekku"),
	new PageInfo(undefined, "characters/melite.html", "Melite of Cytherna, Orc Fighter", "melite"),
	new PageInfo(undefined, "characters/allae.html", "Allae, Elven Duskblade", "allae"),
	new PageInfo(undefined, "characters/yrsa-halladottir.html", "Yrsa Halladottir, Dwarven Druid", "yrsa-halladottir"),
	new PageInfo(undefined, "characters/zardril-claddth.html", "Zardril Claddth, Drow Rogue", "zardril-claddth"),
	new PageInfo(undefined, "characters/veldego.html", "Veldego, Half-Dragon Psion", "veldego"),

	new PageInfo(undefined, "npcs/dukes/otto.html", "Duke Otto of Sirine", "duke-otto"),
	new PageInfo(undefined, "npcs/dukes/myrine.html", "Duchess Myrine of Du Indos", "duchess-myrine"),
	new PageInfo(undefined, "npcs/dukes/ammetu.html", "Duchess Ammetu, The Mountain Singer of Eisiger Fel", "duchess-ammetu"),
	new PageInfo(undefined, "npcs/dukes/tyro.html", "Duchess Tyro of Arx of Akrida", "duchess-tyro"),
	new PageInfo(undefined, "npcs/dukes/umur.html", "Duke Umur, The People Collector of Grunbaum", "duke-umur"),
	new PageInfo(undefined, "npcs/dukes/saduka.html", "Duke Saduka, The Winged Knight of Gefro Kuste", "duke-saduka"),
	new PageInfo(undefined, "npcs/dukes/myli.html", "Duchess Myli, The Guardian of the Coast of Gefro Kuste", "duchess-myli"),
	new PageInfo(undefined, "npcs/dukes/therlas-ilaro.html", "Duchess Therlas Ilaro of Ruvanna", "therlas-ilaro"),
	new PageInfo(undefined, "npcs/dukes/cretheus.html", "Duke Cretheus of Aburii of Idanthus", "duke-cretheus"),

	new PageInfo(undefined, "locations/du-indos/main.html", "Du Indos, Capital Duchy of Indos", "du-indos"),
	new PageInfo(undefined, "locations/du-indos/heminus.html", "Heminus, Capital City of the Kingdom of Indos", "heminus"),
	new PageInfo(undefined, "locations/du-indos/nysalia.html", "Nysalia, Fresh Water Fishing Hamlet", "nysalia"),
	new PageInfo(undefined, "locations/du-indos/ralas.html", "Ralas, the Thorp of Ran Away Whores", "ralas"),

	new PageInfo(undefined, "locations/sirine/main.html", "Sirine, The Isolationistic Duchy", "sirine"),
	new PageInfo(undefined, "locations/sirine/tralone.html", "Tralone, Capital City of Sirine", "tralone"),
	new PageInfo(undefined, "locations/sirine/zelthaus.html", "Zelthaus, the Dusty Village", "zelthaus"),
	new PageInfo(undefined, "locations/sirine/regensburg.html", "Regensburg, the Trade City", "regensburg"),
	new PageInfo(undefined, "locations/sirine/kajas-house.html", "Kaja's House", "kajas-house"),

	new PageInfo(undefined, "locations/eisiger-fel/main.html", "Eisiger Fel, the Frozen Peaks", "eisiger-fel"),
	new PageInfo(undefined, "locations/eisiger-fel/granmel.html", "Granmel, Village in the Pass", "granmel"),
	new PageInfo(undefined, "locations/eisiger-fel/alsfurt.html", "Alsfurt, Mountaintop Thorp", "alsfurt"),
	new PageInfo(undefined, "locations/eisiger-fel/saunnet.html", "Saunnet, Shady Desert Capital of Eisiger Fel", "saunnet"),

	new PageInfo(undefined, "locations/akrida/main.html", "Akrida, The Lyrnan Duchy", "akrida"),
	new PageInfo(undefined, "locations/akrida/epasa.html", "Epasa, Capital of Akrida", "epasa"),
	new PageInfo(undefined, "locations/akrida/neapane.html", "Neapane, Forested Fishing Village", "neapane"),
	new PageInfo(undefined, "locations/akrida/bene.html", "Bene, Fortress Town", "bene"),

	new PageInfo(undefined, "locations/grunbaum/main.html", "Grunbaum, The Great Green Forest", "grunbaum"),
	new PageInfo(undefined, "locations/grunbaum/sudusu.html", "Sudusu, Capital of Grunbaum", "sudusu"),
	new PageInfo(undefined, "locations/grunbaum/nannu.html", "Nannu, Lakeside Hamlet", "nannu"),
	new PageInfo(undefined, "locations/grunbaum/ilit.html", "Ilit, Deep Forest Hamlet", "ilit"),

	new PageInfo(undefined, "locations/gefro-kuste/main.html", "Gefro Kuste, The Duchy of Two Dragons", "gefro-kuste"),
	new PageInfo(undefined, "locations/gefro-kuste/murrabi.html", "Murrabi, Capital of Gefro Kuste", "murrabi"),
	new PageInfo(undefined, "locations/gefro-kuste/amersdorp.html", "Amersdorp, Seaside Village", "amersdorp"),
	new PageInfo(undefined, "locations/gefro-kuste/rhamnon.html", "Rhamnon, Mountain Hamlet", "rhamnon"),

	new PageInfo(undefined, "locations/ruvanna/main.html", "Ruvanna, The Dream Forest", "ruvanna"),
	new PageInfo(undefined, "locations/ruvanna/enon.html", "Enon, Capital of Ruvanna", "enon"),
	new PageInfo(undefined, "locations/ruvanna/faline.html", "Faline, Defensive Village", "faline"),
	new PageInfo(undefined, "locations/ruvanna/vallade.html", "Vallade, Hidden Village", "vallade"),

	new PageInfo(undefined, "locations/idanthus/main.html", "Idanthus, The Artificial Mountain", "idanthus"),
	new PageInfo(undefined, "locations/idanthus/aburii.html", "Aburii, Capital City of Idanthus", "aburii"),
	new PageInfo(undefined, "locations/idanthus/tegeze.html", "Tegeze, Expanding Fortress City", "tegeze"),
	new PageInfo(undefined, "locations/idanthus/hydna.html", "Hydna, Farming Town", "hydna"),

	new PageInfo(undefined, "images/prince/characters/kaja.jpg", "", "kaja-img", true),
	new PageInfo(undefined, "images/prince/characters/dithe-rainwalker.jpg", "", "dithe-rainwalker-img", true),
	new PageInfo(undefined, "images/prince/characters/rayner.jpg", "", "rayner-img", true),
	new PageInfo(undefined, "images/prince/characters/ekku.jpg", "", "ekku-img", true),
	new PageInfo(undefined, "images/prince/characters/melite.jpg", "", "melite-img", true),
	new PageInfo(undefined, "images/prince/characters/allae.jpg", "", "allae-img", true),
	new PageInfo(undefined, "images/prince/characters/yrsa-halladottir.jpg", "", "yrsa-halladottir-img", true),
	new PageInfo(undefined, "images/prince/characters/zardril-claddth.jpg", "", "zardril-claddth-img", true),
	new PageInfo(undefined, "images/prince/characters/veldego.png", "", "veldego-img", true),

	new PageInfo(undefined, "images/prince/npcs/tyro-of-arx.jpg", "", "duchess-tyro-img", true),
	new PageInfo(undefined, "images/prince/npcs/duke-otto.jpg", "", "duke-otto-img", true),
	new PageInfo(undefined, "images/prince/npcs/ammetu.jpg", "", "ammetu-img", true),
	new PageInfo(undefined, "images/prince/npcs/ammetu-2.png", "", "ammetu-img-2", true),
	new PageInfo(undefined, "images/prince/npcs/duke-umur.jpg", "", "duke-umur-img", true),
	new PageInfo(undefined, "images/prince/npcs/duke-umur-2.png", "", "duke-umur-img-2", true),
	new PageInfo(undefined, "images/prince/npcs/saduka.jpg", "", "duke-saduka-img", true),
	new PageInfo(undefined, "images/prince/npcs/saduka-2.jpg", "", "duke-saduka-img-2", true),
	new PageInfo(undefined, "images/prince/npcs/duchess-myli.jpg", "", "duchess-myli-img", true),
	new PageInfo(undefined, "images/prince/npcs/duchess-myli-2.jpg", "", "duchess-myli-img-2", true),
	new PageInfo(undefined, "images/prince/npcs/therlas-ilaro.jpg", "", "duchess-therlas-ilaro-img", true),
	new PageInfo(undefined, "images/prince/npcs/duke-cretheus.jpg", "", "duke-cretheus-img", true),
	new PageInfo(undefined, "images/prince/npcs/duchess-myrine.jpg", "", "duchess-myrine-img", true),

	new PageInfo(undefined, "http://anthonyparsch.com/images/prince-map.png", "", "map-img", true),
];

princeNav.forEach((pageInfo) => {
	if (!pageInfo.external) {
		pageInfo.url = princeUrlStart + pageInfo.url;
	}

	pageInfo.name = princeNameStart + pageInfo.name;
});
