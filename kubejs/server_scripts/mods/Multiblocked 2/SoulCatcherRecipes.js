ServerEvents.recipes((event) => {

    //function catcher(output, catalyst, id){event.recipes.kubejs.soul_catcher()
    //    .id("kubejs:soul_catcher/"+id)
    //    .inputItems('enderio:empty_soul_vial', JsonIO.of({"value": [{"item": "enderio:basic_capacitor"},{"item": "enderio:double_layer_capacitor"},{"item": "enderio:octadic_capacitor"}]}))
    //    .chance(0, catcher => catcher.inputItems(catalyst))
    //    .outputItems(output)
    //    .perTick(catcher => catcher.inputFE(256))
    //    .duration(450)
    //}

    //Zombie
    //catcher('enderio:filled_soul_vial', 'enderio:frank_n_zombie', 'zombie')

    //Witch

    //Enderman

    //Shulker

})

MBDMachineEvents.onBeforeRecipeModify('kubejs:soul_catcher', (event) => {
    const mbdEvent = event.getEvent();
    const { machine, recipe } = mbdEvent;

    let cap = machine.getCapability($ForgeCapabilities.ITEM_HANDLER).orElse(null);
    let capacitorId = cap.getStackInSlot(2).id;
    let divisor = 1

    switch (capacitorId) {
        case 'enderio:basic_capacitor':
            divisor = 1;
            break;
        case 'enderio:double_layer_capacitor':
            divisor = 2;
            break;
        case 'enderio:octadic_capacitor':
            divisor = 3;
            break;
        default:
            break;
    }

    let recipeCopy = recipe.copy();
    recipeCopy.duration = Math.ceil(recipeCopy.duration / divisor);

    mbdEvent.setRecipe(recipeCopy);
});