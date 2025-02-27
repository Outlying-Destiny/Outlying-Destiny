JEIEvents.removeCategories(event => {

    //Categories
    console.log(event.categoryIds) //log a list of all category ids to logs/kubejs/client.txt
    event.remove(
        'jeresources:villager',
        'mekanism:energized_smelter',
        'industrialforegoing:fermenter',
        'industrialforegoing:ore_sieve',
        'industrialforegoing:ore_washer',
        'farmingforblockheads:market',
        'thermal:furnace',
        'enderio:alloy_smelting',
        'mysticalagriculture:enchanter',
        'mysticalagriculture:reprocessor',
        'mysticalagriculture:soul_extractor',
        'thermal:disenchantment_fuel',
        'thermal:gourmand_fuel',
        'thermal:stirling_fuel',
        'enderio:soul_engine',
        'elementalcraft:purification',
        'pneumaticcraft:spawner_extraction',
        'bloodmagic:arcfurnace'
    )
})

JEIEvents.removeRecipes(event => {
    
    //Soul Catcher Recipes
    //event.remove('kubejs:soul_catcher_recipes', /mbd2:soul_catcher_recipes\/.+_(double|octadic)/)
})

JEIEvents.hideItems(event => {

    //Duplicate Stuff
    event.hide([
        /ae2:facade/,
        'enderio:filled_soul_vial',
        'enderio:broken_spawner',
        ///enderio:filled_soul_vial/,
        ///Item.of('enderio:broken_spawner', '{BlockEntityTag:{EntityStorage:{Entity:{id:".+"}}}}')/,
        /enderio:clear_glass.+/,
        /enderio:fused_quartz.+/
    ])

    //Sophisticated Storage Stuff
    event.hide(/^sophisticatedstorage:.+barrel$/)
    event.hide('sophisticatedstorage:barrel')
    event.hide(/^sophisticatedstorage:.+chest$/)
    event.hide('sophisticatedstorage:chest')
    event.hide(/^sophisticatedstorage:.+shulker_box$/)
    event.hide('sophisticatedstorage:shulker_box')
    event.hide(/^sophisticatedstorage:limited.+barrel.+/)
    event.hide('sophisticatedbackpacks:backpack')
})

JEIEvents.addItems(event => {

    //Duplicate Stuff
    event.add([
        Item.of('ae2:facade', '{item:"minecraft:stone"}'),
        Item.of('enderio:filled_soul_vial', '{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:zombie"}}}}'),
        Item.of('enderio:filled_soul_vial', '{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:witch"}}}}'),
        Item.of('enderio:filled_soul_vial', '{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:enderman"}}}}'),
        Item.of('enderio:filled_soul_vial', '{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:shulker"}}}}'),
        'enderio:broken_spawner'
    ])

    //Sophisticated Storage Stuff
    event.add([Item.of('sophisticatedstorage:copper_barrel', '{woodType:"oak"}'), Item.of('sophisticatedstorage:iron_barrel', '{woodType:"oak"}'), Item.of('sophisticatedstorage:gold_barrel', '{woodType:"oak"}'), Item.of('sophisticatedstorage:diamond_barrel', '{woodType:"oak"}'), Item.of('sophisticatedstorage:netherite_barrel', '{woodType:"oak"}')])
    event.add([Item.of('sophisticatedstorage:copper_chest', '{woodType:"oak"}'), Item.of('sophisticatedstorage:iron_chest', '{woodType:"oak"}'), Item.of('sophisticatedstorage:gold_chest', '{woodType:"oak"}'), Item.of('sophisticatedstorage:diamond_chest', '{woodType:"oak"}'), Item.of('sophisticatedstorage:netherite_chest', '{woodType:"oak"}')])
    event.add(['sophisticatedstorage:copper_shulker_box', 'sophisticatedstorage:iron_shulker_box', 'sophisticatedstorage:gold_shulker_box', 'sophisticatedstorage:diamond_shulker_box', 'sophisticatedstorage:netherite_shulker_box'])
    event.add('sophisticatedbackpacks:backpack')
})