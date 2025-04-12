<template>
	<div :class="['h-96', 'w-96', $props.class]" class="card-container">
		<slot />
	</div>
</template>

<script setup lang="ts">
	defineProps({
		class: String,
	})
</script>

<style scoped>
	/* 将静态样式移至此处 */
	.card-container {
		transform-style: preserve-3d;
	}

	/* 如果需要自定义 Tailwind 类的替代 CSS（可选） */
	.h-96 {
		height: 24rem;
	}
	.w-96 {
		width: 24rem;
	}
</style>
