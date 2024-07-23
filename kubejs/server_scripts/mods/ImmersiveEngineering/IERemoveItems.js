ServerEvents.recipes(event => {

    //Crusher
    event.remove({id:/immersiveengineering:crusher.+/})
    event.remove({id:/farmersdelight:integration.+immersiveengineering.+crusher.+/})

    //Saw Mill
    event.remove({id:/immersiveengineering.+sawmill.+/})
    event.remove({id:'immersiveengineering:crafting/sawblade'})

    //Magnet
    event.remove({id:'immersiveengineering:crafting/toolupgrade_powerpack_magnet'})

})