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

    //Smelting Dusts into Ingots
    event.smelting('bigreactors:ludicrite_ingot', 'bigreactors:ludicrite_dust')
    event.smelting('bigreactors:ridiculite_ingot', 'bigreactors:ridiculite_dust')
    event.smelting('bigreactors:inanite_ingot', 'bigreactors:inanite_dust')
    event.smelting('bigreactors:insanite_ingot', 'bigreactors:insanite_dust')

    //Replacing Yellorium by Uranium
    event.remove({id:/bigreactors:fluidizer.+solidmixing.+verderium/})
    fluidizersolid('bigreactors:verderium', 18000, 'mekanism:block_uranium', 2, 'bigreactors:blutonium_block', 1)
    fluidizersolid('bigreactors:verderium', 18000, 'bigreactors:blutonium_block', 1, 'mekanism:block_uranium', 2)
    fluidizersolid('bigreactors:verderium', 18000,'mekanism:ingot_uranium', 2, 'bigreactors:blutonium_ingot', 1)
    fluidizersolid('bigreactors:verderium', 18000, 'bigreactors:blutonium_ingot', 1,'mekanism:ingot_uranium', 2)

    //Remove Coal Block to Graphite Block Recipe
    event.remove({id:/bigreactors:(smelting|blasting)\/graphite_from_coalblock/})
})