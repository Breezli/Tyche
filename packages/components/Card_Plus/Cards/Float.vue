<!-- Cards/Float.vue -->
<script setup lang="ts">
	import { ref, watch } from 'vue'

	interface Props {
		translateX?: number | string
		translateY?: number | string
		translateZ?: number | string
		rotateX?: number | string
		rotateY?: number | string
		rotateZ?: number | string
		class?: string // 接收外部传递的 class
	}

	const props = defineProps<Props>()

	const containerRef = ref<HTMLElement | null>(null)
	const mouseState = {
		isMouseEntered: ref(false),
		setMouseEntered: (value: boolean) =>
			(mouseState.isMouseEntered.value = value),
	}

	const handleMouseMove = (e: MouseEvent) => {
		if (!containerRef.value) return
		const { left, top, width, height } =
			containerRef.value.getBoundingClientRect()
		const x = (e.clientX - left - width / 2) / 25
		const y = (e.clientY - top - height / 2) / 25
		containerRef.value.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
	}

	const resetTransform = () => {
		if (!containerRef.value) return
		containerRef.value.style.transform = `rotateY(0deg) rotateX(0deg)`
	}

	watch(
		mouseState.isMouseEntered,
		(isEntered) => {
			if (isEntered) {
				containerRef.value?.addEventListener('mousemove', handleMouseMove)
			} else {
				containerRef.value?.removeEventListener('mousemove', handleMouseMove)
				resetTransform()
			}
		},
		{ immediate: true }
	)
</script>

<template>
	<div ref="containerRef" :class="['float-card', props.class]">
		<!-- 将内联样式移至 CSS -->
		<div
			class="card-item"
			:style="{
				transform: `translateX(${props.translateX || 0}px) translateY(${props.translateY || 0}px) translateZ(${props.translateZ || 0}px) rotateX(${props.rotateX || 0}deg) rotateY(${props.rotateY || 0}deg) rotateZ(${props.rotateZ || 0}deg)`,
			}">
			<slot />
		</div>
	</div>
</template>

<style scoped>
	/* 将所有静态样式集中到此处 */
	.float-card {
		position: relative;
		width: 100px;
		height: 100px;
		cursor: pointer;
		transition: transform 0.3s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 200ms ease;
		transform-style: preserve-3d; /* 从 HTML 移至此 */
		perspective: 1000px; /* 从 HTML 移至此 */
		background-color: aqua;
	}

	.card-item {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		background-color: brown;
	}
</style>
