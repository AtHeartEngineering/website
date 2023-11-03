import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'

async function getPosts() {
	let posts: Post[] = []
	const paths = import.meta.glob('/src/posts/**/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.replace('/src/posts/', '').replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			const post = { ...metadata, slug } satisfies Post
			const subfolder = slug.split('/')
			if (subfolder.length > 1) {
				post.categories = [subfolder[0], ...(post.categories || [])]
			}
			console.log(post)
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
