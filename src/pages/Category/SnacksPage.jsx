import React from 'react'
import RecipesList from '../../components/Recipes/RecipesList'

const SnacksPage = () => {
    const filtrationCondition = 'Snacks'
    return (
        <>
            <div className="recipes">
                <h2>Snacks category!</h2>
            </div>
            <RecipesList filtrationCondition={filtrationCondition} />
        </>
    )
}

export default SnacksPage
