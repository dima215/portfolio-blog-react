import React from 'react'
import Logo from '../../components/Logo/Logo'
import Menu from '../../components/Menu/Menu'
import Slider from '../../components/Slider/Slider'

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
