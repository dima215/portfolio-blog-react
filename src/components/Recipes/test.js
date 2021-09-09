let withFilter = function () {
    recipesArray
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
        ))
}
withFilter()
