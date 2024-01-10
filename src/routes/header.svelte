<script lang="ts">
	import * as config from '$lib/config'
	import { AppBar } from '@skeletonlabs/skeleton'
	import { page } from '$app/stores'
	import logo from '$lib/images/ahe.png'

	const btnStyle = 'btn btn-sm variant-ghost-surface'
	const btnStyleActive = 'btn btn-sm variant-ghost-surface active'
</script>

<AppBar background="bg-gray-950">
	<svelte:fragment slot="lead">
		<a href="/" class="flex flex-row">
			<img src={logo} alt="logo" class="w-8 h-8 me-2 logo" />
			<h1 class="h3 gradient-heading logo">{config.title}</h1></a
		>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<a
			href="/about"
			class={$page.url.pathname === '/about' ? btnStyleActive : btnStyle}
			title="About"
		>
			<span class="material-symbols-outlined"> question_mark </span>
		</a>
		<a
			class={$page.url.pathname === '/posts' ? btnStyleActive : btnStyle}
			href="/posts"
			title="Posts"><span class="material-symbols-outlined"> article </span></a
		>
		<a
			class={$page.url.pathname === '/contact' ? btnStyleActive : btnStyle}
			href="/contact"
			title="Contact"><span class="material-symbols-outlined"> send </span></a
		>
		<a class="btn btn-sm variant-ghost-surface" href="/rss.xml" target="_blank" title="RSS Feed"
			><span class="material-symbols-outlined"> rss_feed </span></a
		>
		<a
			class="btn btn-sm variant-ghost-surface"
			href="https://github.com/AtHeartEngineering/website"
			target="_blank"
			title="github"><span class="material-symbols-outlined"> code </span></a
		>
	</svelte:fragment>
</AppBar>
