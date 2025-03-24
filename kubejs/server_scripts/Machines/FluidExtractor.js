ServerEvents.recipes(event => {

    //Function
    function extract(log, stripped, amount){event.custom({
        "type": "industrialforegoing:fluid_extractor",
        "breakChance": 0.01,
        "defaultRecipe": false,
        "input": {
          "item": log
        },
        "output": "{Amount:+"+amount+",FluidName:\"industrialforegoing:latex\"}",
        "result": stripped
    })}

    //Better Ratios
    event.remove({id:/industrialforegoing:fluid_extractor/})
    event.custom({"type": "industrialforegoing:fluid_extractor","breakChance": 0.01,"defaultRecipe": true,"input": {"tag": "minecraft:logs"},"output": "{Amount:3,FluidName:\"industrialforegoing:latex\"}","result": "minecraft:air"})
    extract('minecraft:dark_oak_log', 'minecraft:stripped_dark_oak_log', 4)
    extract('minecraft:acacia_log', 'minecraft:stripped_acacia_log', 6)
    extract('thermal:rubberwood_log', 'thermal:stripped_rubberwood_log', 8)

})