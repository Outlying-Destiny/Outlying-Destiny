ServerEvents.recipes(event => {

    //AIOT
    event.remove({id:/actuallyadditions:.+_aiot/})

    //Lens of the Miner
    event.remove({id:'actuallyadditions:lens_of_the_miner'})
    event.remove({id:/actuallyadditions:mininglens.+/})

    //WIP
    event.remove({id:'actuallyadditions:wings_of_the_bats'})
    event.remove({id:'actuallyadditions:laser_upgrade_range'})
    event.remove({id:'actuallyadditions:laser_upgrade_invisibility'})
    event.remove({id:'actuallyadditions:lens_of_the_killer'})
    event.remove({id:'actuallyadditions:lamp_controller'})
    event.remove({id:'actuallyadditions:crate_keeper'})
    event.remove({id:'actuallyadditions:crate_small'})

    //Lens
    event.remove({id:'actuallyadditions:lens_of_disruption'})
    event.remove({id:'actuallyadditions:lens_of_disenchanting'}) //Doesn't work
    event.remove({id:'actuallyadditions:laser/lens_of_detonation'})
    event.remove({id:'actuallyadditions:laser/lens_of_certain_death'})
    event.remove({id:'actuallyadditions:laser/lens'})

    //Generators
    event.remove({id:'actuallyadditions:oil_generator'})
    event.remove({id:'actuallyadditions:coal_generator'})
    event.remove({id:'actuallyadditions:leaf_generator'})
    event.remove({id:'actuallyadditions:bio_reactor'})
    event.remove({id:'actuallyadditions:heat_collector'})

    //Banners
    event.remove({id:/actuallyadditions:.+pattern/}) //Doesn't work

    //Miscellanous
    event.remove({id:'actuallyadditions:engineers_goggles'})
    event.remove({id:'actuallyadditions:engineers_goggles_advanced'})
    event.remove({id:'actuallyadditions:tiny_torch'})
    event.remove({id:'actuallyadditions:greenhouse_glass'})
    event.remove({id:'actuallyadditions:ring'})
    event.remove({id:'actuallyadditions:ring_of_magnetizing'})
    event.remove({id:/actuallyadditions:rice.+/})
    event.remove({id:'actuallyadditions:travelers_sack'})
    event.remove({id:'actuallyadditions:void_sack'})
    event.remove({id:'actuallyadditions:teleport_staff'})

    //Machinery
    event.remove({id:'actuallyadditions:shock_suppressor'})
    event.remove({id:'actuallyadditions:powered_furnace'})
    event.remove({id:'actuallyadditions:lava_factory_controller'})
    event.remove({id:'actuallyadditions:lava_factory_casing'})
    event.remove({id:'actuallyadditions:xp_solidifier'})
    event.remove({id:'actuallyadditions:crusher'})
    event.remove({id:'actuallyadditions:crusher_double'})
    event.remove({id:'actuallyadditions:feeder'})
    event.remove({id:'actuallyadditions:energizer'})
    event.remove({id:'actuallyadditions:enervator'})
    event.remove({id:'actuallyadditions:farmer'})
    event.remove({id:'actuallyadditions:battery_box'})
    event.remove({id:/actuallyadditions:laser\/laser_rela.+/})
    event.remove({id:'actuallyadditions:laser_relay_advanced'})
    event.remove({id:'actuallyadditions:laser_relay_extreme'})
    event.remove({id:'actuallyadditions:laser_relay_item_advanced'})
    event.remove({id:'actuallyadditions:laser_relay'})
    event.remove({id:'actuallyadditions:phantom_booster'})
    event.remove({id:'actuallyadditions:fermenting_barrel'})
    event.remove({id:'actuallyadditions:fermenting/refined_canola'})
    event.remove({id:'actuallyadditions:pressing/canola'})
    event.remove({id:'actuallyadditions:canola_press'})
    event.remove({id:'actuallyadditions:pressing/canola'})

    //Wooden Casing
    event.remove({id:'actuallyadditions:wood_casing'})

    //Void Crystal
    event.remove({id:'actuallyadditions:compress/void_crystal'})
    event.remove({id:'actuallyadditions:decompress/void_crystal_shard'})
    event.remove({id:/actuallyadditions:compress\/(void|empowered_void)_crystal_block/})
    event.remove({id:/actuallyadditions:decompress\/(void|empowered_void)_crystal/})

    //Black Quartz
    event.remove({id:/actuallyadditions.+black_quartz.+/})

})