<script lang="ts" setup>
	import { VrMessage } from 'veyra'

	const openCenter = () => {
		VrMessage({
			showClose: true,
			message: 'Centered text',
			center: true,
		})
	}
</script>

<template>
	<vr-button plain @click="openCenter">Centered text</vr-button>
</template>
