import React from 'react'
import RecipesList from '../../components/Recipes/RecipesList'

const RecipesPage = () => {
    const filtrationCondition = false
    return (
        <>
            <RecipesList filtrationCondition={filtrationCondition} />
        </>
    )
}

export default RecipesPage
