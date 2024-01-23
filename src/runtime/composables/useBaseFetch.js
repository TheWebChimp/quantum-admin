import { useAuth } from './useAuth.js';
import { useAuthUser } from './useAuthUser.js';

export const useBaseFetch = (request, opts = {}) => {
	const config = useRuntimeConfig();
	const auth = useAuth();

	const baseOpts = { baseURL: config.public.baseURL, ...opts };

	// If user is logged in, add token to headers
	const authUser = useAuthUser();

	if(authUser.value) {
		baseOpts.headers = auth.getAuthHeaders();
	}

	return useFetch(request, baseOpts);
};