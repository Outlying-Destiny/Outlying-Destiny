ServerEvents.recipes(event => {

    //Function
    function crusher(output, outputcount, input){event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":input}},"output":{"count":outputcount,"item":output}})}
    function crushertag(output, outputcount, input){event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":input}},"output":{"count":outputcount,"item":output}})}

    //Better Sandstone to Sand Crushing Recipe
    event.remove({id:/mekanism:crushing\/(red_){0,1}sandstone_to_sand/})
    crushertag('minecraft:sand', 4, 'forge:sandstone/colorless')
    crushertag('minecraft:red_sand', 4, 'forge:sandstone/red')

    //Removes Dirty Netherite Scrap Crusher Recipe
    event.remove({id:'mekanism:processing/netherite/ancient_debris_to_dirty_scrap'})

    //Wither Bone to Withered Bone (thanks BHC for the hard coded loottable)
    crusher('architects_palette:withered_bone', 1, 'bhc:wither_bone')

})