<script lang="ts" setup>
	import { ref, watchEffect } from 'vue'
	import type { ButtonPlusProps } from '../types'

	defineOptions({
		name: 'VrRippleButton',
	})

	const props = withDefaults(defineProps<ButtonPlusProps>(), {
		rippleColor: '#ADD8E6',
		duration: 600,
	})

	const emit = defineEmits<{
		(e: 'click', event: MouseEvent): void
	}>()

	const rippleButtonRef = ref<HTMLButtonElement | null>(null)
	const buttonRipples = ref<
		Array<{ x: number; y: number; size: number; key: number }>
	>([])

	function handleClick(event: MouseEvent) {
		createRipple(event)
		emit('click', event)
	}

	function createRipple(event: MouseEvent) {
		const button = rippleButtonRef.value
		if (!button) return

		const rect = button.getBoundingClientRect()
		const size = Math.max(rect.width, rect.height)
		const x = event.clientX - rect.left - size / 2
		const y = event.clientY - rect.top - size / 2

		buttonRipples.value.push({ x, y, size, key: Date.now() })
	}

	watchEffect(() => {
		if (buttonRipples.value.length > 0) {
			const timer = setTimeout(() => {
				buttonRipples.value.shift()
			}, props.duration)
			return () => clearTimeout(timer)
		}
	})
</script>

<template>
	<button
		ref="rippleButtonRef"
		class="ripple-button"
		:style="{
			'--duration': props.duration + 'ms',
			'--ripple-color': props.rippleColor,
		}"
		@click="handleClick">
		<div class="ripple-content">
			<slot />
		</div>

		<span class="ripple-container">
			<span
				v-for="ripple in buttonRipples"
				:key="ripple.key"
				class="ripple-effect"
				:style="{
					width: ripple.size + 'px',
					height: ripple.size + 'px',
					top: ripple.y + 'px',
					left: ripple.x + 'px',
				}" />
		</span>
	</button>
</template>

<style scoped>
	.ripple-button {
		position: relative;
		display: flex;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: 0.7rem;
		border: 2px #e5e7eb solid;
		background-color: #fff;
		padding: 0.5rem 1rem;
		text-align: center;
	}

	.ripple-content {
		position: relative;
		z-index: 10;
	}

	.ripple-container {
		position: absolute;
		pointer-events: none;
		inset: 0;
	}

	.ripple-effect {
		position: absolute;
		border-radius: 50%;
		background-color: var(--ripple-color);
		opacity: 0.3;
		transform: scale(0);
		animation: ripple var(--duration) ease-out;
	}

	@keyframes ripple {
		0% {
			opacity: 1;
		}
		100% {
			transform: scale(2);
			opacity: 0;
		}
	}
</style>
