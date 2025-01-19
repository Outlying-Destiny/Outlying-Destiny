ServerEvents.recipes((event) => {
    
    //Functions
    function box(output, input1, input2, input3){event.shaped(output, ['ABA','BCB','ABA'], {A: input1,B: input2,C: input3})}
    function detailedbox(output, input1, input2, input3, input4){event.shaped(output, ['ABA','CDC','ABA'], {A: input1,B: input2,C: input3,D: input4})}
    function cross(output, input1, input2){event.shaped(output, [' A ','ABA',' A '], {A: input1,B: input2})}
    function detailedboxup(output, input1, input2, input3, input4, input5){event.shaped(output, ['ABA','CDC','AEA'], {A: input1,B: input2,C: input3, D: input4, E: input5})}
    function quanfier(output, input1, input2, input3){detailedboxup('kubejs:'+output+'_quantum_modifier', 'rftoolsbase:dimensionalshard', input1, input2, 'kubejs:blank_quantum_modifier', input3)}

    //event.recipes.kubejs.the_vat().id("kubejs:the_vat/water") .duration(150).inputItems("minecraft:blaze_powder", "minecraft:redstone").inputFluids("1000x enderio:hootch").outputFluids("1000x enderio:fire_water").perTick(energy => energy.inputFE(128))

    //Machinarium Casing
    cross('4x kubejs:machinarium_casing', 'kubejs:machinarium_ingot', 'mekanism:steel_casing')

    //Item / Fluid Ports
    const port = [
        {port: 'item_input',tiny: '#balm:wooden_chests',tiny2: 'functionalstorage:puller_upgrade'},
        {port: 'item_output',tiny: '#balm:wooden_chests',tiny2: 'functionalstorage:pusher_upgrade'}
    ]

    port.forEach((port) => {
        event.shapeless('kubejs:tiny_'+port.port, ['kubejs:machinarium_casing', port.tiny, port.tiny2])
        box('kubejs:small_'+port.port, 'ae2:capacity_card', 'kubejs:signalum_component', 'kubejs:tiny_'+port.port)
        detailedbox('kubejs:normal_'+port.port, 'mekanism:hdpe_sheet', 'functionalstorage:gold_upgrade', 'actuallyadditions:advanced_coil', 'kubejs:small_'+port.port)
        event.shaped('kubejs:big_'+port.port, ['AAA','BCB','AAA'], {A: 'thermal_extra:abyssal_ingot',B: 'ae2:spatial_cell_component_2',C: 'kubejs:normal_'+port.port})
    })

    //Fluid Port
    //event.shapeless('kubejs:tiny_fluid_input', ['kubejs:machinarium_casing', 'enderio:fluid_tank', 'functionalstorage:puller_upgrade'])
    //event.shapeless('kubejs:tiny_fluid_output', ['kubejs:machinarium_casing', 'enderio:fluid_tank', 'functionalstorage:pusher_upgrade'])

    //Energy Port
    box('kubejs:tiny_energy_input', 'enderio:basic_capacitor', 'powah:steel_energized', 'kubejs:machinarium_casing')
    box('kubejs:small_energy_input', 'enderio:double_layer_capacitor', 'thermal:signalum_ingot', 'kubejs:tiny_energy_input')
    box('kubejs:normal_energy_input', 'enderio:octadic_capacitor', 'actuallyadditions:empowered_enori_crystal', 'kubejs:small_energy_input')

    //Quantum Miner
    event.shaped('kubejs:quantum_miner', ['ABA','CDC','EFE'], {A: 'mekanism:hdpe_sheet',B: 'thermal_extra:abyssal_block',C: 'mekanism:ultimate_control_circuit',D: 'kubejs:machinarium_casing',E: 'mekanism:teleportation_core',F: 'rftoolsbuilder:builder'})
    detailedbox('kubejs:drill_upgrade_auto_smelt', 'actuallyadditions:empowered_enori_crystal', 'thermal:signalum_block', 'thermal:signalum_gear', 'kubejs:drill_upgrade_base')
    detailedbox('kubejs:blank_quantum_modifier', 'rftoolsbase:dimensionalshard', 'minecraft:paper', 'mekanism:hdpe_sheet', 'kubejs:machinarium_casing')
    quanfier('overworld', '#minecraft:dirt', 'naturesaura:infused_iron_block', 'kubejs:extradimensional_alloy_block')
    quanfier('nether', 'minecraft:netherrack', 'naturesaura:tainted_gold_block', 'kubejs:extradimensional_alloy_block')
    quanfier('auto_smelt', 'kubejs:drill_upgrade_auto_smelt', 'thermal_extra:dragonsteel_block', 'actuallyadditions:empowered_palis_crystal_block')
    quanfier('silk_touch', 'actuallyadditions:drill_upgrade_silk_touch', 'kubejs:radiance_block', 'actuallyadditions:empowered_palis_crystal_block')
    quanfier('fortune', 'actuallyadditions:drill_upgrade_fortune_ii', 'thermal:signalum_block', 'actuallyadditions:empowered_enori_crystal_block')
    
})