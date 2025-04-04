ServerEvents.recipes(event => {

    //Functions
    function detailedbox(output, input1, input2, input3, input4){event.shaped(output, ['ABA','CDC','ABA'], {A: input1,B: input2,C: input3,D: input4})}
    function box(output, input1, input2, input3){event.shaped(output, ['ABA','BCB','ABA'], {A: input1,B: input2,C: input3})}
    function mekdata(output, input1, input2, input3, input4){event.custom({"type": "mekanism:mek_data","key": {"A": {"item": input1},"B": {"item": input2},"C": {"item": input3},"D": {"item": input4}},"pattern": ["ABA","CDC","ABA"],"result": {"item": output}})}
    function upgrade(output, input1, input2, input3){detailedbox('mekanism:upgrade_'+output, 'thermal:steel_ingot', input1, input2, input3)}
    //function cable(output, input1, input2, input3){event.shaped('6x '+output, ['AAA','BCB','AAA'], {A: input1,B: input3,C: input2})}

    //Steel Casing
    event.replaceInput({ output: 'mekanism:steel_casing'},'#forge:glass/silica','thermal:steel_plate')

    //Metallurgic Infuser
    event.remove({id:'mekanism:metallurgic_infuser'})
    detailedbox('mekanism:metallurgic_infuser', 'thermal:steel_ingot', 'immersiveengineering:rs_engineering', 'immersiveengineering:light_engineering', 'mekanism:steel_casing')

    //Upgrades
    event.remove({id:/mekanism:upgrade\//})
    upgrade('energy', 'powah:steel_energized', 'mekanism:alloy_infused', 'thermal:gold_dust')
    upgrade('speed', 'mekanism:ingot_refined_obsidian', 'mekanism:alloy_reinforced', 'mekanism:dust_osmium')
    upgrade('muffling', '#minecraft:wool', 'mekanism:alloy_infused', 'thermal:constantan_dust')
    upgrade('anchor', 'rftoolsbase:dimensionalshard', 'mekanism:alloy_atomic', 'thermal:ender_pearl_dust')
    upgrade('stone_generator', 'enderio:weather_crystal', 'mekanism:alloy_atomic', 'ae2:sky_dust')
    
    //Enrichment Chamber
    event.replaceInput({output:'mekanism:enrichment_chamber'},'mekanism:basic_control_circuit','mekanism:advanced_control_circuit')

    //Energized Smelter
    event.remove({id:'mekanism:energized_smelter'})
    detailedbox('mekanism:energized_smelter', 'mekanism:alloy_infused', 'mekanism:basic_control_circuit', 'immersiveengineering:insulating_glass', 'mekanism:steel_casing')

    //Crusher
    event.remove({id:'mekanism:crusher'})
    detailedbox('mekanism:crusher', 'mekanism:alloy_infused', 'mekanism:advanced_control_circuit', 'minecraft:magma_block', 'mekanism:steel_casing')

    //Osmium Compressor
    event.remove({id:'mekanism:osmium_compressor'})
    detailedbox('mekanism:osmium_compressor', 'mekanism:alloy_reinforced', 'mekanism:elite_control_circuit', 'pneumaticcraft:compressed_iron_block', 'mekanism:steel_casing')

    //Combiner
    event.remove({id:'mekanism:combiner'})
    detailedbox('mekanism:combiner', 'mekanism:alloy_infused', 'mekanism:elite_control_circuit', 'mekanism:block_refined_obsidian', 'mekanism:steel_casing')

    //Precision Sawmill
    event.remove({id:'mekanism:precision_sawmill'})
    detailedbox('mekanism:precision_sawmill', 'minecraft:iron_ingot', 'mekanism:alloy_infused', 'thermal:saw_blade', 'mekanism:steel_casing')

    //Electric Pump
    event.remove({id:'mekanism:electric_pump'})
    event.shaped('mekanism:electric_pump', [' B ','CAC','DDD'], {A:'mekanism:steel_casing',B:'immersiveengineering:fluid_pump',C:'mekanism:alloy_infused',D:'mekanism:ingot_osmium'})

    //Cables
    event.replaceInput({ output: ['mekanism:basic_universal_cable', 'mekanism:basic_mechanical_pipe', 'mekanism:basic_pressurized_tube', 'mekanism:basic_logistical_transporter', 'mekanism:basic_thermodynamic_conductor']},'#forge:ingots/steel','thermal:steel_plate')
    //event.remove({id:/mekanism(_extras){0,1}:transmitter.+/})
    //const cables = [{type:'universal_cable', basematerial:'minecraft:redstone', material:'kubejs:red_alloy_ingot'}, {type:'mechanical_pipe', basematerial:'minecraft:bucket', material:'thermal:bronze_ingot'}, {type:'pressurized_tube', basematerial:'kubejs:crystalline_alloy_ingot', material:'thermal_extra:shellite_ingot'}, {type:'logistical_transporter', basematerial:'mekanism:basic_control_circuit', material:'thermal:constantan_ingot'}, {type:'thermodynamic_conductor', basematerial:'mekanism:hdpe_sheet', material:'actuallyadditions:palis_crystal'}]
    //cables.forEach((cables) => {
    //    detailedbox('6x mekanism:basic_'+cables.type, 'thermal:steel_plate', 'immersiveengineering:stick_steel', cables.material, cables.basematerial)
    //    cable('mekanism:advanced_'+cables.type, 'mekanism:basic_'+cables.type, 'mekanism:alloy_infused', cables.material)
    //    cable('mekanism:elite_'+cables.type, 'mekanism:advanced_'+cables.type, 'mekanism:alloy_reinforced', cables.material)
    //    cable('mekanism:ultimate_'+cables.type, 'mekanism:elite_'+cables.type, 'mekanism:alloy_atomic', cables.material)
    //    cable('mekanism_extras:absolute_'+cables.type, 'mekanism:ultimate_'+cables.type, 'mekanism_extras:alloy_radiance', cables.material)
    //    cable('mekanism_extras:supreme_'+cables.type, 'mekanism_extras:absolute_'+cables.type, 'mekanism_extras:alloy_thermonuclear', cables.material)
    //    cable('mekanism_extras:cosmic_'+cables.type, 'mekanism_extras:supreme_'+cables.type, 'mekanism_extras:alloy_shining', cables.material)
    //    cable('mekanism_extras:infinite_'+cables.type, 'mekanism_extras:cosmic_'+cables.type, 'mekanism_extras:alloy_spectrum', cables.material)
    //})

    //Energy Tablet
    event.replaceInput({ output: 'mekanism:energy_tablet'},'minecraft:gold_ingot','thermal:electrum_ingot')

    //Configurator
    event.remove({id:'mekanism:configurator'})
    event.shaped('mekanism:configurator', [' A ','BCB',' D '], {A:'mekanism:basic_control_circuit',B:'mekanism:alloy_infused',C:'mekanism:energy_tablet',D:'#forge:rods/wooden'})

    //Energy Cubes
    event.remove({id:/mekanism:energy_cube.+/})
    detailedbox('mekanism:basic_energy_cube', 'minecraft:redstone', 'mekanism:energy_tablet', 'thermal:steel_ingot', 'immersiveengineering:capacitor_hv')
    mekdata('mekanism:advanced_energy_cube', 'mekanism:alloy_infused', 'mekanism:energy_tablet', 'powah:steel_energized', 'mekanism:basic_energy_cube')
    mekdata('mekanism:elite_energy_cube', 'mekanism:alloy_reinforced', 'mekanism:energy_tablet', 'thermal:signalum_ingot', 'mekanism:advanced_energy_cube')
    mekdata('mekanism:ultimate_energy_cube', 'mekanism:alloy_atomic', 'mekanism:energy_tablet', 'actuallyadditions:empowered_enori_crystal', 'mekanism:elite_energy_cube')

    //Fluid Tanks
    event.remove({id:/mekanism.+fluid_tank.+/})
    event.shaped('mekanism:basic_fluid_tank', ['ABA','B B','ABA'], {A:'minecraft:redstone', B:'minecraft:iron_ingot'})
    mekdata('mekanism:advanced_fluid_tank', 'mekanism:alloy_infused', 'thermal:steel_ingot', 'thermal:steel_ingot', 'mekanism:basic_fluid_tank')
    mekdata('mekanism:elite_fluid_tank', 'mekanism:alloy_reinforced', 'enderio:dark_steel_ingot', 'enderio:dark_steel_ingot', 'mekanism:advanced_fluid_tank')
    mekdata('mekanism:ultimate_fluid_tank', 'mekanism:alloy_atomic', 'extendedcrafting:black_iron_ingot', 'extendedcrafting:black_iron_ingot', 'mekanism:elite_fluid_tank')
    mekdata('mekanism_extras:absolute_fluid_tank', 'mekanism_extras:alloy_radiance', 'thermal_extra:dragonsteel_ingot', 'thermal_extra:dragonsteel_ingot', 'mekanism:ultimate_fluid_tank')

    //Chemical Tanks
    event.remove({id:/mekanism.+chemical_tank.+/})
    event.shaped('mekanism:basic_chemical_tank', ['ABA','B B','ABA'], {A:'minecraft:redstone', B:'mekanism:ingot_osmium'})
    mekdata('mekanism:advanced_chemical_tank', 'mekanism:alloy_infused', 'mekanism:ingot_refined_glowstone', 'mekanism:ingot_refined_glowstone', 'mekanism:basic_chemical_tank')
    mekdata('mekanism:elite_chemical_tank', 'mekanism:alloy_reinforced', 'thermal:lumium_ingot', 'thermal:lumium_ingot', 'mekanism:advanced_chemical_tank')
    mekdata('mekanism:ultimate_chemical_tank', 'mekanism:alloy_atomic', 'kubejs:crystalline_alloy_ingot', 'kubejs:crystalline_alloy_ingot', 'mekanism:elite_chemical_tank')
    mekdata('mekanism_extras:absolute_chemical_tank', 'mekanism_extras:alloy_radiance', 'thermal_extra:twinite_ingot', 'thermal_extra:twinite_ingot', 'mekanism:ultimate_chemical_tank')

    //Personal Container
    event.replaceInput({ output: ['mekanism:personal_chest', 'mekanism:personal_barrel']},'thermal:steel_ingot','extendedcrafting:black_iron_ingot')
    event.replaceInput({ output: ['mekanism:personal_chest', 'mekanism:personal_barrel']},'mekanism:basic_control_circuit','mekanism:ultimate_control_circuit')

    //Lithium Block
    //event.shapeless('kubejs:lithium_block', '9x mekanism:dust_lithium')
    //event.shapeless('9x mekanism:dust_lithium', 'kubejs:lithium_block')

    //Radiance Block
    event.shapeless('kubejs:radiance_block', '4x mekanism_extras:dust_radiance')
    event.shapeless('4x mekanism_extras:dust_radiance', 'kubejs:radiance_block')

    //Electrolytic Core
    event.remove({id:'mekanism:electrolytic_core'})
    event.shaped('mekanism:electrolytic_core', ['ABA','CDE','FAF'], {A:'thermal:steel_gear',B:'mekanism:ultimate_control_circuit',C:'mekanism:ingot_refined_obsidian',D:'enderio:prescient_crystal',E:'mekanism:ingot_refined_glowstone',F:'mekanism:alloy_atomic',})

    //Laser
    event.remove({id:'mekanism:laser'})
    event.shaped('mekanism:laser', [' A ','BCB','DED'], {A:'minecraft:diamond',B:'mekanism:energy_tablet',C:'mekanism:steel_casing',D:'mekanism:alloy_reinforced',E:'laserio:laser_connector'})

    //Chargepad
    event.remove({id:'mekanism:chargepad'})
    event.shaped('mekanism:chargepad', ['   ','AAA','BCB'], {A:'extendedcrafting:black_iron_slate',B:'mekanism:elite_control_circuit',C:'mekanism:energy_tablet'})

    //Teleportation Core
    event.remove({id:'mekanism:teleportation_core'})
    detailedbox('2x mekanism:teleportation_core', 'rftoolsbase:dimensionalshard', 'mekanism:alloy_atomic', 'thermal:enderium_ingot', 'enderio:ender_crystal')

    //Quantum Entangloporter
    event.remove({id:'mekanism:quantum_entangloporter'})
    event.shaped('mekanism:quantum_entangloporter', ['ABA','CDC','EBE'], {A:'mekanism:teleportation_core',B:'enderio:sentient_ender',C:'thermal_extra:twinite_plate',D:'extendedcrafting:frame',E:'thermal_extra:dragonsteel_gear'})
    
    //Teleporter
    event.remove({id:'mekanism:teleporter'})
    event.remove({id:'mekanism:teleporter_frame'})
    event.remove({id:'mekanism:portable_teleporter'})
    event.shaped('mekanism:teleporter', ['ABA','CDC','AEA'], {A:'extendedcrafting:black_iron_ingot',B:'mekanism:ultimate_control_circuit',C:'kubejs:extradimensional_alloy_ingot',D:'enderio:travel_anchor',E:'extendedcrafting:frame'})
    box('9x mekanism:teleporter_frame', 'extendedcrafting:black_iron_ingot', 'kubejs:extradimensional_alloy_ingot', 'enderio:sentient_ender')
    event.shaped('mekanism:portable_teleporter', ['ABA','CDC',' A '], {A:'enderio:dark_steel_ingot',B:'mekanism:energy_tablet',C:'mekanism:teleportation_core',D:'enderio:sentient_ender'})

    //Security Desk
    event.remove({id:'mekanism:security_desk'})
    event.shaped('mekanism:security_desk', ['ABA','CDC','AEA'], {A:'thermal:steel_ingot',B:'#forge:glass',C:'mekanism:elite_control_circuit',D:'mekanism:steel_casing',E:'mekanism:ingot_refined_obsidian'})

    //Atomic Disassembler
    event.remove({id:'mekanism:atomic_disassembler'})

    //Gas Machinery
    event.remove({id:'mekanism:electrolytic_separator'})
    event.remove({id:'mekanism:rotary_condensentrator'})
    event.remove({id:'mekanism:pressurized_reaction_chamber'})
    event.remove({id:/mekanism:chemical_(crystallizer|oxidizer|infuser|dissolution_chamber)/})
    event.remove({id:/mekanism:(fuelwood|resistive)_heater/})
    event.shaped('mekanism:electrolytic_separator', ['ABA','CDC','EFE'], {A:'extendedcrafting:black_iron_ingot',B:'mekanism:electrolytic_core',C:'mekanism:ultimate_chemical_tank',D:'mekanism:steel_casing',E:'kubejs:black_iron_gear',F:'mekanism:ultimate_fluid_tank'})
    event.shaped('mekanism:rotary_condensentrator', ['ABA','CDE','FBF'], {A:'extendedcrafting:black_iron_ingot',B:'mekanism:ultimate_control_circuit',C:'mekanism:ultimate_chemical_tank',D:'mekanism:steel_casing',E:'mekanism:ultimate_fluid_tank',F:'kubejs:black_iron_gear'})
    event.shaped('mekanism:pressurized_reaction_chamber', ['ABA','CDC','EFE'], {A:'extendedcrafting:black_iron_ingot',B:'mekanism:electrolytic_core',C:'mekanism:ultimate_control_circuit',D:'mekanism:enrichment_chamber',E:'mekanism:ultimate_chemical_tank',F:'mekanism:ultimate_fluid_tank'})
    event.shaped('mekanism:chemical_crystallizer', ['ABA','CDE','FBF'], {A:'enderio:dark_steel_block',B:'mekanism:hdpe_sheet',C:'mekanism:ultimate_chemical_tank',D:'mekanism:steel_casing',E:'#mekanism:personal_storage',F:'kubejs:black_iron_gear'})
    event.shaped('mekanism:chemical_oxidizer', ['ABA','CDE','FBF'], {A:'extendedcrafting:black_iron_ingot',B:'thermal_extra:dragonsteel_gear',C:'#mekanism:personal_storage',D:'mekanism:steel_casing',E:'mekanism:ultimate_chemical_tank',F:'kubejs:black_iron_gear'})
    event.shaped('mekanism:chemical_infuser', ['ABA','CDC','ECE'], {A:'extendedcrafting:black_iron_ingot',B:'thermal_extra:dragonsteel_gear',C:'mekanism:ultimate_chemical_tank',D:'mekanism:steel_casing',E:'kubejs:black_iron_gear'})
    event.shaped('mekanism:chemical_dissolution_chamber', ['ABA','CDC','EFE'], {A:'extendedcrafting:black_iron_ingot',B:'actuallyadditions:empowered_palis_crystal',C:'mekanism:ultimate_chemical_tank',D:'mekanism:steel_casing',E:'kubejs:black_iron_gear',F:'mekanism:hdpe_sheet'})
    event.shaped('mekanism:fuelwood_heater', ['ABA','CDC','AAA'], {A:'extendedcrafting:black_iron_ingot',B:'mekanism:ultimate_control_circuit',C:'minecraft:blast_furnace',D:'mekanism:steel_casing',})
    event.shaped('mekanism:resistive_heater', ['ABA','BCB','DED'], {A:'extendedcrafting:black_iron_ingot',B:'mekanism_extras:dust_radiance',C:'mekanism:fuelwood_heater',D:'kubejs:black_iron_gear',E:'mekanism:basic_induction_cell'})

    //Digital Miner / Logistical Sorter
    event.remove({id:'mekanism:logistical_sorter'})
    event.remove({id:'mekanism:digital_miner'})
    event.shaped('mekanism:logistical_sorter', ['ABA','ACA','AAA'], {A:'enderio:dark_steel_ingot',B:'minecraft:piston',C:'mekanism:ultimate_control_circuit'})
    event.shaped('mekanism:digital_miner', ['ABA','CDC','EFE'], {A:'mekanism:alloy_atomic',B:'enderio:dark_steel_block',C:'mekanism:logistical_sorter',D:'mekanism:robit',E:'mekanism:teleportation_core',F:'rftoolsbase:machine_frame'})

    //Induction Matrix
    event.remove({id:'mekanism:induction/casing'})
    box('8x mekanism:induction_casing', 'thermal:steel_plate', 'thermal:steel_plate', 'industrialforegoing:machine_frame_simple')
    event.replaceInput({ output: 'mekanism:induction_port'},'mekanism:elite_control_circuit','mekanism:ultimate_control_circuit')

    //Induction Cells / Providers
    //const induction = [{tier:'', oldtier:'', material:''}, {tier:'', oldtier:'', material:''}, {tier:'', oldtier:'', material:''}, {tier:'', oldtier:'', material:''}, {tier:'', oldtier:'', material:''}, {tier:'', oldtier:'', material:''}]
    //induction.forEach((induction) => {})
    
    //Thermal Evaporation Tower
    event.remove({id:/mekanism:thermal_evaporation\/(block|controller|valve)/})
    box('8x mekanism:thermal_evaporation_block', 'mekanism:hdpe_sheet', 'thermal:copper_plate', 'industrialforegoing:machine_frame_simple')
    event.shaped('2x mekanism:thermal_evaporation_valve', [' A ','ABA',' A '], {A:'mekanism:thermal_evaporation_block', B:'mekanism:ultimate_control_circuit'})
    event.shaped('mekanism:thermal_evaporation_controller', ['ABA','CDC','CCC'], {A:'mekanism:ultimate_control_circuit',B:'#c:glass_panes',C:'mekanism:thermal_evaporation_block',D:'mekanism:ultimate_fluid_tank'})

    //Boiler
    event.remove({id:'mekanism:superheating_element'})
    event.remove({id:'mekanism:pressure_disperser'})
    event.remove({id:'mekanism:boiler_casing'})
    box('mekanism:superheating_element', 'enderio:dark_steel_ingot', 'actuallyadditions:empowered_palis_crystal', 'industrialforegoing:machine_frame_advanced')
    box('mekanism:pressure_disperser', 'thermal:steel_ingot', 'enderio:dark_steel_bars', 'mekanism:alloy_atomic')
    box('8x mekanism:boiler_casing', 'extendedcrafting:black_iron_slate', 'extendedcrafting:black_iron_slate', 'industrialforegoing:machine_frame_simple')
    event.replaceInput({ output: 'mekanism:boiler_valve'},'mekanism:advanced_control_circuit','mekanism:ultimate_control_circuit')

    //Factories
    event.remove({id:/mekanism:tier_installer\/(basic|advanced|elite|ultimate)/})
    event.remove({id:/mekanism_extras:tier_installer\/(absolute|supreme|cosmic|infinite)/})
    detailedbox('mekanism:advanced_tier_installer', 'mekanism:alloy_reinforced', 'mekanism:elite_control_circuit', 'thermal:lumium_ingot', '#minecraft:planks')
    //detailedbox('mekanism:elite_tier_installer', 'mekanism_extras:alloy_radiance', 'mekanism_extras:absolute_control_circuit', 'minecraft:dirt', '#minecraft:planks')
    //detailedbox('mekanism:ultimate_tier_installer', 'mekanism_extras:alloy_shining', 'mekanism_extras:cosmic_control_circuit', 'minecraft:dirt', '#minecraft:planks')

    event.remove({id:/mekanism:factory\/(advanced|elite|ultimate)\/.+/})
    const machinery = [{name:'combining'},{name:'compressing'},{name:'crushing'},{name:'enriching'},{name:'infusing'},{name:'injecting'},{name:'purifying'},{name:'sawing'},{name:'smelting'}]
    machinery.forEach((machinery) => {
        event.custom({"type":"mekanism:mek_data","key":{"A":{"item":"mekanism:alloy_reinforced"},"C":{"item":"mekanism:elite_control_circuit"},"I":{"item":"extendedcrafting:luminessence"},"P":{"item":"mekanism:basic_"+machinery.name+"_factory"}},"pattern":["ACA","IPI","ACA"],"result":{"item":"mekanism:advanced_"+machinery.name+"_factory"}})
        //event.custom({"type":"mekanism:mek_data","key":{"A":{"item":"mekanism_extras:alloy_radiance"},"C":{"item":"mekanism_extras:absolute_control_circuit"},"I":{"item":"minecraft:dirt"},"P":{"item":"mekanism:advanced_"+machinery.name+"_factory"}},"pattern":["ACA","IPI","ACA"],"result":{"item":"mekanism:elite_"+machinery.name+"_factory"}})
        //event.custom({"type":"mekanism:mek_data","key":{"A":{"item":"mekanism_extras:alloy_shining"},"C":{"item":"mekanism_extras:cosmic_control_circuit"},"I":{"item":"minecraft:dirt"},"P":{"item":"mekanism:elite_"+machinery.name+"_factory"}},"pattern":["ACA","IPI","ACA"],"result":{"item":"mekanism:ultimate_"+machinery.name+"_factory"}})
    })

})