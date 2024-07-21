MMEvents.createStructures(event => {

    event.create("mm:soul_catcher")
        .controllerId("mm:soul_catcher")
        .name("Soul Catcher")
        .layout(a => {
            a.layer([
                "BCB"
            ]).layer([
                "AED"
            ]).key("B", {
                block: "mm:test_vent"
            }).key("A", {
                portType: "mm:item",
                input: true
            }).key('D', {
                portType: "mm:item",
                input: false
            }).key('E', {
                portType: "mm:energy",
                input: true
            })
        })

})