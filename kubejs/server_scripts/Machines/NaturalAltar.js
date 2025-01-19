ServerEvents.recipes(event => {

    //Function
    function altar(output, input, aura, time){event.custom({"type": "naturesaura:altar","input": {"item": input},"output": {"item": output},"aura": aura,"time": time    })}
    function catalyst(output, outputcount, input, catalyst, aura, time){event.custom({"type": "naturesaura:altar","input": {"item": input},"output": {"item": output,"count": outputcount},"catalyst": {"item": "naturesaura:"+catalyst+"_catalyst"},"aura": aura,"time": time})}
    
    //Better Crumbling Amethyst Ratio
    event.remove({id:'naturesaura:altar/amethyst'})
    catalyst('minecraft:amethyst_shard', 2, 'minecraft:amethyst_block', 'crushing', 2500, 20)
})