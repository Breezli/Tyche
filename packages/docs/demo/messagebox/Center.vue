<script setup lang="ts">
	import { VrMessage, VrMessageBox } from 'veyra'

	function openMsgBox() {
		VrMessageBox.confirm(
			'proxy will permanently delete the file. Continue?',
			'Warning',
			{
				type: 'warning',
				center: true,
				// 这里展示一下 不用 Promise 写法的时候
				callback(action) {
					if (action === 'confirm') {
						VrMessage.info(action)
					} else {
						VrMessage.warning(action as string)
					}
				},
			}
		)
	}
</script>

<template>
	<vr-button @click="openMsgBox" plain>Click to open Message Box</vr-button>
</template>
