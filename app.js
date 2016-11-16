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
        var isVegan = data.recipes[0].vegan
        var isGlutenFree = data.recipes[0].glutenFree
        var isVegetarian = data.recipes[0].vegetarian
        var isDairyFree = data.recipes[0].dairyFree

        $('#recipeImage').attr('src', image);
        $('#recipeName').attr('href', link);
        $('#recipeName').text(recipeName)
        $('#instructions').text(instructions)
        $('#servings').text(servings + ' servings')
        $('#ready').text('Ready in ' + readyIn + ' minutes')
        $('#seeRecipe').attr('href', link);


        if (isVegan === false) {
            $('#isVegan').css('display', 'none')
        } else {
            $('#isVegan').css('display', 'flex')
        }
        if (isGlutenFree === false) {
            $('#isGlutenFree').css('display', 'none')
        } else {
            $('#isGlutenFree').css('display', 'flex')
        }
        if (isVegetarian === false) {
            $('#isVegetarian').css('display', 'none')
        } else {
            $('#isVegetarian').css('display', 'flex')
        }
        if (isGlutenFree === false) {
            $('#isDairyFree').css('display', 'none')
        } else {
            $('#isDairyFree').css('display', 'flex')
        }
    }
    console.log(isVegan);
    console.log(isGlutenFree);

}

$('.arrows').click(function() {
    getRandomRecipe()
});

getRandomRecipe()


var $myUser = $('.user').val()


$('#submit').click(localStorage.setItem('name', $myUser))

console.log($myUser);
