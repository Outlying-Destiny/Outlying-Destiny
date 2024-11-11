LootJS.modifiers((event) => {

    //Forgotten
    event
    .addEntityLootModifier("quark:forgotten")
    .removeLoot(Ingredient.all)

    event
    .addEntityLootModifier("quark:wraith")
    .removeLoot(Ingredient.all)
})