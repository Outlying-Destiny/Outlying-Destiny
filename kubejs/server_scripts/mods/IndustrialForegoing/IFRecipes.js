ServerEvents.recipes(event => {

    //Functions Craft
    function box(output, input1, input2, input3, input4){event.shaped(output, ['ABA','CDC','ABA'], {A: input1,B: input2,C: input3,D: input4})}

    //function range (output, input1, input2, input3){event.shaped(output, ['AAA','ABA','CCC'], {A: input1,B: input2,C: input3})}

    //Function Machine
    function machine(output, input1, input2, input3, input4, input5){
      event.remove({id:'industrialforegoing:'+output})
      event.shaped('industrialforegoing:'+output, ['ABA','CDE','AFA'], {A: 'pneumaticcraft:plastic',B: input1,C: input2,D: 'industrialforegoing:machine_frame_'+input3,E: input4,F: input5})
    }    

    //Function Dissolution Chamber {Amount:250,FluidName:\"industrialforegoing:latex\"}
    function dissolution(output, outputcount, fluid, fluidamount, input1, input2, input3, input4, input5, time){event.custom({"type": "industrialforegoing:dissolution_chamber","input": [{"item": input1},{"item": input2},{"item": input1},{"item": input3},{"item": input3},{"item": input4},{"item": input5},{"item": input4}],"inputFluid": `{FluidName:"${fluid}",Amount:${fluidamount}}`,"output": {"count": outputcount,"item": output},"processingTime": time})}

    //Plastic conversion to PNC
    event.replaceOutput({ output: 'industrialforegoing:plastic' },'industrialforegoing:plastic','pneumaticcraft:plastic'         )
    event.replaceInput({ input: 'industrialforegoing:plastic' },'industrialforegoing:plastic','pneumaticcraft:plastic')

    //Mob Imprisonment Tool
    event.replaceInput({output:'industrialforegoing:mob_imprisonment_tool'},'minecraft:ghast_tear','enderio:ender_crystal')

    //Meat Feeder
    event.remove({id:'industrialforegoing:meat_feeder'})
    event.shaped('industrialforegoing:meat_feeder', [' B ','CAB','AC '], {A: 'immersiveengineering:stick_steel',B: 'thermal:steel_gear',C: 'minecraft:glass_bottle'})
  
    //Remove Enchanted Bottle from Dissolution Chamber
    event.remove({id:'industrialforegoing:dissolution_chamber/xp_bottles'})

    //Pink Slime
    event.remove({id:/industrialforegoing:dissolution_chamber.+pink_slime_.+/})
    event.custom({
      "type": "industrialforegoing:dissolution_chamber",
      "input": [
        {
          "item": "minecraft:slime_ball"
        }
      ],
      "inputFluid": "{Amount:200,FluidName:\"industrialforegoing:pink_slime\"}",
      "output": {
        "count": 1,
        "item": "industrialforegoing:pink_slime"
      },
      "outputFluid": "{Amount:100,FluidName:\"minecraft:water\"}",
      "processingTime": 100
    })

    //Addons
    event.remove({id:/industrialforegoing:dissolution_chamber.+_addon.+/})
    dissolution('industrialforegoing:speed_addon_1', 1, 'kubejs:molten_signalum', 500, 'mekanism:hdpe_sheet', 'mekanism:upgrade_speed', 'mekanism_extras:dust_radiance', 'mekanism:hdpe_sheet', 'thermal:machine_speed_augment', 100)
    dissolution('industrialforegoing:efficiency_addon_1', 1, 'kubejs:molten_signalum', 500, 'mekanism:hdpe_sheet', 'mekanism:upgrade_speed', 'mekanism_extras:dust_radiance', 'mekanism:hdpe_sheet', 'actuallyadditions:palis_crystal', 100)
    dissolution('industrialforegoing:processing_addon_1', 1, 'kubejs:molten_signalum', 500, 'mekanism:hdpe_sheet', 'mekanism:upgrade_speed', 'mekanism_extras:dust_radiance', 'mekanism:hdpe_sheet', 'minecraft:furnace', 100)
    dissolution('industrialforegoing:speed_addon_2', 1, 'thermal_extra:twinite', 500, 'mekanism:hdpe_sheet', 'industrialforegoing:speed_addon_1', 'botania:manasteel_ingot', 'mekanism:hdpe_sheet', 'thermal:twinite_machine_speed_augment', 150)
    dissolution('industrialforegoing:efficiency_addon_2', 1, 'thermal_extra:twinite', 500, 'mekanism:hdpe_sheet', 'industrialforegoing:efficiency_addon_1', 'botania:manasteel_ingot', 'mekanism:hdpe_sheet', 'actuallyadditions:empowered_palis_crystal', 150)
    dissolution('industrialforegoing:processing_addon_2', 1, 'thermal_extra:twinite', 500, 'mekanism:hdpe_sheet', 'industrialforegoing:processing_addon_1', 'botania:manasteel_ingot', 'mekanism:hdpe_sheet', 'mekanism:energized_smelter', 150)
    
    const range = [
      {input:'minecraft:coal', number:'0'},{input:'minecraft:lapis_lazuli', number:'1'},{input:'minecraft:iron_ingot', number:'2'},{input:'thermal:steel_ingot', number:'3'},{input:'thermal:bronze_ingot', number:'4'},{input:'thermal:lumium_ingot', number:'5'},{input:'chemlib:platinum_ingot', number:'6'},{input:'enderio:energetic_alloy_ingot', number:'7'},{input:'kubejs:machinarium_ingot', number:'8'},{input:'botania:manasteel_ingot', number:'9'},{input:'botania:elementium_ingot', number:'10'},{input:'botania:terrasteel_ingot', number:'11'}
    ]

    range.forEach((range) => {
      event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [{"item": range.input},{"item": range.input},{"item": range.input},{"item": range.input},{"item": range.input},{"item": 'mekanism:hdpe_sheet'},{"item": 'mekanism:hdpe_sheet'},{"item": 'mekanism:hdpe_sheet'}],
        "inputFluid": `{FluidName:"kubejs:molten_signalum",Amount:500}`,
        "output": {
          "count": 1,
          "item": 'industrialforegoing:range_addon'+range.number
        },
        "processingTime": 100
      })
    })
    //range(Item.of('industrialforegoing:range_addon0', '{TitaniumAugment:{Range:0.0f}}'), 'minecraft:coal', 'minecraft:redstone_block', 'pneumaticcraft:plastic')
    //range(Item.of('industrialforegoing:range_addon1', '{TitaniumAugment:{Range:1.0f}}'), 'minecraft:lapis_lazuli', 'industrialforegoing:range_addon0', 'pneumaticcraft:plastic')
    //range(Item.of('industrialforegoing:range_addon2', '{TitaniumAugment:{Range:2.0f}}'), 'minecraft:iron_ingot', 'industrialforegoing:range_addon1', 'pneumaticcraft:plastic')
    //range(Item.of('industrialforegoing:range_addon3', '{TitaniumAugment:{Range:3.0f}}'), 'thermal:steel_ingot', 'industrialforegoing:range_addon2', 'pneumaticcraft:plastic')
    //range(Item.of('industrialforegoing:range_addon4', '{TitaniumAugment:{Range:4.0f}}'), 'thermal:bronze_ingot', 'industrialforegoing:range_addon3', 'pneumaticcraft:plastic')
    //range(Item.of('industrialforegoing:range_addon5', '{TitaniumAugment:{Range:5.0f}}'), 'thermal:lumium_ingot', 'industrialforegoing:range_addon4', 'pneumaticcraft:plastic')
    //range(Item.of('industrialforegoing:range_addon6', '{TitaniumAugment:{Range:6.0f}}'), 'chemlib:platinum_ingot', 'industrialforegoing:range_addon5', 'pneumaticcraft:plastic')
    //range(Item.of('industrialforegoing:range_addon7', '{TitaniumAugment:{Range:7.0f}}'), 'enderio:energetic_alloy_ingot', 'industrialforegoing:range_addon6', 'pneumaticcraft:plastic')
    //range(Item.of('industrialforegoing:range_addon8', '{TitaniumAugment:{Range:8.0f}}'), 'kubejs:machinarium_ingot', 'industrialforegoing:range_addon7', 'pneumaticcraft:plastic')
    //range(Item.of('industrialforegoing:range_addon9', '{TitaniumAugment:{Range:9.0f}}'), 'botania:manasteel_ingot', 'industrialforegoing:range_addon8', 'pneumaticcraft:plastic')
    //range(Item.of('industrialforegoing:range_addon10', '{TitaniumAugment:{Range:10.0f}}'), 'botania:elementium_ingot', 'industrialforegoing:range_addon9', 'pneumaticcraft:plastic')
    //range(Item.of('industrialforegoing:range_addon11', '{TitaniumAugment:{Range:11.0f}}'), 'botania:terrasteel_ingot', 'industrialforegoing:range_addon10', 'pneumaticcraft:plastic')

    //Machine Frames
    event.remove({id:'industrialforegoing:machine_frame_pity'})
    event.remove({id:/industrialforegoing:dissolution_chamber.+machine_frame/})
    box('industrialforegoing:machine_frame_pity', 'thermal:steel_ingot', 'actuallyadditions:empowered_enori_crystal', 'thermal:signalum_gear', 'actuallyadditions:iron_casing')
    dissolution('industrialforegoing:machine_frame_simple', 1, "industrialforegoing:latex", 500, 'mekanism:hdpe_sheet', 'industrialforegoing:machine_frame_pity', 'thermal_extra:shellite_gear', 'minecraft:experience_bottle', 'kubejs:infinity_gear', 200)
    dissolution('industrialforegoing:machine_frame_advanced', 1, "thermal_extra:soul_infused", 1000, 'chemlib:lithium_metal_block', 'industrialforegoing:machine_frame_simple', 'thermal_extra:twinite_gear', 'extendedcrafting:luminessence', 'enderio:dark_bimetal_gear', 200)
    dissolution('industrialforegoing:machine_frame_supreme', 1, "mekanism:hydrofluoric_acid", 4000, 'kubejs:radiance_block', 'industrialforegoing:machine_frame_advanced', 'thermal_extra:dragonsteel_gear', 'actuallyadditions:empowered_palis_crystal', 'enderio:vibrant_gear', 200)

    //Machines
    machine('bioreactor', 'thermal:fluid_cell_frame', 'thermal:lumium_gear', 'pity', 'thermal:lumium_gear', 'mekanism:enrichment_chamber')
    machine('fluid_extractor', 'thermal:fluid_cell_frame', 'minecraft:diamond_axe', 'pity', 'minecraft:diamond_axe', 'thermal:device_tree_extractor')
    machine('latex_processing_unit', 'mekanism:energized_smelter', 'minecraft:bucket', 'pity', 'minecraft:bucket', 'kubejs:energized_steel_gear')
    machine('dissolution_chamber', 'extendedcrafting:black_iron_slate', 'actuallyadditions:empowered_palis_crystal', 'pity', 'actuallyadditions:empowered_palis_crystal', 'kubejs:energized_steel_gear')
    machine('mob_slaughter_factory', 'thermal:fluid_cell_frame', 'thermal_extra:soul_infused_gear', 'simple', 'thermal_extra:soul_infused_gear', 'mob_grinding_utils:saw')
    machine('mob_crusher', 'kubejs:evil_infused_axe', 'kubejs:evil_infused_sword', 'advanced', 'kubejs:evil_infused_sword', 'mekanism:crusher')
    machine('laser_drill', 'mekanism:laser', 'thermal_extra:twinite_gear', 'simple', 'thermal_extra:twinite_gear', 'thermal:signalum_block')
    machine('ore_laser_base', 'minecraft:diamond_pickaxe', 'thermal:enderium_gear', 'advanced', 'thermal:enderium_gear', '#balm:wooden_chests')
    machine('fluid_laser_base', 'minecraft:bucket', 'thermal:enderium_gear', 'supreme', 'thermal:enderium_gear', 'enderio:pressurized_fluid_tank')
    machine('block_placer', 'minecraft:dispenser', 'minecraft:smooth_stone', 'simple', 'minecraft:smooth_stone', 'enderio:end_steel_block')
    machine('block_breaker', 'minecraft:diamond_pickaxe', 'minecraft:diamond_axe', 'simple', 'minecraft:diamond_shovel', 'enderio:end_steel_block')
    machine('fluid_placer', 'minecraft:water_bucket', 'minecraft:dispenser', 'simple', 'minecraft:dispenser', 'enderio:end_steel_block')
    machine('fluid_collector', 'minecraft:bucket', 'minecraft:dispenser', 'simple', 'minecraft:dispenser', 'enderio:end_steel_block')
    machine('material_stonework_factory', 'thermal:machine_crafter', 'industrialforegoing:block_breaker', 'advanced', 'mekanism:energized_smelter', 'thermal_extra:dragonsteel_gear')
    machine('marine_fisher', 'thermal:device_fisher', 'thermal_extra:shellite_gear', 'simple', 'thermal_extra:shellite_gear', 'minecraft:bucket')
    machine('potion_brewer', 'thermal:machine_brewer', 'thermal_extra:shellite_gear', 'advanced', 'thermal_extra:shellite_gear','thermal_extra:twinite_block')
    machine('wither_builder', 'industrialforegoing:block_placer', 'thermal_extra:soul_infused_gear', 'supreme', 'thermal_extra:soul_infused_gear', 'minecraft:nether_star')
    machine('mob_duplicator', 'enderio:powered_spawner', 'thermal_extra:dragonsteel_gear', 'supreme', 'thermal_extra:dragonsteel_gear', [Item.of('thermal:fluid_cell', '{BlockEntityTag:{TankInv:[{Amount:32000,Capacity:32000,FluidName:"mob_grinding_utils:fluid_xp",Tank:0b}]}}').weakNBT(), Item.of('thermal:fluid_cell', '{BlockEntityTag:{TankInv:[{Amount:32000,Capacity:32000,FluidName:"industrialforegoing:essence",Tank:0b}]}}').weakNBT(), Item.of('thermal:fluid_cell', '{BlockEntityTag:{TankInv:[{Amount:32000,Capacity:32000,FluidName:"pneumaticcraft:memory_essence",Tank:0b}]}}').weakNBT(), Item.of('thermal:fluid_cell', '{BlockEntityTag:{TankInv:[{Amount:32000,Capacity:32000,FluidName:"enderio:xp_juice",Tank:0b}]}}').weakNBT()])
    machine('stasis_chamber', 'industrialforegoing:mob_detector', 'kubejs:end_bimetal_gear', 'advanced', 'kubejs:end_bimetal_gear', 'mekanism:basic_induction_cell')
    machine('mob_detector', 'minecraft:comparator', 'minecraft:repeater', 'simple', 'minecraft:repeater', 'minecraft:observer')
    machine('plant_gatherer', 'minecraft:diamond_axe', 'minecraft:diamond_hoe', 'simple', 'minecraft:diamond_hoe', 'thermal_extra:shellite_block')
    machine('plant_sower', 'minecraft:dispenser', 'minecraft:piston', 'simple', 'minecraft:piston', 'thermal_extra:shellite_block')
    machine('plant_fertilizer', 'thermal:watering_can', 'thermal:lumium_gear', 'advanced', 'thermal:lumium_gear', '#forge:fertilizer')
    machine('animal_rancher', 'minecraft:bucket', 'thermal:bronze_gear', 'pity', 'thermal:bronze_gear', 'kubejs:dark_steel_shears')
    machine('animal_feeder', 'enderio:prescient_crystal', 'minecraft:golden_carrot', 'simple', 'minecraft:golden_carrot', 'minecraft:hay_block')
    machine('animal_baby_separator', 'enderio:ender_crystal', 'minecraft:lead', 'simple', 'minecraft:lead', 'minecraft:hay_block')
    machine('enchantment_factory', 'pneumaticcraft:memory_stick', 'kubejs:enchanted_gear', 'advanced', 'kubejs:enchanted_gear', 'minecraft:enchanting_table')
    machine('enchantment_applicator', 'pneumaticcraft:memory_stick', 'kubejs:enchanted_gear', 'advanced', 'kubejs:enchanted_gear', 'minecraft:anvil')
    machine('enchantment_sorter', 'thermal_extra:shellite_gear', 'minecraft:book', 'advanced', 'minecraft:enchanted_book', 'thermal:enderium_block')
    machine('enchantment_extractor', 'industrialforegoing:fluid_extractor', 'minecraft:book', 'supreme', 'minecraft:book', 'kubejs:enchanted_gear')
    machine('sludge_refiner', 'mekanism:energized_smelter', 'minecraft:mud', 'pity', 'minecraft:mud', 'minecraft:bucket')
    machine('sewer', 'minecraft:bucket', 'minecraft:bricks', 'pity', 'minecraft:bricks', 'thermal:iron_gear')
    machine('sewage_composter', 'minecraft:furnace', 'minecraft:piston', 'pity', 'minecraft:piston', 'minecraft:bricks')
  })