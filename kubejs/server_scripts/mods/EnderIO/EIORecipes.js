ServerEvents.recipes(event => {

    //Functions
    function detailedbox(output, input1, input2, input3, input4){event.shaped(output, ['ABA','CDC','ABA'], {A: input1,B: input2,C: input3,D: input4})}
    function cross(output, input1, input2, input3){event.shaped(output, [' A ','BCB',' A '], {A: input1,B: input2,C: input3})}
    function crystals(output, input1, input2){event.shaped(output, ['AAA','ABA','AAA'], {A: input1,B: input2})}
    function gear(output, input1, input2){event.shaped(output, [' A ','ABA',' A '], {A: input1,B: input2})}
    
    //"Enderios"
    event.replaceInput({output:'enderio:enderios'},'enderio:powdered_ender_pearl','thermal:ender_pearl_dust')

    //Travel Anchor
    event.remove({id:'enderio:travel_anchor'})
    event.shaped('enderio:travel_anchor', ['ABA','BCB','ABA'], {A: 'enderio:dark_steel_ingot',B: 'thermal:enderium_glass',C: 'mekanism:teleportation_core'})
    event.replaceInput({output:'enderio:staff_of_travelling'},'enderio:dark_steel_ingot','enderio:infinity_rod')

    //Dark Steel Shears
    event.shaped('kubejs:dark_steel_shears', ['  A',' A ','   '], {A: 'enderio:dark_steel_ingot'})

    //Remove SAG Mill Coal dupe
    event.remove({id:'enderio:sag_milling/coal'})

    //Soul Vial
    event.remove({id:'enderio:empty_soul_vial'})
    event.shaped('enderio:empty_soul_vial', [' A ','BCB',' B '], {A: 'enderio:soularium_ingot',B: 'enderio:fused_quartz',C: 'enderio:z_logic_controller'})
    
    //Dark / End Steel Bars
    event.remove({id:/enderio:.+_steel_bars/})
    event.shaped('8x enderio:dark_steel_bars', ['AAA','AAA','   '], {A: 'kubejs:dark_steel_rod'})
    event.shaped('8x enderio:end_steel_bars', ['AAA','AAA','   '], {A: 'kubejs:end_steel_rod'})

    //Experience Rod
    event.remove({id:'enderio:experience_rod'})
    event.shaped('enderio:experience_rod', ['  A',' B ','A  '], {A: 'kubejs:enchanted_ingot',B: 'enderio:soularium_ingot'})

    //Fluid Tanks
    event.remove({id:'enderio:fluid_tank'})
    detailedbox('enderio:fluid_tank', 'thermal:steel_ingot', 'minecraft:iron_bars', 'minecraft:iron_bars', '#enderio:fused_quartz')
    event.replaceInput({output:'enderio:pressurized_fluid_tank'},'#enderio:fused_quartz','enderio:fluid_tank')

    //Tier 1 Crystals
    event.remove({id:'enderio:pulsating_crystal'})
    event.remove({id:'enderio:vibrant_crystal'})
    crystals('2x enderio:pulsating_crystal', 'enderio:pulsating_alloy_ingot', 'mekanism:alloy_reinforced')
    //Why did he do that? Is he stupid?crystals('2x enderio:pulsating_crystal', 'enderio:pulsating_alloy_ingot', 'kubejs:crystalline_alloy_ingot')
    crystals('4x enderio:pulsating_crystal', 'enderio:pulsating_alloy_ingot', 'powah:crystal_niotic')
    crystals('2x enderio:vibrant_crystal', 'enderio:vibrant_alloy_ingot', 'mekanism:alloy_reinforced')
    //Why did he do that? Is he stupid?crystals('2x enderio:vibrant_crystal', 'enderio:vibrant_alloy_ingot', 'kubejs:crystalline_alloy_ingot')    
    crystals('4x enderio:vibrant_crystal', 'enderio:vibrant_alloy_ingot', 'powah:crystal_niotic')

    //Capcacitors
    event.remove({id:/enderio:(basic|double_layer|octadic)_capacitor/})
    event.shaped('enderio:basic_capacitor', [' AB','ACA','BA '], {A: 'enderio:dark_steel_ingot',B: 'enderio:grains_of_infinity',C: 'enderio:redstone_alloy_ingot'})
    cross('enderio:double_layer_capacitor', 'thermal:enderium_ingot', 'enderio:basic_capacitor', 'thermal_extra:soul_infused_dust')
    cross('enderio:octadic_capacitor', 'extendedcrafting:ender_ingot', 'enderio:double_layer_capacitor', 'mekanism_extras:dust_radiance')


    //Bimetal Gears
    event.remove({id:/enderio:(energized|vibrant|dark_bimetal)_gear/})
    event.replaceInput({output:/enderio:/},'#forge:gears/iron','enderio:dark_bimetal_gear')
    event.shaped('kubejs:infinity_gear', ['ABA','BCB','ABA'], {A: 'enderio:grains_of_infinity',B: 'minecraft:iron_ingot',C: 'enderio:stone_gear'})
    gear('enderio:dark_bimetal_gear', 'enderio:dark_steel_ingot', 'kubejs:infinity_gear')
    gear('kubejs:end_bimetal_gear', 'enderio:end_steel_ingot', 'enderio:dark_bimetal_gear')
    gear('enderio:energized_gear', 'enderio:energetic_alloy_ingot', 'kubejs:infinity_gear')
    gear('enderio:vibrant_gear', 'enderio:vibrant_alloy_ingot', 'enderio:energized_gear')

    //Dye blends
    event.shaped('6x kubejs:void_infused_dye_blend', ['ABC','BDB','CBA'], {A: 'mekanism:dust_obsidian',B: 'thermal:quartz_dust',C: 'enderio:organic_green_dye',D: 'enderio:organic_black_dye'})
    event.shaped('6x kubejs:soul_attuned_dye_blend', ['ABC','BDB','CBA'], {A: 'thermal_extra:soul_sand_dust',B: 'thermal:quartz_dust',C: 'enderio:organic_brown_dye',D: 'enderio:organic_black_dye'})

    //Chassis
    event.remove({id:/enderio:.+_chassis/})
    detailedbox('enderio:void_chassis', 'enderio:dark_steel_ingot', 'kubejs:void_infused_dye_blend', 'enderio:pulsating_crystal', 'thermal:machine_frame')
    detailedbox('enderio:ensouled_chassis', 'enderio:soularium_ingot', 'kubejs:soul_attuned_dye_blend', 'enderio:vibrant_crystal', 'enderio:void_chassis')

    //Sagmill
    event.remove({id:'enderio:sag_mill'})
    event.shaped('enderio:sag_mill', ['AAA','BCB','DED'], {A: 'enderio:end_steel_ingot',B: 'enderio:dark_steel_ingot',C: 'enderio:void_chassis',D: 'enderio:dark_bimetal_gear',E: 'minecraft:piston'})

    //Soul Binder
    event.remove({id:'enderio:soul_binder'})
    event.shaped('enderio:soul_binder', ['ABA','CDC','AEA'], {A: 'enderio:soularium_ingot',B: 'enderio:z_logic_controller',C: 'enderio:energized_gear',D: 'enderio:ensouled_chassis',E: 'enderio:experience_rod'})

    //Enchanter
    event.remove({id:'enderio:enchanter'})
    event.shaped('enderio:enchanter', [' A ','BCB','CCC'], {A: 'minecraft:book',B: 'enderio:prescient_crystal',C: 'enderio:dark_steel_block'})

    //Powered Spawner
    event.remove({id:'enderio:powered_spawner'})
    event.shaped('enderio:powered_spawner', ['ABA','CDC','EFE'], {A: 'thermal_extra:soul_infused_ingot',B: 'enderio:broken_spawner',C: 'enderio:ender_crystal',D: 'enderio:ensouled_chassis',E: 'thermal_extra:soul_infused_gear',F: 'enderio:frank_n_zombie'})

    //The Vat
    event.shaped('kubejs:the_vat', ['ABA','CDC','EFE'], {A: 'enderio:dark_steel_ingot',B: 'enderio:pressurized_fluid_tank',C: 'enderio:weather_crystal',D: 'enderio:void_chassis',E: 'enderio:dark_bimetal_gear',F: 'enderio:frank_n_zombie'})
    //event.shaped('8x kubejs:void_frame', ['AAA','ABA','AAA'], {A: 'enderio:dark_steel_ingot',B: 'enderio:void_chassis'})
    //const tvport = [{port:'tiny_item_port_input'},{port:'small_fluid_port_input'},{port:'small_fluid_port_output'},{port:'tiny_energy_port_input'}]
    //tvport.forEach((port) => {event.shapeless("mm:the_vat_"+port.port,["mm:base_"+port.port, 'kubejs:void_frame'])})

    //Soul Catcher
    event.shaped('kubejs:soul_catcher', ['ABA','CDC','EFE'], {A: 'thermal_extra:soul_infused_ingot',B: 'enderio:empty_soul_vial',C: 'enderio:prescient_crystal',D: 'enderio:ensouled_chassis',E: 'thermal_extra:soul_infused_gear',F: 'enderio:frank_n_zombie'})
    //event.shaped('8x kubejs:ensouled_frame', ['AAA','ABA','AAA'], {A: 'thermal_extra:soul_infused_ingot',B: 'enderio:ensouled_chassis'})
    //const scport = [{port:'tiny_item_port_input'},{port:'tiny_item_port_output'},{port:'small_energy_port_input'}]
    //scport.forEach((port) => {event.shapeless("mm:soul_catcher_"+port.port,["mm:base_"+port.port, 'kubejs:ensouled_frame'])})

    
})