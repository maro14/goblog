import { Router } from 'express'
import { addPost, allPosts, testRouter } from '../controllers/post.js'

export const postRouter = Router()

postRouter.get('/test', testRouter)
postRouter.get('/', allPosts)
postRouter.post('/', addPost)

