ServerEvents.recipes(event => {

    //Mirror
    event.shaped('3x solarflux:mirror', ['   ','AAA',' B '], {A:'#forge:glass',B:'actuallyadditions:palis_crystal'})

    //Photovoltaic Cells
    function cell(output, input1, input2, input3){event.shaped('3x solarflux:photovoltaic_cell_'+output, ['AAA','BBB','CCC'], {A:input1,B:input2,C:input3})}
    cell('1', 'thermal:obsidian_glass', 'powah:steel_energized', 'solarflux:mirror')
    cell('2', 'thermal:enderium_glass', 'enderio:redstone_alloy_ingot', 'solarflux:photovoltaic_cell_1')
    cell('3', 'thermal_extra:dragonsteel_glass', 'chemlib:lithium_ingot', 'solarflux:photovoltaic_cell_2')
    cell('4', 'thermal_extra:soul_infused_glass', 'mekanism_extras:dust_radiance', 'solarflux:photovoltaic_cell_3')
    //cell('5', 'kubejs:', '', 'solarflux:photovoltaic_cell_4')
    //cell('6', 'thermal_extra:abyssal_glass', '', 'solarflux:photovoltaic_cell_5')

    //Solar Panels
    event.shaped('2x solarflux:sp_1', ['AAA','BCB','DDD'], {A:'solarflux:mirror',B:'minecraft:smooth_stone',C:'enderio:conductive_alloy_ingot',D:'#forge:treated_wood'})
    event.shaped('2x solarflux:sp_2', ['AAA','ABA','AAA'], {A:'solarflux:sp_1',B:'#forge:pistons'})
    function panel(output, input1, input2, input3){event.shaped('2x solarflux:sp_'+output, ['AAA','BCB','BCB'], {A:'solarflux:photovoltaic_cell_'+input1,B:'solarflux:sp_'+input2,C:input3})}
    panel('3', '1', '2', 'actuallyadditions:basic_coil')
    panel('4', '2', '3', 'thermal:lumium_gear')
    panel('5', '3', '4', 'mekanism:ultimate_control_circuit')
    panel('6', '4', '5', 'actuallyadditions:empowered_enori_crystal')
    //panel('7', '5', '6', '')
    //panel('8', '6', '7', '')
    
    //Upgrades

})