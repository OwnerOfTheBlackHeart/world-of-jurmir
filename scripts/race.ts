export interface Race {
	name: string; // Should match with a race in globals.sexualCharacteristics
	subName?: string;
	pcChance: number; // 0 to 100
	from: number;
	to: number;
	npcClasses: ClassChance[];
	pcClasses: ClassChance[];
}

export interface ClassChance {
	name: string;
	from: number;
	to: number;
	levelRoll: string;
}
