ServerEvents.recipes(event => {

    //Engineer Hammer
    event.replaceInput(
        { output: 'immersiveengineering:hammer'},
        'minecraft:iron_ingot',
        'naturesaura:infused_stone'
    )
    event.remove( {id:/immersiveengineering:crafting.+hammer.+/} )
    
    //Coke Oven
    event.replaceInput(
        { output: 'immersiveengineering:cokebrick' },
        '#forge:sandstone',
        'naturesaura:infused_stone'         
    )

    //Coke
    event.remove({ output: 'immersiveengineering:coal_coke' })
    event.remove({ input: 'immersiveengineering:coal_coke' })

    //Metal Press Mold
    event.remove({id:/immersiveengineering:blueprint.+mold.+/})
    function mold(output) {
        event.custom({"type":"immersiveengineering:blueprint","category":"molds","inputs":[{"base_ingredient":{"item":"thermal:steel_ingot"},"count":3},{"item":"immersiveengineering:wirecutter"}],"result":{"item":output}})
    }
    mold('immersiveengineering:mold_plate')
    mold('immersiveengineering:mold_rod')
    mold('immersiveengineering:mold_gear')
    mold('immersiveengineering:mold_bullet_casing')
    mold('immersiveengineering:mold_wire')
    mold('immersiveengineering:mold_packing_4')
    mold('immersiveengineering:mold_packing_9')
    mold('immersiveengineering:mold_unpacking')

    //Wire Coils
    event.shaped('immersiveengineering:wirecoil_copper', [
        ' A ',
        'ABA',
        ' A '
        ], {
        A: 'minecraft:copper_ingot',
        B: '#balm:wooden_rods'
        }
    )

    //Mechanical Components
    event.remove({id:/immersiveengineering:.+component_iron/})
    event.remove({id:/immersiveengineering:.+component_steel/})
    function component(output, ComponentInput, ComponentPlateInput) {
        event.shaped(output, [
            'AAA',
            'ABA',
            'AAA'
            ], {
            A: ComponentInput,
            B: 'thermal:bronze_ingot'
            }
        )
        event.custom({"type":"immersiveengineering:blueprint","category":"components","inputs":[{"base_ingredient":{"item":ComponentPlateInput},"count":2},{"item":"thermal:bronze_ingot"}],"result":{"item":output}})
    }
    component('immersiveengineering:component_iron', 'minecraft:iron_ingot', 'thermal:iron_plate')
    component('immersiveengineering:component_steel', 'thermal:steel_ingot', 'thermal:steel_plate')

    //Sheetmetals
    function sheetmetal(output, SheetmetalInput) {
        event.shaped(output, [
            ' A ',
            'A A',
            ' A '
            ], {
            A: SheetmetalInput
            }
        )
    }
    sheetmetal('immersiveengineering:sheetmetal_iron', 'minecraft:iron_ingot')
    sheetmetal('immersiveengineering:sheetmetal_steel', 'thermal:steel_ingot')

    //Function Box
    function box(output, input1, input2, input3){
        event.shaped(output, [
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

    //Function DetailedBox
    function detailedbox(output, input1, input2, input3, input4, input5){
        event.shaped(output, [
            'ABA',
            'DED',
            'ACA'
            ], {
            A: input1,
            B: input2,
            C: input3,
            D: input4,
            E: input5
            }
        )
    }

    //Heavy Engineering Block
    event.shapeless('immersiveengineering:heavy_engineering', ['immersiveengineering:sheetmetal_steel', 'immersiveengineering:component_steel', 'thermal:electrum_ingot'])
    
    //Light Engineering Block
    event.shapeless('immersiveengineering:light_engineering', ['immersiveengineering:sheetmetal_iron', 'immersiveengineering:component_iron', 'thermal:constantan_ingot'])
    event.replaceInput(
        { output: 'immersiveengineering:light_engineering'},
        'minecraft:copper_ingot',
        'thermal:constantan_ingot'
    )

    //Redstone Engineering Block
    event.remove({id: 'immersiveengineering:crafting/rs_engineering'})
    box('immersiveengineering:rs_engineering', 'immersiveengineering:sheetmetal_iron', 'minecraft:redstone', 'thermal:rose_gold_ingot')
    box('4x immersiveengineering:rs_engineering', 'immersiveengineering:sheetmetal_iron', 'mekanism:alloy_infused', 'projectred_core:red_ingot')

    //Thermoelectric Generator
    event.replaceInput(
        { output: 'immersiveengineering:thermoelectric_generator' },
        '#forge:plates/constantan',
        'thermal:constantan_ingot'         
    )

    //Metal Press Mold Blueprint
    event.replaceInput(
        {output:'immersiveengineering:blueprint'},
        '#forge:plates/iron',
        'immersiveengineering:hammer'
    )

    //Graphite Electrode
    event.remove({id:"immersiveengineering:metalpress/electrode"})
    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'), [
        ' A ',
        'DDD',
        'EEE'
        ], {
        A:'immersiveengineering:mold_rod',
        D:'minecraft:blue_dye',
        E:'minecraft:paper'
        }
    )

    //Function Arc Furnace
    function arcfurnace3(output, outputcount, baseinput, baseinputcount, extrainput1, extrainput2, energy, time){
        event.custom({   
            "type":"immersiveengineering:arc_furnace",
                "additives":[{"item":extrainput1}, {"item":extrainput2}],
                "energy":energy,
                "input":{"base_ingredient":{"item":baseinput},
                    "count":baseinputcount},
                "results":[{"base_ingredient":{"item":output},
                    "count":outputcount}],
                "slag":{"tag":"forge:slag"},
                "time":time
        })
    }

    //Dielectric Paste
    arcfurnace3("powah:dielectric_paste", 16, "immersiveengineering:dust_coke", 2, "minecraft:clay_ball", "minecraft:blaze_powder", 153600, 300)

    //Wooden Barrel
    event.remove({output:'immersiveengineering:wooden_barrel'})
    event.shaped('immersiveengineering:wooden_barrel', [
        'AAA',
        'BCB',
        'BBB'
        ], {
        A:'#forge:treated_wood_slab',
        B:'#forge:treated_wood',
        C:'immersiveengineering:wire_steel'
    })

    //Conveyor Belts
    event.replaceInput(
        {output:'immersiveengineering:conveyor_basic'},
        'minecraft:iron_ingot',
        'thermal:steel_ingot'
    )

    //Radiator Block
    event.remove({output:'immersiveengineering:radiator'})
    box('immersiveengineering:radiator', 'immersiveengineering:sheetmetal_steel', 'mekanism:advanced_control_circuit', 'immersiveengineering:ingot_hop_graphite')

    //Generator Block
    event.replaceInput(
        {output:'immersiveengineering:generator'},
        'immersiveengineering:component_iron',
        'mekanism:energy_tablet'
    )

    //Accumulators
    event.remove({output:/immersiveengineering:capacitor_.+/})
    detailedbox('immersiveengineering:capacitor_lv', '#forge:treated_wood', 'thermal:lead_plate', 'thermal:lead_plate', 'immersiveengineering:coil_lv', 'minecraft:iron_ingot')
    detailedbox('immersiveengineering:capacitor_mv', '#forge:treated_wood', 'thermal:nickel_plate', 'thermal:iron_plate', 'immersiveengineering:coil_mv', 'immersiveengineering:capacitor_lv')
    detailedbox('immersiveengineering:capacitor_hv', '#forge:treated_wood', 'thermal:invar_plate', 'immersiveengineering:ingot_hop_graphite', 'immersiveengineering:coil_hv', 'immersiveengineering:capacitor_mv')

    //Circuit Board
    event.remove({output:'immersiveengineering:circuit_board'})
    event.custom({"type":"immersiveengineering:blueprint","category":"components","inputs":[{"tag":"forge:plates/plastic"},{"item":"mekanism:basic_control_circuit"},{"base_ingredient":{"item":"thermal:copper_plate"},"count":2}],"result":{"item":"immersiveengineering:circuit_board"}})

    //Logic Circuit
    event.custom({"type":"immersiveengineering:blueprint","category":"components","inputs":[{"item":"immersiveengineering:circuit_board"},{"item":"immersiveengineering:component_electronic"}],"result":{"item":"immersiveengineering:logic_circuit"}})

    //External Heater
    event.replaceInput(
        {output:'immersiveengineering:furnace_heater'},
        '#forge:plates/copper',
        'thermal:steel_plate'
    )
})