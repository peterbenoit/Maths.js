// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Maths.js',
			description: 'A lightweight JavaScript library for statistical and numeric helpers — average, median, mode, GCD, LCM, clamp, percentile, and more. Works in Node and the browser. Under 1kb compressed.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/peterbenoit/Maths.js' }],
			head: [
				{ tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
				{ tag: 'meta', attrs: { property: 'og:site_name', content: 'Maths.js' } },
				{ tag: 'meta', attrs: { property: 'og:description', content: 'A lightweight JavaScript library for statistical and numeric helpers — average, median, mode, GCD, LCM, clamp, percentile, and more.' } },
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary' } },
				{ tag: 'meta', attrs: { name: 'twitter:creator', content: '@peterbenoit' } },
				{ tag: 'meta', attrs: { name: 'author', content: 'Peter Benoit' } },
				{ tag: 'meta', attrs: { name: 'keywords', content: 'javascript, math, statistics, utility, average, median, mode, gcd, lcm, clamp, percentile, lightweight' } },
			],
			components: {
				Footer: './src/components/Footer.astro',
			},
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
