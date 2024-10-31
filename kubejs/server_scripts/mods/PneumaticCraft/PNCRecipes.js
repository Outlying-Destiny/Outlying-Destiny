ServerEvents.recipes(event => {

  //Function Box
  function box(output, input1, input2, input3, input4){event.shaped(output, ['ABA','CDC','ABA'], {A: input1,B: input2,C: input3,D: input4})}
  function chamber(output, outputcount, input, inputcount, pressure){event.custom({"type": "pneumaticcraft:pressure_chamber","inputs": [{"type": "pneumaticcraft:stacked_item","count": inputcount,"item": input}],"pressure": pressure,"results": [{"count": outputcount,"item": output}]})}
  function explosion(output, input, loss){event.custom({"type": "pneumaticcraft:explosion_crafting","input": {"item": input},"loss_rate": loss,"results": [{"item": output}]})}

  //Compressed Steel
  event.remove({id:/pneumaticcraft:explosion_crafting.+compressed_iron_.+/ })
  event.remove({id:/pneumaticcraft:pressure_chamber.+compressed_iron_.+/ })
  chamber('pneumaticcraft:ingot_iron_compressed', 1, 'thermal:steel_ingot', 1, 2)
  chamber('pneumaticcraft:compressed_iron_block', 1, 'thermal:steel_block', 1, 2)
  explosion('pneumaticcraft:ingot_iron_compressed', 'thermal:steel_ingot', 0)
  explosion('pneumaticcraft:compressed_iron_block', 'thermal:steel_block', 0)

  //Compressed Steel Gear
  event.remove({output:'pneumaticcraft:compressed_iron_gear'})

  //Pressure Tube
  event.replaceInput({ output: 'pneumaticcraft:pressure_tube' },'#c:glass_blocks','immersiveengineering:insulating_glass'         )

  //Fluid Tanks
  event.remove({id:/pneumaticcraft:(small|medium|large|huge)_tank/})
  box('pneumaticcraft:small_tank', 'minecraft:iron_bars', 'pneumaticcraft:ingot_iron_compressed', 'minecraft:iron_bars', 'mekanism:basic_fluid_tank')
  box('pneumaticcraft:medium_tank', 'pneumaticcraft:plastic', 'pneumaticcraft:small_tank', 'minecraft:gold_ingot', 'pneumaticcraft:pressure_tube')
  box('pneumaticcraft:large_tank', 'pneumaticcraft:plastic', 'pneumaticcraft:medium_tank', 'mekanism:alloy_reinforced', 'pneumaticcraft:reinforced_pressure_tube')
  box('pneumaticcraft:huge_tank', 'enderio:dark_steel_ingot', 'pneumaticcraft:large_tank', 'mekanism:alloy_atomic', 'pneumaticcraft:advanced_pressure_tube')

  //Vortex Tube
  event.remove({output:'pneumaticcraft:vortex_tube'})
  event.shaped('pneumaticcraft:vortex_tube', ['AAA','CBD','AAA'], {A:'pneumaticcraft:ingot_iron_compressed',B:'pneumaticcraft:pressure_tube',C:'immersiveengineering:furnace_heater',D:'immersiveengineering:radiator'})

  //Fluid Mixer
  event.remove({output:'pneumaticcraft:fluid_mixer'})
  event.shaped('pneumaticcraft:fluid_mixer', ['DBD','EAE','BCB'], {A:'mekanism:steel_casing',B:'pneumaticcraft:small_tank',C:'pneumaticcraft:pressure_tube',D:'pneumaticcraft:compressed_iron_gear',E:'immersiveengineering:logic_circuit'})

  //Thermopneumatic Processing Plant
  event.remove({output:'pneumaticcraft:thermopneumatic_processing_plant'})
  event.shaped('pneumaticcraft:thermopneumatic_processing_plant', ['DCD','EAE','DBD'], {A:'mekanism:steel_casing',B:'pneumaticcraft:reinforced_chest',C:'immersiveengineering:logic_circuit',D:'pneumaticcraft:reinforced_stone_slab',E:'pneumaticcraft:small_tank'})

  // Flux Compressor
  event.remove({output:'pneumaticcraft:flux_compressor'})
  event.shaped('pneumaticcraft:flux_compressor', ['CBD','EAF','CGD'], {A:'mekanism:steel_casing',B:'pneumaticcraft:compressed_iron_gear',C:'immersiveengineering:component_electronic_adv',D:'immersiveengineering:logic_circuit',E:'immersiveengineering:wirecoil_electrum',F:'pneumaticcraft:pressure_tube',G:'immersiveengineering:furnace_heater'})

  //Speed Upgrade
  event.remove({id:'pneumaticcraft:speed_upgrade'})

  //Volume Upgrade
  event.remove({id:'pneumaticcraft:volume_upgrade'})
  box("4x pneumaticcraft:volume_upgrade", "pneumaticcraft:upgrade_matrix", "pneumaticcraft:ingot_iron_compressed", "pneumaticcraft:ingot_iron_compressed", "pneumaticcraft:air_canister")

  //Upgrade Matrix
  event.remove({id:'pneumaticcraft:thermo_plant/upgrade_matrix'})
  event.custom({"type": "pneumaticcraft:fluid_mixer","input1": {"type": "pneumaticcraft:fluid","amount": 1000,"fluid": "minecraft:water"},"input2": {"type": "pneumaticcraft:fluid","amount": 1000,"fluid": "kubejs:molten_lapis"},"item_output": {"item": "pneumaticcraft:upgrade_matrix","count": 4},"pressure": 1.5,"time": 60})
  event.replaceInput({output:/(pneumaticcraft|ad_astra_giselle_addon):.+_upgrade/},'#pneumaticcraft:upgrade_components','pneumaticcraft:upgrade_matrix')

  //Pressure Gauge
  event.remove({id:'pneumaticcraft:pressure_gauge'})
  event.shaped('pneumaticcraft:pressure_gauge', [' B ','BAB',' B '], {A:'immersiveengineering:stick_steel',B:'thermal:copper_plate'})

  //Memory Stick
  event.remove({id:'pneumaticcraft:memory_stick'})
  event.shaped('pneumaticcraft:memory_stick', ['ABA','ADA','C C'], {A:'pneumaticcraft:plastic',B:'minecraft:emerald',C:'thermal:electrum_ingot',D:'immersiveengineering:logic_circuit'})

})