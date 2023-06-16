import { Router } from 'express'
import { addPost, getPosts, getPost,testRouter } from '../controllers/post.js'

export const postRouter = Router()

postRouter.get('/test', testRouter)
postRouter.get('/', getPosts)
postRouter.get('/:id', getPost)
postRouter.post('/', addPost)

