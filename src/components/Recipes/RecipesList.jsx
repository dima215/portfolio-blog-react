import React from 'react'
import recipesArray from './recipesArray'
import RecipesListItem from './RecipesListItem'

const RecipesList = () => {
    return (
        <>
            <div className="recipes">
                <h2>Newest recipes!</h2>
            </div>

            {recipesArray
                .filter((recipe) => recipe.render === 'home')
                .map((recipe, idx) => (
                    <RecipesListItem
                        key={idx}
                        id={recipe.id}
                        img={recipe.img}
                        name={recipe.name}
                        description={recipe.description}
                        linkComments={recipe.linkComments}
                        linkRead={recipe.linkRead}
                        imgTextDocument={recipe.imgTextDocument}
                        imgChatMessage={recipe.imgChatMessage}
                        category={recipe.category}
                    />
                ))}
        </>
    )
}

export default RecipesList
