import { Schema, model } from 'mongoose'

const postSchema = new Schema({
    name: String
})


export const Post = model('post', postSchema) 