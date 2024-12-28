import * as Utilities from "../utilities.js";
import { TimeRef, Time } from "../time.js";
import { globals } from "../globals.js";
export class TimeTable extends HTMLElement {
    get showSeason() {
        return this.hasAttribute("show-season");
    }
    set showSeason(val) {
        if (val) {
            this.setAttribute("show-season", "");
        }
        else {
            this.removeAttribute("show-season");
        }
    }
    get showAllMonths() {
        return this.hasAttribute("show-all-months");
    }
    set showAllMonths(val) {
        if (val) {
            this.setAttribute("show-all-months", "");
        }
        else {
            this.removeAttribute("show-all-months");
        }
    }
    get currentDateValue() {
        const currentDate = this.getAttribute("current-date-value");
        if (currentDate) {
            if (currentDate[0] === "[") {
                return JSON.parse(currentDate);
            }
            else {
                return currentDate;
            }
        }
        else {
            return undefined;
        }
    }
    set currentDateValue(val) {
        let attribute = val;
        if (typeof attribute === "object") {
            attribute = JSON.stringify(attribute);
        }
        this.setAttribute("current-date-value", attribute);
    }
    get disableSort() {
        return this.hasAttribute("disable-sort");
    }
    set disableSort(val) {
        if (val) {
            this.setAttribute("disable-sort", "");
        }
        else {
            this.removeAttribute("disable-sort");
        }
    }
    constructor() {
        super();
        this.headerTitle = "";
        this.rows = [];
        this.table;
        this.mainNode = this;
        if (Utilities.IsGoodString(this.innerHTML)) {
            const data = Utilities.StringToObject(this.innerHTML);
            if (data[0][0] === "header") {
                this.headerTitle = data[0][1];
                data.shift();
            }
            const dates = [];
            data.forEach((row) => {
                if (Number.isInteger(row[0])) {
                    dates.push({
                        time: new Time(row[0], row[1], row[2]).DistributeDays(),
                        note: row[3],
                    });
                }
                else {
                    dates.push({
                        time: Time.FromInitializer(row[0]).DistributeDays(),
                        note: row[1],
                    });
                }
            });
            this.rows = dates;
        }
        const dateValue = this.currentDateValue;
        if (dateValue) {
            if (typeof dateValue === "string") {
                this.currentDate = Utilities.getDescendantProperty(globals, dateValue);
            }
            else {
                this.currentDate = dateValue.map((set) => {
                    return { display: set.display, time: Utilities.getDescendantProperty(globals, set.date) };
                });
            }
        }
    }
    connectedCallback() {
        this.Render();
    }
    Render() {
        this.innerHTML = "";
        if (this.rows.length > 0) {
            if (!this.disableSort) {
                this.rows.sort((a, b) => Time.Compare(a.time, b.time));
            }
            this.table = document.createElement("table");
            this.mainNode.appendChild(this.table);
            if (this.headerTitle) {
                this.table.appendChild(this.BuildHeaderRow(this.headerTitle));
            }
            for (let row of this.rows) {
                this.table.appendChild(this.BuildNormalRow(row));
            }
        }
        else if (this.showAllMonths) {
            this.table = document.createElement("table");
            this.mainNode.appendChild(this.table);
            this.BuildAllMonths(this.table);
        }
    }
    BuildHeaderRow(title) {
        let node = document.createElement("tr");
        let data = Utilities.CreateTableHeader(title);
        node.appendChild(data);
        data.setAttribute("colspan", "3");
        return node;
    }
    BuildNormalRow(dateRow) {
        let node = document.createElement("tr");
        if (this.currentDate) {
            const dataNode = Utilities.CreateTableData("");
            if (Array.isArray(this.currentDate)) {
                this.currentDate.forEach((set, index) => {
                    if (index > 0) {
                        dataNode.appendChild(document.createElement("br"));
                    }
                    dataNode.appendChild(document.createTextNode(`${set.display}: `));
                    dataNode.appendChild(this.BuildDiffNode(set.time, dateRow.time));
                });
            }
            else {
                dataNode.appendChild(this.BuildDiffNode(this.currentDate, dateRow.time));
            }
            node.appendChild(dataNode);
        }
        node.appendChild(Utilities.CreateTableData(dateRow.time.toString(this.showSeason)));
        if (dateRow.note != undefined) {
            node.appendChild(Utilities.CreateTableData(dateRow.note));
        }
        return node;
    }
    BuildDiffNode(currentDate, entryDate) {
        const diffString = Time.BuildDiffString(currentDate, entryDate);
        const diffNode = document.createElement("span");
        diffNode.innerText = diffString;
        if (diffString.search("ago") >= 0) {
            diffNode.classList.add("previous-date");
        }
        else if (diffString.search("from now") >= 0) {
            diffNode.classList.add("future-date");
        }
        else {
            diffNode.classList.add("current-date");
        }
        return diffNode;
    }
    BuildAllMonths(table) {
        let node = document.createElement("tr");
        let data = Utilities.CreateTableHeader("List of Months");
        table.appendChild(node);
        node.appendChild(data);
        data.setAttribute("colspan", "3");
        node = document.createElement("tr");
        data = Utilities.CreateTableHeader("#");
        table.appendChild(node);
        node.appendChild(data);
        data = Utilities.CreateTableHeader("Month Name");
        table.appendChild(node);
        node.appendChild(data);
        data = Utilities.CreateTableHeader("Season");
        table.appendChild(node);
        node.appendChild(data);
        for (let i = 0; i < TimeRef.months.length; i++) {
            node = document.createElement("tr");
            table.appendChild(node);
            data = Utilities.CreateTableData((TimeRef.months[i].position + 1).toString());
            node.appendChild(data);
            data = Utilities.CreateTableData(TimeRef.months[i].name);
            node.appendChild(data);
            data = Utilities.CreateTableData(TimeRef.months[i].season);
            node.appendChild(data);
        }
    }
}
customElements.define("ap-time-table", TimeTable);
//# sourceMappingURL=ap-time-table.js.map