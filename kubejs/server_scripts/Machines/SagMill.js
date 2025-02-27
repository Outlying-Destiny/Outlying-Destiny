ServerEvents.recipes(event => {

    //Function
    function sagmill(output, outputcount, input, energy){event.custom({"type": "enderio:sag_milling","energy": energy,"input": {"item": input},"outputs": [{"count": outputcount,"item": output}]})}

    //Thermal Blaze Powders
    sagmill('thermal:basalz_powder', 4, 'thermal:basalz_rod', 2400)
    sagmill('thermal:blitz_powder', 4, 'thermal:blitz_rod', 2400)
    sagmill('thermal:blizz_powder', 4, 'thermal:blizz_rod', 2400)

    //Remove Flower Pot Recipe
    event.remove({id:'enderio:sag_milling/flower_pot'})

    //Remove Ore Processing
    event.remove({id:/enderio:sag_milling\/.+_ore/})
})