import React from 'react'
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="ui pointing secondary menu">
            <Link to="/jadwal/liga-inggris" className="item">
                Liga Inggris
            </Link>
            <Link to="/jadwal/liga-italia" className="item">
                Liga Italia
            </Link>
            <Link to="/jadwal/liga-spanyol" className="item">
                Liga Spanyol
            </Link>
            <Link to="/jadwal/liga-jerman" className="item">
                Liga Jerman
            </Link>
            <Link to="/jadwal/liga-indonesia" className="item">
                Liga Indonesia
            </Link>
            <Link to="/jadwal/liga-champions" className="item">
                Liga Champions
            </Link>
            <Link to="/about" className="item">
                About
            </Link>
        </div>
    )
}

export default NavBar;