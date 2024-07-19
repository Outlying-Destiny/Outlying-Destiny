ServerEvents.recipes(event => {

    //Function Wooden Stand
    function woodenstand(output, input1, input2, input3, input4, input5, input6, input7, input8, sapling, count, time){
        event.custom({
            "type": "naturesaura:tree_ritual",
            "ingredients": [
                {
                    "item": input1
                },
                {
                    "item": input5
                },
                {
                    "item": input3
                },
                {
                    "item": input7
                },
                {
                    "item": input2
                },
                {
                    "item": input6
                },
                {
                    "item": input8
                },
                 {
                    "item": input4
                }
            ],
            "sapling": {
                "tag": sapling
            },
            "output": {
                "item": output,
                "count": count
            },
            "time": time
        })
    }


    //Gold Leaf
    event.remove( {output: 'naturesaura:gold_fiber'})
    event.shaped(
        '32x naturesaura:gold_leaf', [
        'ABA',
        'BAB',
        'ABA'
        ], {
        A: '#minecraft:leaves',
        B: 'minecraft:gold_ingot'
        }
    )

    //Wooden Stand
    event.remove({ output: 'naturesaura:wood_stand' })
    event.shaped(
        'naturesaura:wood_stand', [
        'ABA',
        'ACA',
        'AAA'
        ], {
        A: '#minecraft:logs',
        B: 'naturesaura:gold_leaf',
        C: 'forbidden_arcanus:arcane_crystal_block'
        }
    )

    //Gunpowder
    woodenstand("minecraft:gunpowder", "minecraft:redstone", "minecraft:clay_ball", "minecraft:glowstone_dust", "minecraft:clay_ball", "minecraft:redstone", "minecraft:clay_ball", "minecraft:glowstone_dust", "minecraft:clay_ball", "forge:sapling", 16, 400)

    //Natural Altar
    event.remove({id: 'naturesaura:tree_ritual/nature_altar'})
    woodenstand("naturesaura:nature_altar", "naturesaura:gold_leaf", "naturesaura:token_joy", "mysticalagriculture:inferium_block", "minecraft:smooth_stone", "minecraft:smooth_stone", "minecraft:smooth_stone", "mysticalagriculture:inferium_block", "naturesaura:token_joy", "forge:sapling", 1, 500)

    //Netherrrack
    woodenstand("minecraft:netherrack", "compressium:stone_1", "naturesaura:tainted_gold", "compressium:stone_1", "naturesaura:tainted_gold", "compressium:stone_1", "naturesaura:tainted_gold", "compressium:stone_1", "naturesaura:tainted_gold", "forge:sapling", 36, 300)

    //function Natural Altar
    function altar(output, input, aura, time){
        event.custom({   
            "type": "naturesaura:altar",
            "input": {
                "item": input
            },
            "output": {
                "item": output
            },
            "aura": aura,
            "time": time    
        })
    }

    //Magma Block
    altar("minecraft:magma_block", "minecraft:netherrack", 10000, 50)

    //Bottle and Cork
    event.remove( {output: 'naturesaura:bottle_two_the_rebottling'})
    event.shapeless('naturesaura:bottle_two_the_rebottling', ['minecraft:glass_bottle', '#minecraft:planks', 'naturesaura:gold_leaf'])
 
    //Infused Iron Ingot
    event.remove( {id: /naturesaura:altar.+infused_iro.+/})
    altar("naturesaura:infused_iron", "thermal:steel_ingot", 15000, 80)
    altar("naturesaura:infused_iron_block", "thermal:steel_block", 135000, 720)

    //Offering Table
    event.replaceInput(
        { output: 'naturesaura:offering_table' },
        '#forge:stone',
        'naturesaura:infused_stone'         
    )

    //Ingot of the Skies
    event.remove({id: 'naturesaura:offering/sky_ingot_from_gold'})

    //Transmutation Catalyst
    event.remove({id: 'naturesaura:tree_ritual/conversion_catalyst'})
    woodenstand("naturesaura:conversion_catalyst", "naturesaura:gold_brick", "immersiveengineering:alloybrick", "naturesaura:infused_iron", "minecraft:glowstone", "naturesaura:infused_stone", "immersiveengineering:alloybrick", "minecraft:brewing_stand", "naturesaura:gold_leaf", "forge:sapling", 1, 500)

    //Powder of Twilight


    //Token of Twilight
    woodenstand("kubejs:token_twilight", "kubejs:twilight_powder", "naturesaura:token_euphoria", "kubejs:twilight_powder", "naturesaura:token_terror", "kubejs:twilight_powder", "naturesaura:token_rage", "kubejs:twilight_powder", "naturesaura:token_grief", "forge:sapling", 1, 500)

})