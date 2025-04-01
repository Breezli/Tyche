<script lang="ts" setup>
	import { h } from 'vue'
	import { VrMessage } from 'veyra'

	const open = () => {
		VrMessage('This is a message.')
	}

	const openVn = () => {
		VrMessage({
			message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
				h('span', null, 'Message can be '),
				h('i', { style: 'color: teal' }, 'VNode'),
			]),
		})
	}
</script>

<template>
	<vr-button :plain="true" @click="open">Show message</vr-button>
	<vr-button :plain="true" @click="openVn">VNode</vr-button>
</template>
