<script lang="ts" setup>
	defineProps<{
		class?: string
	}>()
</script>

<template>
	<div class="interactive-button">
		<div class="button-content">
			<div class="button-dot"></div>
			<span class="button-text">
				<slot></slot>
			</span>
		</div>

		<div class="hover-content">
			<span class="hover-text"><slot></slot></span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="arrow-icon">
				<path d="M5 12h14" />
				<path d="m12 5 7 7-7 7" />
			</svg>
		</div>
	</div>
</template>

<style scoped>
	.interactive-button {
		position: relative;
		width: auto;
		cursor: pointer;
		overflow: hidden;
		border-radius: 9999px;
		border: 1px solid;
		background-color: var(--vr-color-white);
		font-family: fantasy;
		padding: 0.5rem 1.5rem;
		text-align: center;
		font-weight: 600;
	}

	.button-content {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.button-dot {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 0.375rem;
		background-color: var(--vr-color-black);
		transform: scale(1);
		transition: all 0.3s ease;
	}

	.button-text {
		display: inline-block;
		white-space: nowrap;
		transition: all 0.3s ease;
	}

	.hover-content {
		position: absolute;
		top: 0;
		z-index: 10;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		color: var(--vr-color-white);
		transform: translateX(3rem);
		opacity: 0;
		transition: all 0.3s ease;
	}

	.arrow-icon {
		/* SVG icon styles */
	}

	/* Hover states */
	.vr-button-plus:hover .button-dot {
		transform: scale(40);
	}

	.vr-button-plus:hover .button-text {
		transform: translateX(3rem);
		opacity: 0;
	}

	.vr-button-plus:hover .hover-content {
		transform: translateX(-1.25rem);
		opacity: 1;
	}
</style>
