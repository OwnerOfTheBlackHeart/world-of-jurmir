const nobleUrlStart = "campaigns/noble-rising/";
const nobleNameStart = "noble-";
const nobleNav = [
    new PageInfo(undefined, "main.html", "Noble Rising", "main"),
    new PageInfo(undefined, "notes.html", "Noble Rising Notes", "notes"),
    new PageInfo(undefined, "timeline.html", "Noble Rising Timeline", "timeline"),
    new PageInfo(undefined, "gm-notes.html", "Private GM Notes", "gm-notes"),
    new PageInfo(undefined, "locations/tiathiloth/main.html", "Noble Rising Timeline", "tiathiloth"),
    new PageInfo(undefined, "locations/tiathiloth/mensharra.html", "Noble Rising Timeline", "mensharra"),
    new PageInfo(undefined, "locations/taaira-ruzara/main.html", "Noble Rising Timeline", "taaira-ruzara"),
    new PageInfo(undefined, "locations/taaira-ruzara/desserr.html", "Noble Rising Timeline", "desserr"),
    new PageInfo(undefined, "plotlines/main.html", "Noble Rising Plotline Index", "plotline-index"),
    new PageInfo(undefined, "spellbooks/main.html", "Noble Rising Spellbooks", "spellbooks"),
];
nobleNav.forEach(pageInfo => {
    if (!pageInfo.external) {
        pageInfo.url = nobleUrlStart + pageInfo.url;
    }
    pageInfo.name = nobleNameStart + pageInfo.name;
});
nobleNav.push(new PageInfo(undefined, "images/fang-at-desk.jpg", "", "noble-fang-img", true));
//# sourceMappingURL=nav.js.map