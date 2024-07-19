ServerEvents.recipes(event => {

    //Alloy Smelter
    event.remove({ output: /enderio:.+alloy_smelter/})

    //Alloy Smelter Crafts
    event.remove({id: /enderio:alloy_smelting.+ingot/})
    event.remove({id: 'enderio:alloy_smelting/nethercotta'})

    //Silicon
    event.remove({id:'enderio:sag_milling/redstone_ore'})
    event.remove({id:'enderio:sag_milling/clay'})
    event.remove({id:'enderio:sag_milling/sand'})

    //Powdered Materials
    event.remove({id:'enderio:sag_milling/ender_pearl'})
    event.remove({id:'enderio:sag_milling/quartz'})
    event.remove({id:'enderio:sag_milling/quartz_ore'})

})