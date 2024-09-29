import { GetPageInfoFromUri } from "./page-list.js";

// Adding a useful function to Array<T>
declare global {
	interface Array<T> {
		firstElement(): T;
		lastElement(): T;
	}
}

Array.prototype.firstElement = function () {
	return this[0];
};
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

export function addToRecordArray<T, K extends string | number>(record: Record<K, T[]>, key: K, data: T) {
	if (!record[key]) {
		record[key] = [];
	}

	record[key].push(data);
}

export function getRandomInteger(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function isInRange(value: number, min: number, max: number): boolean {
	return value >= min && value <= max;
}

export function isInNumberRange(value: number, range: NumberRange): boolean {
	return value >= range.from && value <= range.to;
}

export function compressStringArray(value: string[]): string {
	if (!value || value.length === 0) {
		return "";
	} else if (value.length === 1) {
		return value[0];
	}

	value = [...value];

	const first = value.shift();

	return value.reduce((previous, current) => (previous += ", " + current), first);
}

export function showElement(element: HTMLElement, scrolledTo: HTMLElement) {
	if (element && scrolledTo) {
		element.scrollTop = scrolledTo.offsetTop;
		element.scrollLeft = scrolledTo.offsetLeft;
	}
}

export function showId(parentId: string, childId: string) {
	const parent = document.getElementById(parentId);
	const child = document.getElementById(childId);

	showElement(parent, child);
}

export function makeValidHash(hash: string) {
	if (hash && hash[0] !== "#") {
		hash = "#" + hash;
	}

	return hash;
}

export function getRandomEntryFromRange<T extends NumberRange>(items: T[] | Readonly<T[]>, sort = false): T {
	let sortedItems: T[];

	if (sort) {
		sortedItems = [...items];
		sortedItems.sort((a, b) => a.from - b.from);
	} else {
		sortedItems = items as T[];
	}

	const value = getRandomInteger(sortedItems.firstElement().from, sortedItems.lastElement().to);

	return sortedItems.find((item) => isInRange(value, item.from, item.to));
}

export const Sorts = {
	StringAsc(lhs: string, rhs: string): number {
		if (lhs === rhs) {
			return 0;
		} else if (lhs > rhs) {
			return 1;
		} else {
			return -1;
		}
	},
	StringDesc(lhs: string, rhs: string): number {
		if (lhs === rhs) {
			return 0;
		} else if (lhs > rhs) {
			return -1;
		} else {
			return 1;
		}
	},
	NumberAsc(lhs: number, rhs: number): number {
		return lhs - rhs;
	},
	NumberDesc(lhs: number, rhs: number): number {
		return rhs - lhs;
	},
};

export interface NumberRange {
	from: number;
	to: number;
}

export interface NamedNumberRange extends NumberRange {
	name: string;
}

export const Bounds = Object.freeze({
	isInBounds: function (value: number, bounds: NumberBounds): boolean {
		if (bounds.lower == undefined && bounds.upper == undefined) {
			return false;
		} else if (bounds.lower == undefined) {
			// only upper
			return value <= bounds.upper;
		} else if (bounds.upper == undefined) {
			// only lower
			return value >= bounds.lower;
		} else {
			return isInRange(value, bounds.lower, bounds.upper);
		}
	},
});

export interface NumberBounds {
	upper?: number;
	lower?: number;
}

export enum SortType {
	asc = "asc",
	desc = "desc",
	none = "none",
}
