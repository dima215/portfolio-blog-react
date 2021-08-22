import React from 'react'

const Menu = () => {
    return (
        <>
            <nav className="nav">
                <div className="menu-line"></div>
                <ul className="menu">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Traditional recipes</a>
                    </li>
                    <li>
                        <a href="#">Image gallery</a>
                    </li>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">Contact us</a>
                    </li>
                    <li>
                        <a href="#">Buy now</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu
