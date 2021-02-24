var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GetPageInfoFromName, pages } from "./page-list.js";
import * as Utilities from "./utilities.js";
const pageAreaQuerySelector = "#page-area";
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
export function LoadIntoElement(url, querySelector, context) {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch(url).then((response) => __awaiter(this, void 0, void 0, function* () {
            const html = yield response.text();
            const element = document.querySelector(querySelector);
            if (element && html) {
                element.innerHTML = html;
                element.scrollTop = element.scrollLeft = 0;
            }
            return { url, html, element, status: response.status, context };
        }));
    });
}
function LoadPageWithoutHistory(page, hash, context) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((page === null || page === void 0 ? void 0 : page.name) !== (loadedPage === null || loadedPage === void 0 ? void 0 : loadedPage.name)) {
            return LoadIntoElement(page.url, pageAreaQuerySelector, { hash, context }).then((state) => __awaiter(this, void 0, void 0, function* () {
                var _a;
                if ((_a = state.context) === null || _a === void 0 ? void 0 : _a.hash) {
                    const hashChild = document.querySelector(state.context.hash);
                    Utilities.showElement(state.element, hashChild);
                }
                if (page.title) {
                    document.title = page.title + titlePostfix;
                }
                loadedPage = page;
                return { page, hash, context: state.context.context };
            }));
        }
        else {
            const pageArea = document.querySelector(pageAreaQuerySelector);
            if (hash) {
                const hashChild = document.querySelector(hash);
                Utilities.showElement(pageArea, hashChild);
            }
            else {
                pageArea.scrollLeft = pageArea.scrollLeft = 0;
            }
            return { page, hash, context };
        }
    });
}
export function LoadPage(page, hash, context) {
    return __awaiter(this, void 0, void 0, function* () {
        hash = Utilities.makeValidHash(hash);
        const toReturn = yield LoadPageWithoutHistory(page, hash, context);
        const url = BuildUrl(page === null || page === void 0 ? void 0 : page.name, hash);
        history.pushState({ pageName: page.name, hash, context }, document.title, url);
        return Object.assign(Object.assign({}, toReturn), { url });
    });
}
export function OnInitialLoad(context) {
    return __awaiter(this, void 0, void 0, function* () {
        const pageName = GetActivePageName();
        let page;
        if (pageName) {
            page = GetPageInfoFromName(pageName);
        }
        else {
            page = pages[0];
        }
        return LoadPage(page, location.hash, context);
    });
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
//# sourceMappingURL=io.js.map