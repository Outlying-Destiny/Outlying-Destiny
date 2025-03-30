ServerEvents.recipes(event => {

    //Function
    function assembly(output, outputcount, input, inputcount){event.custom({"type": "pneumaticcraft:assembly_laser","input": {"type": "pneumaticcraft:stacked_item","count": inputcount,"item": input},"program": "laser","result": {"count": outputcount,"item": output}})}

    //Remove Red Dye Recipe
    event.remove({id:'pneumaticcraft:assembly/red_dye'})

})