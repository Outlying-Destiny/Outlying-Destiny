ServerEvents.recipes(event => {

    //event.remove({output:'mekanism:personal_chest'})
    event.remove({id:'mekanism:processing/quartz/to_dust'})

    event.remove({id:'mekanism:formulaic_assemblicator'})
    event.remove({id:'mekanism:crafting_formula'})

})