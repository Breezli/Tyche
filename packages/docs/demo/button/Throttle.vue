<script setup>
	// import { VrMessage } from "veyra";
	function handleBtnClick() {
		VrMessage.info('btn click')
	}
</script>

<template>
	<p>
		<vr-button @click="handleBtnClick"> with throttle</vr-button>
		<vr-button @click="handleBtnClick" :use-throttle="false"
			>without throttle</vr-button
		>
	</p>
</template>

