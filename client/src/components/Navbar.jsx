import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
    <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/add">Post</Link>
    </nav>
    )
}
