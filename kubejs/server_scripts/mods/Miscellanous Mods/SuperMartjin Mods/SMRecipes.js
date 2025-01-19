ServerEvents.recipes(event => {

    //Function Box
    function detailedbox(output, input1, input2, input3, input4){event.shaped(output, ['ABA','CDC','ABA'], {A: input1,B: input2,C: input3,D: input4})}

    //Simple Magnets
    event.remove({id:/simplemagnets:.+/})
    event.shaped('simplemagnets:basicmagnet', ['AAB','AC ','AAD'], {A: 'thermal:invar_ingot',B: 'thermal:enderium_ingot',C: 'minecraft:ender_eye',D: 'thermal:signalum_ingot'})
    event.shaped('simplemagnets:advancedmagnet', ['AAB','CDE','AAF'], {A: 'enderio:energetic_alloy_ingot',B: 'thermal:enderium_ingot',C: 'simplemagnets:basicmagnet',D: 'extendedcrafting:ender_ingot',E: 'mekanism:alloy_reinforced',F: 'thermal:signalum_ingot'})
    event.shaped('simplemagnets:basic_demagnetization_coil', [' A ','BCB','CCC'], {A: 'minecraft:glowstone_dust',B: 'enderio:redstone_alloy_ingot',C: 'thermal:steel_ingot'})
    event.shaped('simplemagnets:advanced_demagnetization_coil', [' A ','BCB','CDC'], {A: 'extendedcrafting:luminessence',B: 'enderio:energetic_alloy_ingot',C: 'extendedcrafting:black_iron_ingot',D: 'simplemagnets:basic_demagnetization_coil'})

    //Item Collectors
    event.remove({id:/itemcollectors:.+/})
    event.shaped('itemcollectors:advanced_collector', [' A ',' C ','CBC'], {A: 'extendedcrafting:ender_ingot',B: 'mob_grinding_utils:absorption_hopper',C: 'minecraft:obsidian'})

    //Entangled
    event.remove({id:/entangled:/})
    detailedbox('2x entangled:block', 'kubejs:automaton_ingot', 'thermal_extra:abyssal_ingot', '#outlying:phantomfaces', 'mekanism:teleportation_core')
    event.shaped('entangled:item', [' AB',' CA','C  '], {A:'mekanism:teleportation_core',B:'enderio:sentient_ender',C:'#forge:rods/wooden'})

    //Tesseracts


    //Wormhole
    
})