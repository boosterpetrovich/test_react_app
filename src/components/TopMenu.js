import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../containers/Auth'

import './TopMenu.css'

const TopMenu = () => (
    <nav className="topMenu">
        <Link to="/">Home</Link>
        <Link to="/toys">Toys</Link>
        <Auth />
    </nav>
)

export default TopMenu
