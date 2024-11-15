ServerEvents.recipes(event => {

  //Functions
  function box(output, input1, input2, input3, input4){event.shaped(output, ['ABA','CDC','ABA'], {A: input1,B: input2,C: input3,D: input4})}
  function machine(output, input1, input2, input3){
    event.remove({output:'thermal:machine_'+output})
    event.shaped('thermal:machine_'+output, [' A ','BCB','DED'], {A: input1,B: input2,C: 'thermal:machine_frame',D: input3,E: 'thermal:rf_coil'})
  }
  function device(output, input1, input2, input3){
    event.remove({output:'thermal:device_'+output})
    event.shaped('thermal:device_'+output, ['ABA','CDC','AEA'], {A: input1,B: input2,C: input3,D: 'thermal:machine_frame',E: 'thermal:redstone_servo'})
  }

  //Explosives
  const explosives = [{input: 'minecraft:redstone', tnt: 'minecraft:tnt', grenade: 'thermal:explosive_grenade'},{input: 'minecraft:glowstone_dust', tnt: 'thermal:glowstone_tnt', grenade: 'thermal:glowstone_grenade'},{input: 'minecraft:ender_pearl', tnt: 'thermal:ender_tnt', grenade: 'thermal:ender_grenade'},{input: 'minecraft:redstone_block', tnt: 'thermal:redstone_tnt', grenade: 'thermal:redstone_grenade'},{input: '#forge:slimeballs', tnt: 'thermal:slime_tnt', grenade: 'thermal:slime_grenade'},{input: 'minecraft:blaze_powder', tnt: 'thermal:fire_tnt', grenade: 'thermal:fire_grenade'},{input: 'thermal:blizz_powder', tnt: 'thermal:ice_tnt', grenade: 'thermal:ice_grenade'},{input: 'thermal:blitz_powder', tnt: 'thermal:lightning_tnt', grenade: 'thermal:lightning_grenade'},{input: 'thermal:basalz_powder', tnt: 'thermal:earth_tnt', grenade: 'thermal:earth_grenade'},{input: 'thermal:phytogro', tnt: 'thermal:phyto_tnt', grenade: 'thermal:phyto_grenade'}]

  explosives.forEach((explo) => {
    event.shaped(explo.tnt, ['ABA','ACA','AAA'], {A:explo.input,B:'minecraft:string',C:'thermal:gunpowder_block'})
    event.remove({output:explo.tnt})
    event.shaped("2x "+explo.grenade, ['ABA','DCD','ADA'], {A:explo.input,B:'minecraft:string',C:'thermal:gunpowder_block',D:'thermal:lead_ingot'})
    event.remove({output:explo.grenade})
  })

  //Earth Charge
  event.remove({input:'thermal:earth_charge'})

  //Redstone Flux Coil
  event.remove({id:'thermal:rf_coil'})
  event.shaped('thermal:rf_coil', ['  B',' A ','B  '], {A:'kubejs:red_gear',B:'thermal:gold_plate'})

  //Redstone Servro
  event.remove({id:'thermal:redstone_servo'})
  event.remove({id:'thermal_extra:machine/component_assembly/redstone_servo1'})
  event.shaped('thermal:redstone_servo', ['BAB',' A ','BAB'], {A:'thermal:iron_plate',B:'minecraft:redstone'})

  //Machine Frame
  event.remove({id:'thermal:machine_frame'})
  box('thermal:machine_frame', 'pneumaticcraft:plastic', 'thermal:invar_gear', 'powah:steel_energized', 'mekanism:steel_casing')
  
  //Rubber
  event.remove({id:'thermal:rubber_from_vine'})
  event.remove({id:'thermal:rubber_from_dandelion'})

  //Energy / Fluid Cell
  event.remove({id:/thermal:.+_cell_frame/})
  box('thermal:fluid_cell_frame', 'enderio:copper_alloy_ingot', 'thermal:bronze_gear', '#c:glass_blocks', 'thermal:machine_frame')
  box('thermal:energy_cell_frame', 'thermal:lead_ingot', 'thermal:electrum_gear', '#c:glass_blocks', 'thermal:machine_frame')
  event.replaceInput({ output:'thermal:fluid_cell'}, 'minecraft:iron_ingot', 'chemlib:platinum_ingot')
  event.replaceInput({ output:'thermal:energy_cell'}, 'minecraft:iron_ingot', 'enderio:energetic_alloy_ingot')

  //Sawdust Block Fix
  event.replaceInput({ output:'thermal:sawdust_block'},'thermal:sawdust','#forge:sawdust')
  event.replaceOutput({ output:'thermal:sawdust'},'thermal:sawdust','#forge:sawdust')
  //GearWorking Die
  event.replaceInput({ output:'thermal:press_gear_die'},'thermal:diamond_gear','#forge:gears')

  //Tinker's Workbench
  event.replaceInput({ output:'thermal:tinker_bench'},'minecraft:crafting_table','thermal:machine_frame')

  //Saw Blade
  event.remove({id:'thermal:saw_blade'})
  event.shaped('thermal:saw_blade', ['AA ','A A',' AA'], {A:'thermal:iron_plate'})

  //Florb
  event.remove({id:'thermal:florb_8'})
  event.shapeless('8x thermal:florb', ['#forge:sawdust', '#forge:slag', 'thermal:rosin'])

  //Watering Can
  event.replaceInput({ output:'thermal:watering_can'},'minecraft:copper_ingot','thermal:copper_plate')
  
  //Theum Dusts
  event.shapeless('2x kubejs:aerotheum_dust', ['2x thermal:blitz_powder', 'minecraft:redstone', 'thermal:niter_dust'])
  event.shapeless('2x kubejs:cryotheum_dust', ['2x thermal:blizz_powder', 'minecraft:redstone', 'minecraft:snowball'])
  event.shapeless('2x kubejs:petrotheum_dust', ['2x thermal:basalz_powder', 'minecraft:redstone', 'mekanism:dust_obsidian'])
  event.shapeless('2x kubejs:pyrotheum_dust', ['2x minecraft:blaze_powder', 'minecraft:redstone', 'thermal:sulfur_dust'])

  //Components
  event.remove({id:'thermal:augments/upgrade_augment_1'})
  event.remove({id:'thermal:augments/upgrade_augment_2'})
  event.remove({id:'thermal:augments/upgrade_augment_3'})
  box('thermal:upgrade_augment_1', 'thermal:invar_plate', 'thermal:obsidian_glass', 'enderio:redstone_alloy_ingot', 'thermal:lumium_gear')
  box('thermal:upgrade_augment_2', 'extendedcrafting:black_iron_slate', 'thermal:signalum_glass', 'thermal:enderium_gear', 'thermal:upgrade_augment_1')
  box('thermal:upgrade_augment_3', 'thermal_extra:dragonsteel_plate', 'thermal_extra:shellite_glass', 'thermal_extra:soul_infused_gear', 'thermal:upgrade_augment_2') 

  //Augments
  event.remove({id:'thermal:augments/machine_speed_augment'})
  event.shaped('thermal:machine_speed_augment', [' A ','BCB',' A '], {A:'thermal:electrum_gear',B:'thermal:signalum_plate',C:'thermal:rf_coil'})

  //Twinite Augments
  const augment = [{name:'fluid_tank', material:'shellite'},{name:'potion_duration', material:'abyssal'},{name:'rf_coil', material:'shellite'},{name:'rf_coil_storage', material:'shellite'},{name:'rf_coil_xfer', material:'shellite'},{name:'machine_speed', material:'soul_infused'},{name:'machine_efficiency', material:'abyssal'},{name:'machine_output', material:'shellite'},{name:'machine_catalyst', material:'abyssal'}]

  augment.forEach((augment) => {
    event.shaped('thermal_extra:'+augment.material+'_'+augment.name+'_augment', [' A ','BCB',' A '], {A:'thermal:signalum_gear',B:'thermal_extra:twinite_plate',C:'thermal:'+augment.name+'_augment'})
  })

  //Devices
  device('tree_extractor', '#minecraft:planks', 'minecraft:piston', 'thermal:iron_gear')
  device('fisher', '#minecraft:planks', 'minecraft:fishing_rod', 'thermal:silver_gear')
  device('rock_gen', 'thermal:invar_ingot', 'enderio:weather_crystal', 'kubejs:infinity_gear')
  
  //Machines
  machine('smelter', 'minecraft:blast_furnace', 'immersiveengineering:coil_lv', 'thermal:steel_gear')
  machine('crucible', 'enderio:weather_crystal', 'minecraft:magma_block', 'thermal:signalum_gear')
  machine('chiller', 'enderio:weather_crystal', 'kubejs:cryotheum_dust', 'thermal:enderium_gear')
  machine('bottler', 'enderio:prescient_crystal', 'minecraft:bucket', 'thermal:lumium_gear')
  machine('centrifuge', 'enderio:frank_n_zombie', 'enderio:end_steel_ingot', 'thermal:constantan_gear')
  machine('refinery', 'enderio:frank_n_zombie', 'extendedcrafting:black_iron_ingot', 'thermal:steel_gear')
  machine('pyrolyzer', 'minecraft:lava_bucket', 'powah:crystal_blazing', 'thermal:netherite_gear')
  machine('crafter', 'minecraft:crafting_table', 'thermal:signalum_plate', 'thermal:bronze_gear')
  
})