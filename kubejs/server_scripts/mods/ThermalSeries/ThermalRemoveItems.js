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

    //Satchel
    event.remove({id:'thermal:tools/satchel'})

    //Mushroom Spores
    event.remove({id:/thermal:smelting.+from_spores_smelting/})
    event.remove({id:/thermal:.+mushroom_spores/})
    event.remove({id:'thermal:machines/insolator/insolator_glowstone_mushroom'})
    event.remove({id:'thermal:machines/insolator/insolator_gunpowder_mushroom'})
    event.remove({id:'thermal:machines/insolator/insolator_redstone_mushroom'})
    event.remove({id:'thermal:machines/insolator/insolator_slime_mushroom'})

    //Augments
    event.remove({id:'thermal_extra:crafting/augment_smithing_templte'})
    event.remove({id:/thermal_extra:crafting.+augment.+/})
    event.remove({id:'thermal_extra:machine/crystallizer/dragonsteel_infused_fluid_tank_augment'})

    //Components
    event.remove({id:'thermal_extra:crafting/dragonsteel_integral_component'})
    event.remove({id:'thermal_extra:crafting/abyssal_integral_component'})

    //Essence of Knowledge
    event.remove({id:'thermal:machines/centrifuge/centrifuge_experience_bottle'})
    event.custom({"type": "thermal:centrifuge","ingredient": {"item": "minecraft:experience_bottle"},"result": [{"item": "minecraft:glass_bottle"},{"fluid_tag": "forge:experience","amount": 250}],"energy": 800})

    //Creosote Oil
    event.remove({id:'thermal:machines/pyrolyzer/pyrolyzer_coal'})
    event.remove({id:'thermal:machines/pyrolyzer/pyrolyzer_logs'})
    event.custom({"type": "thermal:pyrolyzer","ingredient": {"item": "minecraft:coal"},"result": [{"item": "thermal:coal_coke"},{"item": "thermal:tar","chance": 0.25},{"fluid": "immersiveengineering:creosote","amount": 250}],"experience": 0.15})
    event.custom({"type": "thermal:pyrolyzer","ingredient": {"tag": "minecraft:logs"},"result": [{"item": "minecraft:charcoal"},{"fluid": "immersiveengineering:creosote","amount": 125}],"experience": 0.15})
    event.remove({id:'thermal:bottler_creosote_bucket'})

    //Thermal Extra Ore Dupe
    event.remove({id:'thermal_extra:crafting/nitratic_igniter'})
    event.remove({id:/thermal_extra:machine.+nitratic_igniter.+/})
    event.remove({id:/thermal_extra.+machine.+chiller.+raw_.+/})
    event.remove({id:/thermal_extra:machine\/crucible.+/})

    //Devices
    event.remove({id:'thermal_extra:crafting/device_lava_gen'})
    event.remove({id:'thermal:device_water_gen'})

    //Insightful Stuff
    event.remove({id:'thermal:tools/xp_crystal'})
    event.remove({id:'thermal:augments/xp_storage_augment'})
    event.remove({id:'thermal:device_xp_condenser'})
    event.remove({id:'minecraft:enchantment.thermal.xp_crystal'})

    //Phyto-Soil (Infuser)
    event.remove({id:'thermal:phytosoil'})
    event.remove({id:'thermal:device_soil_infuser'})

    //Ruby / Sapphire
    event.remove({id:'industrialforegoing:laser_drill_ore/ores/ruby'})
    event.remove({id:'industrialforegoing:laser_drill_ore/ores/sapphire'})

})