import { useState } from 'react';
import axios from 'axios';
import { Navbar } from '../components/Navbar';
import { Card } from '../components/Card';

export const SearchPost = () => {
    const [query, setQuery] = useState('');
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchPosts = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data } = await axios.get(`http://localhost:5000/search/${query}`);
            setPosts(data);
        } catch (error) {
            console.error(error);
            alert('Error fetching posts. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="search">
                <form onSubmit={searchPosts}>
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for posts"
                        disabled={loading}
                    />
                    <input type="submit" value="Search" disabled={loading} />
                </form>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    posts.length === 0 ? (
                        <p>No posts found.</p>
                    ) : (
                        posts.map((post) => (
                            <Card
                                key={post._id}
                                id={post._id}
                                title={post.title}
                                category={post.category}
                                author={post.author}
                            />
                        ))
                    )
                )}
            </div>
        </>
    );
};
