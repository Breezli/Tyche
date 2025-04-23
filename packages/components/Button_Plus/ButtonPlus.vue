<script lang="ts" setup>
	import { defineAsyncComponent, ref } from 'vue'
	import type { ButtonPlusProps } from './types'
	import './style.css'

	defineOptions({
		name: 'VrButtonPlus',
	})

	const props = withDefaults(defineProps<ButtonPlusProps>(), {
		type: 'interactive',
		is: 'button',
	})

	// 使用ref保持组件引用
	const componentMap = {
		interactive: defineAsyncComponent({
			loader: () => import('./Buttons/Interactive.vue'),
			loadingComponent: {
				template: '<div>Loading...</div>',
			},
			errorComponent: {
				template: '<div>Error!</div>',
			},
		}),
		rainbow: defineAsyncComponent({
			loader: () => import('./Buttons/Rainbow.vue'),
			loadingComponent: {
				template: '<div>Loading...</div>',
			},
		}),
		ripple: defineAsyncComponent({
			loader: () => import('./Buttons/Ripple.vue'),
			loadingComponent: {
				template: '<div>Loading...</div>',
			},
		}),
	}

	const currentComponent = ref(componentMap[props.type])
</script>

<template>
	<component :is="props.is" class="vr-button-plus" :class="['button-plus']">
		<Suspense>
			<component :is="currentComponent" v-bind="props">
				<slot />
			</component>
			<template #fallback> Loading... </template>
		</Suspense>
	</component>
</template>
