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
            .input({
                type: "mm:input/consume",
                ingredient: {
                    type: "mm:item",
                    item: "enderio:empty_soul_vial",
                    count: 1
                }
            })
            .input({
                type: "mm:input/consume",
                ingredient: {
                    type: "mm:energy",
                    amount: 163840
                }
            })
            .output({
                type: "mm:output/simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:"+mobs.mob+"_soul_vial",
                    count: 1
                }
            }) 
    })

    //The Vat
    function vat(output, outputcount, name, inputfluid, fluidcount, input1, input2, time, energy){
        event.create("mm:"+name+"_the_vat_crafting")
        .structureId("mm:the_vat")
        .ticks(time)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: input1,
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: input2,
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: inputfluid,
                amount: fluidcount
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: energy
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: output,
                amount: outputcount
            }
        }) 
    }

    vat('enderio:dew_of_the_void', 1000, 'dew_of_the_void', 'enderio:nutrient_distillation', 4000, 'enderio:pulsating_powder', 'enderio:ender_crystal_powder', 150, 38400)
    vat('enderio:vapor_of_levity', 1000, 'vapor_of_levity', 'enderio:dew_of_the_void', 1000, 'enderio:pulsating_powder', 'enderio:prescient_powder', 200, 51200)
    vat('enderio:fire_water', 1000, 'fire_water', 'enderio:hootch', 1000, 'minecraft:blaze_powder', 'minecraft:redstone', 100, 25600)
    vat('enderio:liquid_sunshine', 1000, 'liquid_sunshine', 'thermal_extra:refined_sunflower_oil', 1000, 'minecraft:glowstone', 'minecraft:sunflower', 200, 51200)
    vat('enderio:hootch', 1000, 'hootch', 'minecraft:water', 4000, 'minecraft:potato', 'minecraft:sugar', 100, 25600)


})