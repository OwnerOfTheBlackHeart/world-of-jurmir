import { GetPageInfoFromUri } from "./page-list.js";

// Adding a useful function to Array<T>
declare global {
	interface Array<T> {
		lastElement(): T;
	}
}

Array.prototype.lastElement = function () {
	return this[this.length - 1];
};

// Global functions
export function IsGoodString(str: string): boolean {
	return str !== undefined && str !== "";
}

export function CreateTableHeader(data: string, className?: string) {
	let header = document.createElement("th");
	header.innerHTML = data;

	if (IsGoodString(className)) {
		header.className = className;
	}

	return header;
}

export function CreateTableData(data: string, className?: string) {
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

export function StringToObject<T = any>(jsonIn: string): T {
	jsonIn = jsonIn.replace(/<.+?>/g, function (x) {
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

export function getDescendantProperty<T>(parent: any, childPath: string, defaultValue: T = undefined): T {
	if (parent === undefined || parent === null || childPath === undefined || childPath === null) {
		return defaultValue;
	} else if (childPath === "") {
		return parent;
	} else {
		const pathSteps = childPath.split(".");

		if (!pathSteps || pathSteps.length === 0) {
			return parent;
		}

		const found = pathSteps.reduce((previousDescendant, childName) => {
			if (previousDescendant !== undefined) {
				return previousDescendant[childName];
			} else {
				return undefined;
			}
		}, parent);

		if (found === undefined) {
			return defaultValue;
		} else {
			return found;
		}
	}
}

export function setDescendantProperty<T>(parent: T, childPath: string, newValue: any): T {
	if (!childPath) {
		return parent;
	}

	const pathSteps = childPath.split(".");

	if (!pathSteps || pathSteps.length === 0) {
		return parent;
	}

	parent = (parent === undefined ? {} : parent) as any;
	const maxIndex = pathSteps.length - 1;
	pathSteps.reduce((previousDescendant: any, childName, index) => {
		if (index === maxIndex) {
			previousDescendant[childName] = newValue;
			return previousDescendant[childName];
		} else {
			let next = previousDescendant[childName];
			if (next === undefined || next === null) {
				next = previousDescendant[childName] = {};
			}
			return next;
		}
	}, parent);

	return parent;
}
