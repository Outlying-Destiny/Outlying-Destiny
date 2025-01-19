ServerEvents.recipes(event => {

    //Function
    function dissolver2(output1, outputcount1, output2, outputcount2, input){event.custom({"type": "alchemistry:dissolver","group": "alchemistry:dissolver","input": {"ingredient": {"item": input}},"output": {"groups": [{"probability": 100.0,"results": [{"count": outputcount1,"item": output1},{"count": outputcount2,"item": output2}]}],"rolls": 1,"weighted": false}})}

    //Honeycomb Block Dissolving fix
    event.remove({id:'alchemistry:dissolver/honeycomb_block'})
    dissolver2('chemlib:sucrose', 12, 'chemlib:triglyceride', 4, 'minecraft:honeycomb_block')

})