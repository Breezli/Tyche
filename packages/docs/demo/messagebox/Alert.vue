<script setup lang="ts">
	import { VrMessageBox, VrMessage } from 'veyra'

	function openAlert() {
		VrMessageBox.alert('This is a message', 'Title')
			.then((action) => {
				VrMessage.info(`action: ${action}`)
			})
			.catch((action) => {
				VrMessage.warning(`action: ${action}`)
			})
	}
</script>

<template>
	<vr-button @click="openAlert" plain> Click to open the Alert</vr-button>
</template>
