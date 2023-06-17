import { Schema, model } from 'mongoose'

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    
}, { timestamps: true })

postSchema.index({ title: 'text', content: 'text' });

export const Post = model('post', postSchema) 