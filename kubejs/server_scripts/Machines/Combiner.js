ServerEvents.recipes(event => {

    //Function
    function combiner(output, inputbase, inputcombine, amount){event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"item":inputbase}},"mainInput":{"amount":amount,"ingredient":{"item":inputcombine}},"output":{"item":output}})}

    //Jetpack Platings
    event.remove({id:'simplyjetpacks:thermal/armorplating_te1'})
    combiner('simplyjetpacks:armorplating_te1', 'thermal:tin_block', 'thermal:iron_plate', 4)
    combiner('simplyjetpacks:armorplating_te2', 'simplyjetpacks:armorplating_te1', 'thermal:bronze_plate', 4)
    combiner('simplyjetpacks:armorplating_te3', 'simplyjetpacks:armorplating_te2', 'thermal:invar_plate', 4)
    combiner('simplyjetpacks:armorplating_te4', 'simplyjetpacks:armorplating_te3', 'thermal:enderium_plate', 4)
})