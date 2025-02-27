ServerEvents.recipes(event => {

    //Function Fluidizer
    function fluidizersolid(output, outputcount, input1, input1count, input2, input2count){
        event.custom({
            "type": "bigreactors:fluidizersolidmixing",
            "ingredient1": {
              "count": input1count,
              "ingredient": {
                "item": input1
              }
            },
            "ingredient2": {
              "count": input2count,
              "ingredient": {
                "item": input2
              }
            },
            "result": {
              "count": outputcount,
              "fluid": output
            }
          })
    }

    //Replacing Yellorium by Uranium
    event.remove({id:/bigreactors:fluidizer.+solidmixing.+verderium/})
    fluidizersolid('bigreactors:verderium', 18000, 'mekanism:block_uranium', 2, 'bigreactors:blutonium_block', 1)
    fluidizersolid('bigreactors:verderium', 18000, 'bigreactors:blutonium_block', 1, 'mekanism:block_uranium', 2)
    fluidizersolid('bigreactors:verderium', 18000,'mekanism:ingot_uranium', 2, 'bigreactors:blutonium_ingot', 1)
    fluidizersolid('bigreactors:verderium', 18000, 'bigreactors:blutonium_ingot', 1,'mekanism:ingot_uranium', 2)

    //Graphite
    event.remove({id:/bigreactors:(smelting|blasting)\/graphite_from.+coal/})
})