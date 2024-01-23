<template>
	<div class="platform-layout d-flex align-items-stretch flex-grow-1">
		<aside class="border-end">
		</aside>

		<main class="d-flex flex-column flex-grow-1">
			<header class="border-bottom d-flex justify-content-end">
				<user-dropdown />
			</header>
			<section class="flex-grow-1">
				<nuxt-page />
			</section>
			<footer class="border-top p-2">
				Quantum Admin
			</footer>
		</main>
	</div>
</template>

<script setup>
	// Set title
	definePageMeta({ title: 'Quantum Admin' });

	// use middleware
	definePageMeta({ middleware: 'auth' });

</script>

<style lang="sass" scoped>

	.platform-layout
		aside
			flex-basis: 250px
			background: var(--bs-dark)

	.dropdown-toggle
		&:hover
			background: var(--bs-dark)
			color: var(--bs-light)

</style>