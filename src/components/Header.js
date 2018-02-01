import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

        return (
            <div className="Header">
                <h1 className="title">Puppyfinder</h1>
                <nav>
                    <ul>
                        <li><Link to='/'>Search</Link></li>
                        <li><Link to='/Favorites'> Favorites</Link></li>
                        <li><Link to='/About'>About</Link></li>
                    </ul>
                </nav>
            </div>
        )

}

export default Header;