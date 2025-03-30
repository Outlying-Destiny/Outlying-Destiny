ServerEvents.recipes(event => {

    //Functions
    function woodenstand(output, input1, input2, input3, input4, input5, input6, input7, input8, sapling, count, time){event.custom({"type": "naturesaura:tree_ritual","ingredients": [{"item": input1},{"item": input5},{"item": input3},{"item": input7},{"item": input2},{"item": input6},{"item": input8},{"item": input4}],"sapling": {"tag": sapling},"output": {"item": output,"count": count},"time": time})}
    function altar(output, input, aura, time){event.custom({"type": "naturesaura:altar","input": {"item": input},"output": {"item": output},"aura": aura,"time": time    })}

    //Gold Leaf
    event.shaped('32x naturesaura:gold_leaf', ['ABA','BAB','ABA'], {A: '#minecraft:leaves',B: 'minecraft:gold_ingot'})

    //Brilliant Fiber
    event.remove({id:'naturesaura:gold_fiber'})
    event.shaped('4x naturesaura:gold_fiber', ['ABA','BCB','ABA'], {A: 'minecraft:string',B: 'minecraft:gold_nugget',C: 'minecraft:grass'})

    //Wooden Stand
    event.remove({id:'naturesaura:wood_stand'})
    event.shaped('naturesaura:wood_stand', ['ABA','ACA','AAA'], {A: '#minecraft:logs',B: 'naturesaura:gold_leaf',C: 'forbidden_arcanus:arcane_crystal_block'})

    //Gunpowder
    woodenstand("minecraft:gunpowder", "minecraft:redstone", "minecraft:clay_ball", "minecraft:glowstone_dust", "minecraft:clay_ball", "minecraft:redstone", "minecraft:clay_ball", "minecraft:glowstone_dust", "minecraft:clay_ball", "forge:sapling", 16, 400)

    //Natural Altar
    event.remove({id:'naturesaura:tree_ritual/nature_altar'})
    woodenstand("naturesaura:nature_altar", "naturesaura:gold_leaf", "naturesaura:token_joy", "mysticalagriculture:inferium_block", "minecraft:smooth_stone", "minecraft:smooth_stone", "minecraft:smooth_stone", "mysticalagriculture:inferium_block", "naturesaura:token_joy", "forge:sapling", 1, 500)

    //Netherrrack
    woodenstand("minecraft:netherrack", "compressium:stone_1", "naturesaura:tainted_gold", "compressium:stone_1", "naturesaura:tainted_gold", "compressium:stone_1", "naturesaura:tainted_gold", "compressium:stone_1", "naturesaura:tainted_gold", "forge:sapling", 36, 300)

    //Magma Block
    altar("minecraft:magma_block", "minecraft:netherrack", 10000, 50)

    //Bottle and Cork
    event.remove({id:'naturesaura:bottle_two_the_rebottling'})
    event.shapeless('naturesaura:bottle_two_the_rebottling', ['minecraft:glass_bottle', '#minecraft:planks', 'naturesaura:gold_leaf'])
 
    //Infused Iron
    event.remove({id:/naturesaura:altar\/infused_iron/})
    altar("naturesaura:infused_iron", "thermal:steel_ingot", 8000, 40)
    altar("naturesaura:infused_iron_block", "thermal:steel_block", 72000, 360)

    //Tainted Gold
    event.remove({id:/naturesaura:altar\/tainted_gold/})
    altar("naturesaura:tainted_gold", "minecraft:gold_block", 6000, 30)
    altar("naturesaura:tainted_gold_block", "minecraft:gold_block", 54000, 270)

    //Offering Table
    event.replaceInput({output:'naturesaura:offering_table'},'#forge:stone','naturesaura:infused_stone')

    //Ingot of the Skies
    event.remove({id:'naturesaura:offering/sky_ingot_from_gold'})

    //Transmutation Catalyst
    event.remove({id:'naturesaura:tree_ritual/conversion_catalyst'})
    woodenstand("naturesaura:conversion_catalyst", "naturesaura:gold_brick", "immersiveengineering:alloybrick", "naturesaura:infused_iron", "minecraft:glowstone", "naturesaura:infused_stone", "immersiveengineering:alloybrick", "minecraft:brewing_stand", "naturesaura:gold_leaf", "forge:sapling", 1, 500)

    //Powder of Twilight
    event.custom({"type": "naturesaura:tree_ritual","ingredients": [{"item": 'naturesaura:gold_powder'},{"item": 'naturesaura:gold_powder'},{"item": 'minecraft:glowstone_dust'},{"item": 'immersiveengineering:dust_hop_graphite'}],"sapling": {"tag": 'forge:sapling'},"output": {"item": 'kubejs:twilight_powder',"count": 4},"time": 400})

    //Token of Twilight
    woodenstand("kubejs:token_twilight", "kubejs:twilight_powder", "naturesaura:token_euphoria", "kubejs:twilight_powder", "naturesaura:token_terror", "kubejs:twilight_powder", "naturesaura:token_rage", "kubejs:twilight_powder", "naturesaura:token_grief", "forge:sapling", 1, 500)

    //Emerald
    altar("minecraft:emerald", "minecraft:diamond", 12000, 60)

    //Environmental Ocular
    event.remove({id:'naturesaura:eye_improved'})

    //Creational Catalyst
    event.remove({id:'naturesaura:generator_limit_remover'})

    //Swamp Homi
    event.remove({id:'naturesaura:moss_generator'})

    //Aura Imbalance Ward
    event.remove({id:'naturesaura:lower_limiter'})

    //Altar / Spirit of Birthing
    event.remove({id:'naturesaura:animal_spawner'})
    event.remove({id:'naturesaura:birth_spirit'})

    //Cloudshifter
    event.remove({id:'naturesaura:weather_changer'})

    //Shifting Sundial / Hand of Time
    event.remove({id:'naturesaura:time_changer'})
    event.remove({id:'naturesaura:clock_hand'})

    //Winter's Calling
    event.remove({id:'naturesaura:snow_creator'})

})