ServerEvents.recipes(event => {

    //Machines
    event.remove({id:/mysticalagriculture:(enchanter|harvester|soul_extractor|seed_reprocessor|soulium_spawner)/})

    //Daggers
    event.remove({id:/mysticalagriculture:(s|passive_s|hostile_s)oulium_dagger/})

    //Jars
    event.remove({id:/mysticalagriculture:(soul_jar|experience_capsule)/})
})