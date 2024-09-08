import { PageInfo } from "../../../scripts/page-info.js";

const undestenUrlStart = "campaigns/undesten/";
const undestenNameStart = "undesten-";

export const undestenNav = [
	new PageInfo(undefined, "main.html", "Undesten Business Adventure", "main"),
	new PageInfo(undefined, "notes.html", "Undesten Business Adventure Notes", "notes"),
	new PageInfo(undefined, "timeline.html", "Undesten Business Adventure Timeline", "timeline"),
	new PageInfo(undefined, "gm-notes.html", "Private GM Notes", "gm-notes"),
	new PageInfo(undefined, "http://anthonyparsch.com/images/undesten-map.png", "", "map-img", true),

	new PageInfo(undefined, "locations/oceanside/junkberg.html", "Junkberg, The Capital of Yuru Khan", "junkberg"),
	new PageInfo(undefined, "locations/oceanside/wavescraper.html", "Wavescraper, The Oceanside Trade Hub", "wavescraper"),

	new PageInfo(undefined, "npcs/random.html", "Random/Seen Once NPCs", "random-npcs"),

	new PageInfo(undefined, "plotlines/main.html", "Plotline Index", "plotline-index"),

	new PageInfo(undefined, "misc/children.html", "Children", "children"),
];

undestenNav.forEach((pageInfo) => {
	if (!pageInfo.external) {
		pageInfo.url = undestenUrlStart + pageInfo.url;
	}

	pageInfo.name = undestenNameStart + pageInfo.name;
});
