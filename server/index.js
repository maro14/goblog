import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { dbConnect } from './database/mongodb.js'
dbConnect()

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

import { postRouter } from "./routes/post.js"
app.use('/post', postRouter)

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
})