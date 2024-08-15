ServerEvents.recipes(event => {

    //Function Energizing Orb
    function orb2(output, outputcount, input1, input2, energy){
        event.custom({
            "type": "powah:energizing",
            "ingredients": [
              {"item": input1},
              {"item": input2}
            ],
            "energy": energy,
            "result": {
              "item": output,
              "count": outputcount
            }
          })
    }

    function orb4(output, outputcount, input1, input2, input3, input4, energy){
      event.custom({
          "type": "powah:energizing",
          "ingredients": [
            {"item": input1},
            {"item": input2},
            {"item": input3},
            {"item": input4}
          ],
          "energy": energy,
          "result": {
            "item": output,
            "count": outputcount
          }
        })
    }

    //Function Material to Block
    function mattoblo(block, material){
      event.shapeless(block, material)
      event.shapeless(material, block)
    }

    //Function Combination Crafting
    function combination(output, baseinput, input1, input2, input3, florbnbt, energyrate, time){
      event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": energyrate*time,
        "powerRate": energyrate,
        "input": {"item": baseinput, "count": 1},
        "ingredients": [
          { "item": input1 },
          { "item": input2 },
          { "item": input3 },
          { "type": "forge:nbt", "item": "thermal:florb", "nbt": florbnbt}
        ],
        "result": {"item": output }
      })
    }

    //Dielectric Casing
    event.replaceInput(
        { output: 'powah:dielectric_casing'},
        'minecraft:iron_ingot',
        'thermal:steel_ingot'
    )

    //Energizing Orb
    event.remove({id:'powah:crafting/energizing_orb'})
    event.shaped('powah:energizing_orb', [
        'DAD',
        'CBC',
        'BBB'
        ], {
        A: 'powah:dielectric_casing',
        B:'kubejs:dielectric_paste_block',
        C:'immersiveengineering:heavy_engineering',
        D:'#forge:glass'
    })

    //Dielectric Paste
    event.remove({output:'powah:dielectric_paste'})
    mattoblo('kubejs:dielectric_paste_block', '9x powah:dielectric_paste')

    //Empowered Material to Block
    mattoblo('kubejs:empowered_energized_steel_block', '9x kubejs:empowered_energized_steel')
    mattoblo('kubejs:empowered_blazing_crystal_block', '9x kubejs:empowered_blazing_crystal')
    mattoblo('kubejs:empowered_niotic_crystal_block', '9x kubejs:empowered_niotic_crystal')
    mattoblo('kubejs:empowered_spirited_crystal_block', '9x kubejs:empowered_spirited_crystal')
    mattoblo('kubejs:empowered_nitro_crystal_block', '9x kubejs:empowered_nitro_crystal')

    //Energized Steel
    event.remove({id:'powah:energizing/energized_steel'})
    orb2("powah:steel_energized", 2, "thermal:steel_ingot", "thermal:electrum_ingot", 20000)

    //Blazing Crystal
    event.remove({id:/powah:energizing.+blazing_crysta.+/})
    orb4("powah:crystal_blazing", 1, "minecraft:blaze_powder", "thermal:blizz_powder", "thermal:blitz_powder", "thermal:basalz_powder", 100000)

    //Empowered Powah Materials
    combination('kubejs:empowered_energized_steel', 'powah:steel_energized', 'enderio:energized_gear', 'extendedcrafting:luminessence', 'mekanism:yellow_cake_uranium', '{Fluid:{Amount:1000,FluidName:"thermal_extra:sunflower_oil"}}', 200, 100)
    combination('kubejs:empowered_blazing_crystal', 'powah:crystal_blazing', 'minecraft:packed_ice', 'aether:aerogel', 'minecraft:obsidian', '{Fluid:{Amount:1000,FluidName:"enderio:fire_water"}}', 1000, 100)

})