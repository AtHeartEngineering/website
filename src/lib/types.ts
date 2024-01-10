export type Tags = string

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	tags: Tags[] | string
	category?: string
}
