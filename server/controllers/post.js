import { Post } from '../models/post.js'
import { Types } from 'mongoose'


export const getPosts = async(req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 })
        res.status(200).json(posts)
    } catch (err) {
        res.status(400).json(err.message)
    }
}
export const getPost = async(req, res) => {

    const ObjecID = Types.ObjectId
    const { id } = req.params

    if (!ObjecID.isValid(id)) {
        return res.status(400).json("ID unknown : ", id)
    }

    try {
        const post = await Post.findById(id)

        if (!post) {
            return res.status(404).json({ msg: 'No post with this id found'})
        }

        res.status(200).json(post);
    } catch (err) {
        return res.status(400).json(err.message)
    }
}

export const addPost = async(req, res) => {
    try {

        const { title, category, author, content } = req.body

        const addedPost = new Post({
            title,
            category,
            author,
            content,
        })

        const post = await addedPost.save()

        res.status(201).json({ data: post })
    } catch (err) {
        res.status(400).json({ data: err.message })
    }
}

export const searchOnePost = async(req, res) => {
    try {
        const { query } = req.params

        if (query || query.trim() === '') {
          return res.status(400).json({ err: 'Invalid search query' })
        }

        const posts = await Post.find(
            { $text: { $search: query } },
            { score: { $meta: 'textScore' } }
        ).sort({ score: { $meta: 'textScore' } })

        res.status(200).json(posts)
    } catch (err) {
        res.status(400).json(err)
    }
}

export const delPost = async(req, res) => {
  try {
    const { id } = req.params
    const del = await Post.findByIdAndDelete({ id })
    res.status(200).json(del)
  } catch (err) {
    res.status(400).json(err)
  }
}
