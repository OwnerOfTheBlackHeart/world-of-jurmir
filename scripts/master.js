import * as Utilities from "./utilities.js";
import { Auth } from "./auth.js";
import { LoadPage, LoadPageAtStart, LoadIntoId } from "./io.js";
import "./custom-elements/custom-elements.js";
import { GetPageInfoFromUri, GetPageInfoFromName } from "./page-list.js";
const indexPage = "home.html";
const page_area = "page_area";
const basic_title = " - World of Jurmir Reference Document";
var currentPage;
var defaultPage = "home";
export function SetActiveAndLoad(url, title) {
    LoadPage(url, undefined, title);
}
export function LoadByName(page_name) {
    let found = GetPageInfoFromName(page_name);
    LoadByPageInfo(found);
}
export function LoadByPageInfo(pageInfo) {
    if (pageInfo != undefined) {
        let page = pageInfo.url;
        if (page != undefined && page != "") {
            SetActiveAndLoad(page, pageInfo.title + basic_title);
        }
    }
}
export function SetHashByPageInfo(pageInfo) {
    if (pageInfo != undefined) {
        parent.location.hash = pageInfo.url;
    }
}
export function GetPageTitle(uri) {
    let pageInfo = GetPageInfoFromUri(uri);
    if (pageInfo != undefined) {
        return pageInfo.title + basic_title;
    }
    return undefined;
}
window.onhashchange = function () {
    LoadByPageInfo(Utilities.GetCurrentPageInfo());
};
export function onAuthButtonClick() {
    let authInput = document.getElementById("auth-input");
    Auth.SetAuthByAccessCode(authInput.value);
    authInput.value = "";
}
export function RunOnAuthChanged() {
    Auth.currentAuth = Auth.currentAuth;
}
export function OnAuthKeyDown(event) {
    if (event.key === "Enter") {
        onAuthButtonClick();
    }
}
LoadIntoId("header.html", "header", undefined, () => {
    document.getElementById("auth-input").onkeyup = OnAuthKeyDown;
    document.getElementById("authorize-button").onclick = onAuthButtonClick;
});
LoadIntoId("footer.html", "footer");
LoadPageAtStart("page_area", indexPage, GetPageTitle);
Auth.UpdateCurrentAuth();
//# sourceMappingURL=master.js.map