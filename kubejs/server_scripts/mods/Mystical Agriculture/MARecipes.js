ServerEvents.recipes(event => {

    //Mystical Fertilizer
    event.remove({id:'mysticalagriculture:mystical_fertilizer'})

    //Inferium Ore Blasting
    event.blasting('mysticalagriculture:inferium_essence', '#forge:ores/inferium')

})