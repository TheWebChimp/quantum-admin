import { useAuth } from '../composables/useAuth'
import { useAuthUser } from '../composables/useAuthUser'

export default defineNuxtRouteMiddleware(async (to, from) => {

	const user = useAuthUser();
	const { me } = useAuth();

	if (process.client) {
		const authToken = localStorage.getItem("authToken")
		console.log('authToken', authToken)

		if (authToken) await me(authToken)
		if (!user.value) {
			setTimeout(() => {
				return navigateTo('/login')
			}, 500);
		}
	}
})
