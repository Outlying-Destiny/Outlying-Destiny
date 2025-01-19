ServerEvents.recipes(event => {

    //Functions
    function daisy(output, input, type){event.custom({"type": "botania:pure_daisy","input": {"type": type,"block": input},"output": {"name": output}})}

    //Living Rock / Wood
    event.remove({id:/botania:pure_daisy\/living(rock|wood)/})
    daisy('botania:livingrock', 'elementalcraft:whiterock', 'block')
    daisy('botania:livingwood_log', 'evilcraft:undead_log', 'block')
})