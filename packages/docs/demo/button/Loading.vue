<template>
	<div>
		<vr-button type="primary" loading>Loading</vr-button>
		<vr-button type="primary" loading-icon="circle-notch" loading
			>Loading</vr-button
		>
		<vr-button type="primary" loading>
			<template #loading>
				<vr-icon style="margin-right: 6px" icon="star" spin />
			</template>
			Loading
		</vr-button>
	</div>
</template>
