ServerEvents.recipes(event => {

    //Function Transform
    function transform(output, outputcount, input, fluid){
        event.custom({
            "type": "ae2:transform",
            "circumstance": {
              "type": "fluid",
              "tag": fluid
            },
            "ingredients": [
              {
                "item": input
              }
            ],
            "result": {
                "count": outputcount,
                "item": output
              }
          })
    }

    function transform2(output, outputcount, input1, input2, fluid){
        event.custom({
            "type": "ae2:transform",
            "circumstance": {
              "type": "fluid",
              "tag": fluid
            },
            "ingredients": [
              {
                "item": input1
              },
              {
                "item": input2
              }
            ],
            "result": {
                "count": outputcount,
                "item": output
              }
          })
    }
    
    //Demon Ingot
    transform('kubejs:demon_ingot', 1, 'minecraft:gold_ingot', 'minecraft:lava')
    transform('kubejs:demon_block', 1, 'minecraft:gold_block', 'minecraft:lava')
    event.shapeless('kubejs:demon_block', ['9x kubejs:demon_ingot'])
    event.shapeless('9x kubejs:demon_ingot', ['kubejs:demon_block'])
    

    //Experience Ingot
    transform2('kubejs:enchanted_ingot', 1, 'minecraft:gold_ingot', 'minecraft:lapis_lazuli', 'forge:experience')
    transform2('kubejs:enchanted_block', 1, 'minecraft:gold_block', 'minecraft:lapis_block', 'forge:experience')
    event.shapeless('kubejs:enchanted_block', ['9x kubejs:enchanted_ingot'])
    event.shapeless('9x kubejs:enchanted_ingot', ['kubejs:enchanted_block'])

    //Evil Infused Ingot
    event.shapeless('kubejs:evil_infused_block', ['9x kubejs:evil_infused_ingot'])
    event.shapeless('9x kubejs:evil_infused_ingot', ['kubejs:evil_infused_block'])


    //XP Tap
    event.remove({id:'mob_grinding_utils:recipe_xp_tap'})
    event.shaped(('mob_grinding_utils:xp_tap'), [
        ' A ',
        'BCC',
        '  C'
        ], {
        A: 'kubejs:enchanted_ingot',
        B: 'minecraft:obsidian',
        C: 'thermal:steel_ingot'
        }
    )

    //Absorption Hopper
    event.remove({id:'mob_grinding_utils:recipe_absorption_hopper'})
    event.shaped(('mob_grinding_utils:absorption_hopper'), [
        'ABA',
        'ACA',
        'ADA'
        ], {
        A: 'minecraft:obsidian',
        B: 'minecraft:eye_of_ender',
        C: 'kubejs:evil_infused_block',
        D: 'minecraft:hopper'
        }
    )

    //Mob Fan
    event.remove({id:'mob_grinding_utils:recipe_fan'})
    event.shaped(('mob_grinding_utils:fan'), [
        'ABA',
        'BCB',
        'ABA'
        ], {
        A: 'pneumaticcraft:reinforced_stone_slab',
        B: 'mekanism:advanced_control_circuit',
        C: 'kubejs:evil_infused_block'
        }
    )

    //Mob Masher
    event.remove({id:'mob_grinding_utils:recipe_saw'})
    event.shaped(('mob_grinding_utils:saw'), [
        'ABA',
        'CDC',
        'BEB'
        ], {
        A: 'kubejs:evil_infused_sword',
        B: 'minecraft:diamond',
        C: 'mob_grinding_utils:spikes',
        D: 'minecraft:redstone_block',
        E: 'kubejs:evil_infused_block'
        }
    )

    //Spikes
    event.remove({id:'mob_grinding_utils:recipe_spikes'})
    event.shaped(('mob_grinding_utils:spikes'), [
        ' A ',
        'ABA',
        '   '
        ], {
        A: 'kubejs:evil_infused_sword',
        B: 'kubejs:evil_infused_block'
        }
    )

    //Evil Infused Sword
    event.shaped(('kubejs:evil_infused_sword'), [
        ' A ',
        ' A ',
        ' B '
        ], {
        A: 'kubejs:evil_infused_ingot',
        B: '#balm:wooden_rods'
        }
    )

    //Mob Masher Upgrades
    event.replaceInput(
        { output: /mob_grinding_utils:saw_upgrade.+/},
        'minecraft:gold_nugget',
        'kubejs:demon_ingot'
    )
    event.replaceInput(
        { output: /mob_grinding_utils:saw_upgrade.+/},
        'minecraft:redstone',
        'kubejs:evil_infused_ingot'
    )
    event.replaceInput(
        { output: 'mob_grinding_utils:saw_upgrade_beheading'},
        /minecraft:.+helmet/,
        '#forge:heads'
    )
    event.replaceInput(
        { output: 'mob_grinding_utils:saw_upgrade_looting'},
        'minecraft:blue_dye',
        'minecraft:emerald'
    )
    event.replaceInput(
        { output: 'mob_grinding_utils:saw_upgrade_sharpness'},
        'minecraft:iron_sword',
        'immersiveengineering:sword_steel'
    )

    //Mob Fan Upgrades
    event.replaceInput(
        { output: /mob_grinding_utils:fan_upgrade.+/},
        'minecraft:iron_ingot',
        'kubejs:demon_ingot'
    )

    //Absorption Hopper Upgrades
    event.replaceInput(
        { output: 'mob_grinding_utils:absorption_upgrade'},
        'minecraft:redstone',
        'kubejs:demon_block'
    )

})