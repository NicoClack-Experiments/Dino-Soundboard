<script lang="ts">
	import { soundCategories } from "$lib/sounds";

	let pointerHandled = false;
	const audioInstances: HTMLAudioElement[] = [];

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
		audioInstances.push(audio);
		audio.addEventListener("ended", () => {
			const idx = audioInstances.indexOf(audio);
			if (idx !== -1) audioInstances.splice(idx, 1);
		});
	}

	function stopAll() {
		for (const audio of audioInstances) {
			audio.pause();
			audio.currentTime = 0;
		}
		audioInstances.length = 0;
	}

	function playRandomSound(category: (typeof soundCategories)[number]) {
		play(
			pickSound(category.sounds),
			random(category.minSpeed, category.maxSpeed),
		);
	}

	function handlePointerDown(category: (typeof soundCategories)[number]) {
		pointerHandled = true;
		playRandomSound(category);
		setTimeout(() => {
			pointerHandled = false;
		}, 100);
	}

	function handleClick(category: (typeof soundCategories)[number]) {
		if (!pointerHandled) {
			playRandomSound(category);
		}
	}

	function handleKeyDown(
		e: KeyboardEvent,
		category: (typeof soundCategories)[number],
	) {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			pointerHandled = true;
			playRandomSound(category);
			setTimeout(() => {
				pointerHandled = false;
			}, 100);
		}
	}
</script>

<main>
	<h1>Dino Soundboard</h1>
	<div class="grid" style="--count: {soundCategories.length}">
		{#each soundCategories as category (category.name)}
			<button
				type="button"
				style="background: {category.color}"
				on:pointerdown={() => handlePointerDown(category)}
				on:keydown={(e) => handleKeyDown(e, category)}
				on:click={() => handleClick(category)}
			>
				{category.name}
			</button>
		{/each}
	</div>
	<button type="button" class="stop-btn" on:click={stopAll}>
		Stop All
	</button>
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

	.stop-btn {
		width: 100%;
		margin-top: 16px;
		min-height: 56px;
		font-size: 1.15rem;
		font-weight: 600;
		border: 2px solid #ff4444;
		border-radius: 12px;
		background: transparent;
		color: #ff4444;
		cursor: pointer;
		touch-action: manipulation;
		-webkit-tap-highlight-color: transparent;
		user-select: none;
		transition:
			background 0.15s,
			color 0.15s,
			transform 0.1s;
	}

	.stop-btn:hover {
		background: #ff4444;
		color: #fff;
	}

	.stop-btn:active {
		transform: scale(0.97);
	}
</style>
