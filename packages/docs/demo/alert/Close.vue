<script setup>
	import { VrMessage } from 'veyra'

	function handleClose() {
		VrMessage.info('close callback')
	}
</script>
<template>
	<div class="basic block">
		<vr-alert title="Unclosable alert" type="success" :closable="false" />
		<vr-alert title="Alert with callback" type="warning" @close="handleClose" />
	</div>
</template>
