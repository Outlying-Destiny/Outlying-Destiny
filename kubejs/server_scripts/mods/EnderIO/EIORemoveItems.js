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

    //Yeta Wrench
    event.remove({id:'enderio:yeta_wrench'})

    //electromagnet
    event.remove({id:'enderio:electromagnet'})

    //Conduits and upgrades
    event.remove({output:/enderio.+condui.+/})
    event.remove({output:/enderio.+filte.+/})
    event.remove({id:/enderio:extraction_speed_upgrade.+/})

})