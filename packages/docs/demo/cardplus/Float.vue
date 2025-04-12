<template>
	<!-- 容器 -->
	<!-- <vr-card-plus type="contain" class="custom-container"> -->
	<!-- 内容 -->
	<!-- <vr-card-plus type="body" class="custom-body"> -->
	<!-- <vr-card-plus type="item" :translate-z="50" class="text-xl font-bold">
				Floating Text
			</vr-card-plus> -->

	<!-- <vr-card-plus
				type="body"
				:translate-z="100"
				:rotate-x="100"
				class="mt-4">
				<img
					src="https://bu.dusays.com/2025/03/08/67cc1dcb3434f.jpg"
					class="rounded-xl" />
			</vr-card-plus> -->

	<!-- <vr-card-plus type="item" :translate-z="50" class="text-xl font-bold">
				Floating Text
			</vr-card-plus>

			<vr-card-plus type="item" :translate-z="50" class="text-xl font-bold">
				<vr-button-plus>点击了解</vr-button-plus>
			</vr-card-plus> -->
	<!-- </vr-card-plus> -->
	<!-- <vr-card-plus type="body" class="custom-body"></vr-card-plus> -->
	<!-- </vr-card-plus> -->
	<vr-card-plus type="contain" class="contain"
		><vr-card-plus type="body" class="body"
			><vr-card-plus type="item" class="item"
				><img
					src="https://bu.dusays.com/2025/03/08/67cc1dcb3434f.jpg"
					class="rounded-xl" /></vr-card-plus></vr-card-plus
	></vr-card-plus>
	<vr-card-plus type="body" class="body"></vr-card-plus>
	<vr-card-plus type="item" class="item"></vr-card-plus>
</template>

<style scoped>
	.rounded-xl {
		border-radius: calc(0.75rem + 4px);
	}
	/*
	.custom-container {
		transform-style: preserve-3d;
	}
	.custom-body {
		transform-style: preserve-3d;
		background-color: rgb(240, 240, 240);
	} */
	.contain {
		transform-style: preserve-3d;
	}
	.body {
		position: relative;
		width: auto;
		height: auto;
		border-radius: 1rem; /* rounded-xl */
		border: 1px solid rgba(0, 0, 0, 0.1); /* border border-black/[0.1] */
		background-color: #f9fafb; /* bg-gray-50 */
		padding: 1.5rem; /* p-6 */
		transform-style: preserve-3d;
	}
	.body:hover {
		transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg)
			rotateY(0deg) rotateZ(0deg);
	}
	.item {
		margin-top: 1rem;
		width: fit-content; /* w-fit */
		transition-property: all; /* transition */
		transition-duration: 0.5s; /* duration-500 */
		transition-timing-function: cubic-bezier(
			0.42,
			0,
			0.58,
			1
		); /* ease-in-out */
		font-size: 1.25rem; /* text-xl */
		line-height: 1.75rem;
	}
	.item:hover {
		transform: translateX(0px) translateY(0px) translateZ(100px) rotateX(0deg)
			rotateY(0deg) rotateZ(0deg);
	}
</style>
