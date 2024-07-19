LootJS.modifiers((event) => { //LootJS sucks (Still love you AlmostReliable <3)
    event
        .addEntityLootModifier("minecraft:zombie")
        .randomChanceWithEnchantment("minecraft:looting", [0.05, 0.07, 0.09, 0.11])
        .addLoot("minecraft:zombie_head")

    event
        .addEntityLootModifier("minecraft:skeleton")
        .randomChanceWithEnchantment("minecraft:looting", [0.05, 0.07, 0.09, 0.11])
        .addLoot("minecraft:skeleton_skull")
         
    event
        .addEntityLootModifier("minecraft:enderman")
        .randomChanceWithEnchantment("minecraft:looting", [0.05, 0.07, 0.09, 0.11, 0.14, 0.17, 0.20, 0.23, 0.26, 0.29, 0.32])
        .addLoot("enderio:enderman_head")
})