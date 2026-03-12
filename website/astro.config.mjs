// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Maths.js Docs',
			description: 'Lightweight JavaScript utilities for statistics and numeric helpers.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/peterbenoit/Maths.js' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Getting Started', slug: 'guides/getting-started' },
						{ label: 'Browser Usage', slug: 'guides/browser-usage' },
						{ label: 'Node Usage', slug: 'guides/node-usage' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'API Reference', slug: 'reference/api' },
						{ label: 'Error Handling', slug: 'reference/errors' },
					],
				},
			],
		}),
	],
});
