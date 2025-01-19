ServerEvents.recipes(event => {

    //Function
    function sawmill(output, outputcount, input){event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":input}},"mainOutput":{"count":outputcount,"item":output}})}

    //Frost Melon
    sawmill('thermal:frost_melon_slice', 9, 'thermal:frost_melon')

    //Pumpkin
    sawmill('farmersdelight:pumpkin_slice', 4, 'minecraft:pumpkin')

    //Amethyst
    sawmill('minecraft:amethyst_shard', 4, 'minecraft:amethyst_block')
})