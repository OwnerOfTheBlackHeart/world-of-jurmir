const nobleUrlStart = "campaigns/noble-rising/";
const nobleNameStart = "noble-";
const nobleNav = [
    new PageInfo(undefined, "main.html", "", "main"),
    new PageInfo(undefined, "notes.html", "", "notes"),
    new PageInfo(undefined, "timeline.html", "", "timeline"),
    new PageInfo(undefined, "plotlines/main.html", "", "plotline-index"),
    new PageInfo(undefined, "spellbooks/main.html", "", "spellbooks"),
];
nobleNav.forEach(pageInfo => {
    if (!pageInfo.external) {
        pageInfo.url = nobleUrlStart + pageInfo.url;
    }
    pageInfo.name = nobleNameStart + pageInfo.name;
});
//# sourceMappingURL=nav.js.map