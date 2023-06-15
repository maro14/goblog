import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
    <nav className='navbar'>
        <Link to="/">HOME</Link>
        <Link to="/search">Search</Link>
        <Link to="/add">Add</Link>
    </nav>
    )
}