ServerEvents.recipes(event => {

    //Function
    function combiner(output, inputbase, inputcombine, amount){event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"item":inputbase}},"mainInput":{"amount":amount,"ingredient":{"item":inputcombine}},"output":{"item":output}})}

    //Jetpack Platings
    event.remove({id:'simplyjetpacks:thermal/armorplating_te1'})
    combiner('kubejs:armorplating_te1', 'thermal:tin_block', 'thermal:invar_plate', 8)
    combiner('kubejs:armorplating_te2', 'kubejs:armorplating_te1', 'thermal:lumium_plate', 8)
    combiner('kubejs:armorplating_te3', 'kubejs:armorplating_te2', 'thermal_extra:soul_infused_plate', 8)
    combiner('kubejs:armorplating_te4', 'kubejs:armorplating_te3', 'thermal:enderium_plate', 8)
})