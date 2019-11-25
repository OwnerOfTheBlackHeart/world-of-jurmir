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
    new PageInfo(undefined, "locations/tiathiloth/main.html", "The County of Tiathiloth", "tiathiloth"),
    new PageInfo(undefined, "locations/tiathiloth/mensharra.html", "Mensharra, Capital City of Tiathiloth", "mensharra"),
    new PageInfo(undefined, "locations/taaira-ruzara/main.html", "The County of Taaira Ruzara", "taaira-ruzara"),
    new PageInfo(undefined, "locations/taaira-ruzara/desserr.html", "Desserr, Capital City of Taaira Ruzara", "desserr"),
    new PageInfo(undefined, "locations/taaira-ruzara/antys.html", "Antys, Livingwood Glade", "antys"),
    new PageInfo(undefined, "locations/taaira-ruzara/keldhall.html", "Keldhall, Human Trade Town", "keldhall"),
    new PageInfo(undefined, "locations/taaira-ruzara/mam-daruhm.html", "Mam Daruhm, Dwarven Fortress City", "mam-daruhm"),
    new PageInfo(undefined, "plotlines/main.html", "Noble Rising Plotline Index", "plotline-index"),
    new PageInfo(undefined, "plotlines/the-grafter.html", "The Grafter", "the-grafter"),
    new PageInfo(undefined, "plotlines/hunting-ulath.html", "Hunting the God Ulath", "hunting-ulath"),
    new PageInfo(undefined, "plotlines/rise-of-the-bandit-king.html", "Rise of the Bandit King", "rise-of-the-bandit-king"),
    new PageInfo(undefined, "plotlines/missions/hunting-down-goblins-in-the-fields.html", "Hunting Down the Goblins in the Fields", "hunting-down-goblins-in-the-fields"),
    new PageInfo(undefined, "plotlines/missions/finding-the-lizard-cult.html", "Finding the Lizard Cult in Desserr", "finding-the-lizard-cult"),
    new PageInfo(undefined, "plotlines/missions/amassing-bandits.html", "Amassing Bandits", "amassing-bandits"),
    new PageInfo(undefined, "plotlines/missions/rats-in-the-grain-house.html", "Rats in the Grain House", "rats-in-the-grain-house"),
    new PageInfo(undefined, "plotlines/missions/the-grafted-wolf.html", "The Grafted Wolf", "the-grafted-wolf"),
    new PageInfo(undefined, "plotlines/missions/truzks-search.html", "Truzk's Hunt", "truzks-search"),
    new PageInfo(undefined, "spellbooks/main.html", "Noble Rising Spellbooks", "spellbooks"),
    new PageInfo(undefined, "spellbooks/yasrena-spellbook.html", "Yasrena's Spellbook", "yasrena-spellbook"),
    new PageInfo(undefined, "spellbooks/kali-spellbook.html", "Kali's Spellbook", "kali-spellbook"),
    new PageInfo(undefined, "enemies/bandits/human-commoner.html", "Human Commoner", "human-commoner"),
    new PageInfo(undefined, "enemies/bandits/catfolk-adept.html", "Catfolk Adept", "catfolk-adept"),
    new PageInfo(undefined, "enemies/minor-gods/ulath/ulath.html", "Ulath, God of Reptiles and the Foul", "ulath"),
    new PageInfo(undefined, "enemies/minor-gods/ulath/ulath-abductor.html", "Ulath Abductor", "ulath-abductor"),
    new PageInfo(undefined, "enemies/minor-gods/ulath/ulath-guard.html", "Ulath Guard", "ulath-guard"),
    new PageInfo(undefined, "enemies/minor-gods/ulath/ulath-priest.html", "Ulath Priest", "ulath-priest"),
    new PageInfo(undefined, "enemies/minor-gods/ulath/ulath-worshiper.html", "Ulath Worshiper", "ulath-worshiper"),
    new PageInfo(undefined, "enemies/minor-gods/ulath/heavy-trog.html", "Heavy Troglodyte", "heavy-trog"),
    new PageInfo(undefined, "enemies/hands-of-kriotz/enforcer.html", "Hands of Kriotz Enforcer", "kriotz-enforcer"),
    new PageInfo(undefined, "enemies/hands-of-kriotz/priest.html", "Hands of Kriotz Priest", "kriotz-priest"),
    new PageInfo(undefined, "enemies/hands-of-kriotz/cleric.html", "Hands of Kriotz Cleric", "kriotz-cleric"),
    new PageInfo(undefined, "enemies/mutated-animals/flying-wolf.html", "Flying Wolf", "flying-wolf"),
    new PageInfo(undefined, "enemies/mutated-animals/scale-wolf.html", "Scaly Wolf", "scale-wolf"),
    new PageInfo(undefined, "npcs/mysterious-stranger.html", "The Mysterious Stranger", "mysterious-stranger"),
    new PageInfo(undefined, "npcs/reth-mailynath.html", "Reth Mailynath, Adamantine Slayer", "reth-mailynath"),
    new PageInfo(undefined, "npcs/truzk.html", "Truzk, Ancient Lizardfolk", "truzk"),
    new PageInfo(undefined, "npcs/yasrena.html", "Yasrena Telenna, Drow Escapee", "yasrena"),
    new PageInfo(undefined, "npcs/dolph.html", "Dolph Lundgren, Grafted Gnome Monk", "dolph"),
    new PageInfo(undefined, "characters/camilia.html", "Camilia Famia, Wild Beauty", "camilia"),
    new PageInfo(undefined, "characters/animal-companions/cackles.html", "Cackles the Spotted Hyena", "cackles"),
    new PageInfo(undefined, "images/fang-at-desk.jpg", "", "fang-img", true),
    new PageInfo(undefined, "images/mysterious-stranger.jpg", "", "mysterious-stranger-img", true),
    new PageInfo(undefined, "images/truzk.jpg", "", "truzk-img", true),
    new PageInfo(undefined, "images/yasrena.jpg", "", "yasrena-img", true),
    new PageInfo(undefined, "images/camilia.png", "", "camilia-img", true),
    new PageInfo(undefined, "images/ulath.png", "", "ulath-img", true),
    new PageInfo(undefined, "http://www.d20srd.org/srd/monsters/elf.htm", "", "srd-elf", true),
    new PageInfo(undefined, "http://www.d20srd.org/srd/equipment/goodsAndServices.htm#thunderstone", "", "srd-tunderstone", true)
];
nobleNav.forEach(pageInfo => {
    if (!pageInfo.external) {
        pageInfo.url = nobleUrlStart + pageInfo.url;
    }
    pageInfo.name = nobleNameStart + pageInfo.name;
});
//# sourceMappingURL=nav.js.map