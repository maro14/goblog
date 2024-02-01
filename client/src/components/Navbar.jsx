import { Link } from 'react-router-dom'

/**
 * Navbar function component.
 *
 * Renders a navigation bar with links to different pages.
 *
 * @returns {JSX.Element} The rendered navigation bar.
 */
export const Navbar = () => {
    return (
    <nav className='navbar'>
        <div className='navbar-link'>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/add">Post</Link>
        </div>

    </nav>
    )
}
