ServerEvents.recipes(event => {

    //Functions
    function gadgetup(output, input1, input2, input3){event.shaped('buildinggadgets2:gadget_'+output, ['ABA','CBC','ADA'], {A:input1,B:input2,C:input3,D:'mekanism:teleportation_core'})}
    function gadgetdown(output, input1, input2, input3){event.shaped('buildinggadgets2:gadget_'+output, ['ABA','CDC','ADA'], {A:input1,B:'mekanism:teleportation_core',C:input3,D:input2})}

    //Gadgets
    event.remove({id:/buildinggadgets2:gadget_.+/})
    gadgetup('building', 'chemlib:platinum_metal_block', 'thermal:signalum_block', 'thermal_extra:twinite_gear')
    gadgetup('exchanging', 'chemlib:platinum_metal_block', 'enderio:energetic_alloy_block', 'thermal_extra:twinite_gear')
    gadgetdown('copy_paste', 'chemlib:platinum_metal_block', 'enderio:vibrant_alloy_block', 'thermal_extra:twinite_gear')
    gadgetdown('cut_paste', 'thermal:steel_block', 'thermal:enderium_block', 'thermal_extra:abyssal_gear')
    gadgetup('destruction', 'thermal:steel_block', 'kubejs:demon_block', 'thermal_extra:abyssal_gear')

})