import { PageInfo } from "./page-info.js";
import * as Utilities from "./utilities.js";
import { Auth } from "./auth.js";
import { LoadPage, LoadPageAtStart, LoadIntoId } from "./io.js";
import "./custom-elements/custom-elements.js";
import { GetPageInfoFromUri, GetPageInfoFromName } from "./page-list.js";

const indexPage = "home.html";
const pageArea = "page-area";

const basic_title = " - World of Jurmir Reference Document";

var currentPage;
var defaultPage = "home";

export function SetActiveAndLoad(url: string, title?: string) {
	LoadPage(url, undefined, title);
}

export function LoadByName(page_name: string) {
	let found = GetPageInfoFromName(page_name);

	LoadByPageInfo(found);
}

export function LoadByPageInfo(pageInfo: PageInfo) {
	if (pageInfo != undefined) {
		let page = pageInfo.url;

		if (page != undefined && page != "") {
			SetActiveAndLoad(page, pageInfo.title + basic_title);
		}
	}
}

export function SetHashByPageInfo(pageInfo: PageInfo) {
	if (pageInfo != undefined) {
		parent.location.hash = pageInfo.url;
	}
}

export function GetPageTitle(uri: string) {
	let pageInfo = GetPageInfoFromUri(uri);

	if (pageInfo != undefined) {
		return pageInfo.title + basic_title;
	}

	return undefined;
}

window.onhashchange = function() {
	LoadByPageInfo(Utilities.GetCurrentPageInfo());
};

// ****************** AUTH FUNCTIONS *************************
export function onAuthButtonClick() {
	let authInput = document.getElementById("auth-input") as HTMLInputElement;
	Auth.SetAuthByAccessCode(authInput.value);
	authInput.value = "";
}

export function RunOnAuthChanged() {
	Auth.currentAuth = Auth.currentAuth;
}

export function OnAuthKeyDown(event: KeyboardEvent) {
	if (event.key === "Enter") {
		onAuthButtonClick();
	}
}

// ******************** "ON LOAD" ****************************
// index.html
LoadIntoId("header.html", "header", undefined, () => {
	(document.getElementById("auth-input") as HTMLInputElement).onkeyup = OnAuthKeyDown;
	(document.getElementById("authorize-button") as HTMLButtonElement).onclick = onAuthButtonClick;
});
LoadIntoId("footer.html", "footer");
LoadPageAtStart(pageArea, indexPage, GetPageTitle);
Auth.UpdateCurrentAuth();
