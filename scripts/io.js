import { globals } from "./globals.js";
import { GetPageInfoFromName, pages } from "./page-list.js";
import * as Utilities from "./utilities.js";
export const pageAreaQuerySelector = "#page-area";
export const pageNameQueryStringParameter = "pageName";
let titlePostfix = "";
var loadedPage;
export function SetTitlePostfix(postFix) {
    if (!postFix) {
        titlePostfix = "";
    }
    else {
        titlePostfix = postFix;
    }
}
export async function LoadIntoElement(url, querySelector, context) {
    return appFetch(url).then(async (response) => {
        const html = await response.text();
        const element = document.querySelector(querySelector);
        if (element && html) {
            element.innerHTML = html;
            element.scrollTop = element.scrollLeft = 0;
        }
        return { url, html, element, status: response.status, context };
    });
}
async function LoadPageWithoutHistory(page, hash, context) {
    if (page?.name !== loadedPage?.name) {
        return LoadIntoElement(page.url, pageAreaQuerySelector, { hash, context }).then(async (state) => {
            if (state.context?.hash) {
                const hashChild = document.querySelector(state.context.hash);
                Utilities.showElement(state.element, hashChild);
            }
            if (page.title) {
                document.title = page.title + titlePostfix;
            }
            loadedPage = page;
            return { page, hash, context: state.context.context };
        });
    }
    else {
        const pageArea = document.querySelector(pageAreaQuerySelector);
        if (hash) {
            const hashChild = document.querySelector(hash);
            Utilities.showElement(pageArea, hashChild);
        }
        else {
            pageArea.scrollTop = pageArea.scrollLeft = 0;
        }
        return { page, hash, context };
    }
}
export async function LoadPage(page, hash, context) {
    hash = Utilities.makeValidHash(hash);
    const toReturn = await LoadPageWithoutHistory(page, hash, context);
    const url = BuildUrl(page?.name, hash);
    history.pushState({ pageName: page.name, hash, context }, document.title, url);
    return { ...toReturn, url };
}
export async function OnInitialLoad(context) {
    const pageName = GetActivePageName();
    let page;
    if (pageName) {
        page = GetPageInfoFromName(pageName);
    }
    else {
        page = pages[0];
    }
    return LoadPage(page, location.hash, context);
}
export function OnPopState(ev) {
    let state = ev.state;
    let page;
    if (!state) {
        state = {
            pageName: GetActivePageName(),
            hash: location.hash,
            context: undefined,
        };
    }
    if (!state.pageName) {
        page = pages[0];
    }
    else {
        page = GetPageInfoFromName(state.pageName);
    }
    LoadPageWithoutHistory(page, state.hash, state.context);
}
export function GetActivePageName() {
    const params = new URLSearchParams(location.search);
    return params.get(pageNameQueryStringParameter);
}
export function BuildUrl(pageName, hash) {
    let url = `?${pageNameQueryStringParameter}=${pageName}`;
    if (hash) {
        url += Utilities.makeValidHash(hash);
    }
    return url;
}
export async function appFetch(input, init) {
    init = init ? init : {};
    if (globals.forceRefresh) {
        init = { ...init, cache: "no-store" };
    }
    return fetch(input, init);
}
//# sourceMappingURL=io.js.map