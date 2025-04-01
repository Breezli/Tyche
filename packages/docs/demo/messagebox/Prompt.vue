<script setup lang="ts">
	import { VrMessageBox, VrMessage } from 'veyra'

	function openConfirm() {
		VrMessageBox.prompt('Place input your name', 'Tip', { type: 'info' })
			.then(({ value }) => {
				VrMessage.info(`your name is: ${value}`)
			})
			.catch((action) => {
				VrMessage.warning(`action: ${action}`)
			})
	}
</script>

<template>
	<vr-button @click="openConfirm" plain> Click to open the Confirm</vr-button>
</template>
