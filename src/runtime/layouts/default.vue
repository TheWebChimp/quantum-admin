<template>
	<div class="layout">
		<header>Header</header>
		<section>
			<nuxt-page />
		</section>
		<footer>Footer</footer>
	</div>
</template>

<script setup>
	useHead({
		title: 'I\'m a layout',
	});
</script>

<style>
</style>