<template>
	<div class="site-user ms-auto d-flex align-items-center p-2 position-relative">
		<p class="mb-0">Welcome <strong>Admin</strong></p>
		<img
			src=""
			class="avatar ratio ratio-1x1 rounded-circle ms-2"
			alt=""
		>
		<div class="user-menu position-absolute top-100 w-100 end-0">
			<ul class="dropdown-menu">
				<li>
					<a
						class="dropdown-item"
						href="#"
						@click.prevent="logout"
					>Logout</a>
				</li>
				<li class="p-2">
					<color-mode-switch class="w-100" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
	import { useAuth } from '../composables/useAuth.js';
	const { logout } = useAuth();

</script>

<style lang="sass" scoped>

	.site-user
		.avatar
			width: 30px
			border: 1px solid var(--bs-border-color)

		&:hover
			.user-menu
				.dropdown-menu
					border-top: 1px solid var(--bs-border-color)
					border-top-left-radius: 0
					border-top-right-radius: 0
					display: block
</style>