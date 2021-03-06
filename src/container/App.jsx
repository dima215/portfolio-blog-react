import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'
import './App.css'

const App = () => {
    return (
        <>
            <div className="container">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}

export default App
