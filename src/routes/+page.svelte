<script lang="ts">
	import { soundCategories } from "$lib/sounds";

	function random(min: number, max: number): number {
		return Math.random() * (max - min) + min;
	}

	function pickSound(urls: string[]): string {
		return urls[Math.floor(Math.random() * urls.length)];
	}

	function play(url: string, speed: number) {
		const audio = new Audio(url);
		audio.playbackRate = speed;
		audio.play();
	}
</script>

<main>
	<h1>Dino Soundboard</h1>
	<div class="grid" style="--count: {soundCategories.length}">
		{#each soundCategories as category (category.name)}
			<button
				type="button"
				style="background: {category.color}"
				on:click={() =>
					play(
						pickSound(category.sounds),
						random(category.minSpeed, category.maxSpeed),
					)}
			>
				{category.name}
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
		color: #e0e0e0;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
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
		color: #fff;
		mix-blend-mode: difference;
		cursor: pointer;
		touch-action: manipulation;
		-webkit-tap-highlight-color: transparent;
		user-select: none;
		transition:
			transform 0.1s,
			filter 0.15s;
	}

	button:active {
		transform: scale(0.95);
		filter: brightness(0.8);
	}

	@media (min-width: 400px) {
		.grid {
			grid-template-columns: repeat(var(--count, 3), 1fr);
		}
	}
</style>
