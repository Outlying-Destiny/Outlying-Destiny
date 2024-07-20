ServerEvents.recipes(event => {

    //Simple Magnets
    event.remove({id:/simplemagnets:.+/})
    event.shaped(
        'simplemagnets:basicmagnet', [
        'AAB',
        'AC ',
        'AAD'
        ], {
        A: 'thermal:invar_ingot',
        B: 'thermal:enderium_ingot',
        C: 'minecraft:ender_eye',
        D: 'thermal:signalum_ingot'
        }
    )
    event.shaped(
        'simplemagnets:advancedmagnet', [
        'AAB',
        'CDE',
        'AAF'
        ], {
        A: 'enderio:energetic_alloy_ingot',
        B: 'thermal:enderium_ingot',
        C: 'simplemagnets:basicmagnet',
        D: 'extendedcrafting:ender_ingot',
        E: 'mekanism:alloy_reinforced',
        F: 'thermal:signalum_ingot'
        }
    )
    event.shaped(
        'simplemagnets:basic_demagnetization_coil', [
        ' A ',
        'BCB',
        'CCC'
        ], {
        A: 'minecraft:glowstone_dust',
        B: 'enderio:redstone_alloy_ingot',
        C: 'thermal:steel_ingot'
        }
    )
    event.shaped(
        'simplemagnets:advanced_demagnetization_coil', [
        ' A ',
        'BCB',
        'CDC'
        ], {
        A: 'extendedcrafting:luminessence',
        B: 'enderio:energetic_alloy_ingot',
        C: 'thermal:steel_ingot',
        D: 'simplemagnets:basic_demagnetization_coil'
        }
    )

    //Item Collectors
    event.remove({id:/itemcollectors:.+/})
    event.shaped(
        'itemcollectors:advanced_collector', [
        ' A ',
        ' C ',
        'CBC'
        ], {
        A: 'extendedcrafting:ender_ingot',
        B: 'mob_grinding_utils:absorption_hopper',
        C: 'minecraft:obsidian'
        }
    )

    //Entangled


    //Tesseracts


    //Wormhole

})