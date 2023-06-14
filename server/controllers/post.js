import { Post } from '../models/post.js'


export const allPosts = async(req, res) => {
    try {
        const posts = await Post.find()
                                .sort({ createdAt: -1 })
        res.status(200).json({ data: posts })
    } catch (err) {
        res.status(400).json({ data: err })
    }
}

export const addPost = async(req, res) => {
    try {
        const addedPost = new Post({
            title: req.body.title,
            category: req.body.category,
            author: req.body.author,
            content: req.body.content,
        })
        const post = await addedPost.save()
        res.status(201).json({ data: post })
    } catch (err) {
        res.status(400).json({ data: err.message })
    }
}

export const testRouter = async(req, res) => {
    res.status(200).send("OK fron post")
}