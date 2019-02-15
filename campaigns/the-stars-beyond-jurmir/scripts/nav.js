const urlStart = "campaigns/the-stars-beyond-jurmir/";
const nameStart = "sbj-";

const sbjNav = [
    new PageInfo(undefined, 'main.html', 'The Stars Beyond Jurmir', 'main'),
    new PageInfo(undefined, 'notes.html', 'The Stars Beyond Jurmir Notes', 'notes'),

    new PageInfo(undefined, 'enemies/drow/drow-fighter.html', 'Drow Fighter', 'drow-fighter'),
    new PageInfo(undefined, 'enemies/drow/drow-heavy-fighter.html', 'Drow Heavy Fighter', 'drow-heavy-fighter'),

    new PageInfo(undefined, 'npcs/security-forces.html', 'Security Forces', 'security-forces'),

    new PageInfo(undefined, 'locations/voqua/main.html', 'The Forest World of Voqua', 'voqua'),
    new PageInfo(undefined, 'locations/voqua/the-red-raven.html', 'The Crashsite of the Red Raven', 'red-raven'),

    new PageInfo(undefined, 'vehicles/the-x-saber.html', 'The X Saber', 'x-saber'),

    new PageInfo(undefined, 'plotlines/main.html', 'Stars Beyond Jurmir Plotlines', 'plotlines'),
    new PageInfo(undefined, 'plotlines/crash-of-the-red-raven.html', 'The Crash of the Red Raven', 'crash-of-the-red-raven'),
    new PageInfo(undefined, 'plotlines/the-x-saber.html', 'The X Saber', 'x-saber-plot'),
];

sbjNav.forEach(pageInfo => 
    {
        if (!pageInfo.external) { pageInfo.url = urlStart + pageInfo.url; }

        pageInfo.name = nameStart + pageInfo.name;
    }
);

// For links that don't need the starting stuff, like images
sbjNav.push([
    new PageInfo(undefined, 'images/sbj-map.png', '', 'sbj-map')
]);