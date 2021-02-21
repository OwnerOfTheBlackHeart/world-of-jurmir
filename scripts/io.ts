import { PageInfo } from "./page-info.js";
import { GetPageInfoFromName, pages } from "./page-list.js";
import * as Utilities from "./utilities.js";

const pageAreaQuerySelector = "#page-area";
export const pageNameQueryStringParameter = "pageName";
let titlePostfix = "";
var loadedPage: PageInfo;

export function SetTitlePostfix(postFix: string) {
	if (!postFix) {
		titlePostfix = "";
	} else {
		titlePostfix = postFix;
	}
}

/**
 *
 * @param url
 * @param querySelector
 * @param context
 */
export async function LoadIntoElement<T>(
	url: string,
	querySelector: string,
	context?: any
): Promise<{ url: string; html: string; element: HTMLElement; status: number; context?: T }> {
	return fetch(url).then(async (response) => {
		const html = await response.text();
		const element = document.querySelector<HTMLElement>(querySelector);

		if (element && html) {
			element.innerHTML = html;
			element.scrollTop = element.scrollLeft = 0;
		}

		return { url, html, element, status: response.status, context };
	});
}

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
 *
 * @param page The PageInfo of the page being navigated to
 * @param hash The hash value of the page url
 * @param context A pass through value
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

export function GetActivePageName(): string {
	const params = new URLSearchParams(location.search);
	return params.get(pageNameQueryStringParameter);
}

export function BuildUrl(pageName: string, hash?: string) {
	let url = "";

	if (pageName !== pages[0].name) {
		url += `?${pageNameQueryStringParameter}=${pageName}`;
	}

	if (hash) {
		url += Utilities.makeValidHash(hash);
	}

	return url;
}
