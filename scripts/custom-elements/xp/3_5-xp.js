import { globals } from "../../globals.js";
import { addToRecordArray } from "../../utilities.js";
const slaveShareDivisor = 2;
const slaveCountValue = 1 / slaveShareDivisor;
const charactersListPath = "data/characters.json";
export async function PullCharacterList() {
    return fetch(charactersListPath, { cache: "no-store" }).then((response) => response.json());
}
export async function UpdatedCalculateXp(campaignName, characters, enemies) {
    return PullCharacterList().then((characterList) => {
        const updatedCharacters = [];
        for (const groupName in characterList[campaignName]) {
            characterList[campaignName][groupName].forEach((character) => {
                if (characters[character.name]) {
                    updatedCharacters.push(character);
                }
            });
        }
        return CalculateXp(updatedCharacters, enemies);
    });
}
export function CalculateXp(characters, enemies) {
    const charactersByEcl = { players: {}, slaves: {} };
    const xpByEcl = {};
    let characterCount = 0;
    characters.forEach((character) => {
        characterCount += character.slave ? slaveCountValue : 1;
        addToRecordArray(character.slave ? charactersByEcl.slaves : charactersByEcl.players, character.ecl, character);
        xpByEcl[character.ecl] = 0;
    });
    Object.keys(xpByEcl).forEach((key) => {
        const ecl = Number(key);
        enemies.forEach((enemyGroup) => {
            let xp = 0;
            if (enemyGroup.cr < 1) {
                xp = globals.xpAwardsTable[ecl][1] * enemyGroup.cr;
            }
            else {
                xp = globals.xpAwardsTable[ecl][enemyGroup.cr];
            }
            xpByEcl[ecl] += xp * enemyGroup.count;
        });
        xpByEcl[ecl] /= Math.floor(characterCount);
    });
    const calculatedXp = [];
    for (let key in charactersByEcl.players) {
        const ecl = Number(key);
        const entry = { names: "", xp: xpByEcl[ecl] };
        charactersByEcl.players[ecl].forEach((character) => (entry.names += character.name + ", "));
        entry.names = entry.names.slice(0, -2);
        calculatedXp.push(entry);
    }
    for (let key in charactersByEcl.slaves) {
        const ecl = Number(key);
        const entry = { names: "", xp: Math.floor(xpByEcl[ecl] / slaveShareDivisor) };
        charactersByEcl.slaves[ecl].forEach((character) => (entry.names += character.name + ", "));
        entry.names = entry.names.slice(0, -2);
        calculatedXp.push(entry);
    }
    calculatedXp.sort((a, b) => b.xp - a.xp);
    return calculatedXp;
}
//# sourceMappingURL=3_5-xp.js.map