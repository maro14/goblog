import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams} from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const Post = () => {
    const { id } = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        const fetchPost = async() => {
            const { data } = await axios.get(`http://localhost:2000/${id}`)
            setPost(data)
        }
        fetchPost()
    })

    return (
        <div className='post'>
            <Navbar/>
            <h1>{post.title}</h1>
            <h2>
                par {post.author} - {post.category}
            </h2>
            <p>{post.content}</p>
        </div>
    )
}
