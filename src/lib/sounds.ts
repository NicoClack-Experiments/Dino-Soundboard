import { link } from "sveltekit-adapter-versioned-worker/svelte/util";

export interface SoundCategory {
	name: string;
	color: string;
	minSpeed: number;
	maxSpeed: number;
	sounds: string[];
}

export const soundCategories: SoundCategory[] = [
	{
		name: "Hiss",
		color: "#e8aa00",
		minSpeed: 0.85,
		maxSpeed: 1.15,
		sounds: [
			// link("sounds/hiss/1.mp3"),
			// link("sounds/hiss/2.mp3"),
			// link("sounds/hiss/3.mp3"),
			link("sounds/wilhelm.wav"),
		],
	},
];
