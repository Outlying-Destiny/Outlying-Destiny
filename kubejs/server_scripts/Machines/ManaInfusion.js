ServerEvents.recipes(event => {

    //Function
    function infusion(output, outputcount, input, mana){event.custom({"type": "botania:mana_infusion","input": {"item": input},"mana": mana,"output": {"count": outputcount,"item": output}})}
    function alchemy(output, outputcount, input, group, mana){event.custom({"type": "botania:mana_infusion","catalyst": {"type": "block","block": "botania:alchemy_catalyst"},"group": group,"input": {"item": input},"mana": mana,"output": {"count": outputcount,"item": output}})}
    function conjuration(item, mana){event.custom({"type": "botania:mana_infusion","catalyst": {"type": "block","block": "botania:conjuration_catalyst"},"input": {"item": item},"mana": mana,"output": {"count": 2,"item": item}})}
    
    //Remove Useless Conjuration Recipes
    event.remove({id:/botania:mana_infusion\/(coal|glowstone|gravel|netherrack|quartz|redstone|snowball|soul_sand)_dupe/})

})