<script lang="ts" setup>
	import { VrMessage } from 'veyra'

	const open1 = () => {
		VrMessage('This is a message.')
	}
	const open2 = () => {
		VrMessage({
			message: 'Congrats, this is a success message.',
			type: 'success',
		})
	}
	const open3 = () => {
		VrMessage({
			message: 'Warning, this is a warning message.',
			type: 'warning',
		})
	}
	const open4 = () => {
		VrMessage.error('Oops, this is a error message.')
	}
</script>

<template>
	<vr-button :plain="true" @click="open2">Success</vr-button>
	<vr-button :plain="true" @click="open3">Warning</vr-button>
	<vr-button :plain="true" @click="open1">Message</vr-button>
	<vr-button :plain="true" @click="open4">Error</vr-button>
</template>
