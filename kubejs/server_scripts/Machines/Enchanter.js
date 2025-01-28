ServerEvents.recipes(event => {

    //function
    function enchantertag(enchant, input, count){event.custom({"type": "enderio:enchanting","cost_multiplier": 1,"enchantment": enchant,"input": {"count": count,"ingredient": {"tag": input}}})}

    //Fuel Efficiency
    //enchantertag('simplyjetpacks:fuel_efficiency', 'outlying:coal_blocks', 6)

})