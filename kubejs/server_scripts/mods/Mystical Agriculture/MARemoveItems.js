ServerEvents.recipes(event => {

    //Machines
    event.remove({id:/mysticalagriculture:(enchanter|harvester|soul_extractor|seed_reprocessor|soulium_spawner)/})

    //Daggers
    event.remove({id:/mysticalagriculture:(s|passive_s|hostile_s)oulium_dagger/})

    //Jars
    event.remove({id:/mysticalagriculture:(soul_jar|experience_capsule)/})

    //Prosperity Ores
    event.remove({id:/mystical(agriculture|agradditions):(nether_|end_){0,1}prosperity_shard_smelted/})

    //Soulium
    event.remove({id:/mysticalagriculture:soulium/})
    event.remove({id:'mysticalagriculture:seed/infusion/soulium'})
    event.remove({id:'mysticalagriculture:essence/mysticalagriculture/soulium_dust'})

    //Watering Cans
    event.remove({id:/mysticalagriculture.+watering_can/})
})