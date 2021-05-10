import { Bounds, getDescendantProperty } from "../../utilities.js";
export function GetTownSizeByPopulationSize(population) {
    const found = townSizes.find(([, townSize]) => Bounds.isInBounds(population, townSize.population));
    return found ? found[1] : undefined;
}
export function GetTownSizeByName(name) {
    return getDescendantProperty(TownSizes, name);
}
export const TownSizes = Object.freeze({
    thorp: {
        from: 1,
        to: 10,
        name: "Thorp",
        goldLimit: 40,
        population: { upper: 80 },
        communityModifier: { powerCenterMod: -1, highestLevelMod: -3, natureBoost: true },
    },
    hamlet: {
        from: 11,
        to: 30,
        name: "Hamlet",
        goldLimit: 100,
        population: { lower: 81, upper: 400 },
        communityModifier: { powerCenterMod: 0, highestLevelMod: -2, natureBoost: true },
    },
    village: {
        from: 31,
        to: 50,
        name: "Village",
        goldLimit: 200,
        population: { lower: 401, upper: 900 },
        communityModifier: { powerCenterMod: 1, highestLevelMod: -1 },
    },
    smallTown: {
        from: 51,
        to: 70,
        name: "Small town",
        goldLimit: 800,
        population: { lower: 901, upper: 2000 },
        communityModifier: { powerCenterMod: 2, highestLevelMod: 0 },
    },
    largeTown: {
        from: 71,
        to: 85,
        name: "Large town",
        goldLimit: 3000,
        population: { lower: 2001, upper: 5000 },
        communityModifier: { powerCenterMod: 3, highestLevelMod: 3 },
    },
    smallCity: {
        from: 86,
        to: 95,
        name: "Small city",
        goldLimit: 15000,
        population: { lower: 5001, upper: 12000 },
        communityModifier: { powerCenterMod: 4, highestLevelMod: 6, rolls: 2 },
    },
    largeCity: {
        from: 96,
        to: 99,
        name: "Large city",
        goldLimit: 40000,
        population: { lower: 12001, upper: 25000 },
        communityModifier: { powerCenterMod: 5, highestLevelMod: 9, rolls: 3 },
    },
    metropolis: {
        from: 100,
        to: 100,
        name: "Metropolis",
        goldLimit: 100000,
        population: { lower: 25001 },
        communityModifier: { powerCenterMod: 6, highestLevelMod: 12, rolls: 4 },
    },
});
export const townSizes = Object.freeze(Object.entries(TownSizes));
export const townSizesValues = Object.freeze(Object.values(TownSizes));
//# sourceMappingURL=town-sizes.js.map