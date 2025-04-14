<script setup lang="ts">
	import { ref, provide, computed } from 'vue'
	import type { CardPlusProps } from './types'

	defineOptions({
		name: 'VrCardPlus',
	})

	const props = withDefaults(defineProps<CardPlusProps>(), {
		type: 'contain',
		is: 'div',
		perspective: 1000,
		preserve3D: true,
	})

	// 状态管理
	const mouseState = ref({
		isMouseEntered: false,
		setMouseEntered: (value: boolean) => {
			mouseState.value.isMouseEntered = value
		},
	})

	provide('cardMouseState', mouseState)

	// 容器逻辑
	const containerRef = ref<HTMLElement | null>(null)
	const handleMouseMove = (e: MouseEvent) => {
		if (props.type !== 'contain' || !containerRef.value) return

		const { left, top, width, height } =
			containerRef.value.getBoundingClientRect()
		const x = (e.clientX - left - width / 2) / 25
		const y = (e.clientY - top - height / 2) / 25
		containerRef.value.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
	}

	// 动态transform计算
	const dynamicTransform = computed(() => {
		if (props.type !== 'item') return ''

		return `translateX(${props.translateX}px) 
          translateY(${props.translateY}px) 
          translateZ(${props.translateZ}px) 
          rotateX(${props.rotateX}deg) 
          rotateY(${props.rotateY}deg) 
          rotateZ(${props.rotateZ}deg)`
	})
</script>

<template>
	<component
		:is="props.is"
		ref="containerRef"
		:class="[
			'vr-card-plus',
			{
				'card-container': props.type === 'contain',
				'card-body': props.type === 'body',
				'card-item': props.type === 'item',
			},
			props.class,
		]"
		:style="{
			perspective:
				props.type === 'contain' ? `${props.perspective}px` : undefined,
			transform: props.type === 'item' ? dynamicTransform : undefined,
			'transform-style': props.type === 'contain' ? 'preserve-3d' : undefined,
		}"
		@mouseenter="
			props.type === 'contain' ? mouseState.setMouseEntered(true) : null
		"
		@mousemove="handleMouseMove"
		@mouseleave="
			props.type === 'contain' ? mouseState.setMouseEntered(false) : null
		">
		<slot />
	</component>
</template>

<style scoped>
	@import './style.css';
</style>
