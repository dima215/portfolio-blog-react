import React from 'react'
import { Link } from 'react-router-dom'
import RecipesList from '../../components/Recipes/RecipesList'

const DessertPage = () => {
    const filtrationCondition = 'Dessert'

    return (
        <>
            <div className="recipes">
                <h2>Dessert category!</h2>
            </div>
            <section>
                <RecipesList filtrationCondition={filtrationCondition} />
                <div className="recipes">
                    <div className="button button_label">
                        <a href="https://www.google.com/">
                            <span>Washington stimulates economic growth </span>
                            <Link to="/recipes">See all posts</Link>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DessertPage
