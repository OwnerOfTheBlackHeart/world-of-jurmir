import * as Utilities from "./utilities.js";
export const PageLoadCallbacks = {
    onLoad: [],
};
export function LoadIntoId(url, id, title, loadCallback) {
    id = id || "page-area";
    fetch(url)
        .then((response) => response.text())
        .then((html) => {
        let pageArea = document.getElementById(id);
        pageArea.innerHTML = html;
        document.body.scrollTop = document.documentElement.scrollTop = pageArea.scrollTop = 0;
        if (title) {
            document.title = title;
        }
        if (PageLoadCallbacks.onLoad.length > 0) {
            PageLoadCallbacks.onLoad.forEach((callback) => callback(url));
        }
        if (loadCallback) {
            loadCallback();
        }
    });
}
export function LoadPage(url, id, title) {
    parent.location.hash = url;
    LoadIntoId(url, id, title);
}
export function LoadPageAtStart(id, defaultPage, GetTitle) {
    let uri = Utilities.GetCurrentPage() || defaultPage;
    LoadIntoId(uri, id, GetTitle(uri));
    return uri;
}
window.LoadIntoId = LoadIntoId;
window.LoadPageAtStart = LoadPageAtStart;
//# sourceMappingURL=io.js.map