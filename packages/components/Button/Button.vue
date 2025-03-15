<script setup lang="ts">
	import { ref } from 'vue'
	import type { ButtonProps } from './types'

	defineOptions({
		name: 'ErButton',
	})

	const props = withDefaults(defineProps<ButtonProps>(), {
		//默认值
		tag: 'button',
		nativeType: 'button',
	})

	const slots = defineSlots()

	const _ref = ref<HTMLButtonElement>() //通过 ref 获取组件根元素的引用（类型为 HTMLButtonElement）
</script>

<template>
	<component
		:is="props.tag"
		ref="_ref"
		class="er-button"
		:type="props.tag === 'button' ? props.nativeType : void 0"
		:disabled="props.disabled || props.loading"
		@click="$emit('click')"
		:class="{
			[`er-button--${props.type}`]: props.type,
			[`er-button--${props.size}`]: props.size,
			'is-plain': props.plain,
			'is-round': props.round,
			'is-circle': props.circle,
			'is-disabled': props.disabled,
			'is-loading': props.loading,
		}">
		<slot></slot>
	</component>
</template>

<style scoped>
	@import './style.css';
</style>
