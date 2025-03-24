ServerEvents.recipes(event => {

    //Function
    function transform(output, outputcount, input, fluid){event.custom({"type": "ae2:transform","circumstance": {"type": "fluid","tag": fluid},"ingredients": [{"item": input}],"result": {"count": outputcount,"item": output}})}

    function transform2(output, outputcount, input1, input2, fluid){event.custom({"type": "ae2:transform","circumstance": {"type": "fluid","tag": fluid},"ingredients": [{"item": input1},{"item": input2}],"result": {"count": outputcount,"item": output}})}
    
    //Demon Ingot
    transform('kubejs:demon_ingot', 1, 'minecraft:gold_ingot', 'outlying:demon')
    transform('kubejs:demon_block', 1, 'minecraft:gold_block', 'outlying:demon')
    
    //Experience Ingot
    transform2('kubejs:enchanted_ingot', 1, 'minecraft:gold_ingot', 'minecraft:lapis_lazuli', 'forge:experience')
    transform2('kubejs:enchanted_block', 1, 'minecraft:gold_block', 'minecraft:lapis_block', 'forge:experience')

})