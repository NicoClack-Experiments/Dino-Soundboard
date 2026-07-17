<script lang="ts">
	import { ServiceWorker } from "sveltekit-adapter-versioned-worker/svelte";
</script>

<ServiceWorker />

<slot />

<style>
	:global(body) {
		background: #202020;
	}
</style>
