ServerEvents.recipes(event => {

    //Function
    function chill(output, input, amount, energy){event.custom({"type": "thermal:chiller","ingredient": {"fluid": input,"amount": amount},"result": [{"item": output}],"energy": energy})}

    //Solidified xp
    chill('actuallyadditions:solidified_experience', 'mob_grinding_utils:fluid_xp', 160, 4000)

})