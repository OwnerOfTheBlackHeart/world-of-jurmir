import { DiceRoll } from "./roll.js";
import { Sex } from "./sexual-characteristics.js";
import { Time } from "./time.js";
export const globals = {
    titlePostfix: " - World of Jurmir Reference Document",
    forceRefresh: false,
    nobleCurrentDate: undefined,
    princeCurrentDate: undefined,
    aaronCurrentDate: undefined,
    sbjCurrentDate: undefined,
    sexRanges: [
        { from: 1, to: 1, value: Sex.masculineHerm, hasBoobs: false, hasDick: true },
        { from: 2, to: 5, value: Sex.male, hasBoobs: false, hasDick: true },
        { from: 6, to: 6, value: Sex.feminineMale, hasBoobs: true, hasDick: true },
        { from: 7, to: 7, value: Sex.masculineFemale, hasBoobs: true, hasDick: false },
        { from: 8, to: 11, value: Sex.female, hasBoobs: true, hasDick: false },
        { from: 12, to: 12, value: Sex.feminineHerm, hasBoobs: true, hasDick: true },
    ],
    breastSizes: [
        { roll: 1, cupSize: "Flat", inchesSize: 0 },
        { roll: 2, cupSize: "A", inchesSize: 0.5 },
        { roll: 3, cupSize: "B", inchesSize: 1 },
        { roll: 4, cupSize: "C", inchesSize: 1.5 },
        { roll: 5, cupSize: "D", inchesSize: 2 },
        { roll: 6, cupSize: "E (DD)", inchesSize: 2.5 },
        { roll: 7, cupSize: "F (DDD)", inchesSize: 3 },
        { roll: 8, cupSize: "G", inchesSize: 3.5 },
        { roll: 9, cupSize: "H", inchesSize: 4 },
        { roll: 10, cupSize: "I", inchesSize: 4.5 },
        { roll: 11, cupSize: "J", inchesSize: 5 },
        { roll: 12, cupSize: "K", inchesSize: 5.5 },
    ],
    sexualCharacteristics: [
        {
            races: ["Human", "Aasimar", "Tiefling"],
            dickLength: new DiceRoll("1d6+3"),
            heroicDickLength: new DiceRoll("1d8+4"),
            breastSize: new DiceRoll("1d4+2"),
        },
        { races: ["Catfolk"], dickLength: new DiceRoll("1d8+1"), heroicDickLength: new DiceRoll("1d8+4"), breastSize: new DiceRoll("1d6") },
        { races: ["Dwarf"], dickLength: new DiceRoll("1d8+2"), heroicDickLength: new DiceRoll("1d8+4"), breastSize: new DiceRoll("1d6+3") },
        {
            races: ["Orc", "Half-Orc"],
            dickLength: new DiceRoll("1d8+4"),
            heroicDickLength: new DiceRoll("1d12+4"),
            breastSize: new DiceRoll("1d6+3"),
        },
        {
            races: ["Elf", "Half-elf", "Drow", "Half-drow"],
            dickLength: new DiceRoll("1d6+2"),
            heroicDickLength: new DiceRoll("1d8+3"),
            breastSize: new DiceRoll("1d4+1"),
        },
        {
            races: ["Gnome", "Halfling"],
            dickLength: new DiceRoll("1d4+1"),
            heroicDickLength: new DiceRoll("1d6+1"),
            breastSize: new DiceRoll("1d3+1"),
        },
        { races: ["Lizardfolk", "Gnoll"], dickLength: new DiceRoll("1d8+4"), heroicDickLength: new DiceRoll("1d12+4"), breastSize: undefined },
    ],
};
export async function LoadGlobalsJson() {
    const [dateData, forceRefresh] = await Promise.all([
        fetch("data/dates.json", { cache: "no-store" }).then((response) => response.json()),
        fetch("force-refresh.txt", { cache: "no-store" })
            .then((response) => response.text())
            .then((forceRefreshString) => forceRefreshString.trim().toLowerCase() === "true"),
    ]);
    globals.nobleCurrentDate = new Time(dateData.nobleCurrentDate.day, dateData.nobleCurrentDate.month, dateData.nobleCurrentDate.year);
    globals.princeCurrentDate = new Time(dateData.princeCurrentDate.day, dateData.princeCurrentDate.month, dateData.princeCurrentDate.year);
    globals.aaronCurrentDate = new Time(dateData.aaronCurrentDate.day, dateData.aaronCurrentDate.month, dateData.aaronCurrentDate.year);
    globals.sbjCurrentDate = new Time(dateData.sbjCurrentDate.day, dateData.sbjCurrentDate.month, dateData.sbjCurrentDate.year);
    globals.forceRefresh = forceRefresh;
}
//# sourceMappingURL=globals.js.map