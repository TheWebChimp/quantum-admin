<template>
	<div class="login-page d-flex flex-grow-1 align-items-stretch">
		<div class="form-wrapper d-flex flex-column justify-content-evenly p-3">
			<div class="pre-area text-end">
				<color-mode-switch class="color-mode btn-sm" :classes="{ buttons: 'btn-sm' }" />
			</div>

			<div class="logo-area">
			</div>
			<div class="controls-area py-5 flex-grow-1 d-flex flex-column justify-content-center align-items-center">
				<login-form class="login-form" />
			</div>
			<div class="post-area">
			</div>

		</div>

		<div class="background-wrapper d-flex flex-grow-1">
		</div>
	</div>
</template>

<script setup>
	definePageMeta({ title: 'Login' });

</script>

<style scoped lang="sass">
	$xs: 0
	$sm: 576px
	$md: 768px
	$lg: 992px
	$xl: 1200px
	$xxl: 1400px

	.login-form
		width: 80%

	.login-page
		--background-area: rgba(var(--bs-secondary-rgb), 25%)

	.form-wrapper
		position: absolute
		left: 50%
		top: 50%
		width: 80vw
		min-height: 40dvh
		background-color: var(--bs-body-bg)
		z-index: 10
		transform: translate(-50%, -50%)
		box-shadow: var(--bs-box-shadow)

		@media (min-width: $md)
			flex-basis: 600px
			max-width: 50%
			height: auto
			position: relative
			transform: none
			left: auto
			top: auto
			box-shadow: none

	.background-wrapper
		background-color: var(--background-area)
		position: fixed
		left: 0
		top: 0
		width: 100%
		height: 100%

		@media (min-width: $sm)
			position: relative
			width: auto
			height: auto
</style>