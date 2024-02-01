import { useState, useEffect } from 'react'
import axios from 'axios'
import { Navbar } from '../components/Navbar'
import { Card } from '../components/Card'

/**
 * The Home function is a React component that represents the home page of the application.
 * It fetches posts from the server and renders them as cards.
 *
 * @returns {JSX.Element} The rendered home page component.
 */
export const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async() => {
            try {
                const { data } = await axios.get("http://localhost:5000/")
                setPosts(data)
            } catch (err) {
                console.error("Error fetching posts: " ,err);
            }
        }
        fetchPosts()
    }, [])
    return (
        <div className="home">
            <Navbar />
            <div className="home-card-container">
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
