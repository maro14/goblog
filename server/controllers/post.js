import { Post } from '../models/post.js'


export const allPosts = async(req, res) => {
    try {
        const posts = await Post.find()
                                .sort({ createAt: -1 })
        res.status(200).json({ data: posts })
    } catch (err) {
        res.status(400).json({ data: err })
    }
}

export const addPost = async(req, res) => {
    try {
        const addedPost = new Post({
            name: req.body.name
        })
        const post = addedPost.save()
        res.status(201).json({ data: post })
    } catch (err) {
        res.status(400).json({ data: err })
    }
}

export const testRouter = async(req, res) => {
    res.status(200).send("OK fron post")
}