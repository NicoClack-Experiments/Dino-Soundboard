import { adapter, standardGetLast } from "sveltekit-adapter-versioned-worker";

const isTestBuild = process.env.IS_TEST_BUILD === "true";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			lastInfo: standardGetLast(
				"https://example.com/versionedWorker.json",
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
