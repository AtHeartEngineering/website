<script lang="ts">
	import Footer from './footer.svelte'
	import Header from './header.svelte'
	import PageTransition from './transition.svelte'
	import { AppShell } from '@skeletonlabs/skeleton'
	import { resizeCanvas, draw } from '$lib/bg'
	import '../app.postcss'
	import { onMount } from 'svelte'

	let bg_canvas: HTMLCanvasElement
	let bg_ctx: CanvasRenderingContext2D | null

	function whenResized() {
		bg_canvas.width = window.innerWidth
		bg_canvas.height = window.innerHeight
		resizeCanvas(bg_canvas)
	}

	function drawOnCanvas() {
		if (bg_ctx) {
			draw(bg_canvas, bg_ctx)
		}
	}

	onMount(() => {
		bg_canvas = document.getElementById('bg-canvas') as HTMLCanvasElement
		bg_ctx = bg_canvas.getContext('2d')
		if (bg_ctx) {
			bg_canvas.width = window.outerWidth
			bg_canvas.height = window.outerHeight
			resizeCanvas(bg_canvas)
			window.addEventListener('resize', whenResized, false)
			setInterval(drawOnCanvas, 20)
		}
	})

	export let data
</script>

<AppShell class="bg-transparent">
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<div class="max-w-[900px] m-auto p-2 sm:p-5">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</div>
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>
