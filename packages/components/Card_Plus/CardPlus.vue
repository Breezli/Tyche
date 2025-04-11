<!-- CardPlus.vue -->
<script setup lang="ts">
	import { defineAsyncComponent, computed } from 'vue'
	import type { CardPlusProps } from './types'

	defineOptions({
		name: 'VrCardPlus',
	})

	const props = withDefaults(defineProps<CardPlusProps>(), {
		type: 'float',
		is: 'div',
		width: 100,
		height: 60,
	})

	const componentMap = {
		// salvage: defineAsyncComponent(() => import('./Cards/Salvage.vue')),
		float: defineAsyncComponent(() => import('./Cards/Float.vue')),
	}

	const currentComponent = computed(() => componentMap[props.type])
</script>

<template>
	<component
		:is="props.is"
		class="vr-card-plus"
		:class="props.class"
		:style="{ width: props.width + 'px', height: props.height + 'px' }">
		<Suspense>
			<component :is="currentComponent" v-bind="props">
				<slot />
			</component>
			<template #fallback>Loading...</template>
		</Suspense>
	</component>
</template>

<style scoped>
	@import './style.css';
</style>
