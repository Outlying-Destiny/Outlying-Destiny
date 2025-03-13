ServerEvents.recipes(event => {

    //Function
    function altar(output, input, aura, time){event.custom({"type": "naturesaura:altar","input": {"item": input},"output": {"item": output},"aura": aura,"time": time    })}
    function catalyst(output, outputcount, input, catalyst, aura, time){event.custom({"type": "naturesaura:altar","input": {"item": input},"output": {"item": output,"count": outputcount},"catalyst": {"item": "naturesaura:"+catalyst+"_catalyst"},"aura": aura,"time": time})}
    
    //Cheaper Crumbling Amethyst
    event.remove({id:'naturesaura:altar/amethyst'})
    catalyst('minecraft:amethyst_shard', 2, 'minecraft:amethyst_block', 'crushing', 2500, 20)

    //Cheaper Conversion Ender Pearl
    event.remove({id:'naturesaura:altar/ender_pearl'})
    catalyst('minecraft:ender_pearl', 1, 'minecraft:amethyst_shard', 'conversion', 50000, 200)
})