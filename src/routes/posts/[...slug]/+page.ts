import type { Post } from '$lib/types.js'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	console.log(params)
	try {
		const postPath = `../../../posts/${params.slug}.md`
		const post = await import(postPath /* @vite-ignore */)
		const subfolder = params.slug.split('/')
		if (subfolder.length > 1) {
			post.metadata.categories = [subfolder[0], ...(post.metadata.categories || [])]
		}
		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		console.error(e)
		throw error(404, `Could not find ${params.slug}`)
	}
}
