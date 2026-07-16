import { vitePreprocess } from "@sveltejs/kit/vite";
import { adapter, standardGetLast } from "sveltekit-adapter-versioned-worker";

const URL_PREFIX = "Dino-Soundboard";

const dev = process.env.NODE_ENV !== "production";
const disableBaseURL = process.env.DISABLE_BASE_URL === "true";
const baseURL =
	dev || disableBaseURL || URL_PREFIX === "" ? "" : `/${URL_PREFIX}`;

const isTestBuild = process.env.IS_TEST_BUILD === "true";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		paths: {
			base: baseURL,
		},
		adapter: adapter({
			lastInfo: standardGetLast(
				"https://nicoclack-experiments.github.io/Dino-Soundboard/versionedWorker.json",
				isTestBuild,
			),
		}),
		prerender: {
			handleHttpError: ({ path, message }) => {
				// Ignore 404s for assets that are generated at build time
				// (manifest and favicon handled by the versioned worker plugin)
				if (
					path === "/favicon.png" ||
					path === "/manifest.webmanifest"
				) {
					return;
				}
				throw new Error(message);
			},
		},
	},
};

export default config;
