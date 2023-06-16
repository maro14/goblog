import { useState, useEffect } from 'react'
import axios from 'axios'
import { Navbar } from '../components/Navbar'
import { Card } from '../components/Card'

export const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async() => {
            try {
                const { data } = await axios.get("http://localhost:5000/")
                setPosts(data.data)
            } catch (err) {
                console.error("Error fetching posts: " ,err);
            }
        }
        fetchPosts()
    }, [])
    return (
        <div className="home-container">
            <Navbar />
            <div className="card-container">
                {posts.map((post) => (
                    <Card
                        key={post._id}
                        id={post._id}
                        title={post.title}
                        author={post.author}
                        category={post.category}
                    />
                ))}
            </div>
        </div>
    )
}
