import { globals } from "../../globals.js";
import { addToRecordArray } from "../../utilities.js";

const slaveShareDivisor = 2;
const slaveCountValue = 1 / slaveShareDivisor;
const charactersListPath = "data/characters.json";

export interface XpCharacter {
	name: string;
	ecl: number;
	slave?: boolean;
}

export interface XpEnemy {
	cr: number;
	count: number;
}

export interface XpCharacterList {
	[campaignName: string]: {
		[characterGroup: string]: XpCharacter[];
	};
}

export interface CharactersByEcl {
	players: Record<number, XpCharacter[]>;
	slaves: Record<number, XpCharacter[]>;
}

export interface CalculatedXpEntry {
	names: string;
	xp: number;
}

/**
 * Pulls an updated characters list. Does not cache.
 * @returns The contents of characters.json
 */
export async function PullCharacterList() {
	return fetch(charactersListPath, { cache: "no-store" }).then((response) => response.json() as Promise<XpCharacterList>);
}

/**
 * Pulls the latest characters list and calculates the experience the characters would gain.
 * @param campaignName The name of the campaign to draw characters from
 * @param characters A dictionary of booleans with the names of the characters as keys. Determines which characters to include
 * @param enemies The enemies/groups of enemies
 * @returns The characters and the experience they gained
 */
export async function UpdatedCalculateXp(campaignName: string, characters: Record<string, boolean>, enemies: XpEnemy[]) {
	return PullCharacterList().then((characterList) => {
		const updatedCharacters: XpCharacter[] = [];

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

/**
 * Calculates the experience a group of characters would gain from defeat the given enemies.
 * @param characters The characters to gain experience.
 * @param enemies The enemies the characters have defeated.
 * @returns The characters and the experience they gained
 */
export function CalculateXp(characters: XpCharacter[], enemies: XpEnemy[]) {
	const charactersByEcl: CharactersByEcl = { players: {}, slaves: {} };
	const xpByEcl: Record<number, number> = {};
	let characterCount = 0;

	characters.forEach((character) => {
		characterCount += character.slave ? slaveCountValue : 1;
		addToRecordArray(character.slave ? charactersByEcl.slaves : charactersByEcl.players, character.ecl, character);
		xpByEcl[character.ecl] = 0;
	});

	// Calculate total XP for each ECL
	Object.keys(xpByEcl).forEach((key) => {
		const ecl = Number(key);

		enemies.forEach((enemyGroup) => {
			let xp = 0;

			if (enemyGroup.cr < 1) {
				xp = globals.xpAwardsTable[ecl][1] * enemyGroup.cr;
			} else {
				xp = globals.xpAwardsTable[ecl][enemyGroup.cr];
			}

			xpByEcl[ecl] += xp * enemyGroup.count;
		});

		xpByEcl[ecl] /= Math.floor(characterCount);
	});

	const calculatedXp: CalculatedXpEntry[] = [];

	for (let key in charactersByEcl.players) {
		const ecl = Number(key);
		const entry: CalculatedXpEntry = { names: "", xp: xpByEcl[ecl] };

		charactersByEcl.players[ecl].forEach((character) => (entry.names += character.name + ", "));
		entry.names = entry.names.slice(0, -2);
		calculatedXp.push(entry);
	}

	for (let key in charactersByEcl.slaves) {
		const ecl = Number(key);
		const entry: CalculatedXpEntry = { names: "", xp: Math.floor(xpByEcl[ecl] / slaveShareDivisor) };

		charactersByEcl.slaves[ecl].forEach((character) => (entry.names += character.name + ", "));
		entry.names = entry.names.slice(0, -2);
		calculatedXp.push(entry);
	}

	calculatedXp.sort((a, b) => b.xp - a.xp);

	return calculatedXp;
}
