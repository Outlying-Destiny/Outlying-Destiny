ServerEvents.recipes(event => {

    //Dynamos
    //event.remove({ output:/thermal:dynamo.+/})

    //Sawmill Recipes
    event.remove({id:/thermal:machines.+sawmill.+/})
    event.remove({id:/thermal:compat.+sawmill/})

    //Magnet
    event.remove({id:'thermal:flux_magnet'})

    //Vacuum
    event.remove({id:'thermal:device_collector'})
})