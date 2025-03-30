ServerEvents.recipes(event => {

    //Function
    function doubledye(dye, input){event.custom({"type":"mekanism:enriching","input":{"ingredient":{"item":input}},"output":{"count":4,"item":"minecraft:"+dye+"_dye"}})}

    //Unification
    event.remove({id:/mekanism:enriching\/dye/})
    event.remove({not:{id:/mekanism:pigment_extracting\/flower\/large/}, id:/mekanism:pigment_extracting\/flower\//})
    const dye = [['white'], ['light_gray'], ['gray'], ['black'], ['brown'], ['red'], ['orange'], ['yellow'], ['lime'], ['green'], ['cyan'], ['light_blue'], ['blue'], ['purple'], ['magenta'], ['pink']]
    dye.forEach((dye) => {
        event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"outlying:makes_dye/"+dye}},"output":{"count":2,"item":"minecraft:"+dye+"_dye"}})
        event.custom({"type":"mekanism:pigment_extracting","input":{"ingredient":{"tag":"outlying:makes_dye/"+dye}},"output":{"amount":768,"pigment":"mekanism:"+dye}})
    })

    //Removes Lead Nugget to Red Dye Recipe
    event.remove({id:'immersiveengineering:smelting/lead_red'})

    //Edelwood Oil Pigment Extractor
    event.custom({"type":"mekanism:pigment_extracting","input":{"ingredient":{"item":"forbidden_arcanus:edelwood_oil"}},"output":{"amount":1536,"pigment":"mekanism:black"}})

    //Double Output Enrichment
    doubledye('red', 'minecraft:rose_bush')
    doubledye('yellow', 'minecraft:sunflower')
    doubledye('cyan', 'minecraft:pitcher_plant')
    doubledye('magenta', 'minecraft:lilac')
    doubledye('pink', 'minecraft:peony')
    doubledye('black', 'forbidden_arcanus:edelwood_oil')

    event.remove({id:/minecraft:.+_dye$/})
    event.remove({id:/minecraft:.+_dye_from_/})
    event.remove({id:'quark:tweaks/crafting/utility/misc/charcoal_to_black_dye'})
    event.remove({id:/quark:tweaks\/crafting\/utility\/coral\//})
    event.remove({not:{id:/botania:dye_(green|lime)/}, id:/botania:dye_/})
    event.remove({id:'thermal:cyan_dye_from_apatite'})
    event.remove({id:'twilightforest:waterlily_to_magenta'})
    event.remove({id:'twilightforest:thorn_rose_to_red'})
    event.remove({id:/aether:flower_to_(white|purple)_dye/})
    event.remove({id:/undergarden:.+_to_dye/})

    const dyeshapeless = [['white'], ['light_gray'], ['gray'], ['brown'], ['red'], ['orange'], ['yellow'], ['cyan'], ['light_blue'], ['blue'], ['purple'], ['magenta'], ['pink']]
    dyeshapeless.forEach((dye) => {
        event.shapeless('minecraft:'+dye+'_dye', "#outlying:makes_dye/"+dye)
    })
    event.shapeless('minecraft:black_dye', '#outlying:makes_dye_shapeless/black')

})