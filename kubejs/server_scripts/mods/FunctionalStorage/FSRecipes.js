ServerEvents.recipes(event => {

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
    
    //Energized Steel Upgrade
    event.remove({ output: 'functionalstorage:copper_upgrade' })
    event.shaped(
        '4x functionalstorage:copper_upgrade', [
        'ACA',
        'CBC',
        'ACA'
        ], {
        A: 'powah:steel_energized',
        B: 'powah:energized_steel_block',
        C: '#functionalstorage:drawer'
        }
    )

})