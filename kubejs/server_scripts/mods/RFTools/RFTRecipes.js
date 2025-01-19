ServerEvents.recipes(event => {

    //Functions
    function box(output, input1, input2, input3){event.shaped(output, ['ABA','BCB','ABA'], {A: input1,B: input2,C: input3})}
    function detailedbox(output, input1, input2, input3, input4){event.shaped(output, ['ABA','CDC','ABA'], {A: input1,B: input2,C: input3, D: input4})}
    function detailedboxup(output, input1, input2, input3, input4, input5){event.shaped(output, ['ABA','CDC','AEA'], {A: input1,B: input2,C: input3, D: input4, E: input5})}
    function shapecard(output, input){detailedbox('rftoolsbuilder:shape_card_'+output, 'rftoolsbase:dimensionalshard', 'minecraft:paper', 'kubejs:automaton_block', 'industrialforegoing:'+input)}

    //Machine Frame / Base
    event.remove({id:/rftoolsbase:machine_(frame|base)/})
    detailedbox('rftoolsbase:machine_frame', 'kubejs:machinarium_ingot', 'rftoolsbase:dimensionalshard', 'mekanism:ultimate_control_circuit', 'industrialforegoing:machine_frame_supreme')
    event.shaped('3x rftoolsbase:machine_base', ['   ','AAA','BCB'], {A:'enderio:end_steel_ingot',B:'thermal:signalum_gear',C:'actuallyadditions:iron_casing'})

    //Timer
    event.remove({id:'rftoolsutility:timer'})
    detailedboxup('rftoolsutility:timer', 'projectred_core:red_ingot', 'minecraft:clock', 'minecraft:repeater', 'rftoolsbase:machine_base', 'minecraft:redstone_torch')

    //Redstone Transmitter / Receiver
    event.remove({id:/rftoolsutility:redstone_(transmitter|receiver)/})
    detailedboxup('rftoolsutility:redstone_transmitter', 'projectred_core:red_ingot', 'extendedcrafting:ender_ingot', 'minecraft:redstone_torch', 'rftoolsbase:machine_base', 'enderio:redstone_alloy_block')
    detailedboxup('rftoolsutility:redstone_receiver', 'projectred_core:red_ingot', 'extendedcrafting:ender_ingot', 'minecraft:comparator', 'rftoolsbase:machine_base', 'enderio:redstone_alloy_block')
    
    //Logic
    event.remove({id:'rftoolsutility:logic'})
    event.shaped('rftoolsutility:logic', ['ABC','BDB','EBF'], {A:'projectred_integration:or_gate',B:'projectred_core:red_ingot',C:'projectred_integration:nor_gate',D:'rftoolsbase:machine_base',E:'projectred_integration:and_gate',F:'projectred_integration:nand_gate'})

    
    //Unmodified Base Machinery
    event.replaceInput({output:/rftoolsutility:(analog|counter|digit|invchecker|sensor|sequencer|logic)/},'minecraft:redstone','projectred_core:red_ingot')

    //Crafters
    event.remove({id:/rftoolsutility:crafter(1|2|3)/})
    detailedbox('rftoolsutility:crafter1', 'enderio:dark_steel_ingot', 'rftoolsbase:machine_base', 'mekanism:ingot_refined_glowstone', 'minecraft:crafting_table')
    detailedbox('rftoolsutility:crafter2', 'enderio:dark_steel_ingot', 'rftoolsbase:machine_base', 'thermal:lumium_plate', 'rftoolsutility:crafter1')
    detailedbox('rftoolsutility:crafter3', 'enderio:dark_steel_ingot', 'rftoolsbase:machine_base', 'thermal:lumium_gear', 'rftoolsutility:crafter2')

    //Builder / Shape Cards
    event.remove({id:'rftoolsbuilder:builder'})
    event.remove({id:/rftoolsbuilder:shape_card_(def|liquid|pump|quarry|void)(_fortune|_silk){0,1}$/})
    event.shaped('rftoolsbuilder:builder', ['ABA','CDC','AEA'], {A:'enderio:end_steel_block',B:'extendedcrafting:ender_ingot_block',C:'thermal_extra:twinite_block',D:'rftoolsbase:machine_frame',E:'actuallyadditions:empowered_enori_crystal_block'})
    shapecard('def', 'block_placer')
    shapecard('quarry', 'block_breaker')
    shapecard('liquid', 'fluid_placer')
    shapecard('pump', 'fluid_collector')
    detailedboxup('rftoolsbuilder:shape_card_quarry_fortune', 'rftoolsbase:dimensionalshard', 'actuallyadditions:drill_upgrade_fortune_ii', 'thermal:signalum_block', 'rftoolsbuilder:shape_card_quarry', 'actuallyadditions:empowered_palis_crystal_block')
    detailedboxup('rftoolsbuilder:shape_card_quarry_silk', 'rftoolsbase:dimensionalshard', 'actuallyadditions:drill_upgrade_silk_touch', 'kubejs:radiance_block', 'rftoolsbuilder:shape_card_quarry', 'actuallyadditions:empowered_palis_crystal_block')

    //Space Chamber
    event.remove({id:/rftoolsbuilder:space_chamber/})
    box('rftoolsbuilder:space_chamber', 'thermal_extra:dragonsteel_ingot', 'thermal_extra:abyssal_glass', 'rftoolsbase:machine_frame')
    detailedboxup('rftoolsbuilder:space_chamber_controller', 'rftoolsbuilder:space_chamber', 'ae2:spatial_cell_component_128', 'rftoolsbase:crafting_card', 'rftoolsbase:machine_frame', 'ae2:spatial_io_port')
    detailedbox('rftoolsbuilder:space_chamber_card', 'rftoolsbase:dimensionalshard', 'extendedcrafting:ender_ingot', 'thermal_extra:abyssal_ingot', 'rftoolsbuilder:shape_card_def')
})