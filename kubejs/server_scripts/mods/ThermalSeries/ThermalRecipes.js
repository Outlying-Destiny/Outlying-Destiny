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

    //Function Machine
    function machine(output, input1, input2, input3, input4, input5){
      event.shaped(output, [
          ' A ',
          'BCB',
          'DED'
          ], {
          A: input1,
          B: input2,
          C: input3,
          D: input4,
          E: input5
          }
      )
    }

    //Function Induction Smelter
    function smelter(output1, outputchance1, output2, outputchance2, output3, outputchance3, input, exp){
      event.custom({
        "type": "thermal:smelter",
        "ingredient": {
          "tag": input
        },
        "result": [
          {
            "item": output1,
            "chance": outputchance1
          },
          {
            "item": output2,
            "chance": outputchance2
          },
          {
            "item": output3,
            "chance": outputchance3
          }
        ],
        "experience": exp
      })
    }

    //Function Pulverizer
    function pulverizer(output1, outputchance1, output2, outputchance2, output3, outputchance3, input, exp){
      event.custom({
        "type": "thermal:pulverizer",
        "ingredient": {
          "tag": input
        },
        "result": [
          {
            "item": output1,
            "chance": outputchance1
          },
          {
            "item": output2,
            "chance": outputchance2
          },
          {
            "item": output3,
            "chance": outputchance3
          }
        ],
        "experience": exp
      })
    }

    //Explosives
    function explosives(output, explosiveInput) {
        event.shaped(output, [
            'ABA',
            'ACA',
            'AAA'
            ], {
            A: explosiveInput,
            B: 'minecraft:string',
            C: 'thermal:gunpowder_block'
            }
        )
        event.remove( {output: output} )
    }
  
    explosives('minecraft:tnt', 'minecraft:redstone')
    explosives('thermal:ender_tnt', '#forge:ender_pearls')
    explosives('thermal:glowstone_tnt', 'minecraft:glowstone_dust')
    explosives('thermal:redstone_tnt', 'minecraft:redstone_block')
    explosives('thermal:slime_tnt', '#forge:slimeballs')
    explosives('thermal:fire_tnt', 'minecraft:blaze_powder')
    explosives('thermal:ice_tnt', 'thermal:blizz_powder')
    explosives('thermal:lightning_tnt', 'thermal:blitz_powder')
    explosives('thermal:earth_tnt', 'thermal:basalz_powder')
    explosives('thermal:phyto_tnt', 'thermal:phytogro')

    event.remove( {output: 'thermal:explosive_grenade'})
    event.shaped(
        '2x thermal:explosive_grenade', [
        'DBD',
        'ACA',
        'DAD'
        ], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:string',
        C: 'thermal:gunpowder_block',
        D: 'minecraft:redstone'
        }
    )

    //Earth Charge
    event.remove({input:'thermal:earth_charge'})

    //Redstone Flux Coil
    event.remove({id:'thermal:rf_coil'})
    event.shaped('thermal:rf_coil', [
      '  B',
      ' A ',
      'B  '
      ], {
      A:'projectred_core:red_ingot',
      B:'thermal:gold_plate'
    })

    //Redstone Servro
    event.remove({id:'thermal:redstone_servo'})
    event.shaped('thermal:redstone_servo', [
      'BAB',
      ' A ',
      'BAB'
      ], {
      A:'thermal:iron_plate',
      B:'minecraft:redstone'
    })

    //Machine Frame
    event.remove({id:'thermal:machine_frame'})
    box('thermal:machine_frame', 'pneumaticcraft:plastic', 'thermal:invar_gear', 'powah:steel_energized', 'mekanism:steel_casing')
    
    //Nickel Ore into Platinum
    event.remove({id:'thermal:machines/pulverizer/pulverizer_nickel_ore'})
    event.remove({id:'thermal:machines/smelter/smelter_nickel_ore'})
    pulverizer("thermal:nickel_dust", 2, "chemlib:platinum_dust", 0.2, "minecraft:gravel", 0.2, "forge:ores/nickel", 0.5)
    smelter("thermal:nickel_ingot", 1, "chemlib:platinum_ingot", 0.4, "thermal:rich_slag", 0.2, "forge:ores/nickel", 0.5)

    //Copper Ore fix for Smelter / Pulverizer
    event.remove({id:'thermal:machines/pulverizer/pulverizer_copper_ore'})
    event.remove({id:'thermal:machines/smelter/smelter_copper_ore'})
    pulverizer("thermal:copper_dust", 2, "thermal:gold_dust", 0.2, "minecraft:gravel", 0.2, "forge:ores/copper", 0.2)
    smelter("minecraft:copper_ingot", 1, "minecraft:gold_ingot", 0.4, "thermal:rich_slag", 0.2, "forge:ores/copper", 0.2)

    //Pulverizer Cleaning
    event.remove({not:[{id:/therma.+pulverizer.+ore/}, {id:/therma.+pulverizer.+raw.+/}, {id:/therma.+pulverizer.+catalyst+/}], id:/therma.+pulverizer.+/})

    //Induction Smelter Cleaning
    event.remove({id: /thermal:machines.+smelter.+tools/})
    event.remove({id: /thermal:machines.+smelter.+armor/})

    //Induction Smelter unboostable cinnabar
    event.remove({id: "thermal:machines/smelter/smelter_redstone_ore"})
    event.remove({id: "thermal:machines/smelter/smelter_gold_ore"})
    event.remove({id: "thermal:machines/smelter/smelter_cinnabar_ore"})
    smelter("minecraft:redstone", 3.5, "minecraft:quartz", 0.05, "thermal:rich_slag", 0.2, "forge:ores/redstone", 0.2)
    smelter("minecraft:gold_ingot", 1, "minecraft:quartz", 0.1, "thermal:rich_slag", 0.2, "forge:ores/gold", 0.2)

    //Sawdust Block Fix
    event.replaceInput(
      { output: 'thermal:sawdust_block'},
      'thermal:sawdust',
      '#forge:sawdust'
    )
    event.replaceOutput(
      { output: 'thermal:sawdust'},
      'thermal:sawdust',
      '#forge:sawdust'
    )

    //Components
    event.remove({id:'thermal:augments/upgrade_augment_1'})
    box('thermal:upgrade_augment_1', 'thermal:invar_plate', 'thermal:obsidian_glass', 'enderio:redstone_alloy_ingot', 'thermal:lumium_gear')

    //Machines
    //machine('')

})