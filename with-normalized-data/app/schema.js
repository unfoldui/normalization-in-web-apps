import {schema} from 'normalizr'


const userSchema = new schema.Entity('users')

export const commentSchema = new schema.Entity('comments', {
	user: userSchema
})

export const postSchema = new schema.Entity('posts', {
	user    : userSchema,
	comments: [commentSchema]
})

export const postsSchema = [postSchema]