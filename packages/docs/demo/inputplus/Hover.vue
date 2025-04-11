<script setup>
	import { ref } from 'vue'
	const inputValue = ref('')
</script>

<template>
	<vr-input-plus
		v-model="inputValue"
		placeholder="Enter text..."
		class="input-element"
		container-class="input-container" />
</template>
