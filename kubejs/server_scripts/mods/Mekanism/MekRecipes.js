ServerEvents.recipes(event => {

    //Function Crafting
    function detailedbox(output, input1, input2, input3, input4){
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
    
    //Function Item to Infuse Gas
    function itemtogas(input, outputamount, output){
        event.custom({"type":"mekanism:infusion_conversion","input":{"ingredient":{"item":input}},"output":{"amount":outputamount,"infuse_type":output}})
    }    

    //Function Enrichment Chamber
    function enrichment(output, outputamount, input, inputamount){
        event.custom({"type":"mekanism:enriching","input":{"amount":inputamount,"ingredient":{"item":input}},"output":{"count":outputamount,"item":output}})
    }

    //Function Metallurgic Infuser
    function infusing(output, input, gas, gasamount){
        event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":gasamount,"infuse_type":gas},"itemInput":{"ingredient":{"item":input}},"output":{"item":output}})
    }

    //Function mek-data
    function mekdata(output, input1, input2, input3){
        event.custom({
            "type": "mekanism:mek_data",
            "key": {
              "A": {"item": input1},
              "B": {"item": input2},
              "C": {"item": input3}
            },
            "pattern": [
              "ABA",
              "BCB",
              "ABA"
            ],
            "result": {
              "item": output
            }
          })
    }

    //Steel Casing
    event.replaceInput(
        { output: 'mekanism:steel_casing'},
        '#forge:glass/silica',
        'thermal:steel_plate'
    )

    //Metallurgic Infuser
    event.remove({id:'mekanism:metallurgic_infuser'})
    detailedbox('mekanism:metallurgic_infuser', 'thermal:steel_ingot', 'immersiveengineering:rs_engineering', 'immersiveengineering:light_engineering', 'mekanism:steel_casing')

    //Energy Upgrade
    event.remove({id:'mekanism:upgrade_energy'})
    detailedbox('mekanism:upgrade_energy', 'thermal:steel_ingot', 'thermal:gold_dust', 'powah:steel_energized', 'mekanism:alloy_infused', 'thermal:gold_dust')

    //Speed Upgrade
    event.remove({id:'mekanism:upgrade_speed'})
    detailedbox('mekanism:upgrade_speed', 'thermal:steel_ingot', 'mekanism:ingot_refined_obsidian', 'mekanism:alloy_infused', 'mekanism:dust_osmium')
    
    //Enrichment Chamber
    event.replaceInput(
        {output:'mekanism:enrichment_chamber'},
        'mekanism:basic_control_circuit',
        'mekanism:advanced_control_circuit'
    )

    //Energized Smelter
    event.remove({id:'mekanism:energized_smelter'})
    detailedbox('mekanism:energized_smelter', 'mekanism:alloy_infused', 'mekanism:basic_control_circuit', 'immersiveengineering:insulating_glass', 'mekanism:steel_casing')

    //Crusher
    event.remove({id:'mekanism:crusher'})
    detailedbox('mekanism:crusher', 'mekanism:alloy_infused', 'mekanism:advanced_control_circuit', 'minecraft:magma_block', 'mekanism:steel_casing')

    //Osmium Compressor
    event.remove({id:'mekanism:osmium_compressor'})
    detailedbox('mekanism:osmium_compressor', 'mekanism:alloy_reinforced', 'mekanism:elite_control_circuit', 'pneumaticcraft:compressed_iron_block', 'mekanism:steel_casing')

    //Precision Sawmill
    event.remove({id:'mekanism:precision_sawmill'})
    detailedbox('mekanism:precision_sawmill', 'minecraft:iron_ingot', 'mekanism:alloy_infused', 'thermal:saw_blade', 'mekanism:steel_casing')

    //Electric Pump
    event.remove({id:'mekanism:electric_pump'})
    event.shaped('mekanism:electric_pump', [
        ' B ',
        'CAC',
        'DDD'
        ], {
        A:'mekanism:steel_casing',
        B:'immersiveengineering:fluid_pump',
        C:'mekanism:alloy_infused',
        D:'mekanism:ingot_osmium'
    })

    //Cables
    event.replaceInput(
        { output: ['mekanism:basic_universal_cable', 'mekanism:basic_mechanical_pipe', 'mekanism:basic_pressurized_tube', 'mekanism:basic_logistical_transporter', 'mekanism:basic_thermodynamic_conductor']},
        '#forge:ingots/steel',
        'thermal:steel_plate'
    )

    //Energy Tablet
    event.replaceInput(
        { output: 'mekanism:energy_tablet'},
        'minecraft:gold_ingot',
        'thermal:electrum_ingot'
    )

    //Energy Cubes
    event.remove({id:/mekanism:energy_cube.+/})
    detailedbox('mekanism:basic_energy_cube', 'minecraft:redstone', 'mekanism:energy_tablet', 'thermal:steel_ingot', 'immersiveengineering:capacitor_hv')
    detailedbox('mekanism:advanced_energy_cube', 'mekanism:alloy_infused', 'mekanism:energy_tablet', 'powah:steel_energized', 'mekanism:basic_energy_cube')
    detailedbox('mekanism:elite_energy_cube', 'mekanism:alloy_reinforced', 'mekanism:energy_tablet', 'thermal:signalum_ingot', 'mekanism:advanced_energy_cube')
    detailedbox('mekanism:ultimate_energy_cube', 'mekanism:alloy_atomic', 'mekanism:energy_tablet', 'kubejs:empowered_energized_steel', 'mekanism:elite_energy_cube')

    //Fluid Tanks
    event.remove({id:/mekanism.+fluid_tank.+/})
    event.shaped('mekanism:basic_fluid_tank', [
        'ABA',
        'B B',
        'ABA'
        ], {A:'minecraft:redstone', B:'minecraft:iron_ingot'})
    mekdata('mekanism:advanced_fluid_tank', 'mekanism:alloy_infused', 'thermal:steel_ingot', 'mekanism:basic_fluid_tank')
    mekdata('mekanism:elite_fluid_tank', 'mekanism:alloy_reinforced', 'enderio:dark_steel_ingot', 'mekanism:advanced_fluid_tank')
    mekdata('mekanism:ultimate_fluid_tank', 'mekanism:alloy_atomic', 'extendedcrafting:black_iron_ingot', 'mekanism:elite_fluid_tank')
    mekdata('mekanism_extras:absolute_fluid_tank', 'mekanism_extras:alloy_radiance', 'thermal_extra:dragonsteel_ingot', 'mekanism:ultimate_fluid_tank')

    //Chemical Tanks
    event.remove({id:/mekanism.+chemical_tank.+/})
    event.shaped('mekanism:basic_chemical_tank', [
        'ABA',
        'B B',
        'ABA'
        ], {A:'minecraft:redstone', B:'mekanism:ingot_osmium'})
    mekdata('mekanism:advanced_chemical_tank', 'mekanism:alloy_infused', 'mekanism:ingot_refined_glowstone', 'mekanism:basic_chemical_tank')
    mekdata('mekanism:elite_chemical_tank', 'mekanism:alloy_reinforced', 'thermal:lumium_ingot', 'mekanism:advanced_chemical_tank')
    mekdata('mekanism:ultimate_chemical_tank', 'mekanism:alloy_atomic', 'kubejs:crystalline_alloy_ingot', 'mekanism:elite_chemical_tank')
    mekdata('mekanism_extras:absolute_chemical_tank', 'mekanism_extras:alloy_radiance', 'thermal_extra:twinite_ingot', 'mekanism:ultimate_chemical_tank')

    //Personal Container
    event.replaceInput(
        { output: ['mekanism:personal_chest', 'mekanism:personal_barrel']},
        'thermal:steel_ingot',
        'extendedcrafting:black_iron_ingot'
    )
    event.replaceInput(
        { output: ['mekanism:personal_chest', 'mekanism:personal_barrel']},
        'mekanism:basic_control_circuit',
        'mekanism:ultimate_control_circuit'
    )

    //Enriched Obisidan
    event.remove({output:'mekanism:enriched_refined_obsidian'})
    enrichment("mekanism:enriched_refined_obsidian", 1, "mekanism:ingot_refined_obsidian", 1)

    //Refined Obsidian Gas
    event.remove({id:'mekanism:infusion_conversion/refined_obsidian/from_dust'})
    itemtogas("mekanism:ingot_refined_obsidian", 10, "mekanism:refined_obsidian")

    //New Enriched Items
    enrichment("kubejs:enriched_rose_gold", 1, "thermal:rose_gold_ingot", 1)
    enrichment("kubejs:enriched_platinum", 1, "chemlib:platinum_ingot", 1)
    enrichment("kubejs:enriched_shellite", 1, "thermal_extra:shellite_ingot", 1)

    //New Item To Gas
    itemtogas("thermal:rose_gold_ingot", 10, "kubejs:rose_gold")
    itemtogas("kubejs:enriched_rose_gold", 80, "kubejs:rose_gold")
    itemtogas("chemlib:platinum_ingot", 10, "kubejs:platinum")
    itemtogas("kubejs:enriched_platinum", 80, "kubejs:platinum")
    itemtogas("thermal_extra:shellite_ingot", 10, "kubejs:shellite")
    itemtogas("kubejs:enriched_shellite", 80, "kubejs:shellite")

    //Base Alloys
    event.remove({id:'mekanism:metallurgic_infusing/alloy/infused'})
    infusing("mekanism:alloy_infused", "minecraft:iron_ingot", "kubejs:rose_gold", 10)
    event.remove({id:'mekanism:metallurgic_infusing/alloy/reinforced'})
    infusing("mekanism:alloy_reinforced", "mekanism:alloy_infused", "kubejs:platinum", 20)
    event.remove({id:'mekanism:metallurgic_infusing/alloy/atomic'})
    infusing("mekanism:alloy_atomic", "mekanism:alloy_reinforced", "kubejs:shellite", 40)

    //Cheaper Redstone Alloy
    infusing("enderio:redstone_alloy_ingot", "enderio:conductive_alloy_ingot", "mekanism:redstone", 80)

    //Lithium Block
    event.shapeless('kubejs:lithium_block', '9x mekanism:dust_lithium')
    event.shapeless('9x mekanism:dust_lithium', 'kubejs:lithium_block')

    //Radiance Block
    event.shapeless('kubejs:radiance_block', '4x mekanism_extras:dust_radiance')
    event.shapeless('4x mekanism_extras:dust_radiance', 'kubejs:radiance_block')

    //Electrolytic Core
    event.remove({id:'mekanism:electrolytic_core'})
    event.shaped('mekanism:electrolytic_core', [
        'ABA',
        'CDE',
        'FAF'
        ], {
        A:'thermal:steel_gear',
        B:'mekanism:ultimate_control_circuit',
        C:'mekanism:ingot_refined_obsidian',
        D:'enderio:prescient_crystal',
        E:'mekanism:ingot_refined_glowstone',
        F:'mekanism:alloy_atomic',
    })

    //Laser
    event.remove({id:'mekanism:laser'})
    event.shaped('mekanism:laser', [
        ' A ',
        'BCB',
        'DED'
        ], {
        A:'minecraft:diamond',
        B:'mekanism:energy_tablet',
        C:'mekanism:steel_casing',
        D:'mekanism:alloy_atomic',
        E:'laserio:laser_connector'
    })

    //Chargepad
    event.remove({id:'mekanism:chargepad'})
    event.shaped('mekanism:chargepad', [
        '   ',
        'AAA',
        'BCB'
        ], {
        A:'extendedcrafting:black_iron_slate',
        B:'mekanism:ultimate_control_circuit',
        C:'mekanism:energy_tablet'
    })

    //Gas Machinery
    event.remove({id:'mekanism:electrolytic_separator'})
    event.remove({id:'mekanism:rotary_condensentrator'})
    event.remove({id:'mekanism:pressurized_reaction_chamber'})
    event.remove({id:'mekanism:chemical_crystallizer'})
    event.remove({id:'mekanism:chemical_oxidizer'})
    event.remove({id:'mekanism:chemical_infuser'})
    event.remove({id:'mekanism:chemical_dissolution_chamber'})
    event.remove({id:'mekanism:fuelwood_heater'})
    event.remove({id:'mekanism:resistive_heater'})
    event.shaped('mekanism:electrolytic_separator', [
        'ABA',
        'CDC',
        'EFE'
        ], {
        A:'extendedcrafting:black_iron_ingot',
        B:'mekanism:electrolytic_core',
        C:'mekanism:ultimate_chemical_tank',
        D:'mekanism:steel_casing',
        E:'extendedcrafting:black_iron_block',
        F:'mekanism:ultimate_fluid_tank'
    })
    event.shaped('mekanism:rotary_condensentrator', [
        'ABA',
        'CDE',
        'FBF'
        ], {
        A:'extendedcrafting:black_iron_ingot',
        B:'mekanism:ultimate_control_circuit',
        C:'mekanism:ultimate_chemical_tank',
        D:'mekanism:steel_casing',
        E:'mekanism:ultimate_fluid_tank',
        F:'extendedcrafting:black_iron_block'
    })
    event.shaped('mekanism:pressurized_reaction_chamber', [
        'ABA',
        'CDC',
        'EFE'
        ], {
        A:'extendedcrafting:black_iron_ingot',
        B:'mekanism:electrolytic_core',
        C:'mekanism:ultimate_control_circuit',
        D:'mekanism:enrichment_chamber',
        E:'mekanism:ultimate_chemical_tank',
        F:'mekanism:ultimate_fluid_tank'
    })
    event.shaped('mekanism:chemical_crystallizer', [
        'ABA',
        'CDE',
        'FBF'
        ], {
        A:'enderio:dark_steel_block',
        B:'mekanism:hdpe_sheet',
        C:'mekanism:ultimate_chemical_tank',
        D:'mekanism:steel_casing',
        E:'#mekanism:personal_storage',
        F:'extendedcrafting:black_iron_block'
    })
    event.shaped('mekanism:chemical_oxidizer', [
        'ABA',
        'CDE',
        'FBF'
        ], {
        A:'extendedcrafting:black_iron_ingot',
        B:'thermal_extra:dragonsteel_gear',
        C:'#mekanism:personal_storage',
        D:'mekanism:steel_casing',
        E:'mekanism:ultimate_chemical_tank',
        F:'extendedcrafting:black_iron_block'
    })
    event.shaped('mekanism:chemical_infuser', [
        'ABA',
        'CDC',
        'ECE'
        ], {
        A:'extendedcrafting:black_iron_ingot',
        B:'thermal_extra:dragonsteel_gear',
        C:'mekanism:ultimate_chemical_tank',
        D:'mekanism:steel_casing',
        E:'extendedcrafting:black_iron_block'
    })
    event.shaped('mekanism:chemical_dissolution_chamber', [
        'ABA',
        'CDC',
        'EFE'
        ], {
        A:'extendedcrafting:black_iron_ingot',
        B:'kubejs:empowered_blazing_crystal',
        C:'mekanism:ultimate_chemical_tank',
        D:'mekanism:steel_casing',
        E:'extendedcrafting:black_iron_block',
        F:'mekanism:hdpe_sheet'
    })
    event.shaped('mekanism:fuelwood_heater', [
        'ABA',
        'CDC',
        'AAA'
        ], {
        A:'extendedcrafting:black_iron_ingot',
        B:'mekanism:ultimate_control_circuit',
        C:'minecraft:blast_furnace',
        D:'mekanism:steel_casing',
    })
    event.shaped('mekanism:resistive_heater', [
        'ABA',
        'BCB',
        'DED'
        ], {
        A:'extendedcrafting:black_iron_ingot',
        B:'mekanism_extras:dust_radiance',
        C:'mekanism:fuelwood_heater',
        D:'extendedcrafting:black_iron_block',
        E:'mekanism:basic_induction_cell'
    })

    //Dynamic Tank
    event.replaceInput(
        { output: 'mekanism:dynamic_tank'},
        'minecraft:bucket',
        'mekanism:steel_casing'
    )

    //Induction Matrix
    event.remove({id:'mekanism:induction/casing'})
    box('4x mekanism:induction_casing', 'thermal:steel_plate', 'thermal:steel_plate', 'industrialforegoing:machine_frame_simple')
    event.replaceInput(
        { output: 'mekanism:induction_port'},
        'mekanism:elite_control_circuit',
        'mekanism:ultimate_control_circuit'
    )

    //Thermal Evaporation Tower
    event.remove({id:'mekanism:thermal_evaporation/block'})
    event.remove({id:'mekanism:thermal_evaporation/controller'})
    box('4x mekanism:thermal_evaporation_block', 'mekanism:hdpe_sheet', 'thermal:copper_plate', 'industrialforegoing:machine_frame_simple')
    event.replaceInput(
        { output: 'mekanism:thermal_evaporation_valve'},
        'mekanism:advanced_control_circuit',
        'mekanism:ultimate_control_circuit'
    )
    event.shaped('mekanism:thermal_evaporation_controller', [
        'ABA',
        'CDC',
        'CCC'
        ], {
        A:'mekanism:ultimate_control_circuit',
        B:'#c:glass_panes',
        C:'mekanism:thermal_evaporation_block',
        D:'mekanism:ultimate_fluid_tank'
    })

    //Boiler
    event.remove({id:'mekanism:superheating_element'})
    event.remove({id:'mekanism:pressure_disperser'})
    event.remove({id:'mekanism:boiler_casing'})
    box('mekanism:superheating_element', 'enderio:dark_steel_ingot', 'kubejs:empowered_blazing_crystal', 'industrialforegoing:machine_frame_advanced')
    box('mekanism:pressure_disperser', 'thermal:steel_ingot', 'enderio:dark_steel_bars', 'mekanism:alloy_atomic')
    box('4x mekanism:boiler_casing', 'extendedcrafting:black_iron_slate', 'extendedcrafting:black_iron_slate', 'industrialforegoing:machine_frame_simple')
    event.replaceInput(
        { output: 'mekanism:boiler_valve'},
        'mekanism:advanced_control_circuit',
        'mekanism:ultimate_control_circuit'
    )

    //Factories
    event.remove({id:'mekanism:tier_installer/advanced'})
    event.remove({id:'mekanism:tier_installer/elite'})
    event.remove({id:'mekanism:tier_installer/ultimate'})
    detailedbox('mekanism:advanced_tier_installer', 'mekanism:alloy_reinforced', 'mekanism:elite_control_circuit', 'thermal:lumium_ingot', '#minecraft:planks')
    detailedbox('mekanism:elite_tier_installer', 'mekanism_extras:alloy_radiance', 'mekanism_extras:absolute_control_circuit', 'minecraft:dirt', '#minecraft:planks')
    detailedbox('mekanism:ultimate_tier_installer', 'mekanism_extras:alloy_shining', 'mekanism_extras:cosmic_control_circuit', 'minecraft:dirt', '#minecraft:planks')

    event.remove({id:/mekanism:factory.+advanced.+/})
    event.remove({id:/mekanism:factory.+elite.+/})
    event.remove({id:/mekanism:factory.+ultimate.+/})
    const machinery = [
        {name:'combining'},{name:'compressing'},{name:'crushing'},{name:'enriching'},{name:'infusing'},{name:'injecting'},{name:'purifying'},{name:'sawing'},{name:'smelting'}
    ]

    machinery.forEach((machinery) => {
        event.custom({"type":"mekanism:mek_data","key":{"A":{"item":"mekanism:alloy_reinforced"},"C":{"item":"mekanism:elite_control_circuit"},"I":{"item":"thermal:lumium_ingot"},"P":{"item":"mekanism:basic_"+machinery.name+"_factory"}},"pattern":["ACA","IPI","ACA"],"result":{"item":"mekanism:advanced_"+machinery.name+"_factory"}})
        event.custom({"type":"mekanism:mek_data","key":{"A":{"item":"mekanism_extras:alloy_radiance"},"C":{"item":"mekanism_extras:absolute_control_circuit"},"I":{"item":"minecraft:dirt"},"P":{"item":"mekanism:advanced_"+machinery.name+"_factory"}},"pattern":["ACA","IPI","ACA"],"result":{"item":"mekanism:elite_"+machinery.name+"_factory"}})
        event.custom({"type":"mekanism:mek_data","key":{"A":{"item":"mekanism_extras:alloy_shining"},"C":{"item":"mekanism_extras:cosmic_control_circuit"},"I":{"item":"minecraft:dirt"},"P":{"item":"mekanism:elite_"+machinery.name+"_factory"}},"pattern":["ACA","IPI","ACA"],"result":{"item":"mekanism:ultimate_"+machinery.name+"_factory"}})
    })


})