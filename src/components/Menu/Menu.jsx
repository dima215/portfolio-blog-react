import React from 'react'

import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <nav className="nav">
                <div className="menu-line"></div>
                <ul className="menu">
                    <li>
                        <a href="https://www.google.com/">
                            <Link to="/">Home</Link>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/">
                            <Link to="/recipes">Traditional recipes</Link>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/">
                            <Link to="/category">Category</Link>
                        </a>
                        <ul className="submenu">
                            <li>
                                <a href="https://www.google.com/">
                                    <Link to="/maincourse">Main course</Link>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.google.com/">
                                    <Link to="/snacks">Snacks</Link>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.google.com/">
                                    <Link to="/desert">Dessert</Link>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://www.google.com/">
                            <Link to="/gallery">Image gallery</Link>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/">
                            <Link to="/about">About us</Link>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/">
                            <Link to="/contact">Contact us</Link>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu
