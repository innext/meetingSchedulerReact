import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <NavLink to="/table">Data Table</NavLink> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar