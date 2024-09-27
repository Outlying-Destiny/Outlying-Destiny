ServerEvents.recipes(event => {

    //Function box
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

    //Raw Logic Chip
    event.remove({id:'laserio:logic_chip_raw'})
    box('8x laserio:logic_chip_raw', 'thermal:signalum_ingot', 'enderio:energetic_alloy_nugget', 'enderio:energetic_alloy_nugget', 'enderio:z_logic_controller')

    //Laser Wrench
    event.remove({id:'laserio:laser_wrench'})
    event.shaped('laserio:laser_wrench', [
        'A A',
        'BCB',
        ' B '
        ], {
        A: 'enderio:redstone_alloy_ingot',
        B: 'minecraft:iron_ingot',
        C: 'laserio:logic_chip'
        }
    )

    //Card Holder
    event.remove({id:'laserio:card_holder'})
    event.shaped('laserio:card_holder', [
        'A A',
        'BCB',
        'DDD'
        ], {
        A: 'enderio:conductive_alloy_ingot',
        B: '#forge:chests',
        C: 'laserio:logic_chip',
        D: 'minecraft:iron_ingot'
        }
    )

    //Card Cloner
    event.remove({id: 'laserio:card_cloner'})
    event.shaped('laserio:card_cloner', [
        'A A',
        'BCB',
        'DDD'
        ], {
        A: 'enderio:vibrant_alloy_ingot',
        B: 'minecraft:paper',
        C: 'laserio:logic_chip',
        D: 'minecraft:iron_ingot'
        }
    )

    //Laser Connector
    event.remove({id:'laserio:laser_connector'})
    event.shaped('laserio:laser_connector', [
        ' A ',
        'BCB',
        'DDD'
        ], {
        A: '#c:glass_blocks',
        B: 'thermal:steel_ingot',
        C: 'laserio:logic_chip',
        D: 'thermal:iron_plate'
        }
    )

    //Cards
    event.remove({id:/laserio:card_.+/})
    event.shaped('laserio:card_item', [
        'BAB',
        'CDC',
        'EEE'
        ], {
        A: 'enderio:pulsating_alloy_ingot',
        B: 'minecraft:quartz',
        C: 'enderio:conductive_alloy_ingot',
        D: 'laserio:logic_chip',
        E: 'enderio:energetic_alloy_nugget'
        }
    )
    event.shaped('laserio:card_fluid', [
        'BAB',
        'CDC',
        'EEE'
        ], {
        A: 'minecraft:bucket',
        B: 'minecraft:quartz',
        C: 'enderio:conductive_alloy_ingot',
        D: 'laserio:logic_chip',
        E: 'enderio:energetic_alloy_nugget'
        }
    )
    event.shaped('laserio:card_energy', [
        'BAB',
        'CDC',
        'EEE'
        ], {
        A: 'thermal:electrum_ingot',
        B: 'minecraft:quartz',
        C: 'enderio:conductive_alloy_ingot',
        D: 'laserio:logic_chip',
        E: 'enderio:energetic_alloy_nugget'
        }
    )
    event.shaped('laserio:card_redstone', [
        'BAB',
        'CDC',
        'EEE'
        ], {
        A: 'projectred_core:red_ingot',
        B: 'minecraft:quartz',
        C: 'enderio:conductive_alloy_ingot',
        D: 'laserio:logic_chip',
        E: 'enderio:energetic_alloy_nugget'
        }
    )

    //Filters
    event.remove({id:'laserio:filter_basic'})
    box('4x laserio:filter_basic', 'thermal:iron_plate', 'minecraft:quartz', 'minecraft:quartz', 'enderio:skeletal_contractor')
    event.replaceInput(
        {output:'laserio:filter_count'},
        'minecraft:observer',
        'ae2:calculation_processor'
    )
    event.replaceInput(
        {output:'laserio:filter_tag'},
        'minecraft:paper',
        'ae2:logic_processor'
    )
    event.replaceInput(
        {output:'laserio:filter_mod'},
        'minecraft:book',
        'ae2:engineering_processor'
    )
    //event.replaceInput(
    //    {output:'laserio:filter_nbt'},
    //    'minecraft:white_wool',
    //    'kubejs:something_processor'
    //)

    //Overclockers
    event.replaceInput(
        {output:'laserio:overclocker_card'},
        'minecraft:gold_ingot',
        'thermal:lumium_ingot'
    )
    event.replaceInput(
        {output:'laserio:overclocker_node'},
        'minecraft:diamond',
        'kubejs:crystalline_alloy_ingot'
    )
    event.replaceInput(
        {output:/laserio:overclocker.+/},
        'minecraft:redstone',
        'enderio:redstone_alloy_ingot'
    )
})