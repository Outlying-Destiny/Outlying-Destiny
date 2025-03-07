ServerEvents.recipes((event) => {

    //Function
    function catcher(output, catalyst, id){event.recipes.kubejs.soul_catcher()
        .id("kubejs:soul_catcher/"+id)
        .inputItems('enderio:empty_soul_vial')
        .chance(0, catcher => catcher.inputItems(JsonIO.of({"value": [{"item": "enderio:basic_capacitor"},{"item": "enderio:double_layer_capacitor"},{"item": "enderio:octadic_capacitor"}]}), catalyst))
        .outputItems(JsonIO.of({"value": {"type": "forge:nbt","item": "enderio:filled_soul_vial","nbt": output}}))
        .perTick(catcher => catcher.inputFE(256))
        .duration(450)
    }

    //Zombie
    catcher('{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:zombie"}}}}', 'enderio:frank_n_zombie', 'zombie')

    //Witch
    catcher('{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:witch"}}}}', 'enderio:sentient_ender', 'witch')

    //Enderman
    catcher('{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:enderman"}}}}', 'enderio:ender_crystal', 'enderman')

    //Shulker
    catcher('{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:shulker"}}}}', 'enderio:prescient_crystal', 'shulker')

})

MBDMachineEvents.onBeforeRecipeModify('kubejs:soul_catcher', (event) => {
    const mbdEvent = event.getEvent();
    const { machine, recipe } = mbdEvent;

    let cap = machine.getCapability($ForgeCapabilities.ITEM_HANDLER).orElse(null);
    let capacitorId = cap.getStackInSlot(2).id;
    
    let divisor = ({
        'enderio:basic_capacitor': 1,
        'enderio:double_layer_capacitor': 2,
        'enderio:octadic_capacitor': 3
    })[capacitorId] || 1;

    let recipeCopy = recipe.copy();
    recipeCopy.duration = Math.ceil(recipeCopy.duration / divisor);

    mbdEvent.setRecipe(recipeCopy);
});