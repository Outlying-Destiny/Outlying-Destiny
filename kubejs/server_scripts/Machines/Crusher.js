ServerEvents.recipes(event => {

    //Function
    function crushertag(output, outputcount, input){event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":input}},"output":{"count":outputcount,"item":output}})}

    //Better Sandstone to Sand Crushing Recipe
    event.remove({id:/mekanism:crushing\/(red_){0,1}sandstone_to_sand/})
    crushertag('minecraft:sand', 4, 'forge:sandstone/colorless')
    crushertag('minecraft:red_sand', 4, 'forge:sandstone/red')


})