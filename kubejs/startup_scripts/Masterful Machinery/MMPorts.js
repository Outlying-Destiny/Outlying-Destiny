MMEvents.registerPorts(event => {

    event.create("tiny_energy_port")
        .name("Tiny Energy Port")
        .controllerId("mm:soul_catcher")
        .config("mm:energy", c => {
            c.capacity(100000)
             .maxReceive(2000)
             .maxExtract(1000);
    })

    event.create("tiny_item_port")
    .name("Tiny Item Port")
    .controllerId("mm:soul_catcher")
    .config("mm:item", c => {
        c.rows(1)
         .columns(2);
    })

})