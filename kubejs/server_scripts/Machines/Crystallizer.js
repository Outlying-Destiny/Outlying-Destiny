ServerEvents.recipes(event => {

    //Remove Old Recipes
    event.remove({id:/thermal:machines\/crystallizer\/crystallizer_.+/})


})