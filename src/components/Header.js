import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    render() {
        return (
            <div className="Header">
                <h1 className="title">Puppyfinder</h1>
                <nav>
                    <ul>
                        <li Link to='/'>Search</li>
                        <li Link to='/favorites'>My Favorites</li>
                        <li Link to='/about'>About</li>

                    </ul>

                </nav>

            </div>

        )

}

export default Header;