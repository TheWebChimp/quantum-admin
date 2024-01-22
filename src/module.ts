import { defineNuxtModule, addPlugin, createResolver, addComponent, extendPages, addLayout } from '@nuxt/kit'

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

		// Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
		addPlugin(resolver.resolve('./runtime/plugin'))

		addComponent({
			name: 'Foo',
			global: true,
			filePath: resolver.resolve('./runtime/components/Foo.vue')
		})

		addLayout(resolver.resolve('./runtime/layouts/default.vue'), 'quantum-admin')

		extendPages((pages) => {

			pages.push({
				name: 'quantum-bar',
				path: '/hello',
				file: resolver.resolve('./runtime/pages/bar.vue')
			})

			console.log(pages)
		})
	}
})
