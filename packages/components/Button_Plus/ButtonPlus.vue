<script lang="ts" setup>
	import { defineAsyncComponent } from 'vue'
	import type { ButtonPlusProps } from './types'

	defineOptions({
		name: 'VrButtonPlus',
	})

	const props = withDefaults(defineProps<ButtonPlusProps>(), {
		type: 'interactive',
	})

	const componentMap = {
		interactive: defineAsyncComponent(
			() => import('./Buttons/Interactive.vue')
		),
		rainbow: defineAsyncComponent(() => import('./Buttons/Rainbow.vue')),
		ripple: defineAsyncComponent(() => import('./Buttons/Ripple.vue')),
	}
</script>

<template>
	<!-- <button ref="buttonRef" class="vr-button-plus">
		<div class="button-content">
			<div class="button-dot"></div>
			<span class="button-text">
				<slot />
			</span>
		</div>

		<div class="hover-content">
			<span class="hover-text"><slot /></span>
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
	</button> -->
    
	<component :is="props.is" :class="['vr-button-plus', props.class]">
		<component :is="componentMap[props.type]" v-bind="props">
			<slot />
		</component>
	</component>
</template>

<style scoped>
	@import './style.css';
</style>