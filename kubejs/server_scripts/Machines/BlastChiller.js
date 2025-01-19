ServerEvents.recipes(event => {

    //Function
    function chill(output, outputcount, input, amount, energy){event.custom({"type": "thermal:chiller","ingredient": {"fluid": input,"amount": amount},"result": [{"item": output,"count": outputcount}],"energy": energy})}
    function chillcast(output, outputcount, input, amount, cast, energy){event.custom({"type": "thermal:chiller","ingredients": [{"fluid": input,"amount": amount},{"item": cast}],"result": [{"item": output,"count": outputcount}],"energy": energy})}

    //Solidified xp
    chill('actuallyadditions:solidified_experience', 1, 'mob_grinding_utils:fluid_xp', 160, 4000)

    //Slower Snow Ball Recipe
    event.remove({id:'thermal:machines/chiller/chiller_water_to_snowball'})
    chillcast('minecraft:snowball', 4, 'minecraft:water', 1000, 'thermal:chiller_ball_cast', 2000)

})