ServerEvents.recipes(event => {

    //Function Box
    function box(output, input1, input2, input3){event.shaped(output, ['ABA','BCB','ABA'], {A: input1,B: input2,C: input3})}
    function detailedbox(output, input1, input2, input3, input4){event.shaped(output, ['ABA','CDC','ABA'], {A: input1,B: input2,C: input3,D: input4})}
    function storage(output, input1, input2, input3, input4){event.shaped(output, ['ABA','CDC','ACA'], {A: input1,B: input2+'_processor',C: input3,D: input4})}
    function processor(processor, material){
    event.custom({"type": "ae2:inscriber","ingredients": {"middle": {"item": material},"top": {"item": "kubejs:"+processor+"_processor_press"}},"mode": "inscribe","result": {"item": "kubejs:printed_"+processor+"_processor"}})
    event.custom({"type": "ae2:inscriber","ingredients": {"bottom": {"item": "ae2:printed_silicon"},"middle": {"item": "minecraft:redstone"},"top": {"item": "kubejs:printed_"+processor+"_processor"}},"mode": "press","result": {  "item": "kubejs:"+processor+"_processor"}})
    event.custom({"type": "ae2:inscriber","ingredients": {"middle": {"item": 'minecraft:iron_block'},"top": {"item": "kubejs:"+processor+"_processor_press"}},"mode": "inscribe","result": {"item": "kubejs:"+processor+"_processor_press"}})
    event.shaped("kubejs:"+processor+"_processor_press", ['AAA','ABA','AAA'], {A: 'mysticalagriculture:certus_quartz_essence',B: material})
    }
    function cstore(storage, input1, input2){event.shaped('ae2:'+storage+'k_crafting_storage', ['ABA','BCB','ADA'], {A: 'thermal:invar_plate',B: input1,C: input2,D: 'ae2:cell_component_'+storage+'k'})}

    //Remove Dusts from Inscriber
    event.remove({id:/ae2:inscriber.+dust/})
    event.remove({id:'ad_astra_giselle_addon:compat/ae2/inscriber/sky_stone_dust'})

    //Energy acceptor
    event.remove({id:'ae2:network/blocks/energy_energy_acceptor'})
    detailedbox('ae2:energy_acceptor', 'thermal:invar_ingot', 'mekanism:alloy_infused', 'mekanism:elite_control_circuit', 'thermal:machine_frame')

    //ME Controller
    event.remove({id:'ae2:network/blocks/controller'})
    detailedbox('ae2:controller', 'ae2:fluix_crystal', 'ae2:engineering_processor', 'ae2:engineering_processor', 'ae2:energy_acceptor')

    //Inscriber
    event.remove({id:'ae2:network/blocks/inscribers'})
    detailedbox('ae2:inscriber', 'thermal:invar_ingot', 'minecraft:sticky_piston', 'ae2:fluix_crystal', 'thermal:machine_frame')

    //Charger
    event.remove({id:'ae2:network/blocks/crystal_processing_charger'})
    event.shaped('ae2:charger', ['ABA','A  ','ABA'], {A: 'thermal:invar_ingot',B: 'enderio:copper_alloy_ingot'})

    //ME Chest
    event.remove({id:'ae2:network/blocks/storage_chest'})
    event.shaped('ae2:chest', ['ABA','CDC','EFE'], {A: 'ae2:quartz_glass',B: 'ae2:terminal',C: 'ae2:fluix_glass_cable',D: 'thermal:machine_frame',E: 'thermal:invar_ingot',F: 'enderio:copper_alloy_ingot'})

    //ME Drive
    event.remove({id:'ae2:network/blocks/storage_drive'})
    detailedbox('ae2:drive', 'thermal:invar_ingot', 'ae2:engineering_processor', 'ae2:fluix_glass_cable', 'ae2:chest')

    //Storage Bus
    event.replaceInput({ output: 'ae2:storage_bus'},'#ae2:interface','ae2:chest')

    //Illuminated Panel
    event.remove({id:'ae2:network/parts/panels_semi_dark_monitor'})
    event.shaped('ae2:semi_dark_monitor', [' AB','CDB',' AB'], {A: 'minecraft:glowstone_dust',B: 'ae2:quartz_vibrant_glass',C: 'thermal:invar_ingot',D: 'minecraft:redstone'})

    //Energy Cell
    event.replaceInput({ output: 'ae2:energy_cell'},'ae2:quartz_glass','immersiveengineering:capacitor_lv')

    //Growth Accelerator
    event.remove({id:'ae2:network/blocks/crystal_processing_growth_accelerator'})
    detailedbox('ae2:growth_accelerator', 'thermal:invar_ingot', 'ae2:fluix_glass_cable', 'ae2:quartz_vibrant_glass', 'ae2:fluix_block')

    //Advanced Card
    event.remove({id:'ae2:materials/advancedcard'})
    event.remove({id:'ae2:materials/basiccard'})
    event.shaped('ae2:advanced_card', ['AB ','CDB','AB '], {A: 'mekanism:alloy_reinforced',B: 'thermal:invar_ingot',C: 'minecraft:redstone',D: 'ae2:calculation_processor'})
    event.shaped('ae2:basic_card', ['AB ','CDB','AB '], {A: 'mekanism:alloy_infused',B: 'thermal:invar_ingot',C: 'minecraft:redstone',D: 'ae2:calculation_processor'})

    //Cell Workbench
    event.remove({id:'ae2:network/blocks/cell_workbench'})
    event.shaped('ae2:cell_workbench', ['ABA','CDC','CCC'], {A: 'ae2:certus_quartz_crystal',B: 'ae2:calculation_processor',C: 'thermal:invar_ingot',D: 'ae2:chest'})

    //Me Terminal
    event.remove({id:'ae2:network/parts/terminals'})
    event.shapeless('ae2:terminal', ['#ae2:illuminated_panel', 'ae2:calculation_processor', 'ae2:logic_processor', 'mekanism:elite_control_circuit'])

    //Network Tool
    event.replaceInput({ output: 'ae2:network_tool'},'#ae2:illuminated_panel','ae2:terminal')

    //Storage Components
    event.remove({id:/ae2:network\/cells\/item_storage_components_cell_(1|4|16|64|256)k_part/})
    detailedbox('ae2:cell_component_1k', 'mekanism:alloy_infused', 'ae2:certus_quartz_crystal', 'ae2:certus_quartz_crystal', 'ae2:quartz_glass')
    storage('ae2:cell_component_4k', 'mekanism:alloy_reinforced', 'ae2:calculation', 'ae2:cell_component_1k', 'ae2:quartz_glass')
    storage('ae2:cell_component_16k', 'mekanism:ingot_refined_glowstone', 'ae2:calculation', 'ae2:cell_component_4k', 'ae2:quartz_vibrant_glass')
    storage('ae2:cell_component_64k', 'mekanism:ingot_refined_obsidian', 'ae2:calculation', 'ae2:cell_component_16k', 'ae2:quartz_vibrant_glass')
    storage('ae2:cell_component_256k', 'ae2:sky_dust', 'ae2:calculation', 'ae2:cell_component_64k', 'ae2:quartz_vibrant_glass')

    //Meteorite Compass
    event.remove({id:'ae2:charger/meteorite_compass'})
    event.shaped('ae2:meteorite_compass', [' A ','ABA',' A '], {A: 'aether:holystone',B: 'ae2:charged_certus_quartz_crystal'})

    //ME Cells
    event.replaceInput({ id:/ae2:network.+cells.+/},'minecraft:iron_ingot','thermal:invar_ingot')
    event.replaceInput({ id:/ae2:network.+cells.+/},'minecraft:copper_ingot','enderio:copper_alloy_ingot')

    //Crafting Terminal
    event.remove({id:'ae2:network/parts/terminals_crafting'})
    event.shapeless('ae2:crafting_terminal', ['ae2:terminal', 'extendedcrafting:basic_table', 'ae2:calculation_processor'])

    //Custom Processors
    processor('extradimensional', 'kubejs:extradimensional_alloy_ingot')
    processor('automaton', 'kubejs:automaton_ingot')

    //Memory Card / P2P
    event.remove({id:'ae2:tools/network_memory_card'})
    event.remove({id:'ae2:network/parts/tunnels_me'})
    event.shaped('ae2:memory_card', ['   ','ABB','CDC'], {A: 'kubejs:extradimensional_processor',B: 'thermal:invar_ingot',C: 'mekanism:alloy_infused',D: 'minecraft:redstone'})
    event.shaped('ae2:me_p2p_tunnel', [' A ','ABA','CCC'], {A: 'thermal:invar_ingot',B: 'kubejs:extradimensional_processor',C: 'ae2:fluix_crystal'})

    //Fluix Pearl
    event.remove({id:'ae2:misc/fluixpearl'})
    box('ae2:fluix_pearl', 'mekanism:alloy_atomic', 'ae2:fluix_crystal', 'minecraft:ender_pearl')

    //Wireless Receiver
    event.remove({id:'ae2:network/wireless_part'})
    event.shaped('ae2:wireless_receiver', [' A ','BCB',' B '], {A: 'ae2:fluix_pearl',B: 'thermal:invar_ingot',C: 'kubejs:extradimensional_processor'})

    //Wireless Access Point / Booster
    event.remove({id:/ae2:network\/wireless_(access_point|booster)/})
    event.shaped('ae2:wireless_access_point', [' A ',' B ','CDC'], {A: 'ae2:wireless_receiver',B: 'kubejs:extradimensional_processor',C: 'thermal:invar_ingot',D: '#ae2:glass_cable'})
    event.shaped('2x ae2:wireless_booster', ['AAA','BCB','DDD'], {A: 'mekanism:alloy_atomic',B: 'kubejs:extradimensional_processor',C: 'ae2:fluix_pearl',D: 'thermal:invar_ingot'})

    //ME / Spatial IO Port
    event.remove({id:'ae2:network/blocks/io_port'})
    event.remove({id:'ae2:network/blocks/spatial_io_port'})
    event.shaped('ae2:io_port', ['AAA','BCB','DED'], {A: 'ae2:quartz_glass',B: 'ae2:drive',C: 'ae2:fluix_glass_cable',D: 'thermal:invar_ingot',E: 'ae2:logic_processor'})
    event.shaped('ae2:spatial_io_port', ['AAA','BCB','DED'], {A: 'ae2:quartz_vibrant_glass',B: 'kubejs:extradimensional_processor',C: 'ae2:io_port',D: 'thermal:invar_ingot',E: 'ae2:fluix_glass_cable'})

    //Spatial Pylon / Components
    event.remove({id:'ae2:network/blocks/spatial_io_pylon'})
    event.remove({id:'ae2:network/cells/spatial_components'})
    event.remove({id:/ae2:network\/cells\/spatial_components_(0|1)/})
    detailedbox('ae2:spatial_pylon', 'ae2:quartz_vibrant_glass', 'ae2:fluix_glass_cable', 'ae2:fluix_dust', 'kubejs:extradimensional_processor')
    box('ae2:spatial_cell_component_2', 'mekanism:ingot_refined_glowstone', 'ae2:fluix_pearl', 'kubejs:extradimensional_processor')
    box('ae2:spatial_cell_component_16', 'mekanism:ingot_refined_obsidian', 'ae2:spatial_cell_component_2', 'kubejs:extradimensional_processor')
    box('ae2:spatial_cell_component_128', 'ae2:sky_dust', 'ae2:spatial_cell_component_16', 'kubejs:extradimensional_processor')

    //Matter Condenser
    event.remove({id:'ae2:network/blocks/io_condenser'})
    box('ae2:condenser', 'thermal:invar_ingot', 'ae2:quartz_glass', 'ae2:fluix_pearl')

    //Quantum Ring Stuff
    event.remove({id:/ae2:network\/blocks\/quantum_(ring|link)/})
    event.shaped('ae2:quantum_ring', ['ABA','CDE','ABA'], {A: 'enderio:dark_steel_ingot',B: 'kubejs:extradimensional_processor',C: 'ae2:fluix_pearl',D: 'ae2:energy_cell',E: '#ae2:smart_dense_cable'})
    box('ae2:quantum_link', 'ae2:fluix_pearl', 'kubejs:extradimensional_processor', 'ae2:quartz_glass')

    //ME Lever Emitter
    event.remove({id:'ae2:network/parts/level_emitter'})
    event.shapeless('ae2:level_emitter', ['minecraft:redstone_torch', 'kubejs:automaton_processor'])

    //Annihilation / Formation Core
    event.remove({id:/ae2:materials\/(annihilation|formation)core/})
    event.shaped('ae2:annihilation_core', [' A ','DCB',' A '], {A: 'thermal:invar_ingot',B: 'minecraft:quartz',C: 'ae2:fluix_dust',D: 'kubejs:automaton_processor'})
    event.shaped('ae2:formation_core', [' A ','BCD',' A '], {A: 'thermal:invar_ingot',B: '#ae2:all_certus_quartz',C: 'ae2:fluix_dust',D: 'kubejs:automaton_processor'})

    //Annihilation / Formation Planes
    event.remove({id:/ae2:network\/parts\/(annihilation|formation)_plane(_alt|_alt2){0,1}/})
    event.remove({id:'expatternprovider:active_formation_plane'})
    event.shaped('ae2:annihilation_plane', ['   ','AAA','BCB'], {A: 'ae2:fluix_crystal',B: 'thermal:invar_ingot',C: 'ae2:annihilation_core'})
    event.shaped('ae2:annihilation_plane', ['BA ','CA ','BA '], {A: 'ae2:fluix_crystal',B: 'thermal:invar_ingot',C: 'ae2:annihilation_core'})
    event.shaped('ae2:formation_plane', ['   ','AAA','BCB'], {A: 'ae2:fluix_crystal',B: 'thermal:invar_ingot',C: 'ae2:formation_core'})
    event.shaped('ae2:formation_plane', ['BA ','CA ','BA '], {A: 'ae2:fluix_crystal',B: 'thermal:invar_ingot',C: 'ae2:formation_core'})
    event.shapeless('expatternprovider:active_formation_plane', ['ae2:formation_plane', 'ae2:export_bus', 'kubejs:automaton_processor'])

    //Export / Import Bus
    event.remove({id:/ae2:network\/parts\/(import|export)_bus/})
    event.shaped('ae2:import_bus', ['   ','ABA','CDC'], {A: 'thermal_extra:signalum_rod',B: 'ae2:annihilation_core',C: 'thermal:invar_plate',D: 'minecraft:piston'})
    event.shaped('ae2:export_bus', ['   ','ABA','CDC'], {A: 'thermal:invar_plate',B: 'minecraft:sticky_piston',C: 'thermal_extra:signalum_rod',D: 'ae2:formation_core'})

    //Interface
    event.remove({id:'ae2:network/blocks/interfaces_interface'})
    event.shaped('ae2:interface', ['ABA','CDE','ABA'], {A: 'thermal:invar_plate',B: 'ae2:calculation_processor',C: 'ae2:annihilation_core',D: 'ae2:chest',E: 'ae2:formation_core'})

    //Pattern (Modifier)
    event.remove({id:'ae2:network/crafting/patterns_blank'})
    event.remove({id:'expatternprovider:pattern_modifier'})
    event.shaped('ae2:blank_pattern', ['ABA','CDC','EEE'], {A: 'thermal:signalum_plate',B: 'ae2:quartz_vibrant_glass',C: 'mekanism:alloy_reinforced',D: 'kubejs:automaton_processor',E: 'thermal:invar_plate'})
    event.shaped('expatternprovider:pattern_modifier', ['   ','ABA',' C '], {A: '#forge:dyes/green',B: 'ae2:blank_pattern',C: 'kubejs:automaton_processor'})

    //Pattern Provider / Molecular Assembler
    event.remove({id:'ae2:network/blocks/pattern_providers_interface'})
    event.remove({id:'ae2:network/crafting/molecular_assembler'})
    event.shaped('ae2:pattern_provider', ['ABA','CDE','ABA'], {A: 'thermal:invar_plate',B: 'ae2:logic_processor',C: 'ae2:annihilation_core',D: 'ae2:chest',E: 'ae2:formation_core'})
    event.shaped('ae2:molecular_assembler', ['ABA','CDE','ABA'], {A: 'thermal:invar_plate',B: 'ae2:quartz_glass',C: 'ae2:annihilation_core',D: 'thermal:machine_crafter',E: 'ae2:formation_core'})

    //Pattern Encoding / Access Terminal
    event.remove({id:/ae2:network\/parts\/terminals_pattern_(access|encoding)/})
    event.remove({id:/expatternprovider:epa/})
    event.shapeless('ae2:pattern_encoding_terminal', ['ae2:crafting_terminal', 'kubejs:automaton_processor'])
    event.shapeless('expatternprovider:ex_pattern_access_part', ['#ae2:illuminated_panel', '#ae2:pattern_provider', 'kubejs:automaton_processor'])

    //Crafting Units
    event.remove({id:/ae2:network\/crafting\/cpu_crafting_(unit|accelerator|monitor)/})
    event.remove({id:/ae2:network\/crafting\/\d{1,}(k_cpu_crafting_storage)/})
    detailedbox('ae2:crafting_unit', 'thermal:invar_plate', 'kubejs:automaton_processor', 'ae2:fluix_glass_cable', 'mekanism:elite_control_circuit')
    event.shaped('ae2:crafting_accelerator', ['ABA','BCB','ADA'], {A: 'thermal:invar_plate',B: 'thermal_extra:shellite_ingot',C: 'ae2:crafting_unit',D: 'mekanism:ultimate_control_circuit'})
    event.shaped('ae2:crafting_monitor', ['ABA','BCB','ADA'], {A: 'thermal:invar_plate',B: 'mekanism:hdpe_sheet',C: 'ae2:crafting_unit',D: 'ae2:storage_monitor'})
    cstore('1', 'enderio:energetic_alloy_ingot', 'ae2:crafting_unit')
    cstore('4', 'mekanism_extras:dust_radiance', 'ae2:1k_crafting_storage')
    cstore('16', 'thermal_extra:abyssal_ingot', 'ae2:4k_crafting_storage')
    cstore('64', 'elementalcraft:drenched_iron_ingot', 'ae2:16k_crafting_storage')
    //cstore(256, '', 'ae2:64k_crafting_storage')

    //Quantum Bridge Card
    event.remove({id:'ae2wtlib:quantum_bridge_card'})

    //Wireless Terminals
    event.remove({id:/ae2:network\/(upgrade_){0,1}wireless_crafting_terminal/})
    event.remove({id:/ae2wtlib:pattern_(encoding|access)/})
    event.remove({id:'expatternprovider:wireless_ex_pat'})


})