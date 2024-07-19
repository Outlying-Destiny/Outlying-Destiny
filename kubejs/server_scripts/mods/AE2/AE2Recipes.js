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

    //Remove Dusts from Inscriber
    event.remove({id:/ae2:inscriber.+dust/})
    event.remove({id:'ad_astra_giselle_addon:compat/ae2/inscriber/sky_stone_dust'})

    //Energy acceptor
    event.remove({id:'ae2:network/blocks/energy_energy_acceptor'})
    box('ae2:energy_acceptor', 'thermal:invar_ingot', 'mekanism:alloy_infused', 'mekanism:elite_control_circuit', 'thermal:machine_frame')

    //ME Controller
    event.remove({id:'ae2:network/blocks/controller'})
    box('ae2:controller', 'ae2:fluix_crystal', 'ae2:engineering_processor', 'ae2:engineering_processor', 'ae2:energy_acceptor')

    //Inscriber
    event.remove({id:'ae2:network/blocks/inscribers'})
    box('ae2:inscriber', 'thermal:invar_ingot', 'minecraft:sticky_piston', 'ae2:fluix_crystal', 'thermal:machine_frame')

    //Charger
    event.remove({id:'ae2:network/blocks/crystal_processing_charger'})
    event.shaped('ae2:charger', [
      'ABA',
      'A  ',
      'ABA'
      ], {
      A: 'thermal:invar_ingot',
      B: 'enderio:copper_alloy_ingot'
      }
    )

    //ME Chest
    event.remove({id:'ae2:network/blocks/storage_chest'})
    event.shaped('ae2:chest', [
      'ABA',
      'CDC',
      'EFE'
      ], {
      A: 'ae2:quartz_glass',
      B: 'ae2:terminal',
      C: 'ae2:fluix_glass_cable',
      D: 'thermal:machine_frame',
      E: 'thermal:invar_ingot',
      F: 'enderio:copper_alloy_ingot'
      }
    )

    //ME Drive
    event.remove({id:'ae2:network/blocks/storage_drive'})
    box('ae2:drive', 'thermal:invar_ingot', 'ae2:engineering_processor', 'ae2:fluix_glass_cable', 'ae2:chest')

    //Storage Bus
    event.replaceInput(
      { output: 'ae2:storage_bus'},
      '#ae2:interface',
      'ae2:chest'
    )

    //Illuminated Panel
    event.remove({id:'ae2:network/parts/panels_semi_dark_monitor'})
    event.shaped('ae2:semi_dark_monitor', [
      ' AB',
      'CDB',
      ' AB'
      ], {
      A: 'minecraft:glowstone_dust',
      B: 'ae2:quartz_vibrant_glass',
      C: 'thermal:invar_ingot',
      D: 'minecraft:redstone'
      }
    )

    //Energy Cell
    event.replaceInput(
      { output: 'ae2:energy_cell'},
      'ae2:quartz_glass',
      'immersiveengineering:capacitor_lv'
    )

    //Growth Accelerator
    event.remove({id:'ae2:network/blocks/crystal_processing_growth_accelerator'})
    box('ae2:growth_accelerator', 'thermal:invar_ingot', 'ae2:fluix_glass_cable', 'ae2:quartz_vibrant_glass', 'ae2:fluix_block')

    //Advanced Card
    event.remove({id:'ae2:materials/advancedcard'})
    event.remove({id:'ae2:materials/basiccard'})
    event.shaped('ae2:advanced_card', [
      'AB ',
      'CDB',
      'AB '
      ], {
      A: 'mekanism:alloy_reinforced',
      B: 'thermal:invar_ingot',
      C: 'minecraft:redstone',
      D: 'ae2:calculation_processor'
      }
    )
    event.shaped('ae2:basic_card', [
      'AB ',
      'CDB',
      'AB '
      ], {
      A: 'mekanism:alloy_infused',
      B: 'thermal:invar_ingot',
      C: 'minecraft:redstone',
      D: 'ae2:calculation_processor'
      }
    )

    //Cell Workbench
    event.remove({id:'ae2:network/blocks/cell_workbench'})
    event.shaped('ae2:cell_workbench', [
      'ABA',
      'CDC',
      'CCC'
      ], {
      A: 'ae2:certus_quartz_crystal',
      B: 'ae2:calculation_processor',
      C: 'thermal:invar_ingot',
      D: 'ae2:chest'
      }
    )

    //Network Tool
    event.replaceInput(
      { output: 'ae2:network_tool'},
      '#ae2:illuminated_panel',
      'ae2:terminal'
    )

    //Storage Components
    event.replaceInput(
      { output: /ae2:cell_component_.+/},
      'minecraft:redstone',
      'mekanism:alloy_infused'
    )
    event.replaceInput(
      { output: /ae2:cell_component_.+/},
      'minecraft:glowstone_dust',
      'mekanism:ingot_refined_glowstone'
    )

    //Meteorite Compass
    event.remove({id:'ae2:charger/meteorite_compass'})
    event.shaped('ae2:meteorite_compass', [
      ' A ',
      'ABA',
      ' A '
      ], {
      A: 'aether:holystone',
      B: 'ae2:charged_certus_quartz_crystal'
      }
    )

    //ME Cells
    event.replaceInput(
      { id:/ae2:network.+cells.+/},
      'minecraft:iron_ingot',
      'thermal:invar_ingot'
    )
    event.replaceInput(
      { id:/ae2:network.+cells.+/},
      'minecraft:copper_ingot',
      'enderio:copper_alloy_ingot'
    )

})