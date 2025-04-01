<script setup lang="ts">
	import { h } from 'vue'
	import { VrMessageBox } from 'veyra'

	function open1() {
		VrMessageBox({
			title: 'Message',
			message: h('p', null, [
				h('span', null, 'Message can be '),
				h('i', { style: 'color: teal' }, 'VNode'),
			]),
		})
	}
</script>

<template>
	<vr-button @click="open1" plain>Common VNode</vr-button>
	<!-- <vr-button @click="open2" plain>Dynamic props</vr-button> -->
</template>
