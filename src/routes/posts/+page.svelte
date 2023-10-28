<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data
	console.log(data)
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="posts flex flex-row flex-wrap justify-evenly gap-5">
	{#each data.posts as post}
		<a class="card flex flex-col justify-between items-center" href={`posts/${post.slug}`}>
			<header class="card-header pb-4 border-b-2">
				<h4 class="h4">{post.title}</h4>
			</header>
			<section class="p-4">{post.description.slice(0, 50)}</section>
			<footer class="card-footer"><div class="h6">{formatDate(post.date)}</div></footer>
		</a>
	{/each}
</section>

<style>
	.card {
		flex: 1 0 28%;
	}
</style>
