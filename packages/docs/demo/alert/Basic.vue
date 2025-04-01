<template>
	<h2>通过 slot 传入内容</h2>
	<div style="max-width: 600px">
		<vr-alert type="success">Success alert</vr-alert>
		<vr-alert type="info">Info alert</vr-alert>
		<vr-alert type="warning">Warning alert</vr-alert>
		<vr-alert type="danger">Error alert</vr-alert>
	</div>
	<h2>通过 prop 传入内容</h2>
	<div style="max-width: 600px">
		<vr-alert type="success" title="Success alert" />
		<vr-alert type="info" title="Info alert" />
		<vr-alert type="warning" title="Warning alert" />
		<vr-alert type="danger" title="Error alert" />
	</div>
</template>
