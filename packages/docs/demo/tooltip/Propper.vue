<script lang="ts" setup>
	import { onMounted, ref } from 'vue'

	const boundary = ref<string | Element>('viewport') // 默认值

	onMounted(() => {
		const customBoundary = document.querySelector('.custom-boundary')
		if (customBoundary) {
			boundary.value = customBoundary
		}
	})

	const options = {
		fallbackPlacements: ['top-start', 'top-end', 'bottom-start', 'bottom-end'],
		padding: { top: 30, right: 5, bottom: 30, left: 5 },
		boundary: boundary.value, // 动态绑定到 ref 值
		rootBoundary: 'document',
		flipVariations: true,
		allowedAutoPlacements: ['top', 'bottom'],
	}
</script>

<template>
	<vr-tooltip
		content="Try to scroll"
		placement="bottom"
		:popperOptions="options">
		<vr-button>尝试向上滚动</vr-button>
	</vr-tooltip>
</template>
