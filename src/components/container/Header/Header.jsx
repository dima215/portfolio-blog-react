import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Slider from './Slider/Slider'

const Header = () => {
    return (
        <>
            <header className="header">
                <Logo />
                <Menu />
                <Slider />
            </header>
        </>
    )
}

export default Header
