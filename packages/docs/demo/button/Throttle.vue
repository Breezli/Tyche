<script setup>
	// import { VrMessage } from "veyra";
	function handleBtnClick() {
		VrMessage.info('btn click')
	}
</script>

<template>
	<p>
		<vr-button @click="handleBtnClick"> with throttle</vr-button>
		<vr-button :use-throttle="false" @click="handleBtnClick"
			>without throttle</vr-button
		>
	</p>
</template>
