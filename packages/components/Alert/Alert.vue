<script setup lang="ts">
	import type { AlertProps, AlertEmits, AlertInstance } from './types'
	import { ref, useSlots, computed } from 'vue'
	import { typeIconMap } from '@veyra/utils'
	import VrIcon from '../Icon/Icon.vue'

	defineOptions({
		name: 'VrAlert',
	})
	const props = withDefaults(defineProps<AlertProps>(), {
		effect: 'light',
		type: 'info',
		closable: true,
	})
	const emits = defineEmits<AlertEmits>()
	const slots = useSlots()

	const visible = ref(true)

	const iconName = computed(() => typeIconMap.get(props.type) ?? 'circle-info')
	const withDescription = computed(() => props.description || slots.default)

	function close() {
		visible.value = false
		emits('close')
	}

	function open() {
		visible.value = true
	}

	defineExpose<AlertInstance>({
		open,
		close,
	})
</script>

<template>
	<transition name="vr-alert-fade">
		<div
			v-show="visible"
			class="vr-alert"
			role="alert"
			:class="{
				[`vr-alert__${type}`]: type,
				[`vr-alert__${effect}`]: effect,
				'text-center': center,
			}">
			<vr-icon
				v-if="showIcon"
				class="vr-alert__icon"
				:class="{ 'big-icon': withDescription }"
				:icon="iconName" />
			<div class="vr-alert__content">
				<span
					class="vr-alert__title"
					:class="{ 'with-desc': withDescription }"
					:style="{ display: center && !showIcon ? 'flow' : 'inline' }">
					<slot name="title">{{ title }}</slot>
				</span>
				<p class="vr-alert__description">
					<slot>{{ description }}</slot>
				</p>
				<div class="vr-alert__close" v-if="closable">
					<vr-icon @click.stop="close" icon="xmark" />
				</div>
			</div>
		</div>
	</transition>
</template>

<style scoped>
	@import './style.css';
</style>
