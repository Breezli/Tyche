<script setup lang="ts">
	import type { InputProps } from './types'
	import { ref, computed, watch } from 'vue'
	import './style.css'

	defineOptions({
		inheritAttrs: false,
		name: 'VrInputPlus', // 确保名称正确
	})

	const props = withDefaults(defineProps<InputProps>(), {
		defaultValue: '',
		containerClass: '',
	})

	const emits = defineEmits<{
		(e: 'update:modelValue', payload: string | number): void
	}>()

	const isHovered = ref(false)
	const innerValue = ref(props.defaultValue ?? props.modelValue ?? '')

	watch(
		() => props.modelValue,
		(newVal) => {
			innerValue.value = newVal ?? ''
		}
	)

	watch(innerValue, (newVal) => {
		emits('update:modelValue', newVal)
	})

	const inputContainerRef = ref<HTMLDivElement | null>(null)
	const mouse = ref({ x: 0, y: 0 })
	const radius = 100
	const visible = ref(false)

	const containerBg = computed(() => {
		return visible.value
			? `radial-gradient(${radius}px circle at ${mouse.value.x}px ${mouse.value.y}px, var(--blue-500), transparent 80%)`
			: 'transparent' // 使用 transparent 而不是 none
	})

	function handleMouseMove(e: MouseEvent) {
		if (!inputContainerRef.value) return
		const rect = inputContainerRef.value.getBoundingClientRect()
		mouse.value = { x: e.clientX - rect.left, y: e.clientY - rect.top }
	}
</script>

<template>
	<div
		ref="inputContainerRef"
		class="input-container group/input"
		:class="containerClass"
		:style="{ background: containerBg }"
		@mouseenter="
			visible = true;
			isHovered = true
		"
		@mouseleave="
			visible = false;
			isHovered = false
		"
		@mousemove="handleMouseMove">
		<input
			v-bind="$attrs"
			v-model="innerValue"
			class="input-element"
			:class="props.class"
			:style="{ boxShadow: isHovered ? 'none' : '' }" />
	</div>
</template>
