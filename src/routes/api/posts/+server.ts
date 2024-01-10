import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'

async function getPosts() {
	let posts: Post[] = []
	let paths = import.meta.glob('/src/posts/**/*.md', { eager: true })
	// let newPaths: Record<string, unknown>
	// if (folder) {
	// 	Object.keys(paths).forEach((x) => {
	// 		if (x.includes(`/src/posts/${folder}`)) {
	// 			newPaths.x = paths.x
	// 		}
	// 	})
	// 	paths = newPaths ? newPaths : ({} as Record<string, unknown>)
	// }

	for (const path in paths) {
		const file = paths[path]
		const slug = path.replace('/src/posts/', '').replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			const post = { ...metadata, slug } satisfies Post
			const subfolder = slug.split('/')
			post.category = subfolder[0]
			if (typeof post.tags == 'string') {
				post.tags = post.tags.split(',')
			}
			if (subfolder.length > 1) {
				post.tags = [subfolder[0], ...(post.tags || [])]
			} else {
				post.tags = [...(post.tags || [])]
			}
			post.tags = [...new Set(post.tags)]
			posts.push(post)
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return posts
}

export async function GET() {
	const posts = await getPosts()
	return json(posts)
}
