import { sveltekit } from "@sveltejs/kit/vite";
import { manifestGeneratorPlugin } from "sveltekit-adapter-versioned-worker";
import { defineConfig } from "vite";

const dev = process.env.NODE_ENV !== "production";
const disableBaseURL = process.env.DISABLE_BASE_URL === "true";
const base = dev || disableBaseURL ? "/" : "/Dino-Soundboard/";

export default defineConfig({
	base,
	plugins: [manifestGeneratorPlugin(), sveltekit()],
});
