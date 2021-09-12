import React from 'react'
import recipesArray from './recipesArray'
import RecipesListItem from './RecipesListItem'

const RecipesList = ({ filtrationCondition }) => {
    const Variant = filtrationCondition
        ? recipesArray
              .filter(
                  (recipe) =>
                      recipe.category === filtrationCondition ||
                      recipe.render === filtrationCondition
              )
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
              ))
        : recipesArray.map((recipe, idx) => (
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
          ))

    return <>{Variant}</>
}

export default RecipesList
