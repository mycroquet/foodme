// $.get('https://www.spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random', recipeImage)
// $.get('response.json', recipeImage)
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
  console.log(data);
    var recipeName = data.recipes[0].title
    var ingredients = data.recipes[0].extendedIngredients[0]
    var image = data.recipes[0].image
    var instructions = data.recipes[0].instructions
    var link = data.recipes[0].sourceUrl
    console.log(recipeName);
    console.log(link);
    console.log(image);
    console.log(instructions);

}
