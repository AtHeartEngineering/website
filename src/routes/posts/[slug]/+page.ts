import { error } from '@sveltejs/kit'

export async function load({ params }) {
	console.log('loading post...')
	try {
		console.debug('Params', params)
		const postPath = `../../../posts/${params.slug}.md`
		console.debug('PostPath', postPath)
		const post = await import(postPath)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		console.error(e)
		throw error(404, `Could not find ${params.slug}`)
	}
}
