ServerEvents.recipes(event => {

    //Yellorium stuff
    event.remove({id:/bigreactors.+yelloriu.+/})
    event.remove({id:/mysticalagriculture.+yelloriu.+/})
    event.remove({id:'thermal:compat/mysticalagriculture/insolator_mysticalag_yellorium_seeds'})
    event.remove({id:'industrialforegoing:laser_drill_ore/raw_materials/yellorium'})
    event.remove({id:'industrialforegoing:laser_drill_ore/ores/yellorite'})
    event.remove({id:'thermal:machine/pulverizer_yellorite_ore_to_dust'})

    //Wrench
    event.remove({id:'bigreactors:misc/wrench'})
    

})