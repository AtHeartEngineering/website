import type { Post } from '$lib/types.js'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	console.log(params)
	try {
		const postPath = `../../../posts/${params.slug}.md`
		const post = await import(postPath /* @vite-ignore */)
		if (post) {
			const subfolder = params.slug.split('/')
			if (typeof post.metadata.tags == 'string') {
				post.metadata.tags = post.metadata.tags.split(',')
			}
			if (subfolder.length > 1) {
				post.metadata.tags = [subfolder[0], ...(post.metadata.tags || [])]
			} else {
				post.metadata.tags = [...(post.metadata.tags || [])]
			}
			post.metadata.tags = [...new Set(post.metadata.tags)]
			return {
				content: post.default,
				meta: post.metadata
			}
		} else {
			return null
		}
	} catch (e) {
		console.error(e)
		throw error(404, `Could not find ${params.slug}`)
	}
}
