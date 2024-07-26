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
      
    //Function SagMill
    function sagmill(output, outputcount, input, energy){
        event.custom({
            "type": "enderio:sag_milling",
            "energy": energy,
            "input": {
              "item": input
            },
            "outputs": [
              {
                "count": outputcount,
                "item": output
              }
            ]
          })
    }
    
    //SAG Mill Thermal Blaze Powder
    sagmill('thermal:basalz_powder', 4, 'thermal:basalz_rod', 2400)
    sagmill('thermal:blitz_powder', 4, 'thermal:blitz_rod', 2400)
    sagmill('thermal:blizz_powder', 4, 'thermal:blizz_rod', 2400)

    //SAG MILL Flour
    event.remove({id:'enderio:sag_milling/wheat'})
    event.remove({id:'enderio:cake'})
    

    //"Enderios"
    event.replaceInput(
      { output: 'enderio:enderios'},
      'enderio:powdered_ender_pearl',
      'thermal:ender_pearl_dust'
    )

    //Vacuums
    event.replaceInput(
      {output:['enderio:vacuum_chest', 'enderio:xp_vacuum']},
      'minecraft:iron_ingot',
      'enderio:dark_steel_ingot'
    )

    //Travel Anchor
    event.remove({id:'enderio:travel_anchor'})
    event.shaped(
      'enderio:travel_anchor', [
      'ABA',
      'BCB',
      'ABA'
      ], {
      A: 'enderio:dark_steel_ingot',
      B: 'thermal:enderium_glass',
      C: 'mekanism:teleportation_core'
      }
    )
    event.replaceInput(
      {output:'enderio:staff_of_travelling'},
      'enderio:dark_steel_ingot',
      'enderio:infinity_rod'
    )

    //Remove SAG Mill Coal dupe
    event.remove({id:'enderio:sag_milling/coal'})
    
    //Dark / End Steel Bars
    event.remove({id:/enderio:.+_steel_bars/})
    event.shaped(
      '8x enderio:dark_steel_bars', [
      'AAA',
      'AAA',
      '   '
      ], {
      A: 'kubejs:dark_steel_rod'
      }
    )
    event.shaped(
      '8x enderio:end_steel_bars', [
      'AAA',
      'AAA',
      '   '
      ], {
      A: 'kubejs:end_steel_rod'
      }
    )

    //Fluid Tanks
    event.remove({id:'enderio:fluid_tank'})
    box('enderio:fluid_tank', 'thermal:steel_ingot', 'minecraft:iron_bars', 'minecraft:iron_bars', '#enderio:fused_quartz')
    event.replaceInput(
      {output:'enderio:pressurized_fluid_tank'},
      '#enderio:fused_quartz',
      'enderio:fluid_tank'
    )

    //Tier 1 Crystals
    function crystals(output, input1, input2){
      event.shaped(
        output, [
        'AAA',
        'ABA',
        'AAA'
        ], {
        A: input1,
        B: input2
        }
      )
    }
    event.remove({id:'enderio:pulsating_crystal'})
    event.remove({id:'enderio:vibrant_crystal'})
    crystals('enderio:pulsating_crystal', 'enderio:pulsating_alloy_ingot', 'mekanism:alloy_reinforced')
    crystals('2x enderio:pulsating_crystal', 'enderio:pulsating_alloy_ingot', 'kubejs:crystalline_alloy_ingot')
    crystals('4x enderio:pulsating_crystal', 'enderio:pulsating_alloy_ingot', 'powah:crystal_niotic')
    crystals('enderio:vibrant_crystal', 'enderio:vibrant_alloy_ingot', 'mekanism:alloy_reinforced')
    crystals('2x enderio:vibrant_crystal', 'enderio:vibrant_alloy_ingot', 'kubejs:crystalline_alloy_ingot')    
    crystals('4x enderio:vibrant_crystal', 'enderio:vibrant_alloy_ingot', 'powah:crystal_niotic')

    //Basic Capcacitor
    event.remove({id:'enderio:basic_capacitor'})
    event.shaped(
      'enderio:basic_capacitor', [
      ' AB',
      'ACA',
      'BA '
      ], {
      A: 'enderio:dark_steel_ingot',
      B: 'enderio:grains_of_infinity',
      C: 'enderio:redstone_alloy_ingot'
      }
    )

    //Bimetal Gears
    event.remove({id:'enderio:dark_bimetal_gear'})
    event.remove({id:'enderio:energized_gear'})
    event.remove({id:'enderio:vibrant_gear'})
    event.shaped(
      'kubejs:infinity_gear', [
      'ABA',
      'BCB',
      'ABA'
      ], {
      A: 'enderio:grains_of_infinity',
      B: 'thermal:steel_ingot',
      C: 'enderio:stone_gear'
      }
    )
    function gear(output, input1, input2){
      event.shaped(
        output, [
        ' A ',
        'ABA',
        ' A '
        ], {
        A: input1,
        B: input2
        }
      )
    }
    gear('enderio:dark_bimetal_gear', 'enderio:dark_steel_ingot', 'kubejs:infinity_gear')
    gear('enderio:energized_gear', 'enderio:energetic_alloy_ingot', 'kubejs:infinity_gear')
    gear('enderio:vibrant_gear', 'enderio:vibrant_alloy_ingot', 'enderio:energized_gear')

    //Dye blends
    event.shaped(
      '6x kubejs:void_infused_dye_blend', [
      'ABC',
      'BDB',
      'CBA'
      ], {
      A: 'mekanism:dust_obsidian',
      B: 'thermal:quartz_dust',
      C: 'enderio:organic_green_dye',
      D: 'enderio:organic_black_dye'
      }
    )
    event.shaped(
      '6x kubejs:soul_attuned_dye_blend', [
      'ABC',
      'BDB',
      'CBA'
      ], {
      A: 'thermal_extra:soul_sand_dust',
      B: 'thermal:quartz_dust',
      C: 'enderio:organic_brown_dye',
      D: 'enderio:organic_black_dye'
      }
    )

    //Chassis
    event.remove({id:/enderio:.+_chassis/})
    box('enderio:void_chassis', 'enderio:dark_steel_ingot', 'kubejs:void_infused_dye_blend', 'enderio:pulsating_crystal', 'thermal:machine_frame')
    box('enderio:ensouled_chassis', 'enderio:soularium_ingot', 'kubejs:soul_attuned_dye_blend', 'enderio:vibrant_crystal', 'enderio:void_chassis')

    //Sagmill
    event.remove({id:'enderio:sag_mill'})
    event.shaped(
      'enderio:sag_mill', [
      'AAA',
      'BCB',
      'DED'
      ], {
      A: 'enderio:end_steel_ingot',
      B: 'enderio:dark_steel_ingot',
      C: 'enderio:void_chassis',
      D: 'enderio:dark_bimetal_gear',
      E: 'minecraft:piston'
      }
    )

    //Enchanter
    event.remove({id:'enderio:enchanter'})
    event.shaped(
      'enderio:enchanter', [
      ' A ',
      'BCB',
      'CCC'
      ], {
      A: 'minecraft:book',
      B: 'enderio:weather_crystal',
      C: 'enderio:dark_steel_block'
      }
    )


    
})