import { Schema, model } from 'mongoose'

const postSchema = new Schema({
    title: String,
    category: String,
    author: String,
    content: String,
    
}, {timestamps: true})


export const Post = model('post', postSchema) 