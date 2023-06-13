import { Router } from 'express'
import { allPosts, testRouter } from '../controllers/post.js'

export const postRouter = Router()

postRouter.get('/', testRouter)

