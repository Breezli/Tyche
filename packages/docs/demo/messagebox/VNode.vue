<script setup lang="ts">
	import { h } from 'vue'
	import { ErMessageBox } from 'tyche'

	function open1() {
		ErMessageBox({
			title: 'Message',
			message: h('p', null, [
				h('span', null, 'Message can be '),
				h('i', { style: 'color: teal' }, 'VNode'),
			]),
		})
	}
</script>

<template>
	<er-button @click="open1" plain>Common VNode</er-button>
	<!-- <er-button @click="open2" plain>Dynamic props</er-button> -->
</template>
