import React, { useState } from 'react'
import axios from 'axios'
import { Navbar } from '../components/Navbar'
import { Card } from "../components/Card";

export const SearchPost = () => {
    const [query, setQuery] = useState("chd")
    const [posts, setPosts] = useState([])
    
    const searchPosts = async(e) => {
        e.preventDefault()
        const { data } = await axios.get(`http://localhost:2000/search/${query}`)
        setPosts(data)
    }
    return (
    <div className="search">
        <Navbar/>
        <form onSubmit={(e) => searchPosts(e)}>
            <input
                onChange={(e) => setQuery(e.target.value)}
                type='search'
                value={query}
            />
            <input type='submit' value="Reasearch"/>
        </form>
        {posts.map((post) => {
            <Card
                key={post._id}
                id={post._id}
                title={post.title}
                category={post.category}
                author={post.author}
            />
        })}
    </div>
    )
}
