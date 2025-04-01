<script setup lang="ts">
	import { VrMessageBox, VrMessage } from 'veyra'

	function openConfirm() {
		VrMessageBox.confirm(
			'proxy will permanently delete the file. Continue?',
			'Warning',
			{ type: 'warning' }
		)
			.then((action) => {
				VrMessage.info(`action: ${action}`)
			})
			.catch((action) => {
				VrMessage.warning(`action: ${action}`)
			})
	}
</script>

<template>
	<vr-button @click="openConfirm" plain> Click to open the Confirm</vr-button>
</template>
