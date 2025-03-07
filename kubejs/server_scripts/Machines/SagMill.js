ServerEvents.recipes(event => {

    //Function
    function sagmill(output, outputcount, input, energy){event.custom({"type": "enderio:sag_milling","energy": energy,"input": {"item": input},"outputs": [{"count": outputcount,"item": output}]})}
    function sagmill2(output1, outputcount1, output2, outputcount2, outputchance2, input, energy){event.custom({"type": "enderio:sag_milling","energy": energy,"input": {"item": input},"outputs": [{"count": outputcount1,"item": output1},{"chance": outputchance2,"count": outputcount2,"item": output2}]})}

    //Thermal Blaze Powders
    sagmill('thermal:basalz_powder', 4, 'thermal:basalz_rod', 2400)
    sagmill('thermal:blitz_powder', 4, 'thermal:blitz_rod', 2400)
    sagmill('thermal:blizz_powder', 4, 'thermal:blizz_rod', 2400)

    //Remove Flower Pot Milling
    event.remove({id:'enderio:sag_milling/flower_pot'})

    //Remove Ore Processing
    event.remove({id:/enderio:sag_milling\/.+_ore/})

    //Remove Bone Block Milling
    event.remove({id:'enderio:sag_milling/bone_block'})

    //Wheat Flour
    event.remove({id:/pneumaticcraft:(explosion_crafting|pressure_chamber)\/wheat_flour$/})
    sagmill2('pneumaticcraft:wheat_flour', 1, 'pneumaticcraft:wheat_flour', 1, 0.6, 'minecraft:wheat', 2400)
})