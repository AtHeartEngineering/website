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
		<hgroup>
			<h1 class="h2">{post.meta.title}</h1>
			<div class="flex flex-cols justify-between">
				<div class="h5 mb-2">Published at {formatDate(post.meta.date)}</div>
				<div class="tags">
					{#if post.meta.tags}
						{#each post.meta.tags as tag}
							<div class="badge variant-ghost-tertiary mx-1">
								<span class="px-2">{tag}</span>
							</div>
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
	hgroup {
		padding: 1.25em 1.5em 0 1.5em;
		background: linear-gradient(to right, rgb(var(--color-tertiary-700) / 0.5), transparent);
		border-bottom: 1px solid rgb(var(--color-tertiary-500));
		border-top-left-radius: 12px;
		border-top-right-radius: 12px;
	}

	.tags {
		--radius-round: 5px;
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
		position: relative;
		top: 1px;
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	main {
		padding: 1.25em 1.5em 0 1.5em;
	}
</style>
