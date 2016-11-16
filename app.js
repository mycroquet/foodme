function getRandomRecipe() {
    $.ajax({
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false',
        headers: {
            'X-Mashape-Key': 'GOGW0xr8qymshxN4nRHm0XFgvOfJp1zMGFujsnMBwfLBfmA1pY',
            Accept: 'application/json'
        },
        success: recipeImage,
        type: 'GET',
    })

    function recipeImage(data) {
        var recipeName = data.recipes[0].title
        var ingredients = data.recipes[0].extendedIngredients[0]
        var image = data.recipes[0].image
        var instructions = data.recipes[0].instructions
        var link = data.recipes[0].sourceUrl
        var servings = data.recipes[0].servings
        var readyIn = data.recipes[0].readyInMinutes

        $('#recipeImage').attr('src', image);
        $('#recipeName').attr('href', link);
        $('#recipeName').text(recipeName)
        $('#instructions').text(instructions)
        $('#servings').text(servings + ' servings')
        $('#ready').text('Ready in ' + readyIn + ' minutes')
    }

}

$('.arrows').click(function() {
  getRandomRecipe()
});

getRandomRecipe()
