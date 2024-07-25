MMEvents.createStructures(event => {

    const mobs = [
        {mob: 'zombie',},
        {mob: 'witch',},
        {mob: 'enderman',},
        {mob: 'shulker',}
    ]
    
    mobs.forEach((mobs) => {
        event.create("mm:soul_catcher_"+mobs.mob)
            .controllerId("mm:soul_catcher")
            .name("Soul Catcher")
            .layout(a => {
                a.layer([
                    "AAA",
                    "AAA",
                    "AAA"
                ]).layer([
                    "AEA",
                    "ISI",
                    "ACA",
                ]).layer([
                    "AAA",
                    "AAA",
                    "AAA"
                ]).key("A", {
                    block: "kubejs:ensouled_frame"
                }).key("I", {
                    port: "mm:soul_catcher_item_port",
                }).key('E', {
                    port: "mm:soul_catcher_energy_port",
                    input: true
                }).key('S', {
                    block: "kubejs:inhibited_"+mobs.mob+"_spawner"
                })
            })
    })

})