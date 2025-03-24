ServerEvents.recipes(event => {

    //Function
    function sawmill(output, outputcount, input){event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":input}},"mainOutput":{"count":outputcount,"item":output}})}
    function wood(wood){
        event.custom({"type":"mekanism:sawing","input":{"ingredient":{"tag":wood+"_logs"}},"mainOutput":{"count":6,"item":wood+"_planks"},"secondaryChance":0.25,"secondaryOutput":{"item":"mekanism:sawdust"}})
        event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":wood+"_fence_gate"}},"mainOutput":{"count":2,"item":wood+"_planks"},"secondaryChance":1.0,"secondaryOutput":{"count":4,"item":"minecraft:stick"}})
        event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":wood+"_pressure_plate"}},"mainOutput":{"item":wood+"_planks"},"secondaryChance":0.25,"secondaryOutput":{"count":2,"item":"mekanism:sawdust"}})
        event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":wood+"_trapdoor"}},"mainOutput":{"count":3,"item":wood+"_planks"}})
        event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":wood+"_door"}},"mainOutput":{"count":2,"item":wood+"_planks"}})
        event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":wood+"_boat"}},"mainOutput":{"count":5,"item":wood+"_planks"}})
    }
    
    //Frost Melon
    sawmill('thermal:frost_melon_slice', 9, 'thermal:frost_melon')

    //Pumpkin
    sawmill('farmersdelight:pumpkin_slice', 4, 'minecraft:pumpkin')

    //Amethyst
    sawmill('minecraft:amethyst_shard', 4, 'minecraft:amethyst_block')

    //Woods
    event.remove({id:/mekanism:sawing\/hanging_sign/})
    wood('undergarden:smogstem')
    wood('undergarden:wigglewood')
    wood('undergarden:grongle')
    wood('twilightforest:twilight_oak')
    wood('twilightforest:canopy')
    wood('twilightforest:mangrove')
    wood('twilightforest:dark')
    wood('twilightforest:time')
    wood('twilightforest:transformation')
    wood('twilightforest:mining')
    wood('twilightforest:sorting')
    wood('aether:skyroot')
    wood('forbidden_arcanus:aurum')
    wood('thermal:rubberwood')
    wood('quark:ancient')
    wood('quark:azalea')
    wood('quark:blossom')
    event.custom({"type":"mekanism:sawing","input":{"ingredient":{"tag":"architects_palette:twisted_logs"}},"mainOutput":{"count":6,"item":"architects_palette:twisted_planks"},"secondaryChance":0.25,"secondaryOutput":{"item":"mekanism:sawdust"}})
    event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":"architects_palette:twisted_fence_gate"}},"mainOutput":{"count":2,"item":"architects_palette:twisted_planks"},"secondaryChance":1.0,"secondaryOutput":{"count":4,"item":"minecraft:stick"}})
    event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":"architects_palette:twisted_pressure_plate"}},"mainOutput":{"item":"architects_palette:twisted_planks"},"secondaryChance":0.25,"secondaryOutput":{"count":2,"item":"mekanism:sawdust"}})
    event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":"architects_palette:twisted_trapdoor"}},"mainOutput":{"count":3,"item":"architects_palette:twisted_planks"}})
    event.custom({"type":"mekanism:sawing","input":{"ingredient":{"item":"architects_palette:twisted_door"}},"mainOutput":{"count":2,"item":"architects_palette:twisted_planks"}})


})