ServerEvents.recipes(event => {

    //Yellorium stuff
    event.remove({id:/bigreactors.+yelloriu.+/})
    event.remove({id:/mysticalagriculture.+yelloriu.+/})
    event.remove({id:'thermal:compat/mysticalagriculture/insolator_mysticalag_yellorium_seeds'})
    event.remove({id:'industrialforegoing:laser_drill_ore/raw_materials/yellorium'})

    //Wrench
    event.remove({id:'bigreactors:misc/wrench'})
    

})