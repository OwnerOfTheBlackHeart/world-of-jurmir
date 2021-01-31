import * as Utilities from "./utilities.js";

export class DiceRoll {
	diceSides: number = 6;
	diceCount: number = 1;
	bonus: number = 0;

	constructor(dice?: string | { diceSides: number; diceCount: number; bonus: number }) {
		if (dice) {
			if (typeof dice === "string") {
				this.processRollString(dice);
			} else {
				this.diceSides = dice.diceSides;
				this.diceCount = dice.diceCount;
				this.bonus = dice.bonus;
			}
		}
	}

	static FromString(roll: string): DiceRoll {
		return new DiceRoll(roll);
	}

	toString(): string {
		let toReturn = this.diceCount + "d" + this.diceSides;

		if (this.bonus > 0) {
			toReturn += "+" + this.bonus;
		} else if (this.bonus < 0) {
			toReturn += this.bonus;
		}

		return toReturn;
	}

	roll(): DiceRollResult {
		const result: DiceRollResult = {
			rolls: [],
			total: this.bonus ? this.bonus : 0,
			bonus: this.bonus ? this.bonus : 0,
		};

		for (let i = 0; i < this.diceCount; i++) {
			const value = Utilities.getRndInteger(1, this.diceSides);
			result.total += value;

			result.rolls.push({
				value,
				isMaxRoll: value === this.diceSides,
				isMinRoll: value === 1,
				sides: this.diceSides,
			});
		}

		return result;
	}

	processRollString(roll: string) {
		roll = roll ? roll.trim().toLowerCase() : undefined;

		if (roll && roll.includes("d")) {
			let sides = "";
			let count = "";
			let bonus = "";

			[count, sides] = roll.split("d");

			if (sides.includes("+")) {
				[sides, bonus] = sides.split("+");
			} else if (sides.includes("-")) {
				[sides, bonus] = sides.split("-");
				bonus = "-" + bonus;
			} else {
				bonus = "0";
			}

			this.diceSides = Number(sides);
			this.diceCount = Number(count);
			this.bonus = Number(bonus);
		}
	}
}

export interface DieRollResult {
	value: number;
	isMaxRoll: boolean;
	isMinRoll: boolean;
	sides: number;
}

export interface DiceRollResult {
	total: number;
	bonus: number;
	rolls: DieRollResult[];
}
