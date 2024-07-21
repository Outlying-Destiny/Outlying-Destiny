MMEvents.createProcesses(event => {

    event.create("mm:soul_vial_crafting")
        .structureId("mm:soul_catcher")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 40000
            }
        })
        .input({
            type: "mm:input/consume",
            chance: 0,
            ingredient: {
                type: "mm:item",
                item: "enderio:powered_spawner",
                count: 1
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
                item: "enderio:filled_soul_vial",
                count: 1
            }
        })    
})