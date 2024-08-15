ServerEvents.recipes(event => {

    //Dynamos
    //event.remove({ output:/thermal:dynamo.+/})

    //Sawmill Recipes
    event.remove({id:/thermal:machines.+sawmill.+/})
    event.remove({id:/thermal:compat.+sawmill/})

    //Magnet
    event.remove({id:'thermal:flux_magnet'})

    //Vacuum
    event.remove({id:'thermal:device_collector'})

    //Mushroom Spores
    event.remove({id:/thermal:smelting.+from_spores_smelting/})
    event.remove({id:/thermal:.+mushroom_spores/})
    event.remove({id:'thermal:machines/insolator/insolator_glowstone_mushroom'})
    event.remove({id:'thermal:machines/insolator/insolator_gunpowder_mushroom'})
    event.remove({id:'thermal:machines/insolator/insolator_redstone_mushroom'})
    event.remove({id:'thermal:machines/insolator/insolator_slime_mushroom'})

    //Augments
    event.remove({id:/thermal_extra:.+_augment_[1-6]/})
    event.remove({id:'thermal_extra:machine/crystallizer/dragonsteel_infused_fluid_tank_augment'})

    //Components
    event.remove({id:'thermal_extra:augments/upgrade_augment'})

    //Essence of Knowledge
    event.remove({id:'thermal:machines/centrifuge/centrifuge_experience_bottle'})
    event.custom({"type": "thermal:centrifuge","ingredient": {"item": "minecraft:experience_bottle"},"result": [{"item": "minecraft:glass_bottle"},{"fluid_tag": "forge:experience","amount": 250}],"energy": 800})

    //Creosote Oil
    event.remove({id:'thermal:machines/pyrolyzer/pyrolyzer_coal'})
    event.remove({id:'thermal:machines/pyrolyzer/pyrolyzer_logs'})
    event.custom({"type": "thermal:pyrolyzer","ingredient": {"item": "minecraft:coal"},"result": [{"item": "thermal:coal_coke"},{"item": "thermal:tar","chance": 0.25},{"fluid": "immersiveengineering:creosote","amount": 250}],"experience": 0.15})
    event.custom({"type": "thermal:pyrolyzer","ingredient": {"tag": "minecraft:logs"},"result": [{"item": "minecraft:charcoal"},{"fluid": "immersiveengineering:creosote","amount": 125}],"experience": 0.15})
    event.remove({id:'thermal:bottler_creosote_bucket'})

})