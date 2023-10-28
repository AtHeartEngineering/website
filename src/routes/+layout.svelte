<script lang="ts">
	import Footer from './footer.svelte'
	import Header from './header.svelte'
	import PageTransition from './transition.svelte'
	import { AppShell } from '@skeletonlabs/skeleton'
	import '../app.postcss'

	export let data
</script>

<AppShell class="bg-surface-800">
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<main class="m-2 sm:m-4">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>
