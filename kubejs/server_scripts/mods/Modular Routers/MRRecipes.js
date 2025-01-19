ServerEvents.recipes(event => {

    //Function Box
    function box(output, input1, input2, input3, input4){
        event.shaped(output, [
            'ABA',
            'CDC',
            'ABA'
            ], {
            A: input1,
            B: input2,
            C: input3,
            D: input4
            }
        )
    }

    //Blank Module
    event.remove({id:'modularrouters:blank_module'})
    event.shaped('6x modularrouters:blank_module', [
        ' A ',
        'BCB',
        'DDD'
        ], {
        A: 'thermal:signalum_ingot',
        B: 'minecraft:iron_ingot',
        C: 'enderio:zombie_electrode',
        D: 'enderio:energetic_alloy_nugget'
        }
    )

    //Blank Upgrade
    event.remove({id:'modularrouters:blank_upgrade'})
    event.shaped('6x modularrouters:blank_upgrade', [
        'AAB',
        'ACB',
        ' AB'
        ], {
        A: 'minecraft:iron_ingot',
        B: 'enderio:energetic_alloy_nugget',
        C: 'enderio:skeletal_contractor'
        }
    )

    //Modular Routers
    event.remove({id:'modularrouters:modular_router'})
    box('modularrouters:modular_router', 'thermal:steel_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'modularrouters:blank_module')

    //Puller / Sender / Fluid / Energy modules
    event.remove({id:/modularrouters:puller_module.+/})
    event.remove({id:/modularrouters:sender_module.+/})
    event.remove({id:/modularrouters:fluid_modul.+/})
    event.remove({id:/modularrouters:energy.+/})
    event.shaped('3x modularrouters:energy_upgrade', [
        '   ',
        ' A ',
        'BCB'
        ], {
        A: 'mekanism:energy_tablet',
        B: 'thermal:electrum_ingot',
        C: 'modularrouters:blank_upgrade'
        }
    )
    function mk1(output, input){
        event.shaped(output, [
            '   ',
            ' A ',
            'BCB'
            ], {
            A: input,
            B: 'enderio:conductive_alloy_ingot',
            C: 'modularrouters:blank_module'
            }
        )
    }
    mk1('modularrouters:puller_module_1', 'minecraft:sticky_piston')
    mk1('modularrouters:sender_module_1', 'minecraft:piston')
    mk1('modularrouters:fluid_module', 'minecraft:cauldron')
    mk1('modularrouters:energy_output_module', 'powah:steel_energized')
    event.shapeless('8x modularrouters:puller_module_2', ['4x modularrouters:puller_module_1', 'enderio:ender_resonator', '4x modularrouters:puller_module_1'])
    event.shapeless('8x modularrouters:sender_module_2', ['4x modularrouters:sender_module_1', 'enderio:ender_resonator', '4x modularrouters:sender_module_1'])
    event.shapeless('8x modularrouters:fluid_module_2', ['4x modularrouters:fluid_module', 'enderio:ender_resonator', '4x modularrouters:fluid_module'])
    event.shapeless('8x modularrouters:energy_distributor_module', ['4x modularrouters:energy_output_module', 'enderio:ender_resonator', '4x modularrouters:energy_output_module'])
    //event.shapeless('modularrouters:sender_module_3', ['modularrouters:sender_module_2', 'mekanism:quantum_entangloporter'])


    //Vacuum Module + Augment
    event.remove({id:'modularrouters:vacuum_module'})
    event.remove({id:'modularrouters:xp_vacuum_augment'})    
    event.shapeless('modularrouters:vacuum_module', ['modularrouters:blank_module', 'actuallyadditions:ranged_collector'])
    event.shapeless('modularrouters:xp_vacuum_augment', ['modularrouters:augment_core', 'mob_grinding_utils:absorption_hopper'])

    //Void Module    
    event.replaceInput(
        {id:'modularrouters:void_module'},
        'minecraft:lava_bucket',
        'trashcans:item_trash_can'
    )

    //Speed / Stack / Muffling Upgrades
    event.remove({id:'modularrouters:muffler_upgrade'})
    event.remove({id:'modularrouters:stack_upgrade'})
    event.remove({id:'modularrouters:speed_upgrade'})
    event.shaped('3x modularrouters:muffler_upgrade', [
        ' A ',
        'ABA',
        ' A '
        ], {
        A: '#minecraft:wool',
        B: 'modularrouters:blank_upgrade'
        }
    )
    event.shaped('3x modularrouters:stack_upgrade', [
        ' A ',
        'BCB',
        ' A '
        ], {
        A: 'thermal:steel_ingot',
        B: 'thermal:enderium_ingot',
        C: 'modularrouters:blank_upgrade'
        }
    )
    event.shaped('3x modularrouters:speed_upgrade', [
        ' A ',
        'BCB',
        ' A '
        ], {
        A: 'thermal:lumium_ingot',
        B: 'enderio:redstone_alloy_ingot',
        C: 'modularrouters:blank_upgrade'
        }
    )

    //Placer Module
    event.remove({id:'modularrouters:placer_module'})
    event.shapeless('2x modularrouters:placer_module', ['2x modularrouters:blank_module', 'actuallyadditions:placer', 'actuallyadditions:fluid_placer'])

    //Breaker Module
    event.remove({id:'modularrouters:breaker_module'})
    event.shapeless(Item.of('2x modularrouters:breaker_module', '{modularrouters:{Pickaxe:{Count:1b,id:"minecraft:netherite_pickaxe",tag:{Damage:0}}}}'), ['2x modularrouters:blank_module', 'actuallyadditions:breaker', 'actuallyadditions:fluid_collector'])

    //Dropper Module
    event.remove({id:'modularrouters:dropper_module'})
    event.shapeless('modularrouters:dropper_module', ['modularrouters:blank_module', 'actuallyadditions:dropper'])

})