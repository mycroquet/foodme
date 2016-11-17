var lastRecipeArray = []
var currentRecipe = -1

function getRandomRecipe() {
    $.ajax({
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false',
        headers: {
            'X-Mashape-Key': 'GOGW0xr8qymshxN4nRHm0XFgvOfJp1zMGFujsnMBwfLBfmA1pY',
            Accept: 'application/json'
        },
        success: recipe,
        type: 'GET',
    })


    function recipe(data) {
        var recipeInfo = {
            recipeName: data.recipes[0].title,
            ingredients: data.recipes[0].extendedIngredients[0],
            image: data.recipes[0].image,
            instructions: data.recipes[0].instructions,
            link: data.recipes[0].sourceUrl,
            servings: data.recipes[0].servings,
            readyIn: data.recipes[0].readyInMinutes,
            isVegan: data.recipes[0].vegan,
            isGlutenFree: data.recipes[0].glutenFree,
            isVegetarian: data.recipes[0].vegetarian,
            isDairyFree: data.recipes[0].dairyFree
        }
        lastRecipeArray.push(recipeInfo)
        currentRecipe++
        console.log(lastRecipeArray);

        $('#recipeImage').attr('src', recipeInfo.image);
        $('#recipeName').attr('href', recipeInfo.link);
        $('#recipeName').text(recipeInfo.recipeName)
        $('#instructions').text(recipeInfo.instructions)
        $('#servings').text(recipeInfo.servings + ' servings')
        $('#ready').text('Ready in ' + recipeInfo.readyIn + ' minutes')
        // $('#seeRecipe').attr('href', recipeInfo.link);

        // Controls which icons appear in figcaption
        if (recipeInfo.isVegan === false) {
            $('#isVegan').css('display', 'none')
        } else {
            $('#isVegan').css('display', 'flex')
        }
        if (recipeInfo.isGlutenFree === false) {
            $('#isGlutenFree').css('display', 'none')
        } else {
            $('#isGlutenFree').css('display', 'flex')
        }
        if (recipeInfo.isVegetarian === false) {
            $('#isVegetarian').css('display', 'none')
        } else {
            $('#isVegetarian').css('display', 'flex')
        }
        if (recipeInfo.isDairyFree === false) {
            $('#isDairyFree').css('display', 'none')
        } else {
            $('#isDairyFree').css('display', 'flex')
        }
    }
}
getRandomRecipe()

// Go to next/last recipe
$('.arrow-next').click(function() {

    if (currentRecipe === lastRecipeArray.length - 1) {
        console.log(lastRecipeArray.length - 1);
        getRandomRecipe()
    } else {
        currentRecipe++
        nextRecipe(lastRecipeArray[currentRecipe])
    }

    // check to see if currentRecipe is the length of the lastRecipeArray - 1
    // if not increment currentRecipe and set recipe from array
    // else get a new random recipe
});

$('.arrow-previous').click(function() {
    currentRecipe--
    nextRecipe(lastRecipeArray[currentRecipe])
        // recipeInfo = lastRecipeArray[currentRecipe]
        // counter = (counter + 1) % lastRecipeArray.length;
    console.log(recipeInfo);
    if (currentRecipe-- === currentRecipe[0]) {
        $('.arrow-previous').css('display', 'none')
    }
})

function nextRecipe(recipeInfo) {
    console.log(recipeInfo);
    $('#recipeImage').attr('src', recipeInfo.image);
    $('#recipeName').attr('href', recipeInfo.link);
    $('#recipeName').text(recipeInfo.recipeName)
    $('#instructions').text(recipeInfo.instructions)
    $('#servings').text(recipeInfo.servings + ' servings')
    $('#ready').text('Ready in ' + recipeInfo.readyIn + ' minutes')
    // $('#seeRecipe').attr('href', recipeInfo.link);
}


// Store user name
// var $myUser = $('.user').val()
//
//
// $('#submit').click(localStorage.setItem('name', $myUser))
//
// console.log($myUser);
