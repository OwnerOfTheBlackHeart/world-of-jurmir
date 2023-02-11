import { DiceRoll } from "../../roll.js";
import { Bounds, getRandomInteger, NumberBounds } from "../../utilities.js";
import { GetTownSizeByPopulationSize, TownSize } from "./town-sizes.js";

export var generatedPopulationMax = 50000;
export var generatedPopulationMin = 20;
export var natureClassBounds = { lower: 96 } as NumberBounds;
export var warriorPercent = 0.05;
export var expertPercent = 0.03;
export var adeptPercent = 0.005;
export var aristocratPercent = 0.005;

export function BuildPopulationFromPopulationSize(population: number): [PopulationClassRow[], number] {
	const townSize = GetTownSizeByPopulationSize(population);
	return townSize ? BuildPopulationFromTownSize(townSize, population) : undefined;
}

export function BuildPopulationFromTownSize(townSize: TownSize, population?: number): [PopulationClassRow[], number] {
	if (!population) {
		population = getRandomInteger(
			townSize.population.lower ? townSize.population.lower : generatedPopulationMin,
			townSize.population.upper ? townSize.population.upper : generatedPopulationMax
		);
	}

	let accountedPopulation = 0;
	let commonerRow: PopulationClassRow;
	let warriorRow: PopulationClassRow;
	let expertRow: PopulationClassRow;
	let adeptRow: PopulationClassRow;
	let aristocratRow: PopulationClassRow;
	const rows: PopulationClassRow[] = [];
	const rollsPerClass = townSize.communityModifier.rolls ? townSize.communityModifier.rolls : 1;

	classList.forEach((popClass) => {
		const row: PopulationClassRow = { class: popClass.name };
		rows.push(row);

		switch (row.class) {
			case "Commoner":
				commonerRow = row;
				break;
			case "Warrior":
				warriorRow = row;
				break;
			case "Expert":
				expertRow = row;
				break;
			case "Adept":
				adeptRow = row;
				break;
			case "Aristocrat":
				aristocratRow = row;
				break;
		}

		for (let i = 0; i < rollsPerClass; ++i) {
			accountedPopulation += GeneratePopulationForRow(row, popClass, townSize);
		}
	});

	if (!commonerRow) {
		throw '"Commoner" class not present';
	} else if (!warriorRow) {
		throw '"Warrior" class not present';
	} else if (!expertRow) {
		throw '"Expert" class not present';
	} else if (!adeptRow) {
		throw '"Adept" class not present';
	} else if (!aristocratRow) {
		throw '"Aristocrat" class not present';
	}

	const unaccountedPopulation = population - accountedPopulation;

	aristocratRow[1] = Math.floor(unaccountedPopulation * aristocratPercent);
	accountedPopulation += aristocratRow[1];

	adeptRow[1] = Math.floor(unaccountedPopulation * adeptPercent);
	accountedPopulation += adeptRow[1];

	expertRow[1] = Math.floor(unaccountedPopulation * expertPercent);
	accountedPopulation += expertRow[1];

	warriorRow[1] = Math.floor(unaccountedPopulation * warriorPercent);
	accountedPopulation += warriorRow[1];

	commonerRow[1] = population - accountedPopulation;

	return [rows, population];
}

function GeneratePopulationForRow(row: PopulationClassRow, popClass: PopulationClass, townSize: TownSize): number {
	let modifier = townSize.communityModifier.highestLevelMod;

	if (townSize.communityModifier.natureBoost && popClass.natureClass) {
		const natureRoll = getRandomInteger(1, 100);

		if (Bounds.isInBounds(natureRoll, natureClassBounds)) {
			modifier += popClass.natureModifier;
		}
	}

	let level = DiceRoll.FromString(popClass.roll).roll().total + modifier;
	level = level <= 20 ? level : 20;

	if (level <= 0 || (level <= 1 && popClass.npcClass)) {
		return 0;
	} else if (level === 1 && !popClass.npcClass) {
		row[1] = 1;
		return 1;
	} else {
		let total = 0;
		let perLevel = 1;

		while ((popClass.npcClass && level > 1) || (!popClass.npcClass && level > 0)) {
			row[level] = row[level] ? row[level] + perLevel : perLevel;
			total += perLevel;

			perLevel *= 2;
			level = level > 1 ? Math.floor(level / 2) : 0;
		}

		return total;
	}
}

export interface PopulationClassRow {
	class: string;
	[index: number]: number;
}

interface PopulationClass {
	name: string;
	roll: string;
	npcClass?: boolean;
	natureClass?: boolean;
	natureModifier?: number;
}

const classList: PopulationClass[] = [
	{ name: "Adept", roll: "1d6", npcClass: true },
	{ name: "Aristocrat", roll: "1d4", npcClass: true },
	{ name: "Barbarian", roll: "1d4" },
	{ name: "Bard", roll: "1d6" },
	{ name: "Cleric", roll: "1d6" },
	{ name: "Commoner", roll: "4d4", npcClass: true },
	{ name: "Druid", roll: "1d6", natureClass: true, natureModifier: 10 },
	{ name: "Expert", roll: "3d4", npcClass: true },
	{ name: "Fighter", roll: "1d8" },
	{ name: "Monk", roll: "1d4" },
	{ name: "Paladin", roll: "1d3" },
	{ name: "Ranger", roll: "1d3", natureClass: true, natureModifier: 10 },
	{ name: "Rogue", roll: "1d8" },
	{ name: "Sorcerer", roll: "1d4" },
	{ name: "Warrior", roll: "2d4", npcClass: true },
	{ name: "Wizard", roll: "1d4" },
];
