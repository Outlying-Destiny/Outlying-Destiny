LootJS.modifiers((event) => {

    //Forgotten
    event
    .addEntityLootModifier("quark:forgotten")
    .removeLoot(Ingredient.all)
})