import {
	defineNuxtModule,
	addPlugin,
	addRouteMiddleware,
	createResolver,
	addComponent,
	extendPages,
	addLayout,
} from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: 'quantumAdmin',
		configKey: 'quantumAdmin'
	},
	// Default configuration options of the Nuxt module
	defaults: {},
	// Shorthand sugar to register Nuxt hooks
	hooks: {},
	setup(options, nuxt) {
		// @ts-ignore
		const resolver = createResolver(import.meta.url)

		// Add the global CSS file
		nuxt.options.css.push(resolver.resolve('./runtime/assets/styles/main.scss'));

		// Middlewares -------------------------------------------------------------------------------------------------

		addRouteMiddleware({
			name: 'auth',
			path: resolver.resolve('./runtime/middleware/auth.ts')
		})

		/*addRouteMiddleware({
			name: 'guest',
			path: resolver.resolve('./runtime/middleware/guest.ts'),
			global: true
		})*/

		// Plugins -----------------------------------------------------------------------------------------------------

		// Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
		addPlugin(resolver.resolve('./runtime/plugin'))
		addPlugin(resolver.resolve('./runtime/plugins/useBootstrap.client.ts'))

		// Components --------------------------------------------------------------------------------------------------

		addComponent({
			name: 'Foo',
			global: true,
			filePath: resolver.resolve('./runtime/components/Foo.vue')
		})

		addComponent({
			name: 'ColorModeSwitch',
			global: true,
			filePath: resolver.resolve('./runtime/components/ColorModeSwitch.vue')
		})

		addComponent({
			name: 'LoginForm',
			global: true,
			filePath: resolver.resolve('./runtime/components/LoginForm.vue')
		})

		addComponent({
			name: 'UserDropdown',
			global: true,
			filePath: resolver.resolve('./runtime/components/UserDropdown.vue')
		})

		// Layouts -----------------------------------------------------------------------------------------------------

		addLayout(resolver.resolve('./runtime/layouts/default.vue'), 'quantum-admin')

		addLayout(resolver.resolve('./runtime/layouts/platform.vue'), 'quantum-admin-platform')

		// Pages -------------------------------------------------------------------------------------------------------

		extendPages((pages) => {

			pages.push({
				name: 'quantum-bar',
				path: '/hello',
				file: resolver.resolve('./runtime/pages/bar.vue')
			})

			pages.push({
				name: 'quantum-login',
				path: '/login',
				file: resolver.resolve('./runtime/pages/login.vue')
			})

			console.log(pages)
		})
	}
})
