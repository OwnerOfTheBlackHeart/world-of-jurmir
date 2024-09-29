import { DiceRoll } from "../../roll.js";
import { Bounds, getRandomEntryFromRange, getRandomInteger, NamedNumberRange, NumberBounds } from "../../utilities.js";
import { BuildPopulationFromTownSize, PopulationClassRow } from "./population.js";
import { GetTownSizeByName, GetTownSizeByPopulationSize, TownSize } from "./town-sizes.js";

export var monstrousPowerCenterBounds: NumberBounds = { lower: 96 };

export function BuildSettlementFromPopulation(population: number): Settlement {
	return BuildSettlementFromTownSize(GetTownSizeByPopulationSize(population), population);
}

export function BuildSettlementFromTownSizeName(name: string): Settlement {
	return BuildSettlementFromTownSize(GetTownSizeByName(name));
}

export function BuildSettlementFromTownSize(townSize: TownSize, population?: number): Settlement {
	const settlement = {} as Settlement;
	settlement.townSize = townSize.name;
	settlement.goldLimit = townSize.goldLimit;
	settlement.powerCenters = BuildPowerCenters(townSize);
	settlement.captain = getRandomEntryFromRange(SettlementGuardCaptain).name;

	const [distribution, tempPop] = BuildPopulationFromTownSize(townSize, population);
	settlement.population = tempPop;
	settlement.populationDistribution = distribution;

	return settlement;
}

function BuildPowerCenters(townSize: TownSize): string[] {
	const powerCenters: string[] = [];

	let rolls = townSize.communityModifier.rolls ? townSize.communityModifier.rolls : 1;
	for (; rolls > 0; --rolls) {
		const roll = new DiceRoll({ diceSides: 20, diceCount: 1, bonus: townSize.communityModifier.powerCenterMod }).roll().total;
		const powerCenter = PowerCenters.find((pc) => Bounds.isInBounds(roll, pc));
		let powerCenterName: string;

		if (powerCenter.canBeMonstrous && Bounds.isInBounds(getRandomInteger(1, 100), monstrousPowerCenterBounds)) {
			powerCenterName = "Monstrous";
		} else {
			powerCenterName = powerCenter.type;
		}

		powerCenters.push(`${powerCenterName} (${getRandomEntryFromRange(PowerCenterAlignment).name})`);
	}

	return powerCenters;
}

export interface Settlement {
	townSize: string;
	goldLimit: number;
	powerCenters: string[];
	captain: string;
	population: number;
	populationDistribution: PopulationClassRow[];
	demographicsType?: string;
	politicalSystem?: string;
}

interface PowerCenter extends NumberBounds {
	type: string;
	canBeMonstrous?: boolean;
}

const PowerCenters = Object.freeze<PowerCenter>([
	{ type: "Conventional", upper: 13, canBeMonstrous: true },
	{ type: "Nonstandard", lower: 14, upper: 18 },
	{ type: "Magical", lower: 19 },
]);

const PowerCenterAlignment = Object.freeze<NamedNumberRange>([
	{ from: 1, to: 35, name: "LG" },
	{ from: 36, to: 39, name: "NG" },
	{ from: 40, to: 41, name: "CG" },
	{ from: 42, to: 61, name: "LN" },
	{ from: 62, to: 63, name: "N" },
	{ from: 64, to: 64, name: "CN" },
	{ from: 65, to: 90, name: "LE" },
	{ from: 91, to: 98, name: "NE" },
	{ from: 99, to: 100, name: "CE" },
]);

const SettlementGuardCaptain = Object.freeze<NamedNumberRange>([
	{ from: 1, to: 60, name: "Highest-level warrior" },
	{ from: 61, to: 80, name: "Second highest-level fighter" },
	{ from: 81, to: 100, name: "Highest-level fighter" },
]);
