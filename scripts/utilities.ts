import { GetPageInfoFromUri } from "./page-list.js";

export function IsGoodString(str: string): boolean {
	return str !== undefined && str !== "";
}

export function CreateHeader(data: string, className?: string) {
	let header = document.createElement("th");
	header.innerHTML = data;

	if (IsGoodString(className)) {
		header.className = className;
	}

	return header;
}

export function CreateData(data: string, className?: string) {
	let dataElement = document.createElement("td");
	dataElement.innerHTML = data;

	if (IsGoodString(className)) {
		dataElement.className = className;
	}

	return dataElement;
}

export function GetCurrentPage() {
	let uri = parent.location.hash;
	if (IsGoodString(uri)) {
		uri = uri.slice(1);
	}
	return uri;
}

export function GetCurrentPageInfo() {
	return GetPageInfoFromUri(GetCurrentPage());
}

export function StringToObject(jsonIn: string) {
	jsonIn = jsonIn.replace(/<.+?>/g, function(x) {
		return x.replace(/"/g, '\\"');
	});
	return JSON.parse(jsonIn);
}

export function numberWithCommas(x: number, places?: number): string {
	if (places === undefined) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	} else {
		return x.toFixed(places).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
}
