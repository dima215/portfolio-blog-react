import React from 'react'

import recipes from '../../assets/recipes.png'

const Logo = () => {
    return (
        <>
            <div className="logo">
                <a href="https://www.google.com/">
                    <img src={recipes} alt="" />
                </a>
            </div>
        </>
    )
}

export default Logo
