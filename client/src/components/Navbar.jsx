import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            <h1>Go Blog</h1>
        </div>
        <div className='navbar-link'>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/add">Post</Link>
        </div>

    </nav>
    )
}
