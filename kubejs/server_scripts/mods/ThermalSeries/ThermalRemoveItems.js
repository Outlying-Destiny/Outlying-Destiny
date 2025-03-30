ServerEvents.recipes(event => {

    //Sawmill Recipes
    event.remove({id:/thermal:machines.+sawmill.+/})
    event.remove({id:/thermal:compat.+sawmill/})

    //Magnet
    event.remove({id:'thermal:flux_magnet'})

    //Satchel
    event.remove({id:'thermal:tools/satchel'})

    //Mushroom Spores
    event.remove({id:/thermal:smelting.+from_spores_smelting/})
    event.remove({id:/thermal:.+mushroom_spores/})
    event.remove({id:'thermal:machines/insolator/insolator_glowstone_mushroom'})
    event.remove({id:'thermal:machines/insolator/insolator_gunpowder_mushroom'})
    event.remove({id:'thermal:machines/insolator/insolator_redstone_mushroom'})
    event.remove({id:'thermal:machinaes/insolator/insolator_slime_mushroom'})

    //Augments
    event.remove({id:/thermal:augments\/dynamo/})
    event.remove({id:/thermal_extra:crafting\/augment/})

    //Components
    event.remove({id:'thermal_extra:crafting/dragonsteel_integral_component'})
    event.remove({id:'thermal_extra:crafting/abyssal_integral_component'})

    //Essence of Knowledge
    event.remove({id:'thermal:machines/centrifuge/centrifuge_experience_bottle'})
    event.custom({"type": "thermal:centrifuge","ingredient": {"item": "minecraft:experience_bottle"},"result": [{"item": "minecraft:glass_bottle"},{"fluid": "mob_grinding_utils:fluid_xp","amount": 250}],"energy": 800})

    //Creosote Oil
    event.remove({id:'thermal:machines/pyrolyzer/pyrolyzer_coal'})
    event.remove({id:'thermal:machines/pyrolyzer/pyrolyzer_logs'})
    event.custom({"type": "thermal:pyrolyzer","ingredient": {"item": "minecraft:coal"},"result": [{"item": "thermal:coal_coke"},{"item": "thermal:tar","chance": 0.25},{"fluid": "immersiveengineering:creosote","amount": 250}]})
    event.custom({"type": "thermal:pyrolyzer","ingredient": {"tag": "minecraft:logs"},"result": [{"item": "minecraft:charcoal"},{"fluid": "immersiveengineering:creosote","amount": 125}]})
    event.remove({id:'thermal:bottler_creosote_bucket'})

    //Thermal Extra Ore Dupe
    event.remove({id:'thermal_extra:crafting/nitratic_igniter'})
    event.remove({id:/thermal_extra:machine\/nitratic_igniter.+/})
    event.remove({id:/thermal_extra:machine\/(chiller|endothermic_dehydrator).+raw_.+/})
    event.remove({id:/thermal_extra:machine\/crucible.+/})

    //Devices
    event.remove({id:'thermal_extra:crafting/device_lava_gen'})
    event.remove({id:'thermal_extra:crafting/device_harvester'})
    event.remove({id:'thermal:device_water_gen'})
    event.remove({id:'thermal:device_collector'})
    event.remove({id:'thermal:device_nullifier'})

    //Insightful Stuff
    event.remove({id:'thermal:tools/xp_crystal'})
    event.remove({id:'thermal:augments/xp_storage_augment'})
    event.remove({id:'thermal:device_xp_condenser'})
    event.remove({id:'minecraft:enchantment.thermal.xp_crystal'})

    //Phyto-Soil (Infuser)
    event.remove({id:'thermal:phytosoil'})
    event.remove({id:'thermal:device_soil_infuser'})

    //Ruby / Sapphire
    event.remove({id:/industrialforegoing:laser_drill_ore\/ores\/(ruby|sapphire)/})
    event.remove({id:/thermal:machines\/smelter\/smelter_(ruby|sapphire)_ore/})

    //Ancient Dust
    event.remove({id:'thermal_extra:machine/crystallizer/ancient_dust'})

    //Sticky Ball
    event.remove({id:'thermal_extra:sticky_ball_to_paper'})
    event.remove({id:'thermal_extra:machine/chiller/sticky_ball'})

    //Dynamos
    event.remove({id:/thermal(:|_extra:|endergy:)fuels.+/})
    event.remove({id:'thermal:compat/immersiveengineering/compression_ie_biodiesel'})
    event.remove({id:/thermal:dynamo_(numismatic|disenchantment)/})
    event.remove({id:'thermal_extra:crafting/dynamo_frost'})

    //Thermal Extra Armor
    event.remove({id:/thermal_extra:.+_(helmet|chestplate|leggings|boots|sword|axe|pickaxe|shovel|hoe|excavator|hammer|knife|sickle)/})

    //Packing Dies
    event.remove({id:/thermal:press_packing_(2x2|3x3)_die/})
    event.remove({id:'thermal:press_unpacking_die'})
    event.remove({id:/thermal:machines\/press.+packing/})
    event.remove({id:/thermalendergy:machine\/press\/(packing3x3|unpacking)/})
    
    //Numismatic Die
    event.remove({id:'thermal:press_coin_die'})
    event.remove({id:/thermal:machines\/press\/press_.+_to_coin/})
    event.remove({id:/thermal(_extra|endergy):machine\/press\/.+_coin/})

    //Drill Head
    event.remove({id:'thermal:drill_head'})

    //Rod Cast
    event.remove({id:'thermal:chiller_rod_cast'})
})