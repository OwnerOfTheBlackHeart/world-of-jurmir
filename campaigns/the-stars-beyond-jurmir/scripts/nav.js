import { PageInfo } from "../../../scripts/page-info.js";
const sbjUrlStart = "campaigns/the-stars-beyond-jurmir/";
const sbjNameStart = "sbj-";
export const sbjNav = [
    new PageInfo(undefined, "main.html", "The Stars Beyond Jurmir", "main"),
    new PageInfo(undefined, "notes.html", "The Stars Beyond Jurmir Notes", "notes"),
    new PageInfo(undefined, "timeline.html", "The Stars Beyond Jurmir Timeline", "timeline"),
    new PageInfo(undefined, "enemies/drow/drow-fighter.html", "Drow Fighter", "drow-fighter"),
    new PageInfo(undefined, "enemies/drow/drow-heavy-fighter.html", "Drow Heavy Fighter", "drow-heavy-fighter"),
    new PageInfo(undefined, "npcs/security-forces.html", "Security Forces", "security-forces"),
    new PageInfo(undefined, "npcs/ninus/general-seckbach.html", "General Arnold Seckbach", "general-seckbach"),
    new PageInfo(undefined, "npcs/corporate/administrator-suitdottir.html", "Administrator Runa Suitdottir", "administrator-suitdottir"),
    new PageInfo(undefined, "npcs/corporate/faenus-of-markar.html", "Faenus of Markar", "faenus-of-markar"),
    new PageInfo(undefined, "npcs/drow/lady-nyldreesh.html", "Lady Ophre Nyldreesh", "lady-nyldreesh"),
    new PageInfo(undefined, "npcs/aeon/quartermaster-boonliang.html", "Quartermaster Piam Boonliang", "quartermaster-boonliang"),
    new PageInfo(undefined, "locations/the-colonies/voqua/main.html", "The Forest World of Voqua", "voqua"),
    new PageInfo(undefined, "locations/the-colonies/voqua/the-red-raven.html", "The Crashsite of the Red Raven", "red-raven"),
    new PageInfo(undefined, "locations/the-colonies/3371562/main.html", "Colony 3371562", "3371562"),
    new PageInfo(undefined, "locations/the-colonies/durnia/main.html", "Durnia", "durnia"),
    new PageInfo(undefined, "locations/the-colonies/gyaniva/main.html", "Gyaniva", "gyaniva"),
    new PageInfo(undefined, "locations/the-colonies/krio/main.html", "Krio", "krio"),
    new PageInfo(undefined, "locations/outer-colonies/lypso/main.html", "Lypso", "lypso"),
    new PageInfo(undefined, "locations/outer-colonies/ikenoz/main.html", "Ikenoz", "ikenoz"),
    new PageInfo(undefined, "locations/outer-colonies/ninus/main.html", "The Ninus Solar System", "ninus"),
    new PageInfo(undefined, "locations/outer-colonies/umexi/main.html", "Umexi Monitoring Station", "umexi"),
    new PageInfo(undefined, "locations/outer-colonies/marata/main.html", "Marata, Moon of Bretheda", "marata"),
    new PageInfo(undefined, "locations/jurmirian-zone/jurmir/main.html", "Jurmir", "jurmir"),
    new PageInfo(undefined, "locations/jurmirian-zone/estifoa/main.html", "Estifoa", "estifoa"),
    new PageInfo(undefined, "locations/jurmirian-zone/lyrna-2/main.html", "Lyrna 2", "lyrna-2"),
    new PageInfo(undefined, "locations/expansion-zone/starblood/main.html", "Starblood", "starblood"),
    new PageInfo(undefined, "vehicles/x-saber.html", "The X Saber", "x-saber"),
    new PageInfo(undefined, "vehicles/jurmirian-navy/named-ships/the-arx.html", "The JMS Arx", "the-arx"),
    new PageInfo(undefined, "vehicles/jurmirian-navy/named-ships/the-dobbs.html", "The JMS Dobbs", "the-dobbs"),
    new PageInfo(undefined, "vehicles/jurmirian-navy/named-ships/the-zita-lethos.html", "The JMS Zita Lethos", "the-zita-lethos"),
    new PageInfo(undefined, "vehicles/jurmirian-navy/models/chione-class.html", "Chione Class Destroyer", "chione-class"),
    new PageInfo(undefined, "vehicles/jurmirian-navy/models/ericson-class.html", "Ericson Class Scout Frigate", "ericson-class"),
    new PageInfo(undefined, "vehicles/jurmirian-navy/models/paavu-class.html", "Paavu Class Heavy Frigate", "paavu-class"),
    new PageInfo(undefined, "plotlines/main.html", "Stars Beyond Jurmir Plotlines", "plotlines"),
    new PageInfo(undefined, "plotlines/crash-of-the-red-raven.html", "The Crash of the Red Raven", "crash-of-the-red-raven"),
    new PageInfo(undefined, "plotlines/the-x-saber.html", "The X Saber", "x-saber-plot")
];
sbjNav.forEach(pageInfo => {
    if (!pageInfo.external) {
        pageInfo.url = sbjUrlStart + pageInfo.url;
    }
    pageInfo.name = sbjNameStart + pageInfo.name;
});
sbjNav.push(new PageInfo(undefined, "images/sbj-map.png", "", "sbj-map", true));
//# sourceMappingURL=nav.js.map