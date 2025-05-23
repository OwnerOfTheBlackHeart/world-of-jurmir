import { Race } from "./race.js";
import { DiceRoll } from "./roll.js";
import { BreastSizeRoll, RaceSexualFeatureRolls, Sex, SexRollRange } from "./sexual-characteristics.js";
import { DateInitializer, Time } from "./time.js";
import { NumberBounds } from "./utilities.js";

export const globals = {
	titlePostfix: " - World of Jurmir Reference Document",
	forceRefresh: false,
	nobleCurrentDate: undefined as Time,
	princeCurrentDate: undefined as Time,
	aaronCurrentDate: undefined as Time,
	sbjCurrentDate: undefined as Time,
	undestenCurrentDate: undefined as Time,
	undestenMiriCurrentDate: undefined as Time,
	undestenGnollusCurrentDate: undefined as Time,
	randomRaceTables: undefined as OrderedRecord<string, Race[]>,
	xpAwardsTable: undefined as XpAwards,
	sexRanges: [
		{ from: 1, to: 1, value: Sex.masculineHerm, hasBoobs: false, hasDick: true, feminity: 1, masculinity: 4 },
		{ from: 2, to: 5, value: Sex.male, hasBoobs: false, hasDick: true, feminity: 0, masculinity: 5 },
		{ from: 6, to: 6, value: Sex.dickGirl, hasBoobs: true, hasDick: true, feminity: 3, masculinity: 2 },
		{ from: 7, to: 7, value: Sex.cuntBoy, hasBoobs: false, hasDick: false, feminity: 2, masculinity: 3 },
		{ from: 8, to: 11, value: Sex.female, hasBoobs: true, hasDick: false, feminity: 5, masculinity: 0 },
		{ from: 12, to: 12, value: Sex.feminineHerm, hasBoobs: true, hasDick: true, feminity: 4, masculinity: 1 },
	] as SexRollRange[],
	sexRangeByKey: {} as Record<Sex, SexRollRange>,
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
	] as BreastSizeRoll[],
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
			races: ["Orc", "Half-orc"],
			dickLength: new DiceRoll("1d8+4"),
			heroicDickLength: new DiceRoll("1d12+4"),
			breastSize: new DiceRoll("1d6+3"),
		},
		{
			races: ["Goliath"],
			dickLength: new DiceRoll("1d8+4"),
			heroicDickLength: new DiceRoll("1d12+4"),
			breastSize: new DiceRoll("1d4+1"),
		},
		{
			races: ["Elf", "Half-elf", "Drow", "Half-drow"],
			dickLength: new DiceRoll("1d6+2"),
			heroicDickLength: new DiceRoll("1d8+3"),
			breastSize: new DiceRoll("1d4+1"),
		},
		{
			races: ["Gnome", "Halfling", "Ratfolk"],
			dickLength: new DiceRoll("1d4+1"),
			heroicDickLength: new DiceRoll("1d6+1"),
			breastSize: new DiceRoll("1d3+1"),
		},
		{ races: ["Lizardfolk", "Gnoll"], dickLength: new DiceRoll("1d8+4"), heroicDickLength: new DiceRoll("1d12+4"), breastSize: undefined },
	] as RaceSexualFeatureRolls[],
	reputationRanks: [
		{ level: -4, xpRange: { upper: -31 }, title: "Nemesis" },
		{ level: -3, xpRange: { lower: -30, upper: -16 }, title: "Enemy" },
		{ level: -2, xpRange: { lower: -15, upper: -6 }, title: "Unwelcome" },
		{ level: -1, xpRange: { lower: -5, upper: -1 }, title: "Untrusted" },
		{ level: 0, xpRange: { lower: 0, upper: 9 }, title: "Outsider" },
		{ level: 1, xpRange: { lower: 10, upper: 24 }, title: "Citizen" },
		{ level: 2, xpRange: { lower: 25, upper: 39 }, title: "Supporter" },
		{ level: 3, xpRange: { lower: 40, upper: 59 }, title: "Friend" },
		{ level: 4, xpRange: { lower: 60, upper: 84 }, title: "Valued Friend" },
		{ level: 5, xpRange: { lower: 85, upper: 114 }, title: "Friend of the People" },
		{ level: 6, xpRange: { lower: 115, upper: 149 }, title: "Example of Our Virtues" },
		{ level: 7, xpRange: { lower: 150, upper: 189 }, title: "Representative" },
		{ level: 8, xpRange: { lower: 190, upper: 234 }, title: "Hero" },
		{ level: 9, xpRange: { lower: 235, upper: 284 }, title: "Leader's Equal" },
		{ level: 10, xpRange: { lower: 285 }, title: "Accepted Heir" },
	] as ReputationRank[],
};

globals.sexRanges.forEach((sexRange) => {
	globals.sexRangeByKey[sexRange.value] = sexRange;
});

await LoadGlobalsJson();

export async function LoadGlobalsJson() {
	const [dateData, forceRefresh, randomRaceTables, xpAwardsTable] = await Promise.all([
		fetch("data/dates.json", { cache: "no-store" }).then((response) => response.json() as Promise<DatesJson>),
		fetch("force-refresh.txt", { cache: "no-store" })
			.then((response) => response.text())
			.then((forceRefreshString) => forceRefreshString.trim().toLowerCase() === "true"),
		fetch("data/race-tables.json").then((response) => response.json() as Promise<OrderedRecord<string, Race[]>>),
		fetch("data/xp-awards.json").then((response) => response.json() as Promise<XpAwards>),
	]);

	globals.nobleCurrentDate = Time.FromInitializer(dateData.nobleCurrentDate);
	globals.princeCurrentDate = Time.FromInitializer(dateData.princeCurrentDate);
	globals.aaronCurrentDate = Time.FromInitializer(dateData.aaronCurrentDate);
	globals.sbjCurrentDate = Time.FromInitializer(dateData.sbjCurrentDate);
	globals.undestenCurrentDate = Time.FromInitializer(dateData.undestenCurrentDate);
	globals.undestenMiriCurrentDate = Time.FromInitializer(dateData.undestenMiriCurrentDate);
	globals.undestenGnollusCurrentDate = Time.FromInitializer(dateData.undestenGnollusCurrentDate);

	globals.randomRaceTables = randomRaceTables;
	globals.xpAwardsTable = xpAwardsTable;

	// This is being kept commented out for later use as part of debugging race tables
	// for (let key in globals.randomRaceTables.values) {
	// 	globals.randomRaceTables.values[key].sort((a, b) => a.from - b.from);
	// }

	globals.forceRefresh = forceRefresh;
}

interface DatesJson {
	nobleCurrentDate: DateInitializer;
	nobleNeraCurrentDate: DateInitializer;
	princeCurrentDate: DateInitializer;
	aaronCurrentDate: DateInitializer;
	sbjCurrentDate: DateInitializer;
	undestenCurrentDate: DateInitializer;
	undestenMiriCurrentDate: DateInitializer;
	undestenGnollusCurrentDate: DateInitializer;
}

export interface ReputationRank {
	level: number;
	xpRange: NumberBounds;
	title: string;
}

export type XpAwards = { [characterLevel: number]: { [monsterCR: number]: number } };
