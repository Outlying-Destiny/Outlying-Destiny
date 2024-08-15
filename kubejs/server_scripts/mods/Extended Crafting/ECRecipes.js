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

    //Function Material to Block
    function mattoblo(block, material){
      event.shapeless(block, material)
      event.shapeless(material, block)
    }

    //Machine Frame
    event.remove({id:'extendedcrafting:frame'})
    box('extendedcrafting:frame', 'extendedcrafting:black_iron_ingot', 'thermal:enderium_glass', 'thermal:enderium_glass', 'enderio:ensouled_chassis')

    //Ender Crafter
    event.remove({id:'extendedcrafting:ender_crafter'})
    event.shaped(
        'extendedcrafting:ender_crafter', [
        'AAA',
        'BCB',
        'BBB'
        ], {
        A: 'enderio:pulsating_alloy_ingot',
        B: 'extendedcrafting:ender_ingot',
        C: 'kubejs:ender_core'
        }
    ).damageIngredient('kubejs:ender_core')

    //Ender Alternator
    event.remove({id:'extendedcrafting:ender_alternator'})
    event.shaped(
        '2x extendedcrafting:ender_alternator', [
        '   ',
        ' A ',
        'BBB'
        ], {
        A: 'enderio:pulsating_alloy_ingot',
        B: 'extendedcrafting:ender_ingot'
        }
    )

    //Basic Crafting Table
    event.remove({id:'extendedcrafting:basic_table'})
    event.shaped(
        'extendedcrafting:basic_table', [
        'ABA',
        ' C ',
        'DDD'
        ], {
        A: 'extendedcrafting:basic_catalyst',
        B: 'kubejs:double_compressed_crafting_table',
        C: 'extendedcrafting:frame',
        D: 'extendedcrafting:black_iron_slate'
        }
    )

    //Crafting Core
    event.remove({id:'extendedcrafting:crafting_core'})
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABA",
          "CDC",
          "AEA"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:black_iron_ingot"
          },
          "B": {
            "item": "extendedcrafting:elite_catalyst"
          },
          "C": {
            "item": "extendedcrafting:enhanced_ender_component"
          },
          "D": {
            "item": "extendedcrafting:frame"
          },
          "E": {
            "item": "extendedcrafting:black_iron_slate"
          }
        },
        "result": {
          "item": "extendedcrafting:crafting_core"
        }
    })

    //Compressed Crafting Tables
    mattoblo('kubejs:compressed_crafting_table', '9x minecraft:crafting_table')
    mattoblo('kubejs:double_compressed_crafting_table', '9x kubejs:compressed_crafting_table')

})