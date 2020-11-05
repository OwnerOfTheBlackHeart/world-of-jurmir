import * as Utilities from "./utilities.js";

export const PageLoadCallbacks = {
	onLoad: [] as ((url: string) => void)[],
};

/*
 * LoadIntoId()
 * This function loads the page at the given URI into the
 * innerHTML of the object whose id is given. If no id object
 * is given, then an object with the id "page-area" will be
 * used.
 */
export function LoadIntoId(url: string, id?: string, title?: string, loadCallback?: () => void) {
	// Set default
	id = id || "page-area";

	fetch(url)
		.then((response) => response.text())
		.then((html) => {
			let pageArea = document.getElementById(id);

			pageArea.innerHTML = html;

			// Scroll to the top of the page
			document.body.scrollTop = document.documentElement.scrollTop = pageArea.scrollTop = 0;
			// pageArea.scrollTop = 0;

			if (title) {
				// Change page title
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

/*
 * LoadPage()
 * This function loads the given page into an object
 * with the given id. It also changes the hash string
 * of the page to match the new page.
 */
export function LoadPage(url: string, id?: string, title?: string) {
	parent.location.hash = url;
	LoadIntoId(url, id, title);
}

/*
 * LoadPageAtStart()
 * This function is a wrapper for LoadPage() that should
 * be run at the load of an HTML page. This will pull the
 * hash string and open the given page.
 * Returns the uri from the hash.
 */
export function LoadPageAtStart(id: string, defaultPage: string, GetTitle: (uri: string) => string) {
	let uri = Utilities.GetCurrentPage() || defaultPage;

	LoadIntoId(uri, id, GetTitle(uri));
	return uri;
}

// ********** MAKE FUNCTIONS HTML ACCESSIBLE *****************
declare global {
	interface Window {
		LoadIntoId: (url: string, id?: string, title?: string) => void;
		LoadPageAtStart: (id: string, defaultPage: string, GetTitle: (uri: string) => string) => string;
	}
}

window.LoadIntoId = LoadIntoId;
window.LoadPageAtStart = LoadPageAtStart;
