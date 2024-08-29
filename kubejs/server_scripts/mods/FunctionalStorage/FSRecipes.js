ServerEvents.recipes(event => {

    //Function Storage Upgrades
    function upgrade(output, input1, input2, input3){
        event.remove({id:output})
        event.shaped(
            '4x '+output, [
            'ABA',
            'BCB',
            'ABA'
            ], {
            A: input1,
            B: input2,
            C: input3
            }
        )
    }

    //Compacting Drawers
    event.replaceInput(
        { output: ['functionalstorage:compacting_drawer', 'functionalstorage:simple_compacting_drawer', 'functionalstorage:compacting_framed_drawer', 'functionalstorage:framed_simple_compacting_drawer']},
        'minecraft:iron_ingot',
        'thermal:steel_ingot'
    )

    //Storage Controller / Access Point
    event.replaceInput(
        { output: ['functionalstorage:storage_controller', 'functionalstorage:framed_storage_controller']},
        '#functionalstorage:drawer',
        'ae2:engineering_processor'
    )
    event.replaceInput(
        { output: ['functionalstorage:controller_extension', 'functionalstorage:framed_controller_extension']},
        '#functionalstorage:drawer',
        'ae2:logic_processor'
    )
    event.replaceInput(
        { output: ['functionalstorage:storage_controller', 'functionalstorage:framed_storage_controller', 'functionalstorage:controller_extension', 'functionalstorage:framed_controller_extension']},
        ['minecraft:comparator', 'minecraft:repeater'],
        '#functionalstorage:drawer'
    )

    //Framed Drawers
    event.replaceInput(
        { output: /functionalstorage.+framed.+/},
        'minecraft:iron_nugget',
        'thermal:steel_nugget'
    )

    //Fluid Drawers
    event.replaceInput(
        { output: ['functionalstorage:fluid_1', 'functionalstorage:fluid_2', 'functionalstorage:fluid_4']},
        '#minecraft:planks',
        'minecraft:stone'
    )
    event.replaceInput(
        { output: ['functionalstorage:fluid_1', 'functionalstorage:fluid_2', 'functionalstorage:fluid_4']},
        'minecraft:bucket',
        'enderio:pressurized_fluid_tank'
    )

    //Puller / Pusher Upgrade
    event.remove({id:/functionalstorage:puller_upgrade/})
    event.remove({id:/functionalstorage:pusher_upgrade/})
    event.shaped(
        '2x functionalstorage:puller_upgrade', [
        'ABA',
        'ACA',
        'ADA'
        ], {
        A: 'thermal:steel_ingot',
        B: 'minecraft:hopper',
        C: '#functionalstorage:drawer',
        D: 'minecraft:redstone'
        }
    )
    event.shaped(
        '2x functionalstorage:pusher_upgrade', [
        'ADA',
        'ACA',
        'ABA'
        ], {
        A: 'thermal:steel_ingot',
        B: 'minecraft:hopper',
        C: '#functionalstorage:drawer',
        D: 'minecraft:redstone'
        }
    )
    
    //Storage Upgrades
    upgrade('functionalstorage:copper_upgrade', 'powah:steel_energized', '#functionalstorage:drawer', 'powah:steel_energized_block')
    upgrade('functionalstorage:gold_upgrade', 'extendedcrafting:luminessence', 'functionalstorage:copper_upgrade', 'extendedcrafting:luminessence_block')

})