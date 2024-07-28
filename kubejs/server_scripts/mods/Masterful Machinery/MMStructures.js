MMEvents.createStructures(event => {

    //The Vat
    event.create("mm:the_vat")
        .controllerId("mm:the_vat")
        .name("The Vat")
        .layout(a => {
            a.layer([
                "A A",
                "A A",
                "A A"
            ]).layer([
                "AIA",
                "FAF",
                "AIA",
            ]).layer([
                "AEA",
                "AAA",
                "ACA"
            ]).key("A", {
                block: "kubejs:void_frame"
            }).key("I", {
                port: "mm:the_vat_tiny_item_port",
                input: true
            }).key('E', {
                port: "mm:the_vat_tiny_energy_port",
                input: true
            }).key('F', {
                port: "mm:the_vat_small_fluid_port"
            })
        })    

    //Soul Catcher
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
                    port: "mm:soul_catcher_tiny_item_port",
                }).key('E', {
                    port: "mm:soul_catcher_small_energy_port",
                    input: true
                }).key('S', {
                    block: "kubejs:inhibited_"+mobs.mob+"_spawner"
                })
            })
    })


})