<script lang="ts">
	import * as config from '$lib/config'
	import { AppBar } from '@skeletonlabs/skeleton'
	import { page } from '$app/stores'
	import logo from '$lib/images/ahe.png'

	const btnStyle = 'btn btn-sm'
	const btnStyleActive = 'btn btn-sm active'
</script>

<AppBar background="bg-steam-gray-darker" border="border-b border-surface-700">
	<svelte:fragment slot="lead">
		<a href="/" class="flex flex-row">
			<img src={logo} alt="logo" class="w-8 h-8 me-2 logo" />
			<h1 class="h3 title logo">{config.title}</h1></a
		>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="links">
			<a
				class={$page.url.pathname === '/posts' ? btnStyleActive : btnStyle}
				href="/posts"
				title="Posts"
			>
				<span class="material-symbols-outlined"> article </span>
				<div>Posts</div>
			</a>
			<a
				class={$page.url.pathname === '/contact' ? btnStyleActive : btnStyle}
				href="/contact"
				title="Contact"
			>
				<span class="material-symbols-outlined"> send </span>
				<div>Contact</div>
			</a>
			<a class="btn btn-sm" href="/rss.xml" target="_blank" title="RSS Feed">
				<span class="material-symbols-outlined"> rss_feed </span>
				<div>RSS</div>
			</a>
			<a
				class="btn btn-sm"
				href="https://github.com/AtHeartEngineering/website"
				target="_blank"
				title="github"
			>
				<span class="material-symbols-outlined"> code </span>
				<div>Code</div>
			</a>
		</div>
	</svelte:fragment>
</AppBar>

<style>
	.title:hover,
	.title:focus {
		text-shadow: 0px 0px 3px black, 2px -2px 3px rgb(var(--color-primary-500)),
			2px 2px 3px rgb(var(--color-tertiary-500)), -2px -2px 3px rgb(var(--color-secondary-500));
	}
	.links {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		gap: 0.7em;
	}

	.links a {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.2em;
		color: var(--steam-gray-lightest);
	}

	.links a div {
		margin: 0;
		text-transform: capitalize;
	}

	.btn:hover,
	.btn:focus {
		background: rgba(70, 198, 47, 0.4);
		box-shadow: inset 0 0 20px -10px var(--steam-green-bright);
		text-shadow: 0px 0px 4px var(--steam-gray-dark), 0px 0px 8px var(--steam-gray-darkest);
	}
</style>
