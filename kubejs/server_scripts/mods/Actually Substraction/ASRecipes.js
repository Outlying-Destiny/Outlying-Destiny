ServerEvents.recipes(event => {

    //Functions
    function empowerer(output, input, input1, input2, input3, florbnbt, energy, time, color){event.custom({"type": "actuallyadditions:empowering","base": {"item": input},"color": color,"energy": energy*time,"modifiers": [{"item": input1},{"item": input2},{"item": input3},{"type": "forge:nbt", "item": "thermal:florb", "nbt": florbnbt}],"result": {"item": output},"time": time})}
    function atomic(output, input, energy){event.custom({"type": "actuallyadditions:laser","energy": energy,"ingredient": {"item": input},"result": {"item": output}})}
    function detailedbox(output, input1, input2, input3, input4){event.shaped(output, ['ABA','CDC','ABA'], {A: input1,B: input2,C: input3,D: input4})}
    function drillaugment(output, input1, input2, input3, input4){
      event.remove({id:'actuallyadditions:drill_upgrade_'+output})
      detailedbox('actuallyadditions:drill_upgrade_'+output, input1, input2, input3, input4)
    }

    //Materials
    event.remove({id:/actuallyadditions:laser.+crysta.+/})
    atomic('actuallyadditions:enori_crystal', 'powah:steel_energized', 2000)
    atomic('actuallyadditions:enori_crystal_block', 'powah:energized_steel_block', 18000)
    atomic('actuallyadditions:palis_crystal', 'powah:crystal_blazing', 10000)
    atomic('actuallyadditions:palis_crystal_block', 'powah:blazing_crystal_block', 90000)
    atomic('actuallyadditions:diamatine_crystal', 'powah:crystal_niotic', 50000)
    atomic('actuallyadditions:diamatine_crystal_block', 'powah:niotic_crystal_block', 450000)
    atomic('actuallyadditions:emeradic_crystal', 'powah:crystal_spirited', 50000)
    atomic('actuallyadditions:emeradic_crystal_block', 'powah:spirited_crystal_block', 450000)
    atomic('actuallyadditions:restonia_crystal', 'powah:crystal_nitro', 50000)
    atomic('actuallyadditions:restonia_crystal_block', 'powah:nitro_crystal_block', 450000)
    atomic('actuallyadditions:crystallized_canola_seed', 'actuallyadditions:canola_seeds', 1000)
    
    //Empowered Materials
    event.remove({id:/actuallyadditions:empowering.+/})
    empowerer('actuallyadditions:empowered_enori_crystal', 'actuallyadditions:enori_crystal', 'enderio:energized_gear', 'extendedcrafting:luminessence', 'mekanism:yellow_cake_uranium', '{Fluid:{Amount:1000,FluidName:"thermal_extra:sunflower_oil"}}', 200, 100, 13421772)
    empowerer('actuallyadditions:empowered_palis_crystal', 'actuallyadditions:palis_crystal', 'minecraft:packed_ice', 'aether:aerogel', 'minecraft:obsidian', '{Fluid:{Amount:1000,FluidName:"enderio:fire_water"}}', 1000, 100, 2437779)

    //Crafting Table on a Stick
    event.replaceInput(
      { id:'actuallyadditions:crafter_on_a_stick'},
      '#minecraft:signs',
      '#forge:rods/wooden'
    )

    //Filters
    event.remove({id:'actuallyadditions:filter'})
    event.shaped('4x actuallyadditions:filter', ['AAA','ABA','AAA'], {A:'minecraft:iron_bars', B:'enderio:skeletal_contractor'})
    event.remove({id:'actuallyadditions:item_tag'})
    event.shapeless('actuallyadditions:item_tag', ['actuallyadditions:filter', 'ae2:logic_processor'])

    //Lens
    event.remove({id:'actuallyadditions:lens'})
    event.shaped('actuallyadditions:lens', ['AAA','ABA','AAA'], {A:'enderio:dark_steel_bars', B:'#forge:glass'})

    //Coils (Check Crafting Core.js for advanced Coil Recipe)
    event.remove({id:'actuallyadditions:basic_coil'})
    event.remove({id:'actuallyadditions:advanced_coil'})
    event.shaped('actuallyadditions:basic_coil', [
      ' A ',
      'CBC',
      ' A '
      ], {
      A:'extendedcrafting:black_iron_slate',
      B:'thermal_extra:signalum_rod',
      C:'kubejs:invar_wire'
      }
    )

    //Batteries
    event.remove({id:'actuallyadditions:single_battery'})
    event.shaped('actuallyadditions:single_battery', [' A ','BCB','BBB'], {A:'mekanism:alloy_infused',B:'actuallyadditions:enori_crystal',C:'actuallyadditions:advanced_coil'})
    
    //Casings
    event.remove({id:'actuallyadditions:iron_casing'})
    detailedbox('actuallyadditions:iron_casing', 'enderio:infinity_rod', 'actuallyadditions:advanced_coil', 'immersiveengineering:component_iron', 'extendedcrafting:frame')

    //Machines
    event.remove({id:'actuallyadditions:atomic_reconstructor'})
    event.shaped('actuallyadditions:atomic_reconstructor', ['ABA','CDC','AEA'], {A:'immersiveengineering:sheetmetal_steel',B:'actuallyadditions:lens',C:'actuallyadditions:basic_coil',D:'extendedcrafting:frame', E:'mekanism:laser'})
    event.remove({id:'actuallyadditions:display_stand'})
    event.shaped('actuallyadditions:display_stand', [' A ','BCB','DDD'], {A:'actuallyadditions:advanced_coil',B:'actuallyadditions:ethetic_green_block',C:'mekanism:steel_casing',D:'immersiveengineering:sheetmetal_steel'})
    event.remove({id:'actuallyadditions:empowerer'})
    event.shaped('actuallyadditions:empowerer', [' A ','BCB','   '], {A:'actuallyadditions:double_battery',B:'actuallyadditions:iron_casing',C:'actuallyadditions:display_stand',})
    event.remove({id:'actuallyadditions:ranged_collector'})
    event.shaped('actuallyadditions:ranged_collector', [' A ','CBC','   '], {A:'itemcollectors:advanced_collector',B:'actuallyadditions:iron_casing',C:'actuallyadditions:empowered_enori_crystal',})
    event.remove({id:'actuallyadditions:item_interface'})
    detailedbox('actuallyadditions:item_interface', 'actuallyadditions:basic_coil', '#forge:chests/wooden', 'immersiveengineering:sheetmetal_steel', 'actuallyadditions:iron_casing')
    detailedbox('4x actuallyadditions:laser_relay_item', 'immersiveengineering:sheetmetal_steel', 'actuallyadditions:advanced_coil', 'thermal:signalum_ingot', 'enderio:z_logic_controller')
    event.remove({id:'actuallyadditions:laser_wrench'})
    event.shaped('actuallyadditions:laser_wrench', ['A A','BCB',' B '], {A:'extendedcrafting:black_iron_ingot',B:'minecraft:iron_ingot',C:'actuallyadditions:advanced_coil'})
    event.remove({id:'actuallyadditions:coffee_machine'})
    event.shaped('actuallyadditions:coffee_machine', [' A ',' B ','CDC'], {A:'actuallyadditions:coffee_beans',B:'actuallyadditions:iron_casing',C:'actuallyadditions:basic_coil',D:'actuallyadditions:empty_cup'})
    event.remove({id:/actuallyadditions:phantom_(itemface|energyface|redstoneface|connector)/})
    detailedbox('2x actuallyadditions:phantom_itemface', 'immersiveengineering:sheetmetal_steel', 'actuallyadditions:empowered_palis_crystal', 'extendedcrafting:ender_ingot', 'enderio:sentient_ender')
    event.shaped('actuallyadditions:phantom_itemface', ['   ','ABA','   '], {A:'enderio:pulsating_alloy_ingot',B:'#outlying:phantomfaces'})
    event.shaped('actuallyadditions:phantom_energyface', ['   ','ABA','   '], {A:'thermal:electrum_ingot',B:'#outlying:phantomfaces'})
    event.shaped('actuallyadditions:phantom_redstoneface', ['   ','ABA','   '], {A:'projectred_core:red_ingot',B:'#outlying:phantomfaces'})
    event.shaped('actuallyadditions:phantom_connector', [' A ','BCB',' A '], {A:'extendedcrafting:ender_ingot',B:'minecraft:string',C:'enderio:ender_resonator'})
    event.replaceInput({ id:/actuallyadditions:phantom_(liquiface|placer|breaker)/},'actuallyadditions:phantom_itemface','#outlying:phantomfaces')
    event.remove({id:'actuallyadditions:dropper'})
    event.shaped('actuallyadditions:dropper', ['ABA','ACD','ABA'], {A:'immersiveengineering:sheetmetal_steel',B:'actuallyadditions:empowered_palis_crystal',C:'actuallyadditions:iron_casing', D:'minecraft:dropper'})


    //Drill
    event.remove({id:'actuallyadditions:drill_light_blue'})
    event.shaped('actuallyadditions:drill_light_blue', ['AAA','BCB','DDD'], {A:'kubejs:crystalline_alloy_ingot',B:'actuallyadditions:advanced_coil',C:'actuallyadditions:drill_core',D:'actuallyadditions:enori_crystal'})
    event.remove({id:'actuallyadditions:drill_core'})
    event.shaped('actuallyadditions:drill_core', ['ABA','BCD','ADA'], {A:'actuallyadditions:enori_crystal',B:'thermal:signalum_gear',C:'actuallyadditions:basic_coil',D:'thermal:enderium_gear'})
    event.shaped('kubejs:drill_upgrade_base', ['ABA','CDC','AEA'], {A:'actuallyadditions:enori_crystal',B:'mekanism:elite_control_circuit',C:'actuallyadditions:basic_coil',D:'actuallyadditions:palis_crystal', E:'thermal:signalum_gear'})
    drillaugment('speed', 'actuallyadditions:enori_crystal', 'thermal:lumium_gear', 'thermal:lumium_ingot', 'kubejs:drill_upgrade_base')
    drillaugment('speed_ii', 'actuallyadditions:empowered_enori_crystal', 'mekanism:upgrade_speed', 'actuallyadditions:drill_upgrade_speed', 'actuallyadditions:basic_coil')
    drillaugment('speed_iii', 'actuallyadditions:empowered_enori_crystal', 'industrialforegoing:speed_addon_1', 'actuallyadditions:drill_upgrade_speed_ii', 'actuallyadditions:advanced_coil')
    drillaugment('fortune', 'actuallyadditions:palis_crystal', 'kubejs:enchanted_gear', 'kubejs:enchanted_ingot','kubejs:drill_upgrade_base')
    drillaugment('fortune_ii', 'actuallyadditions:empowered_palis_crystal', 'actuallyadditions:drill_upgrade_fortune', 'actuallyadditions:drill_upgrade_fortune', 'actuallyadditions:advanced_coil')
    drillaugment('three_by_three', 'actuallyadditions:empowered_palis_crystal', 'kubejs:crystalline_alloy_block', 'thermal:area_radius_augment', 'kubejs:drill_upgrade_base')
    drillaugment('five_by_five', 'actuallyadditions:empowered_diamatine_crystal', 'thermal_extra:twinite_block', 'actuallyadditions:drill_upgrade_three_by_three', 'actuallyadditions:advanced_coil')
    drillaugment('silk_touch', 'mekanism:block_refined_glowstone', 'actuallyadditions:enori_crystal_block', 'actuallyadditions:palis_crystal_block', 'kubejs:drill_upgrade_base')
    drillaugment('block_placing', 'mekanism:block_refined_obsidian', 'actuallyadditions:enori_crystal_block', 'actuallyadditions:palis_crystal_block', 'kubejs:drill_upgrade_base')
})