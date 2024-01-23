<template>
	<form @submit="doLogin">
		<h3 class="mb-0">Welcome</h3>
		<p class="text-muted">Ready to change the world?</p>

		<div class="form-floating mb-3">
			<input
				type="email"
				class="form-control form-control-login"
				id="email"
				autocomplete="username"
				placeholder="Email"
				v-model="credentials.login"
			>
			<label for="email" class="form-label">Email</label>
		</div>
		<div class="form-floating mb-3">
			<input
				type="password"
				class="form-control form-control-login"
				id="password"
				autocomplete="current-password"
				placeholder="Password"
				v-model="credentials.password"
			>
			<label for="password" class="form-label">Password</label>
		</div>
		<button
			type="submit"
			class="btn btn-primary py-3 w-100 btn-login"
		>Start the adventure
		</button>
	</form>
</template>

<script setup>
	import { useAuth } from '../composables/useAuth.js';
	const { login } = useAuth();

	const loading = ref(false);
	const loginError = ref(false);
	const loginErrorMessage = ref('');
	const credentials = ref({
		login: '',
		password: '',
	});

	const doLogin = async (event) => {
		event.preventDefault();

		loading.value = true;
		const { error } = await login(credentials.value);
		loading.value = false;

		loginErrorMessage.value = !!error.value ? error.value.data.message : '';
		loginError.value = !!error.value;

		if(!error.value) await navigateTo('/dashboard');
	};

</script>

<style lang="sass" scoped>

	.form-control-login
		border-radius: 0
		border-width: 0 0 1px
		box-shadow: none
		padding-left: 0
		padding-right: 0

	.btn-login
		border-radius: 0

	.form-floating > label
		padding-left: 0
		padding-right: 0
		left: -0.15rem

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active
		-webkit-box-shadow: 0 0 0 30px var(--bs-body-bg) inset !important

</style>