ServerEvents.recipes(event => {

    //Crusher
    event.remove({id:/immersiveengineering:crusher.+/})
    event.remove({id:/farmersdelight:integration.+immersiveengineering.+crusher.+/})

    //Saw Mill
    event.remove({id:/immersiveengineering.+sawmill.+/})

    //Magnet
    event.remove({id:'immersiveengineering:crafting/toolupgrade_powerpack_magnet'})

})