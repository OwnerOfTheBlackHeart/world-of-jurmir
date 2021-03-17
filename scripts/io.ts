import { globals } from "./globals.js";
import { PageInfo } from "./page-info.js";
import { GetPageInfoFromName, pages } from "./page-list.js";
import * as Utilities from "./utilities.js";

export const pageAreaQuerySelector = "#page-area";
export const pageNameQueryStringParameter = "pageName";
let titlePostfix = "";
var loadedPage: PageInfo;

/**
 * Sets the postfix used in the title when a new page is loaded
 *
 * @param postFix The new title postfix
 */
export function SetTitlePostfix(postFix: string) {
	if (!postFix) {
		titlePostfix = "";
	} else {
		titlePostfix = postFix;
	}
}

/**
 * Loads the HTML at the URL into the first match of the querySelector.
 *
 * @param url The URL to get the HTML from
 * @param querySelector The CSS selector string used to find the element to be injected into
 * @param context The context value passed through the promise
 */
export async function LoadIntoElement<T>(
	url: string,
	querySelector: string,
	context?: any
): Promise<{ url: string; html: string; element: HTMLElement; status: number; context?: T }> {
	return appFetch(url).then(async (response) => {
		const html = await response.text();
		const element = document.querySelector<HTMLElement>(querySelector);

		if (element && html) {
			element.innerHTML = html;
			element.scrollTop = element.scrollLeft = 0;
		}

		return { url, html, element, status: response.status, context };
	});
}

/**
 * Loads a page into the page area, navigates to the object with an id matching the hash, and updates the page title.
 *
 * @param page The page to navigate to
 * @param hash The CSS selector string of the object to be scrolled to
 * @param context The context value passed through the promise
 */
async function LoadPageWithoutHistory<T>(
	page: PageInfo,
	hash?: string,
	context?: T
): Promise<{ page: PageInfo; hash?: string; context: T }> {
	if (page?.name !== loadedPage?.name) {
		return LoadIntoElement<{ hash: string; context: T }>(page.url, pageAreaQuerySelector, { hash, context }).then(async (state) => {
			if (state.context?.hash) {
				const hashChild = document.querySelector<HTMLElement>(state.context.hash);
				Utilities.showElement(state.element, hashChild);
			}

			if (page.title) {
				document.title = page.title + titlePostfix;
			}

			loadedPage = page;

			return { page, hash, context: state.context.context };
		});
	} else {
		const pageArea = document.querySelector<HTMLElement>(pageAreaQuerySelector);

		if (hash) {
			const hashChild = document.querySelector<HTMLElement>(hash);
			Utilities.showElement(pageArea, hashChild);
		} else {
			pageArea.scrollLeft = pageArea.scrollLeft = 0;
		}

		return { page, hash, context };
	}
}

/**
 * Loads a page into the page area, navigates to the object with an id matching the hash, updates the page title, and updates the history.
 *
 * @param page The PageInfo of the page being navigated to
 * @param hash The hash value of the page url
 * @param context The context value passed through the promise
 */
export async function LoadPage<T = any>(
	page: PageInfo,
	hash?: string,
	context?: T
): Promise<{ page: PageInfo; hash?: string; url: string; context?: T }> {
	hash = Utilities.makeValidHash(hash);

	const toReturn = await LoadPageWithoutHistory(page, hash, context);

	const url = BuildUrl(page?.name, hash);

	history.pushState({ pageName: page.name, hash, context }, document.title, url);

	return { ...toReturn, url };
}

/**
 * Initialize the page area's contents.
 *
 * @param context The context value passed through the promise
 */
export async function OnInitialLoad<T = any>(context?: T): Promise<{ page: PageInfo; hash?: string; url: string; context?: T }> {
	const pageName = GetActivePageName();
	let page: PageInfo;

	if (pageName) {
		page = GetPageInfoFromName(pageName);
	} else {
		page = pages[0];
	}

	return LoadPage<T>(page, location.hash, context);
}

/**
 * The callback for the event window.onpopstate.
 * Reloads and rescrolls as necessary for the change in history state.
 *
 * @param ev The pop state event information
 */
export function OnPopState(ev: PopStateEvent) {
	let state: { pageName: string; hash: string; context: any } = ev.state;
	let page: PageInfo;

	if (!state) {
		state = {
			pageName: GetActivePageName(),
			hash: location.hash,
			context: undefined,
		};
	}

	if (!state.pageName) {
		page = pages[0];
	} else {
		page = GetPageInfoFromName(state.pageName);
	}

	LoadPageWithoutHistory(page, state.hash, state.context);
}

/**
 * Retrieves the page name from the current URL query parameters
 */
export function GetActivePageName(): string {
	const params = new URLSearchParams(location.search);
	return params.get(pageNameQueryStringParameter);
}

/**
 * Builds a SPA URL.
 *
 * @param pageName The name of the page to navigate to
 * @param hash The hash value of the URL
 */
export function BuildUrl(pageName: string, hash?: string) {
	let url = `?${pageNameQueryStringParameter}=${pageName}`;

	if (hash) {
		url += Utilities.makeValidHash(hash);
	}

	return url;
}

/**
 * A wrapper around fetch to automatically handle force refreshing
 *
 * @param input The URL or Request representing the resource to be retrieved
 * @param init Any RequestInit parameters for the given request
 * @returns The fetch promise
 */
export async function appFetch(input: RequestInfo, init?: RequestInit) {
	init = init ? init : {};

	if (globals.forceRefresh) {
		init = { ...init, cache: "no-store" };
	}

	return fetch(input, init);
}
