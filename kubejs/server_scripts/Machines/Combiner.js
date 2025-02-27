ServerEvents.recipes(event => {

    //Function
    function combiner(output, inputbase, inputcombine, amount){event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"item":inputbase}},"mainInput":{"amount":amount,"ingredient":{"item":inputcombine}},"output":{"item":output}})}

    //Remove Ore Recipes
    event.remove({id:/mekanism:processing\/.+\/ore.+from_raw/})
    event.remove({id:/mekanism:processing\/.+\/to_(deepslate_)?ore/})
})