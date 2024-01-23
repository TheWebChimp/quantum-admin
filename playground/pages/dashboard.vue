<template>
	<div>
		<p>Dashboard</p>
		<color-mode-switch />
		<pre>{{ user }}</pre>
	</div>
</template>

<script setup>
	import { useAuthUser } from '../../src/runtime/composables/useAuthUser.js';
	definePageMeta({ layout: 'quantum-admin-platform', middleware: 'auth' });

	const user = useAuthUser();
</script>

<style scoped>
</style>