import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { dbConnect } from './database/mongodb.js'
dbConnect()

const app = express()

//const corsOptions = {
//    origin: "http://localhost:3000",
//    credentials: true,
//    allowedHeaders: ["sessionId", "Content-Type"],
//    exposedHeaders: ["sessionId"],
//    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//    preflightContinue: false,
//}

app.use(express.json())
app.use(morgan("dev"))
// Enable CORS with specific options
app.use(cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));


import { postRouter } from "./routes/post.js"
app.use('/', postRouter)

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
})