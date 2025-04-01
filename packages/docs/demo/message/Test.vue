<script lang="ts" setup>
	import { VrMessage } from 'veyra'

	const open1 = () => {
		VrMessage({
			message: 'Congrats, this is a success message.',
			type: 'success',
		})
	}
	const open2 = () => {
		VrMessage.success('Congrats, this is a success message.')
	}
</script>
<template>
	<div>
		<vr-button @click="open1">插件式调用</vr-button>
		<vr-button @click="open2">函数式调用</vr-button>
		<vr-button @click="$message.success('Congrats, this is a success message.')"
			>全局方法调用</vr-button
		>
	</div>
</template>
