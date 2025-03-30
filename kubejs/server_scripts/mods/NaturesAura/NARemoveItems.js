ServerEvents.recipes(event => {

    //Aura Generators
    event.remove({id:/naturesaura:(oak|animal|firework|flower|slime_split|chorus|potion|projectile)_generator/})

    //Aura Harnessers
    event.remove({id:'naturesaura:blast_furnace_booster'})
    event.remove({id:'naturesaura:field_creator'})
    event.remove({id:'naturesaura:ender_crate'})
    event.remove({id:'naturesaura:spring'})
    event.remove({id:'naturesaura:tree_ritual/furnace_heater'})
    event.remove({id:'naturesaura:hopper_upgrade'})
    event.remove({id:'naturesaura:placer'})
    event.remove({id:'naturesaura:spawn_lamp'})
    event.remove({id:/naturesaura:dimension_rail_/})

    //Natural Items
    event.remove({id:'naturesaura:ender_access'})

    //Mechanical Devices
    event.remove({id:'naturesaura:grated_chute'})
    event.remove({id:'naturesaura:auto_crafter'})
    event.remove({id:'naturesaura:aura_timer'})

})