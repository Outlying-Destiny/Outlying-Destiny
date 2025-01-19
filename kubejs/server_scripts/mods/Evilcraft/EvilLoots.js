LootJS.modifiers((event) => {

    //Ender Tear
    event
    .addEntityLootModifier("minecraft:enderman")
    .removeLoot('evilcraft:ender_tear')

})