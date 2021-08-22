import React from 'react'

const Menu = () => {
    return (
        <>
            <nav className="nav">
                <div className="menu-line"></div>
                <ul className="menu">
                    <li>
                        <a href="https://www.google.com/">Home</a>
                    </li>
                    <li>
                        <a href="https://www.google.com/">
                            Traditional recipes
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/">Image gallery</a>
                    </li>
                    <li>
                        <a href="https://www.google.com/">About us</a>
                    </li>
                    <li>
                        <a href="https://www.google.com/">Contact us</a>
                    </li>
                    <li>
                        <a href="https://www.google.com/">Buy now</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu
