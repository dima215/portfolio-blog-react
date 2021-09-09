import React from 'react'
import Logo from '../../components/Logo/Logo'
import Menu from '../../components/Menu/Menu'

const Header = () => {
    return (
        <>
            <header className="header">
                <Logo />
                <Menu />
            </header>
        </>
    )
}

export default Header
