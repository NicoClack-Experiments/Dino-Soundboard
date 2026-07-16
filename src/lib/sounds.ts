import { link } from "sveltekit-adapter-versioned-worker/svelte/util";

export interface Sound {
	title: string;
	url: string;
}

export const sounds: Sound[] = [
	{ title: "Air Horn", url: link("sounds/airhorn.mp3") },
	{ title: "Applause", url: link("sounds/applause.mp3") },
	{ title: "Boo", url: link("sounds/boo.mp3") },
	{ title: "Drum Roll", url: link("sounds/drumroll.mp3") },
	{ title: "Laugh", url: link("sounds/laugh.mp3") },
	{ title: "Record Scratch", url: link("sounds/recordscratch.mp3") },
	{ title: "Rimshot", url: link("sounds/rimshot.mp3") },
	{ title: "Sad Trombone", url: link("sounds/sadtrombone.mp3") },
	{ title: "Tada", url: link("sounds/tada.mp3") },
	{ title: "Wilhelm Scream", url: link("sounds/wilhelm.mp3") },
];
