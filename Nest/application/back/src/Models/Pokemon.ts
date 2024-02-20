export interface Attack {
	name: string;
	damage: number;
	ap: number;
}


export interface Pokemon {
	id: number;
	name: string;
	type: string;
	level: number;
	picture: string;
	hp: number;
	attack : Attack[];
}
