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
		minSpeed: 0.7,
		maxSpeed: 1.3,
		sounds: [
			link("sounds/hiss/hiss1.mp3"),
			link("sounds/hiss/hiss2.mp3"),
			link("sounds/hiss/hiss3.mp3"),
			link("sounds/hiss/hiss4.mp3"),
			link("sounds/hiss/hiss5.mp3"),
			link("sounds/hiss/hiss6.mp3"),
			link("sounds/hiss/hiss7.mp3"),
			link("sounds/hiss/hiss8.mp3"),
			link("sounds/hiss/hiss9.mp3"),
			link("sounds/hiss/hiss10.mp3"),
			link("sounds/hiss/hiss11.mp3"),
			link("sounds/hiss/hiss12.mp3"),
			link("sounds/hiss/hiss13.mp3"),
			link("sounds/hiss/hiss14.mp3"),
		],
	},
	{
		name: "Bark",
		color: "#4a90d9",
		minSpeed: 0.8,
		maxSpeed: 1.5,
		sounds: [
			link("sounds/bark/bark1.mp3"),
			link("sounds/bark/bark2.mp3"),
			link("sounds/bark/bark3.mp3"),
			link("sounds/bark/bark4.mp3"),
			link("sounds/bark/bark5.mp3"),
			link("sounds/bark/bark6.mp3"),
			link("sounds/bark/bark7.mp3"),
			link("sounds/bark/bark8.mp3"),
		],
	},
	{
		name: "Growl",
		color: "#d94a4a",
		minSpeed: 0.6,
		maxSpeed: 1.2,
		sounds: [
			link("sounds/growl/growl1.mp3"),
			link("sounds/growl/growl2.mp3"),
			link("sounds/growl/growl3.mp3"),
			link("sounds/growl/growl4.mp3"),
			link("sounds/growl/growl5.mp3"),
			link("sounds/growl/growl6.mp3"),
			link("sounds/growl/growl7.mp3"),
			link("sounds/growl/growl8.mp3"),
			link("sounds/growl/growl9.mp3"),
		],
	},
];
