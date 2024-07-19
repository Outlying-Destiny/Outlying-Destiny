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

    //"Enderios"
    event.replaceInput(
      { output: 'enderio:enderios'},
      'enderio:powdered_ender_pearl',
      'thermal:ender_pearl_dust'
    )

    //Vacuums
    event.replaceInput(
      { output: ['enderio:vacuum_chest', 'enderio:xp_vacuum']},
      'minecraft:iron_ingot',
      'enderio:dark_steel_ingot'
    )

    //Remove SAG Mill Coal dupe
    event.remove({id:'enderio:sag_milling/coal'})
    
    //Dark Steel Bars
    event.remove({id:'enderio:dark_steel_bars'})
    event.shaped(
      '8x enderio:dark_steel_bars', [
      'AAA',
      'AAA',
      '   '
      ], {
      A: 'kubejs:dark_steel_rod'
      }
    )

    //Tier 1 Crystals
    event.remove({id:'enderio:pulsating_crystal'})
    event.remove({id:'enderio:vibrant_crystal'})
    box('enderio:pulsating_crystal', 'enderio:pulsating_alloy_ingot', 'enderio:pulsating_alloy_ingot', 'enderio:pulsating_alloy_ingot', 'mekanism:alloy_reinforced')
    box('2x enderio:pulsating_crystal', 'enderio:pulsating_alloy_ingot', 'enderio:pulsating_alloy_ingot', 'enderio:pulsating_alloy_ingot', 'powah:crystal_niotic')
    box('enderio:vibrant_crystal', 'enderio:vibrant_alloy_ingot', 'enderio:vibrant_alloy_ingot', 'enderio:vibrant_alloy_ingot', 'mekanism:alloy_reinforced')
    box('2x enderio:vibrant_crystal', 'enderio:vibrant_alloy_ingot', 'enderio:vibrant_alloy_ingot', 'enderio:vibrant_alloy_ingot', 'powah:crystal_niotic')

    //Chassis
    //event.remove({id:/enderio:.+_chassis/})
    //box('enderio:void_chassis', '')

    
})