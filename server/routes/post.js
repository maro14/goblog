import { Router } from 'express'
import { addPost, getPosts, testRouter } from '../controllers/post.js'

export const postRouter = Router()

postRouter.get('/test', testRouter)
postRouter.get('/', getPosts)
postRouter.post('/', addPost)

