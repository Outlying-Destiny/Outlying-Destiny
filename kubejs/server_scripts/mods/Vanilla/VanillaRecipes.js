ServerEvents.recipes(event => {

    //Crafting Table
    event.remove({ output: 'minecraft:crafting_table' })
    event.shaped('minecraft:crafting_table', ['AA ','BB ','   '], {A: '#minecraft:planks',B: '#minecraft:logs'})

    //First Iron
    event.campfireCooking('kubejs:iron_fragment', 'minecraft:raw_iron').cookingTime(600)
    event.shapeless('3x minecraft:iron_nugget', 'kubejs:iron_fragment')

    //Furnaces
    event.remove({ output: ['minecraft:furnace', 'quark:deepslate_furnace', 'quark:blackstone_furnace', 'nethersdelisht:blackstone_furnace'] })
    event.shaped('minecraft:furnace', ['AAA','BCB','AAA'], {A: '#forge:cobblestone',B: 'minecraft:iron_ingot',C: 'minecraft:campfire'})
    event.shaped('nethersdelight:blackstone_furnace', ['AAA','BCB','AAA'], {A: 'minecraft:blackstone',B: 'minecraft:iron_ingot',C: 'minecraft:campfire'})

    //Blast Furnace
    event.replaceInput({output:['minecraft:blast_furnace', 'nethersdelight:blackstone_blast_furnace']},'minecraft:iron_ingot','thermal:steel_ingot')

    //Enchanting Table
    event.remove({ output: 'minecraft:enchanting_table' })
    event.shaped('minecraft:enchanting_table', [' A ','BCB','CDC'], {A: 'minecraft:book',B: 'minecraft:diamond',C: 'compressium:obsidian_1',D: 'forbidden_arcanus:rune_block'})

    //Flint and steel
    event.replaceInput({ output: 'minecraft:flint_and_steel' },'minecraft:iron_ingot','thermal:steel_ingot'         )

    //Iron Bars
    event.remove({output:'minecraft:iron_bars'})
    event.shaped('8x minecraft:iron_bars', ['AAA','AAA','   '], {A: 'immersiveengineering:stick_iron'})

    //Piston
    event.remove({id:'minecraft:piston'})
    event.remove({id:'aether:skyroot_piston'})
    
    //Cauldron
    event.remove({id:'minecraft:cauldron'})
    event.shaped('2x minecraft:cauldron', ['A A','A A','AAA'], {A: 'thermal:iron_plate'})

    //Netherite
    event.remove({id:'minecraft:netherite_ingot'})

    //Smithing Template
    event.shaped('minecraft:netherite_upgrade_smithing_template', ['ABA','BAB','ABA'], {A:'enderio:pulsating_crystal', B:'compressium:netherrack_1'})

    //Compacting Recipes
    event.remove({id:'naturesaura:altar/glowstone'})
    event.remove({id:'enderio:sag_milling/glowstone'})
    event.remove({id:'mekanism:enriching/conversion/quartz/to_item'})
    event.remove({id:/farmersdelight:cutting\/(clay|amethyst_block|quartz_block|bricks)/})
    event.remove({id:/mekanism:enriching\/(glowstone_dust|clay_ball)/})
    event.remove({id:/botania:mana_infusion\/(glowstone|clay|quartz|brick)_deconstruct/})
    event.remove({id:/aether:(packed|blue)_ice_freezing/})
    event.remove({id:/pneumaticcraft:pressure_chamber\/.+ice/})
    event.remove({id:/alchemistry:compactor\/(packed|blue)_ice/})
    event.remove({id:'minecraft:snow'})
    event.shapeless('4x minecraft:snowball', 'minecraft:snow_block')
    event.shapeless('4x minecraft:honeycomb', 'minecraft:honeycomb_block')
    event.shapeless('4x minecraft:glowstone_dust', 'minecraft:glowstone')
    event.shapeless('4x minecraft:clay_ball', 'minecraft:clay')
    event.shapeless('4x minecraft:quartz', 'minecraft:quartz_block')
    event.shapeless('4x minecraft:brick', 'minecraft:bricks')
    event.shapeless('4x minecraft:sand', 'minecraft:sandstone')
    event.shapeless('4x minecraft:red_sand', 'minecraft:red_sandstone')
    event.shapeless('9x minecraft:ice', 'minecraft:packed_ice')
    event.shapeless('9x minecraft:packed_ice', 'minecraft:blue_ice')
    event.shaped('12x minecraft:snow', ['   ','AAA','   '], {A: 'minecraft:snow_block'})
    event.shaped('3x minecraft:snow', ['   ','AAA','   '], {A: 'minecraft:snowball'})
    
})