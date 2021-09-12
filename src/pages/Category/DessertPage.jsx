import React from 'react'
import RecipesList from '../../components/Recipes/RecipesList'

const DessertPage = () => {
    const filtrationCondition = 'Dessert'

    return (
        <>
            <div className="recipes">
                <h2>Dessert category!</h2>
            </div>
            <RecipesList filtrationCondition={filtrationCondition} />
        </>
    )
}

export default DessertPage
