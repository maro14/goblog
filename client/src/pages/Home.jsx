import { useState, useEffect } from 'react'
import axios from 'axios'
import { Navbar } from '../components/Navbar'
import { Card } from '../components/Card'

export const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async() => {
            const { data } = await axios.get("http://localhost:5000/post/")
            setPosts(data)
        }
        fetchPosts()
    })
    return (
    <div>
        <Navbar/>
        {posts.map((post) => {
            <Card
                key={post._id}
                id={post._id}
                title={post.title}
                author={post.author}
                category={post.category}
            />
        })}
    </div>
    )
}
