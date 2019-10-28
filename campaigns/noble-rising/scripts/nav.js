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
    new PageInfo(undefined, "plotlines/missions/hunting-down-goblins-in-the-fields.html", "Hunting Down the Goblins in the Fields", "hunting-down-goblins-in-the-fields"),
    new PageInfo(undefined, "spellbooks/main.html", "Noble Rising Spellbooks", "spellbooks"),
    new PageInfo(undefined, "spellbooks/yasrena-spellbook.html", "Yasrena's Spellbook", "yasrena-spellbook"),
    new PageInfo(undefined, "spellbooks/kali-spellbook.html", "Kali's Spellbook", "kali-spellbook"),
    new PageInfo(undefined, "enemies/bandits/human-commoner.html", "Human Commoner", "human-commoner"),
    new PageInfo(undefined, "enemies/bandits/catfolk-adept.html", "Catfolk Adept", "catfolk-adept"),
    new PageInfo(undefined, "npcs/mysterious-stranger.html", "The Mysterious Stranger", "mysterious-stranger"),
    new PageInfo(undefined, "npcs/reth-mailynath.html", "Reth Mailynath, Adamantine Slayer", "reth-mailynath"),
    new PageInfo(undefined, "npcs/truzk.html", "Truzk, Ancient Lizardfolk", "truzk"),
    new PageInfo(undefined, "npcs/yasrena.html", "Yasrena Telenna, Drow Escapee", "yasrena"),
    new PageInfo(undefined, "characters/camilia.html", "Camilia Famia, Wild Beauty", "camilia"),
    new PageInfo(undefined, "characters/animal-companions/cackles.html", "Cackles the Spotted Hyena", "cackles"),
    new PageInfo(undefined, "images/fang-at-desk.jpg", "", "fang-img", true),
    new PageInfo(undefined, "images/mysterious-stranger.jpg", "", "mysterious-stranger-img", true),
    new PageInfo(undefined, "images/truzk.jpg", "", "truzk-img", true),
    new PageInfo(undefined, "images/yasrena.jpg", "", "yasrena-img", true),
    new PageInfo(undefined, "images/camilia.png", "", "camilia-img", true),
    new PageInfo(undefined, "http://www.d20srd.org/srd/monsters/elf.htm", "", "srd-elf", true),
    new PageInfo(undefined, "http://www.d20srd.org/srd/equipment/goodsAndServices.htm#thunderstone", "", "srd-tunderstone", true),
];
nobleNav.forEach(pageInfo => {
    if (!pageInfo.external) {
        pageInfo.url = nobleUrlStart + pageInfo.url;
    }
    pageInfo.name = nobleNameStart + pageInfo.name;
});
//# sourceMappingURL=nav.js.map