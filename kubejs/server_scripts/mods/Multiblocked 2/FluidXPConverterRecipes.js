ServerEvents.recipes((event) => {

    event.recipes.kubejs.fluid_xp_converter()
    .id("kubejs:fluid_xp_converter/fluid_xp")
    .duration(1)
    .chance(0, converter => converter.inputItems("mob_grinding_utils:xp_tap"))
    .inputFluids(JsonIO.of({"amount": 1,"value": [{"fluid": "industrialforegoing:essence"},{"fluid": "pneumaticcraft:memory_essence"},{"fluid": "enderio:xp_juice"}]}))
    .outputFluids("mob_grinding_utils:fluid_xp 1")

    event.recipes.kubejs.fluid_xp_converter()
    .id("kubejs:fluid_xp_converter/essence")
    .duration(1)
    .chance(0, converter => converter.inputItems("industrialforegoing:mob_imprisonment_tool"))
    .inputFluids(JsonIO.of({"amount": 1,"value": [{"fluid": "mob_grinding_utils:fluid_xp"},{"fluid": "pneumaticcraft:memory_essence"},{"fluid": "enderio:xp_juice"}]}))
    .outputFluids("industrialforegoing:essence 1")

    event.recipes.kubejs.fluid_xp_converter()
    .id("kubejs:fluid_xp_converter/memory_essence")
    .duration(1)
    .chance(0, converter => converter.inputItems("pneumaticcraft:memory_stick"))
    .inputFluids(JsonIO.of({"amount": 1,"value": [{"fluid": "mob_grinding_utils:fluid_xp"},{"fluid": "industrialforegoing:essence"},{"fluid": "enderio:xp_juice"}]}))
    .outputFluids("pneumaticcraft:memory_essence 1")

    event.recipes.kubejs.fluid_xp_converter()
    .id("kubejs:fluid_xp_converter/xp_juice")
    .duration(1)
    .chance(0, converter => converter.inputItems("enderio:experience_rod"))
    .inputFluids(JsonIO.of({"amount": 1,"value": [{"fluid": "mob_grinding_utils:fluid_xp"},{"fluid": "industrialforegoing:essence"},{"fluid": "pneumaticcraft:memory_essence"}]}))
    .outputFluids("enderio:xp_juice 1")

})