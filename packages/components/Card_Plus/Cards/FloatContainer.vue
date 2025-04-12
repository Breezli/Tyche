<template>
	<component
		:is="as"
		ref="refElement"
		:class="[
			'w-fit',
			'transition',
			'duration-500',
			'ease-in-out',
			props.class,
		]">
		<slot />
	</component>
</template>

<script setup lang="ts">
	import { inject, ref, watch, type Ref } from 'vue'

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

	// 假设 `useMouseState` 是一个自定义钩子，假设 `mouseState` 已注入
	const mouseState = inject('use3DCardMouseState') as {
		isMouseEntered: Ref<boolean>
	}

	function handleAnimation(isMouseEntered: boolean) {
		if (import.meta.env.SSR) return // 避免 SSR 时执行
		if (!refElement.value) return

		const transform = isMouseEntered
			? `translateX(${props.translateX}px) translateY(${props.translateY}px) translateZ(${props.translateZ}px) rotateX(${props.rotateX}deg) rotateY(${props.rotateY}deg) rotateZ(${props.rotateZ}deg)`
			: `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`

		refElement.value.style.transform = transform
	}

	// 监听 mouseState 的变化
	watch(
		() => mouseState.isMouseEntered.value,
		(isMouseEntered) => handleAnimation(isMouseEntered),
		{ immediate: true }
	)
</script>

<style scoped>
	/* 将静态样式移到此处 */
	.w-fit {
		width: fit-content;
	}

	.transition {
		transition: all 0.5s ease;
	}

	.duration-500 {
		transition-duration: 500ms;
	}

	.ease-in-out {
		transition-timing-function: ease-in-out;
	}
</style>
