import React from 'react'

import { Route } from 'react-router-dom'
import HomePage from '../../pages/Home/HomePage'
import GalleryPage from '../../pages/Gallery/GalleryPage'
import AboutPage from '../../pages/About/AboutPage'
import ContactPage from '../../pages/Contact/ContactPage'
import RecipesPage from '../../pages/Recipes/RecipesPage'
import CategoryPage from '../../pages/Category/CategoryPage'
import MainCoursePage from '../../pages/Category/MainCoursePage'
import SnacksPage from '../../pages/Category/SnacksPage'
import DessertPage from '../../pages/Category/DessertPage'

const Main = () => {
    return (
        <>
            <Route path="/" exact component={HomePage} />
            <Route path="/recipes" exact component={RecipesPage} />
            <Route path="/maincourse" exact component={MainCoursePage} />
            <Route path="/snacks" exact component={SnacksPage} />
            <Route path="/dessert" exact component={DessertPage} />
            <Route path="/category" exact component={CategoryPage} />
            <Route path="/gallery" exact component={GalleryPage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/contact" exact render={() => <ContactPage />} />
        </>
    )
}

export default Main
