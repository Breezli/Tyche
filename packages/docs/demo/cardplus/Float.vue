<template>
	<div class="box">
		<vr-card-plus type="contain" class="contain"
			><vr-card-plus type="body" class="body">
				<vr-card-plus type="item" class="item title"
					><div>Make things float in air</div></vr-card-plus
				>
				<vr-card-plus type="item" class="item"
					><div>
						Make things float in airMake things float in air
					</div></vr-card-plus
				>
				<vr-card-plus
					type="item"
					class="item"
					:translate-z="100"
					:rotate-x="20"
					:rotate-z="-10"
					><img
						src="https://bu.dusays.com/2025/03/08/67cc1dcb3434f.jpg"
						class="rounded-xl"
				/></vr-card-plus>
				<vr-card-plus type="item" class="item"
					><div class="footer">
						<div>Visit →</div>
						<vr-button-plus type="interactive">Get Started</vr-button-plus>
					</div></vr-card-plus
				></vr-card-plus
			></vr-card-plus
		>
	</div>
</template>

<style scoped>
	.box {
		display: flex;
		justify-content: center;
		align-items: center;
		transform-style: preserve-3d;
		perspective: 1000px;
	}
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
		width: 30rem;
		transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg)
			rotateY(0deg) rotateZ(0deg);
		perspective: 1000px;
	}
	.title {
		font-weight: 600; /* font-semibold */
		font-size: 1.25rem; /* text-2xl */
		line-height: 1.75rem; /* leading-8 */
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
		margin-bottom: 0.5rem;
		width: 100%; /* w-fit */
		transition-property: all; /* transition */
		transition-duration: 0.5s; /* duration-500 */
		transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
		max-width: 24rem;
	}
	.item:hover {
		transform: translateX(0px) translateY(0px) translateZ(50px) rotateX(0deg)
			rotateY(0deg) rotateZ(0deg);
	}
	.footer {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 2.5rem;
	}
</style>
