/// <reference path="./page-info.ts" />
/// <reference path="../campaigns/the-story-of-aaron/scripts/nav.ts" />
/// <reference path="../campaigns/the-stars-beyond-jurmir/scripts/nav.ts" />

const pages = [
    new PageInfo('home_button', 'home.html', 'Home', 'home'),
	
    new PageInfo(undefined, 'https://drive.google.com/drive/folders/1BJhOezdxdbN7pBTSjqmTLgEm2blqt6qP?usp=sharing', '', 'aaron-map', true),
].concat(aaronNav, sbjNav);