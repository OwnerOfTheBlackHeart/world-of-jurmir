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
    new PageInfo(undefined, "locations/du-indos/main.html", "Du Indos, Capital Duchy of Indos", "du-indos"),
    new PageInfo(undefined, "locations/du-indos/heminus.html", "Heminus, Capital City of the Kingdom of Indos", "heminus"),
    new PageInfo(undefined, "locations/sirine/main.html", "Sirine, The Isolationistic Duchy", "sirine"),
    new PageInfo(undefined, "locations/eisiger-fel/main.html", "Eisiger Fel, the Frozen Peaks", "eisiger-fel"),
    new PageInfo(undefined, "locations/akrida/main.html", "Akrida, The Lyrnan Duchy", "akrida"),
    new PageInfo(undefined, "locations/grunbaum/main.html", "Grunbaum, The Great Green Forest", "grunbaum"),
    new PageInfo(undefined, "locations/gefro-kuste/main.html", "Gefro Kuste, The Duchy of Two Dragons", "gefro-kuste"),
    new PageInfo(undefined, "locations/ruvanna/main.html", "Ruvanna, The Dream Forest", "ruvanna"),
    new PageInfo(undefined, "locations/idanthus/main.html", "Idanthus, The Artificial Mountain", "idanthus"),
    new PageInfo(undefined, "images/prince/characters/kaja.jpg", "", "kaja-img", true),
    new PageInfo(undefined, "images/prince/characters/dithe-rainwalker.jpg", "", "dithe-rainwalker-img", true),
    new PageInfo(undefined, "images/prince/characters/rayner.jpg", "", "rayner-img", true),
    new PageInfo(undefined, "images/prince/characters/ekku.jpg", "", "ekku-img", true),
    new PageInfo(undefined, "images/prince/characters/melite.jpg", "", "melite-img", true),
    new PageInfo(undefined, "images/prince/characters/allae.jpg", "", "allae-img", true),
    new PageInfo(undefined, "images/prince/characters/yrsa-halladottir.jpg", "", "yrsa-halladottir-img", true),
    new PageInfo(undefined, "images/prince/characters/zardril-claddth.jpg", "", "zardril-claddth-img", true),
    new PageInfo(undefined, "http://anthonyparsch.com/images/prince-map.png", "", "map-img", true),
];
princeNav.forEach((pageInfo) => {
    if (!pageInfo.external) {
        pageInfo.url = princeUrlStart + pageInfo.url;
    }
    pageInfo.name = princeNameStart + pageInfo.name;
});
//# sourceMappingURL=nav.js.map