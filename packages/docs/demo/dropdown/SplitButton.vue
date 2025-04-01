<script setup lang="ts">
	import { type DropdownItemProps, VrMessage } from 'veyra'

	const items: DropdownItemProps[] = [
		{ command: '1', label: 'Action 1' },
		{ command: '2', label: 'Action 2' },
		{ command: '3', label: 'Action 3', disabled: true },
		{ command: '4', label: 'Action 4', divided: true },
	]

	function handleClick() {
		VrMessage.info('button click')
	}
</script>

<template>
	<div class="row">
		<vr-dropdown :items="items">
			<vr-button type="primary">
				Dropdown List
				<vr-icon icon="angle-down" style="margin-left: 8px" />
			</vr-button>
		</vr-dropdown>
		<vr-dropdown
			:items="items"
			type="primary"
			@click="handleClick"
			split-button>
			Dropdown List
		</vr-dropdown>
	</div>
</template>

<style scoped>
	.row div {
		margin-right: 16px;
	}
</style>
