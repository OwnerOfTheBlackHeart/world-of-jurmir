import * as Utilities from "../utilities.js";
import { TimeRef, Time } from "../time.js";
import { globals } from "../globals.js";
export class TimeTable extends HTMLElement {
    constructor() {
        super();
        this.rows = [];
        this.table;
        this.mainNode = this;
        if (Utilities.IsGoodString(this.innerHTML)) {
            this.rows = Utilities.StringToObject(this.innerHTML);
        }
        if (this.currentDateValue) {
            this.currentDate = Utilities.getDescendantProperty(globals, this.currentDateValue);
        }
    }
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
        return this.getAttribute("current-date-value");
    }
    set currentDateValue(val) {
        this.setAttribute("current-date-value", val);
    }
    connectedCallback() {
        this.Render();
    }
    Render() {
        this.innerHTML = "";
        if (this.rows.length > 0) {
            this.table = document.createElement("table");
            this.mainNode.appendChild(this.table);
            for (let row of this.rows) {
                switch (row[0]) {
                    case "header":
                        this.table.appendChild(this.BuildHeaderRow(row));
                        break;
                    default:
                        this.table.appendChild(this.BuildNormalRow(row));
                }
            }
        }
        else if (this.showAllMonths) {
            this.table = document.createElement("table");
            this.mainNode.appendChild(this.table);
            this.BuildAllMonths(this.table);
        }
    }
    BuildHeaderRow(row) {
        let node = document.createElement("tr");
        let data = Utilities.CreateTableHeader(row[1]);
        node.appendChild(data);
        data.setAttribute("colspan", "3");
        return node;
    }
    BuildNormalRow(row) {
        let date = new Time(row[0], row[1], row[2]);
        let node = document.createElement("tr");
        if (this.currentDate) {
            node.appendChild(Utilities.CreateTableData(Time.BuildDiffString(this.currentDate, date)));
        }
        node.appendChild(Utilities.CreateTableData(date.toString(this.showSeason)));
        if (row[3] != undefined) {
            node.appendChild(Utilities.CreateTableData(row[3]));
        }
        return node;
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