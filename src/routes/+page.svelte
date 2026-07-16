<script lang="ts">
	import { sounds } from "$lib/sounds";

	function play(url: string) {
		new Audio(url).play();
	}
</script>

<main>
	<h1>Soundboard</h1>
	<div class="grid">
		{#each sounds as sound (sound.url)}
			<button type="button" on:click={() => play(sound.url)}>
				{sound.title}
			</button>
		{/each}
	</div>
</main>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	main {
		max-width: 480px;
		margin: 0 auto;
		padding: 16px;
	}

	h1 {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 20px;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 12px;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 80px;
		padding: 16px 8px;
		font-size: 1.25rem;
		font-weight: 600;
		border: none;
		border-radius: 12px;
		background: #3b82f6;
		color: #fff;
		cursor: pointer;
		touch-action: manipulation;
		-webkit-tap-highlight-color: transparent;
		user-select: none;
		transition:
			transform 0.1s,
			background 0.15s;
	}

	button:active {
		transform: scale(0.95);
		background: #2563eb;
	}

	@media (min-width: 400px) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
