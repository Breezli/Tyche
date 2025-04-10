<script setup lang="ts">
	import { computed } from 'vue'
	import type { ButtonPlusProps } from '../types'

	defineOptions({
		name: 'VrRainbowButton',
	})

	const props = withDefaults(defineProps<ButtonPlusProps>(), {
		speed: 2,
		is: 'button',
	})

	const speedInSeconds = computed(() => `${props.speed}s`)
</script>

<template>
	<component
		:is="is"
		class="vr-button-plus rainbow-button"
		:style="{ '--speed': speedInSeconds }">
		<slot />
	</component>
</template>

<style scoped>
	.rainbow-button {
		/* Base Styles */
		--color-1: hsl(0 100% 63%);
		--color-2: hsl(270 100% 63%);
		--color-3: hsl(210 100% 63%);
		--color-4: hsl(195 100% 63%);
		--color-5: hsl(90 100% 63%);

		position: relative;
		display: inline-flex;
		height: 2.75rem;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		border-radius: 0.75rem;
		border: 0;
		padding: 0.5rem 2rem;
		font-weight: 500;
		color: var(--primary-foreground);
		transition: all 0.3s ease;
		background-size: 200%;
		background-clip: padding-box, border-box, border-box;
		background-origin: border-box;
		outline: none;

		/* Light Mode Gradient */
		background-image:
			linear-gradient(#121213, #121213),
			linear-gradient(
				#121213 50%,
				rgba(18, 18, 19, 0.6) 80%,
				rgba(18, 18, 19, 0)
			),
			linear-gradient(
				90deg,
				var(--color-1),
				var(--color-5),
				var(--color-3),
				var(--color-4),
				var(--color-2)
			);

		/* Dark Mode Gradient */
		@media (prefers-color-scheme: dark) {
			background-image:
				linear-gradient(#fff, #fff),
				linear-gradient(
					#fff 50%,
					rgba(255, 255, 255, 0.6) 80%,
					rgba(0, 0, 0, 0)
				),
				linear-gradient(
					90deg,
					var(--color-1),
					var(--color-5),
					var(--color-3),
					var(--color-4),
					var(--color-2)
				);
		}

		/* Pseudo-element for glow effect */
		&::before {
			content: '';
			position: absolute;
			bottom: -20%;
			left: 50%;
			z-index: 0;
			height: 20%;
			width: 60%;
			transform: translateX(-50%);
			background: linear-gradient(
				90deg,
				var(--color-1),
				var(--color-5),
				var(--color-3),
				var(--color-4),
				var(--color-2)
			);
			background-size: 200%;
			filter: blur(0.8rem);
			animation: rainbow var(--speed) infinite linear;
		}

		/* States */
		&:focus-visible {
			box-shadow: 0 0 0 1px var(--ring);
		}

		&:disabled {
			pointer-events: none;
			opacity: 0.5;
		}

		/* Animation */
		animation: rainbow var(--speed) infinite linear;
	}

	@keyframes rainbow {
		0% {
			background-position: 0;
		}
		100% {
			background-position: 200%;
		}
	}
</style>
