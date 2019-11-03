import { GetPageInfoFromUri } from "./page-list.js";
export function IsGoodString(str) {
    return str !== undefined && str !== "";
}
export function CreateHeader(data, className) {
    let header = document.createElement("th");
    header.innerHTML = data;
    if (IsGoodString(className)) {
        header.className = className;
    }
    return header;
}
export function CreateData(data, className) {
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
//# sourceMappingURL=utilities.js.map