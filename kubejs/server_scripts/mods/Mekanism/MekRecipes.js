ServerEvents.recipes(event => {

    //Function DetailedBox
    function detailedbox(output, input1, input2, input3, input4){
        event.shaped(output, [
            'DBD',
            'CAC',
            'DBD'
            ], {
            A: input1,
            B: input2,
            C: input3,
            D: input4
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

    //Steel Casing
    event.replaceInput(
        { output: 'mekanism:steel_casing'},
        '#forge:glass/silica',
        'thermal:steel_plate'
    )

    //Metallurgic Infuser
    event.remove({output:'mekanism:metallurgic_infuser'})
    detailedbox('mekanism:metallurgic_infuser', 'mekanism:steel_casing', 'immersiveengineering:rs_engineering', 'immersiveengineering:light_engineering', 'thermal:steel_ingot')

    //Energy Upgrade
    event.remove({output:'mekanism:upgrade_energy'})
    detailedbox('mekanism:upgrade_energy', 'thermal:gold_dust', 'powah:steel_energized', 'mekanism:alloy_infused', 'thermal:steel_ingot')

    //Speed Upgrade
    event.remove({output:'mekanism:upgrade_speed'})
    detailedbox('mekanism:upgrade_speed', 'mekanism:dust_osmium', 'mekanism:ingot_refined_obsidian', 'mekanism:alloy_infused', 'thermal:steel_ingot')
    
    //Enrichment Chamber
    event.replaceInput(
        { output: 'mekanism:enrichment_chamber'},
        'mekanism:basic_control_circuit',
        'mekanism:advanced_control_circuit'
    )

    //Energized Smelter
    event.remove({output:'mekanism:energized_smelter'})
    detailedbox('mekanism:energized_smelter', 'mekanism:steel_casing', 'mekanism:basic_control_circuit', 'immersiveengineering:insulating_glass', 'mekanism:alloy_infused')

    //Crusher
    event.remove({output:'mekanism:crusher'})
    detailedbox('mekanism:crusher', 'mekanism:steel_casing', 'mekanism:advanced_control_circuit', 'minecraft:magma_block', 'mekanism:alloy_infused')

    //Osmium Compressor
    event.remove({output:'mekanism:osmium_compressor'})
    detailedbox('mekanism:osmium_compressor', 'mekanism:steel_casing', 'mekanism:elite_control_circuit', 'pneumaticcraft:compressed_iron_block', 'mekanism:alloy_reinforced')

    //Electric Pump
    event.remove({output:'mekanism:electric_pump'})
    event.shaped('mekanism:electric_pump', [
        ' B ',
        'CAC',
        'DDD'
        ], {
        A:'mekanism:steel_casing',
        B:'immersiveengineering:fluid_pump',
        C:'mekanism:alloy_infused',
        D:'mekanism:ingot_refined_glowstone'
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
    detailedbox('mekanism:basic_energy_cube', 'immersiveengineering:capacitor_hv', 'mekanism:energy_tablet', 'thermal:steel_ingot', 'minecraft:redstone')
    detailedbox('mekanism:advanced_energy_cube', 'mekanism:basic_energy_cube', 'mekanism:energy_tablet', 'powah:steel_energized', 'mekanism:alloy_infused')
    detailedbox('mekanism:elite_energy_cube', 'mekanism:advanced_energy_cube', 'mekanism:energy_tablet', 'thermal:signalum_ingot', 'mekanism:alloy_reinforced')
    detailedbox('mekanism:ultimate_energy_cube', 'mekanism:elite_energy_cube', 'mekanism:energy_tablet', 'thermal:signalum_ingot', 'mekanism:alloy_atomic')

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

    //Cheaper Red Alloy
    infusing("projectred_core:red_ingot", "minecraft:iron_ingot", "mekanism:redstone", 80)
})