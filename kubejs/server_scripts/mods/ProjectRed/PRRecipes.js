ServerEvents.recipes(event => {

    //Red Alloy Ingot
    event.remove({id:'projectred_core:red_iron_comp'})
    event.shapeless('projectred_core:red_iron_comp', ['minecraft:iron_ingot', '4x minecraft:redstone'])

})