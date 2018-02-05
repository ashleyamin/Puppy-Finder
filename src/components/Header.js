import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

        return (
            <div className="Header">
              <header>
                <h3 className="header-title"><i className="em em-dog2"></i>PuppyFinder</h3>
                <nav>
                    <ul>
                        <li><Link to='/'>Search</Link></li>
                        <li><Link to='/Favorites'> Favorites</Link></li>
                        <li><Link to='/About'>About</Link></li>
                    </ul>
                </nav>
              </header>
            </div>
        )

}

export default Header;
