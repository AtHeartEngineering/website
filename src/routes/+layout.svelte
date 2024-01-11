<script lang="ts">
	import Footer from './footer.svelte'
	import Header from './header.svelte'
	import PageTransition from './transition.svelte'
	import { AppShell } from '@skeletonlabs/skeleton'
	import '../app.postcss'

	export let data
</script>

<AppShell class="bg-steam-gray-dark">
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<div class="max-w-[900px] m-auto p-2 sm:p-5">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</div>
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>
