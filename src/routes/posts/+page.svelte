<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data

	const colorList = ['primary', 'secondary', 'tertiary']

	function color(word?: string) {
		console.log(word)
		if (!word) {
			return 'secondary'
		}
		const modColor = colorList.length - 1
		let y = 0
		let i = 0
		while (i < word.length) {
			y += word.charCodeAt(i)
			i++
		}
		return 'ghost-' + colorList[y % modColor]
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
			<header class="card-header pb-4 border-b text-center">
				<h4 class="h4">{post.title}</h4>
				<div class="text-sm">{formatDate(post.date)}</div>
			</header>
			<section class="p-2">{post.description.slice(0, 50)}</section>
			<footer class="card-footer">
				{#if post.tags}
					<div class="flex flex-wrap justify-around gap-2">
						{#each post.tags as tag}
							<span class="tag">{tag.trim()}</span>
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
		border-color: rgb(var(--color-primary-500) / 0.1);
	}

	.card:hover,
	.card:focus,
	.card:active {
		border-width: 1.5px;
	}

	.variant-ghost-primary.card:hover,
	.variant-ghost-primary.card:focus,
	.variant-ghost-primary.card:active {
		border-color: rgb(var(--color-primary-500) / 0.5);
		box-shadow: inset 0 0 50px 2px rgb(var(--color-primary-500) / 0.5) !important;
	}

	.variant-ghost-secondary.card:hover,
	.variant-ghost-secondary.card:focus,
	.variant-ghost-secondary.card:active {
		border-color: rgb(var(--color-secondary-500) / 0.5);
		box-shadow: inset 0 0 50px 2px rgb(var(--color-secondary-500) / 0.5) !important;
	}

	.variant-ghost-tertiary.card:hover,
	.variant-ghost-tertiary.card:focus,
	.variant-ghost-tertiary.card:active {
		border-color: rgb(var(--color-tertiary-500) / 0.5);
		box-shadow: inset 0 0 50px 2px rgb(var(--color-tertiary-500) / 0.5) !important;
	}
</style>
