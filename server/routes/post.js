import { Router } from 'express'
import { addPost, getPosts, getPost, searchOnePost } from '../controllers/post.js'

export const postRouter = Router()

postRouter.get('/', getPosts)
postRouter.get('/:id', getPost)
postRouter.get('/search/:query', searchOnePost)
postRouter.post('/', addPost)

