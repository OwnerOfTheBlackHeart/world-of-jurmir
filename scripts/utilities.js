import { GetPageInfoFromUri } from "./page-list.js";
Array.prototype.firstElement = function () {
    return this[0];
};
Array.prototype.lastElement = function () {
    return this[this.length - 1];
};
export function IsGoodString(str) {
    return str !== undefined && str !== "";
}
export function CreateTableHeader(data, className) {
    let header = document.createElement("th");
    header.innerHTML = data;
    if (IsGoodString(className)) {
        header.className = className;
    }
    return header;
}
export function CreateTableData(data, className) {
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
export function StringToObject(jsonIn) {
    jsonIn = jsonIn.replace(/<.+?>/g, function (x) {
        return x.replace(/"/g, '\\"');
    });
    return JSON.parse(jsonIn);
}
export function numberWithCommas(x, places) {
    if (places === undefined) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    else {
        return x.toFixed(places).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
export function getDescendantProperty(parent, childPath, defaultValue = undefined) {
    if (parent === undefined || parent === null || childPath === undefined || childPath === null) {
        return defaultValue;
    }
    else if (childPath === "") {
        return parent;
    }
    else {
        const pathSteps = childPath.split(".");
        if (!pathSteps || pathSteps.length === 0) {
            return parent;
        }
        const found = pathSteps.reduce((previousDescendant, childName) => {
            if (previousDescendant !== undefined) {
                return previousDescendant[childName];
            }
            else {
                return undefined;
            }
        }, parent);
        if (found === undefined) {
            return defaultValue;
        }
        else {
            return found;
        }
    }
}
export function setDescendantProperty(parent, childPath, newValue) {
    if (!childPath) {
        return parent;
    }
    const pathSteps = childPath.split(".");
    if (!pathSteps || pathSteps.length === 0) {
        return parent;
    }
    parent = (parent === undefined ? {} : parent);
    const maxIndex = pathSteps.length - 1;
    pathSteps.reduce((previousDescendant, childName, index) => {
        if (index === maxIndex) {
            previousDescendant[childName] = newValue;
            return previousDescendant[childName];
        }
        else {
            let next = previousDescendant[childName];
            if (next === undefined || next === null) {
                next = previousDescendant[childName] = {};
            }
            return next;
        }
    }, parent);
    return parent;
}
export function addToRecordArray(record, key, data) {
    if (!record[key]) {
        record[key] = [];
    }
    record[key].push(data);
}
export function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function isInRange(value, min, max) {
    return value >= min && value <= max;
}
export function isInNumberRange(value, range) {
    return value >= range.from && value <= range.to;
}
export function compressStringArray(value) {
    if (!value || value.length === 0) {
        return "";
    }
    else if (value.length === 1) {
        return value[0];
    }
    value = [...value];
    const first = value.shift();
    return value.reduce((previous, current) => (previous += ", " + current), first);
}
export function showElement(element, scrolledTo) {
    if (element && scrolledTo) {
        element.scrollTop = scrolledTo.offsetTop;
        element.scrollLeft = scrolledTo.offsetLeft;
    }
}
export function showId(parentId, childId) {
    const parent = document.getElementById(parentId);
    const child = document.getElementById(childId);
    showElement(parent, child);
}
export function makeValidHash(hash) {
    if (hash && hash[0] !== "#") {
        hash = "#" + hash;
    }
    return hash;
}
export function getRandomEntryFromRange(items, sort = false) {
    let sortedItems;
    if (sort) {
        sortedItems = [...items];
        sortedItems.sort((a, b) => a.from - b.from);
    }
    else {
        sortedItems = items;
    }
    const value = getRandomInteger(sortedItems.firstElement().from, sortedItems.lastElement().to);
    return sortedItems.find((item) => isInRange(value, item.from, item.to));
}
export const Sorts = {
    StringAsc(lhs, rhs) {
        if (lhs === rhs) {
            return 0;
        }
        else if (lhs > rhs) {
            return 1;
        }
        else {
            return -1;
        }
    },
    StringDesc(lhs, rhs) {
        if (lhs === rhs) {
            return 0;
        }
        else if (lhs > rhs) {
            return -1;
        }
        else {
            return 1;
        }
    },
    NumberAsc(lhs, rhs) {
        return lhs - rhs;
    },
    NumberDesc(lhs, rhs) {
        return rhs - lhs;
    },
};
export const Bounds = Object.freeze({
    isInBounds: function (value, bounds) {
        if (bounds.lower == undefined && bounds.upper == undefined) {
            return false;
        }
        else if (bounds.lower == undefined) {
            return value <= bounds.upper;
        }
        else if (bounds.upper == undefined) {
            return value >= bounds.lower;
        }
        else {
            return isInRange(value, bounds.lower, bounds.upper);
        }
    },
});
export var SortType;
(function (SortType) {
    SortType["asc"] = "asc";
    SortType["desc"] = "desc";
    SortType["none"] = "none";
})(SortType || (SortType = {}));
//# sourceMappingURL=utilities.js.map