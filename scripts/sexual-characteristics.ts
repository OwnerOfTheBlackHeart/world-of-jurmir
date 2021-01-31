import { DiceRoll } from "./roll";

export enum Sex {
	masculineHerm = "Masculine Herm",
	male = "Male",
	feminineMale = "Feminine Male",
	masculineFemale = "Masculine Female",
	female = "Female",
	feminineHerm = "Feminine Herm",
}

export interface SexRollRange {
	from: number;
	to: number;
	value: Sex;
	hasBoobs: boolean;
	hasDick: boolean;
}

export interface BreastSizeRoll {
	roll: number;
	cupSize: string;
	inchesSize: number;
}

export function BreastSizeInchesToString(inchesSize: number) {
	return inchesSize + '"';
}

export interface RaceSexualFeatureRolls {
	races: string[];
	dickLength: DiceRoll;
	heroicDickLength: DiceRoll;
	breastSize: DiceRoll;
}
