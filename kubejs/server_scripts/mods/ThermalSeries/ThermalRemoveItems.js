ServerEvents.recipes(event => {

    //Dynamos
    event.remove({ output:/thermal:dynamo.+/})

    //Sawmill Recipes
    event.remove({id:/thermal:machines.+sawmill.+/})
    event.remove({id:/thermal:compat.+sawmill/})

})