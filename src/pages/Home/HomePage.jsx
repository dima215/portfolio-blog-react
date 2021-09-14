import React from 'react'
import CookList from '../../components/Cooks/CooksList'
import Slider from '../../components/Slider/Slider'
import RecipesList from '../../components/Recipes/RecipesList'
import { Link } from 'react-router-dom'
import AboutList from '../../components/About/AboutList'
import PhotoGalleryList from '../../components/PhotoGallery/PhotoGalleryList'

const HomePage = () => {
    const filtrationCondition = 'home'
    return (
        <>
            <main>
                <Slider />
                <section>
                    <div className="patterns">
                        <h2>What do we love to cook?</h2>
                    </div>
                    <CookList />
                    <div className="section-line">
                        <div className="line-top"></div>
                        <div className="line-centr"></div>
                        <div className="line-bottom"></div>
                    </div>
                </section>
                <section>
                    <RecipesList filtrationCondition={filtrationCondition} />
                    <div className="recipes">
                        <div className="button button_label">
                            <a href="https://www.google.com/">
                                <span>
                                    Washington stimulates economic growth{' '}
                                </span>
                                <Link to="/recipes">See all posts</Link>
                            </a>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row recipes-content">
                        <AboutList />
                        <PhotoGalleryList />
                    </div>
                    <div className="section-line">
                        <div className="line-top"></div>
                        <div className="line-centr"></div>
                        <div className="line-bottom"></div>
                    </div>
                </section>
                <div className="slider-slick"></div>
            </main>
        </>
    )
}

export default HomePage
