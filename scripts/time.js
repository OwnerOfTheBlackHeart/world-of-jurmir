export class Time {
    constructor(day, month, year) {
        if (day != undefined) {
            this.day = day;
        }
        else {
            this.day = 0;
        }
        if (month != undefined) {
            this.month = month;
        }
        else {
            this.month = 0;
        }
        if (year != undefined) {
            this.year = year;
        }
        else {
            this.year = 0;
        }
    }
    toString(doesIncludeSeason = false) {
        let toReturn = "";
        let tempTime = this.DistributeDays();
        let month = TimeRef.months[tempTime.month];
        let numeralAbbreviation = " ";
        if ([10, 11, 12].some((day) => day === tempTime.day)) {
            numeralAbbreviation = "th";
        }
        else {
            switch (tempTime.day % 10) {
                case 0:
                    numeralAbbreviation = "st";
                    break;
                case 1:
                    numeralAbbreviation = "nd";
                    break;
                case 2:
                    numeralAbbreviation = "rd";
                    break;
                default:
                    numeralAbbreviation = "th";
            }
        }
        toReturn += month.name + " ";
        toReturn += tempTime.day + 1 + numeralAbbreviation + ", ";
        toReturn += tempTime.year;
        if (doesIncludeSeason) {
            toReturn += ": " + month.season;
        }
        return toReturn;
    }
    Add(time2) {
        return Time.Add(this, time2);
    }
    Subtract(time2) {
        return Time.Subtract(this, time2);
    }
    ToDays() {
        return Time.ToDays(this);
    }
    DistributeDays() {
        let tempTime = new Time();
        let days = this.ToDays();
        let multiplier = 0;
        multiplier = Time.YearsToDays(1);
        tempTime.year = Math.floor(days / multiplier);
        days -= multiplier * tempTime.year;
        multiplier = Time.MonthsToDays(1);
        tempTime.month = Math.floor(days / multiplier);
        days -= multiplier * tempTime.month;
        tempTime.day = days;
        return tempTime;
    }
    Compare(b) {
        if (!b) {
            return 1;
        }
        if (this.year === b.year) {
            if (this.month === b.month) {
                if (this.day === b.day) {
                    return 0;
                }
                else {
                    return this.day - b.day;
                }
            }
            else {
                return this.month - b.month;
            }
        }
        else {
            return this.year - b.year;
        }
    }
    static Add(time1, time2) {
        let toReturn = new Time();
        toReturn.day = time1.ToDays() + time2.ToDays();
        toReturn = toReturn.DistributeDays();
        return toReturn;
    }
    static Subtract(time1, time2) {
        let toReturn = new Time();
        toReturn.day = time1.ToDays() - time2.ToDays();
        toReturn = toReturn.DistributeDays();
        return toReturn;
    }
    static ToDays(time) {
        let tempTime = Time.CleanTime(time);
        let toReturn = tempTime.day;
        toReturn += Time.YearsToDays(tempTime.year);
        toReturn += Time.MonthsToDays(tempTime.month);
        return toReturn;
    }
    static BuildDiffString(currentTime, toDiffTime) {
        if (!currentTime || !toDiffTime) {
            return undefined;
        }
        let offset;
        let daysDifference = currentTime.ToDays() - toDiffTime.ToDays();
        let toReturn = "";
        if (daysDifference > 0) {
            offset = currentTime.Subtract(toDiffTime).DistributeDays();
        }
        else if (daysDifference < 0) {
            offset = toDiffTime.Subtract(currentTime).DistributeDays();
        }
        else {
            return "Current date";
        }
        if (offset.year > 0) {
            toReturn += offset.year.toString() + (offset.year > 1 ? " years" : " year");
        }
        if (offset.month > 0) {
            if (toReturn.length > 0) {
                toReturn += ", ";
            }
            toReturn += offset.month.toString() + (offset.month > 1 ? " months" : " month");
        }
        if (offset.day > 0) {
            if (toReturn.length > 0) {
                toReturn += " and ";
            }
            toReturn += offset.day.toString() + (offset.day > 1 ? " days" : " day");
        }
        if (daysDifference > 0) {
            toReturn += " ago";
        }
        else if (daysDifference < 0) {
            toReturn += " from now";
        }
        return toReturn;
    }
    static WeeksToDays(weeks) {
        return weeks * TimeRef.daysPerWeek;
    }
    static MonthsToDays(months) {
        return Time.WeeksToDays(months * TimeRef.weeksPerMonth);
    }
    static YearsToMonths(years) {
        return years * TimeRef.monthsPerYear;
    }
    static YearsToDays(years) {
        return Time.MonthsToDays(Time.YearsToMonths(years));
    }
    static CleanTime(time) {
        let toReturn = new Time();
        toReturn.day = Math.max(time.day, 0);
        toReturn.month = Math.max(time.month, 0);
        toReturn.year = Math.max(time.year, 0);
        return toReturn;
    }
    static Compare(a, b) {
        if (a === b) {
            return 0;
        }
        else if (a && !b) {
            return 1;
        }
        else if (!a && b) {
            return -1;
        }
        else {
            return a.Compare(b);
        }
    }
}
export var Season;
(function (Season) {
    Season["Summer"] = "summer";
    Season["Spring"] = "spring";
    Season["Fall"] = "fall";
    Season["Winter"] = "winter";
})(Season || (Season = {}));
export class Month {
    constructor(name, position, season) {
        this.name = name;
        this.position = position;
        this.season = season;
    }
}
Month.Kyrious = new Month("Kyrious", 0, Season.Winter);
Month.Sith = new Month("Sith", 1, Season.Winter);
Month.Fephun = new Month("Fephun", 2, Season.Spring);
Month.Orthia = new Month("Orthia", 3, Season.Spring);
Month.Kriotzous = new Month("Kriotzous", 4, Season.Spring);
Month.Durnio = new Month("Durnio", 5, Season.Summer);
Month.Zolter = new Month("Zolter", 6, Season.Summer);
Month.Hrefia = new Month("Hrefia", 7, Season.Fall);
Month.Lagosa = new Month("Lagosa", 8, Season.Fall);
export class TimeRef {
}
TimeRef.daysPerWeek = 7;
TimeRef.weeksPerMonth = 4;
TimeRef.monthsPerYear = 9;
TimeRef.months = [
    Month.Kyrious,
    Month.Sith,
    Month.Fephun,
    Month.Orthia,
    Month.Kriotzous,
    Month.Durnio,
    Month.Zolter,
    Month.Hrefia,
    Month.Lagosa,
];
//# sourceMappingURL=time.js.map