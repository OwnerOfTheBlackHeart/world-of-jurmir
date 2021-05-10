import { DiceRoll } from "../../roll.js";
import { Bounds, getRndInteger } from "../../utilities.js";
import { GetTownSizeByPopulationSize } from "./town-sizes.js";
export var generatedPopulationMax = 50000;
export var generatedPopulationMin = 20;
export var natureClassBounds = { lower: 96 };
export var warriorPercent = 0.05;
export var expertPercent = 0.03;
export var adeptPercent = 0.005;
export var aristocratPercent = 0.005;
export function BuildPopulationFromPopulationSize(population) {
    const townSize = GetTownSizeByPopulationSize(population);
    return townSize ? BuildPopulationFromTownSize(townSize, population) : undefined;
}
export function BuildPopulationFromTownSize(townSize, population) {
    if (!population) {
        population = getRndInteger(townSize.population.lower ? townSize.population.lower : generatedPopulationMin, townSize.population.upper ? townSize.population.upper : generatedPopulationMax);
    }
    let accountedPopulation = 0;
    let commonerRow;
    let warriorRow;
    let expertRow;
    let adeptRow;
    let aristocratRow;
    const rows = [];
    const rollsPerClass = townSize.communityModifier.rolls ? townSize.communityModifier.rolls : 1;
    classList.forEach((popClass) => {
        const row = { class: popClass.name };
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
    }
    else if (!warriorRow) {
        throw '"Warrior" class not present';
    }
    else if (!expertRow) {
        throw '"Expert" class not present';
    }
    else if (!adeptRow) {
        throw '"Adept" class not present';
    }
    else if (!aristocratRow) {
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
function GeneratePopulationForRow(row, popClass, townSize) {
    let modifier = townSize.communityModifier.highestLevelMod;
    if (townSize.communityModifier.natureBoost && popClass.natureClass) {
        const natureRoll = getRndInteger(1, 100);
        if (Bounds.isInBounds(natureRoll, natureClassBounds)) {
            modifier += popClass.natureModifier;
        }
    }
    let level = DiceRoll.FromString(popClass.roll).roll().total + modifier;
    level = level <= 20 ? level : 20;
    if (level <= 0 || (level <= 1 && popClass.npcClass)) {
        return 0;
    }
    else if (level === 1 && !popClass.npcClass) {
        row[1] = 1;
        return 1;
    }
    else {
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
const classList = [
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
//# sourceMappingURL=population.js.map