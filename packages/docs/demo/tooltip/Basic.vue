<template>
	<div class="tooltip-base-box">
		<div class="row center">
			<vr-tooltip
				class="box-item"
				content="Top Left prompts info"
				placement="top-start">
				<vr-button>top-start</vr-button>
			</vr-tooltip>
			<vr-tooltip
				class="box-item"
				content="Top Center prompts info"
				placement="top">
				<vr-button>top</vr-button>
			</vr-tooltip>
			<vr-tooltip
				class="box-item"
				content="Top Right prompts info"
				placement="top-end">
				<vr-button>top-end</vr-button>
			</vr-tooltip>
		</div>
		<div class="row">
			<vr-tooltip
				class="box-item"
				content="Left Top prompts info"
				placement="left-start">
				<vr-button>left-start</vr-button>
			</vr-tooltip>
			<vr-tooltip
				class="box-item"
				content="Right Top prompts info"
				placement="right-start">
				<vr-button>right-start</vr-button>
			</vr-tooltip>
		</div>
		<div class="row">
			<vr-tooltip
				class="box-item"
				content="Left Center prompts info"
				placement="left">
				<vr-button class="mt-3 mb-3">left</vr-button>
			</vr-tooltip>
			<vr-tooltip
				class="box-item"
				content="Right Center prompts info"
				placement="right">
				<vr-button>right</vr-button>
			</vr-tooltip>
		</div>
		<div class="row">
			<vr-tooltip
				class="box-item"
				content="Left Bottom prompts info"
				placement="left-end">
				<vr-button>left-end</vr-button>
			</vr-tooltip>
			<vr-tooltip
				class="box-item"
				content="Right Bottom prompts info"
				placement="right-end">
				<vr-button>right-end</vr-button>
			</vr-tooltip>
		</div>
		<div class="row center">
			<vr-tooltip
				class="box-item"
				content="Bottom Left prompts info"
				placement="bottom-start">
				<vr-button>bottom-start</vr-button>
			</vr-tooltip>
			<vr-tooltip
				class="box-item"
				content="Bottom Center prompts info"
				placement="bottom">
				<vr-button>bottom</vr-button>
			</vr-tooltip>
			<vr-tooltip
				class="box-item"
				content="Bottom Right prompts info"
				placement="bottom-end">
				<vr-button>bottom-end</vr-button>
			</vr-tooltip>
		</div>
	</div>
</template>

<style>
	.tooltip-base-box {
		width: 600px;
	}
	.tooltip-base-box .row {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.tooltip-base-box .center {
		justify-content: center;
	}
	.tooltip-base-box .box-item {
		width: 110px;
		margin-top: 10px;
	}
</style>
