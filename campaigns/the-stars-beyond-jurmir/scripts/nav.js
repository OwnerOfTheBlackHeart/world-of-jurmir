const urlStart = "campaigns/the-stars-beyond-jurmir/";
const nameStart = "sbj-";

const sbjNav = [
    new PageInfo(undefined, 'main.html', 'The Stars Beyond Jurmir', 'main'),
    new PageInfo(undefined, 'notes.html', 'The Stars Beyond Jurmir Notes', 'notes')
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