ServerEvents.recipes(event => {

    //Function Induction Smelter
    function alloy3(output, outputcount, input1, input1count, input2, input2count, input3, input3count, energy){
      event.custom({
        "type": "thermal:smelter",
        "ingredients": [
          {
            "item": input1,
            "count": input1count
          },
          {
            "item": input2,
            "count": input2count
          },
          {
            "item": input3,
            "count": input3count
          }
        ],
        "result": [
          {
            "item": output,
            "count": outputcount
          }
        ],
        "energy": energy
      }
      )
    }

    function alloy2(output, outputcount, input1, input1count, input2, input2count, energy){
      event.custom({
        "type": "thermal:smelter",
        "ingredients": [
          {
            "item": input1,
            "count": input1count
          },
          {
            "item": input2,
            "count": input2count
          }
        ],
        "result": [
          {
            "item": output,
            "count": outputcount
          }
        ],
        "energy": energy
      }
      )
    }

    function alloy1(output, outputcount, input1, input1count, energy){
      event.custom({
        "type": "thermal:smelter",
        "ingredients": [
          {
            "item": input1,
            "count": input1count
          }
        ],
        "result": [
          {
            "item": output,
            "count": outputcount
          }
        ],
        "energy": energy
      }
      )
    }
    
    //Alloys Remove
    event.remove({id: /thermal:machines.+smelter.+smelter_alloy_.+/})
    event.remove({id:/thermal:fire_charge.+/})
    event.remove({id:/thermal_extra:.+_glass/})
    event.remove({id:'extendedcrafting:black_iron_ingot'})

    //Alloy Unification
    alloy2('thermal:bronze_ingot', 4, 'thermal:tin_ingot', 1, 'minecraft:copper_ingot', 3, 6000)
    alloy2('thermal:electrum_ingot', 2, 'thermal:silver_ingot', 1, 'minecraft:gold_ingot', 1, 6000)
    alloy2('thermal:constantan_ingot', 2, 'thermal:nickel_ingot', 1, 'minecraft:copper_ingot', 1, 6000)
    alloy2('thermal:invar_ingot', 3, 'thermal:nickel_ingot', 1, 'minecraft:iron_ingot', 2, 6000)
    alloy2('thermal:rose_gold_ingot', 4, 'minecraft:gold_ingot', 1, 'minecraft:copper_ingot', 3, 6000)

    //Alloys
    alloy3('thermal:lumium_ingot', 1, 'thermal:tin_ingot', 1, 'thermal:electrum_ingot', 1, 'mekanism:ingot_refined_glowstone', 1, 12000)
    alloy3('thermal:signalum_ingot', 1, 'thermal:silver_ingot', 1, 'thermal:rose_gold_ingot', 1, 'enderio:redstone_alloy_ingot', 1, 12000)
    alloy3('thermal:enderium_ingot', 1, 'chemlib:platinum_ingot', 1, 'thermal:lead_ingot', 1, 'enderio:vibrant_alloy_ingot', 1, 16000)
    alloy3('enderio:nethercotta', 1, 'minecraft:clay_ball', 4, 'minecraft:nether_brick', 1, 'thermal:constantan_ingot', 1, 8000)
    alloy2('enderio:pulsating_alloy_ingot', 1, 'minecraft:ender_pearl', 1, 'minecraft:iron_ingot', 1, 8000)
    alloy2('enderio:copper_alloy_ingot', 1, 'ae2:silicon', 1, 'thermal:bronze_ingot', 1, 8000)
    alloy3('enderio:conductive_alloy_ingot', 1, 'minecraft:redstone', 1, 'enderio:copper_alloy_ingot', 1, 'thermal:invar_ingot', 1, 10000)
    alloy2('enderio:redstone_alloy_ingot', 1, 'projectred_core:red_ingot', 1, 'enderio:conductive_alloy_ingot', 1, 12000)
    alloy3('enderio:energetic_alloy_ingot', 1, 'powah:steel_energized', 1, 'minecraft:redstone', 1, 'minecraft:glowstone_dust', 1, 12000)
    alloy2('enderio:vibrant_alloy_ingot', 1, 'minecraft:ender_pearl', 1, 'enderio:energetic_alloy_ingot', 1, 12000)
    alloy3('enderio:soularium_ingot', 1, 'thermal_extra:soul_sand_dust', 1, 'enderio:nethercotta', 1, 'minecraft:gold_ingot', 1, 12000)
    alloy3('enderio:dark_steel_ingot', 1, 'minecraft:obsidian', 1, 'thermal:steel_ingot', 1, 'thermal:enderium_dust', 1, 16000)
    alloy3('enderio:end_steel_ingot', 1, 'minecraft:end_stone', 1, 'enderio:dark_steel_ingot', 1, 'thermal:lumium_dust', 1, 16000)
    alloy3('extendedcrafting:black_iron_ingot', 1, 'thermal:tar', 1, 'enderio:dark_steel_ingot', 1, 'bigreactors:graphite_ingot', 1, 20000)
    //alloy3('kubejs:infusing_soul_ingot', 1, 'powah:crystal_blazing', 1, 'enderio:soularium_ingot', 1, 'kubejs:evil_infused_ingot', 1, 16000)
    alloy3('thermal_extra:shellite_ingot', 1, 'minecraft:shulker_shell', 1, 'thermal:lead_ingot', 1, 'mekanism:ingot_refined_obsidian', 1, 20000)
    alloy3('kubejs:evil_infused_ingot', 1, 'kubejs:enchanted_ingot', 1, 'kubejs:demon_ingot', 1, 'architects_palette:withered_bone', 1, 12000)
    alloy3('powah_dielectric_paste', 16, 'minecraft:clay_ball', 1, 'immersiveengineering:dust_coke', 2, 'minecraft:blaze_powder', 1, 6000)
    alloy1('enderio:fused_quartz', 1, 'minecraft:quartz_block', 1, 4000)
    alloy1('enderio:fused_quartz', 1, 'minecraft:quartz', 4, 4000)

    //Eye of Ender
    event.remove({id:'minecraft:ender_eye'})
    alloy2('minecraft:ender_eye', 1, 'minecraft:blaze_powder', 1, 'minecraft:ender_pearl', 1, 8000)
    
})