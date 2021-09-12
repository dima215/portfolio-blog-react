import React from 'react'
import RecipesList from '../../components/Recipes/RecipesList'

const MainCoursePage = () => {
    const filtrationCondition = 'Main course'

    return (
        <>
            <div className="recipes">
                <h2>Main course category!</h2>
            </div>
            <RecipesList filtrationCondition={filtrationCondition} />
        </>
    )
}

export default MainCoursePage
