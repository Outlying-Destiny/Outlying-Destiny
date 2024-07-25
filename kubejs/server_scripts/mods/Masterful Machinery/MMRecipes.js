MMEvents.createProcesses(event => {

    const mobs = [
        {mob: 'zombie',},
        {mob: 'witch',},
        {mob: 'enderman',},
        {mob: 'shulker',}
    ]

    mobs.forEach((mobs) => {
        event.create("mm:"+mobs.mob+"_soul_vial_crafting")
            .structureId("mm:soul_catcher_"+mobs.mob)
            .ticks(100)
            .input({
                type: "mm:input/consume",
                ingredient: {
                    type: "mm:energy",
                    amount: 100000
                }
            })
            .input({
                type: "mm:input/consume",
                ingredient: {
                    type: "mm:item",
                    item: "enderio:empty_soul_vial",
                    count: 1
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
})