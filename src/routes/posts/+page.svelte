<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data

	const colorList = ['primary', 'tertiary', 'error', 'success']
	const styleList = ['ghost', 'soft', 'filled']

	function color(word?: string) {
		console.log(word)
		if (!word) {
			return 'secondary'
		}
		const modColor = colorList.length - 1
		const modStyle = styleList.length - 1
		let y = 0
		let i = 0
		while (i < word.length) {
			y += word.charCodeAt(i)
			i++
		}
		return styleList[y % modStyle] + '-' + colorList[y % modColor]
	}
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="posts flex flex-row flex-wrap justify-evenly gap-5">
	{#each data.posts as post}
		<a
			class={'card flex flex-col justify-between items-center p-5 max-w-[50ch] variant-' +
				color(post.category)}
			href={`posts/${post.slug}`}
		>
			<header class="card-header pb-4 border-b-2 text-center">
				<h4 class="h4">{post.title}</h4>
				<div class="text-sm">{formatDate(post.date)}</div>
			</header>
			<section class="p-2">{post.description.slice(0, 50)}</section>
			<footer class="card-footer">
				{#if post.tags}
					<div class="font-mono text-sm flex flex-wrap justify-around">
						{#each post.tags as tag}
							<span class="mx-1">#{tag.trim()}</span>
						{/each}
					</div>
				{/if}
			</footer>
		</a>
	{/each}
</section>

<style>
	a.card {
		flex: 1 0 28%;
		border-width: 1.5px;
		border-color: rgb(var(--color-tertiary-500) / 0.1);
	}
	a.card:hover,
	a.card:focus,
	a.card:active {
		background: transparent;
		border-width: 1.5px;
		border-color: rgb(var(--color-tertiary-500) / 0.5);
	}
</style>
