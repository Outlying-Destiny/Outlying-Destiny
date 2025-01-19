ServerEvents.recipes(event => {

    //Function
    function compactor(output, outputcount, input, inputcount){event.custom({"type": "alchemistry:compactor","group": "alchemistry:compactor","input": {"count": inputcount,"ingredient": {"item": input}},"result": {"count": outputcount,"item": output}})}

    //Snow Compactor fix
    event.remove({id:'alchemistry:compactor/snow'})
    compactor('minecraft:snow_block', 1, 'chemlib:water', 16)

})