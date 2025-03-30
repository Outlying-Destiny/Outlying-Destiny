ServerEvents.recipes(event => {

    //Function
    function sagmill(output, outputcount, input, energy){event.custom({"type": "enderio:sag_milling","energy": energy,"input": {"item": input},"outputs": [{"count": outputcount,"item": output}]})}
    function sagmill2(output1, outputcount1, output2, outputcount2, outputchance2, input, energy){event.custom({"type": "enderio:sag_milling","energy": energy,"input": {"item": input},"outputs": [{"count": outputcount1,"item": output1},{"chance": outputchance2,"count": outputcount2,"item": output2}]})}

    //Remove Ore Processing
    event.remove({id:/enderio:sag_milling\/.+_ore/})

    //Remove Clipping / Twigs recipes
    event.remove({id:/enderio:sag_milling\/(fern|large_fern|vines|leaves|lily_pad|grass|tall_grass|cactus|shrub)/})

    //Remove dyes recipes
    event.remove({id:/enderio:sag_milling\/(poeny|red_tulip|orange_tulip|oxeye_daisy|rose_bush|white_tulip|azure_bluet|dandelion|poppy|blue_orchid|allium|sun_flower|pink_tulip)/})

    //Remove Miscellanous Recipes
    event.remove({id:/enderio:sag_milling\/(flower_pot|bone_block|wool|cobweb|cobblestone|gravel|glass|stone)/})

    //Thermal Blaze Powders
    sagmill('thermal:basalz_powder', 4, 'thermal:basalz_rod', 2400)
    sagmill('thermal:blitz_powder', 4, 'thermal:blitz_rod', 2400)
    sagmill('thermal:blizz_powder', 4, 'thermal:blizz_rod', 2400)

    //Wheat Flour
    event.remove({id:/pneumaticcraft:(explosion_crafting|pressure_chamber)\/wheat_flour$/})
    sagmill2('pneumaticcraft:wheat_flour', 1, 'pneumaticcraft:wheat_flour', 1, 0.6, 'minecraft:wheat', 2400)
})