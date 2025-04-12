<script setup lang="ts">
	import { inject, ref, watch } from 'vue'

	const props = defineProps({
		as: { type: String, default: 'div' },
		class: String,
		translateX: { type: [Number, String], default: 0 },
		translateY: { type: [Number, String], default: 0 },
		translateZ: { type: [Number, String], default: 0 },
		rotateX: { type: [Number, String], default: 0 },
		rotateY: { type: [Number, String], default: 0 },
		rotateZ: { type: [Number, String], default: 0 },
	})

	const refElement = ref<HTMLElement | null>(null)

	interface MouseState {
		isMouseEntered: { value: boolean }
	}

	const mouseState = inject<MouseState>('use3DCardMouseState')!

	watch(
		() => mouseState.isMouseEntered.value,
		(isEntered) => {
			if (!refElement.value) return

			const transform = isEntered
				? `translateX(${props.translateX}px) translateY(${props.translateY}px) translateZ(${props.translateZ}px) 
         rotateX(${props.rotateX}deg) rotateY(${props.rotateY}deg) rotateZ(${props.rotateZ}deg)`
				: 'translateX(0) translateY(0) translateZ(0) rotateX(0) rotateY(0) rotateZ(0)'

			refElement.value.style.transform = transform
		},
		{ immediate: true }
	)
</script>

<template>
	<component
		:is="props.as"
		ref="refElement"
		:class="[
			'float-item',
			'transition-3d', // 统一过渡类
			props.class,
		]">
		<slot />
	</component>
</template>

<style scoped>
	.float-item {
		transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
		transform-style: preserve-3d;
		will-change: transform;
		transform: translateZ(0);
	}
</style>
