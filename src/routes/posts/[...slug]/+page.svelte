<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
	console.log(data.meta)
</script>

<svelte:head>
	{#if data}
		<title>{data.meta.title}</title>
		<meta property="og:type" content="article" />
		<meta property="og:title" content={data.meta.title} />
	{/if}
</svelte:head>

{#if data}
	<article class="mx-3 md:mx-5">
		<hgroup>
			<h1 class="h2">{data.meta.title}</h1>
			<div class="flex flex-cols justify-between">
				<div class="h5">Published at {formatDate(data.meta.date)}</div>
				<div class="tags">
					{#if data.meta.categories}
						{#each data.meta.categories as category}
							<span class="surface-4">&num;{category}</span>
						{/each}
					{/if}
				</div>
			</div>
		</hgroup>
		<main>
			<svelte:component this={data.content} />
		</main>
	</article>
{/if}

<style>
	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}
</style>
