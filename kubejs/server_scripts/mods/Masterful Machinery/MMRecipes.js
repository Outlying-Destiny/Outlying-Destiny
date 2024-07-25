MMEvents.createProcesses(event => {

    //Soul Catcher
    const mobs = [
        {mob: 'zombie',},
        {mob: 'witch',},
        {mob: 'enderman',},
        {mob: 'shulker',}
    ]

    mobs.forEach((mobs) => {
        event.create("mm:"+mobs.mob+"_soul_catcher_crafting")
            .structureId("mm:soul_catcher_"+mobs.mob)
            .ticks(160)
            .input({type: "mm:input/consume", ingredient: { type: "mm:item", item: "enderio:empty_soul_vial", count: 1}})
            .input({type: "mm:input/consume", ingredient: {type: "mm:energy", amount: 163840}})
            .output({type: "mm:output/simple", ingredient: {type: "mm:item", item: "kubejs:"+mobs.mob+"_soul_vial", count: 1}}) 
    })

    //The Vat
    function vat(output, outputcount, name, inputfluid, fluidcount, input1, input2, time, energy){
        event.create("mm:"+name+"_the_vat_crafting")
            .structureId("mm:the_vat")
            .ticks(time)
            .input({type: "mm:input/consume", ingredient: {type: "mm:item", item: input1, count: 1}})
            .input({type: "mm:input/consume", ingredient: {type: "mm:item", item: input2, count: 1}})
            .input({type: "mm:input/consume", ingredient: {type: "mm:fluid", fluid: inputfluid, amount: fluidcount}})
            .input({type: "mm:input/consume", ingredient: {type: "mm:energy",amount: energy}})
            .output({type: "mm:output/simple", ingredient: {type: "mm:fluid", fluid: output, amount: outputcount}}
    )}
    function vattag(output, outputcount, name, inputfluid, fluidcount, input1, input2, time, energy){
        event.create("mm:"+name+"_the_vat_crafting")
            .structureId("mm:the_vat")
            .ticks(time)
            .input({type: "mm:input/consume", ingredient: {type: "mm:item", tag: input1, count: 1}})
            .input({type: "mm:input/consume", ingredient: {type: "mm:item", item: input2, count: 1}})
            .input({type: "mm:input/consume", ingredient: {type: "mm:fluid", fluid: inputfluid, amount: fluidcount}})
            .input({type: "mm:input/consume", ingredient: {type: "mm:energy",amount: energy}})
            .output({type: "mm:output/simple", ingredient: {type: "mm:fluid", fluid: output, amount: outputcount}}
    )}
    function vattag2(output, outputcount, name, inputfluid, fluidcount, input1, input2, time, energy){
        event.create("mm:"+name+"_the_vat_crafting")
            .structureId("mm:the_vat")
            .ticks(time)
            .input({type: "mm:input/consume", ingredient: {type: "mm:item", tag: input1, count: 1}})
            .input({type: "mm:input/consume", ingredient: {type: "mm:item", tag: input2, count: 1}})
            .input({type: "mm:input/consume", ingredient: {type: "mm:fluid", fluid: inputfluid, amount: fluidcount}})
            .input({type: "mm:input/consume", ingredient: {type: "mm:energy",amount: energy}})
            .output({type: "mm:output/simple", ingredient: {type: "mm:fluid", fluid: output, amount: outputcount}}
    )}
    function vat1(output, outputcount, name, inputfluid, fluidcount, input, time, energy){
        event.create("mm:"+name+"_the_vat_crafting")
            .structureId("mm:the_vat")
            .ticks(time)
            .input({type: "mm:input/consume", ingredient: {type: "mm:item", item: input, count: 1}})
            .input({type: "mm:input/consume", ingredient: {type: "mm:fluid", fluid: inputfluid, amount: fluidcount}})
            .input({type: "mm:input/consume", ingredient: {type: "mm:energy",amount: energy}})
            .output({type: "mm:output/simple", ingredient: {type: "mm:fluid", fluid: output, amount: outputcount}}
    )}

    vat('enderio:dew_of_the_void', 1000, 'dew_of_the_void', 'enderio:nutrient_distillation', 4000, 'enderio:pulsating_powder', 'enderio:ender_crystal_powder', 150, 38400)
    vat('enderio:vapor_of_levity', 1000, 'vapor_of_levity', 'enderio:dew_of_the_void', 1000, 'enderio:pulsating_powder', 'enderio:prescient_powder', 200, 51200)
    vat('enderio:fire_water', 1000, 'fire_water', 'enderio:hootch', 1000, 'minecraft:blaze_powder', 'minecraft:redstone', 150, 25600)
    vat('enderio:liquid_sunshine', 1000, 'liquid_sunshine', 'thermal_extra:refined_sunflower_oil', 1000, 'minecraft:glowstone', 'minecraft:sunflower', 200, 51200)

    vattag('enderio:hootch', 400, 'hootch_1.6', 'minecraft:water', 1600, 'forge:seeds', 'minecraft:sugar', 100, 25600)
    const hootch = [
        {input: 'minecraft:poisonous_potato', mult: 8},
        {input: 'minecraft:potato', mult: 4},
        {input: 'minecraft:apple', mult: 3.5},
        {input: 'pneumaticcraft:wheat_flour', mult: 3}
    ]

    hootch.forEach((hootch) => {
        vat('enderio:hootch', 250*hootch.mult, 'hootch_'+hootch.mult, 'minecraft:water', 1000*hootch.mult, hootch.input, 'minecraft:sugar', 100, 25600)
    })

    const nutrient = [
        {input: 'forge:heads', mult: 2},
        {input: 'forge:foods/meat/raw', mult: 0.75},
        {input: 'outlying:rotten_flesh', mult: 1.5}
    ]

    nutrient.forEach((nutrient) => {
        vattag('enderio:nutrient_distillation', 250*nutrient.mult, 'nutrient_sugar_'+nutrient.mult, 'minecraft:water', 1000*nutrient.mult, nutrient.input, 'minecraft:sugar', 100, 25600)
        vattag2('enderio:nutrient_distillation', 375*nutrient.mult, 'nutrient_mushrooms_'+nutrient.mult, 'minecraft:water', 1500*nutrient.mult, nutrient.input, 'forge:mushrooms', 100, 25600)
        vattag('enderio:nutrient_distillation', 500*nutrient.mult, 'nutrient_fermented_spider_eye_'+nutrient.mult, 'minecraft:water', 2000*nutrient.mult, nutrient.input, 'minecraft:fermented_spider_eye', 100, 25600)
    })
    
    const cloudseed = [
        {input: 'minecraft:clay_ball', mult: 0.5},
        {input: 'minecraft:clay', mult: 2},
        {input: 'thermal:silver_dust', mult: 3.5}
    ]

    cloudseed.forEach((cloudseed) => {
        vat('enderio:cloud_seed', 500*cloudseed.mult, 'cloud_seed_snow_block_'+cloudseed.mult, 'minecraft:water', 500*cloudseed.mult, cloudseed.input, 'minecraft:snow_block', 100, 25600)
        vat('enderio:cloud_seed', 1000*cloudseed.mult, 'cloud_seed_packed_ice_'+cloudseed.mult, 'minecraft:water', 1000*cloudseed.mult, cloudseed.input, 'minecraft:packed_ice', 100, 25600)
    })

    const ccs = [
        {input: 'minecraft:clay_ball', mult: 0.5},
        {input: 'minecraft:clay', mult: 2},
        {input: 'thermal:silver_dust', mult: 2.5},
        {input: 'thermal:electrum_dust', mult: 3.5}
    ]

    ccs.forEach((ccs) => {
        vat1('enderio:cloud_seed_concentrated', 1000*ccs.mult, 'cloud_seed_snow_block_'+ccs.mult, 'enderio:cloud_seed', 500*ccs.mult, ccs.input, 100, 25600)
    })
})