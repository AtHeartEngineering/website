<script lang="ts">
	import { formatDate } from '$lib/utils'
	export let post: unknown
</script>

<svelte:head>
	{#if post}
		<title>{post.meta.title}</title>
		<meta property="og:type" content="article" />
		<meta property="og:title" content={post.meta.title} />
	{/if}
</svelte:head>

{#if post}
	<article class="mx-3 md:mx-5">
		<hgroup class="sm:pb-3 sm:mb-4 pb-2 mb-2 border-b border-surface-400">
			<h1 class="h2 title">{post.meta.title}</h1>
			<div class="flex flex-row justify-between sm:mt-1 mt-0">
				<div class="h6 date">
					{formatDate(post.meta.date)}
				</div>
				<div class="tags sm:gap-2 gap-1">
					{#if post.meta.tags}
						{#each post.meta.tags as tag}
							<span class="tag sm:px-2 px-1">{tag}</span>
						{/each}
					{/if}
				</div>
			</div>
		</hgroup>
		<main>
			<svelte:component this={post.content} />
		</main>
	</article>
{/if}

<style>
	article main {
		font-family: Arial, Helvetica, sans-serif;
	}

	article .title {
		color: var(--steam-gray-lightest);
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	.date {
		color: var(--steam-gray-lighter);
	}
</style>
