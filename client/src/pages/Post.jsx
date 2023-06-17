import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams} from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const Post = () => {
    let { id } = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {

        const fetchPost = async() => {
            try {
                const { data } = await axios.get(`http://localhost:5000/${id}`)
                setPost(data)
            } catch (err) {
                console.error("Error fetching posts:", err.message);
            }
        }
        fetchPost()
    }, [])

    return (
        <div className='post'>
            <Navbar/>
            <h1>{post.title}</h1>
            <h2>
                Posting by {post.author} - {post.category}
            </h2>
            <p>{post.content}</p>
        </div>
    )
}
