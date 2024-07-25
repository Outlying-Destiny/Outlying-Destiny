MMEvents.registerPorts(event => {

    event.create("soul_catcher_energy_port")
        .name("Soul Catcher Energy Port")
        .controllerId("mm:soul_catcher")
        .config("mm:energy", c => {
            c.capacity(100000)
             .maxReceive(2000)
             .maxExtract(1000);
    })

    event.create("soul_catcher_item_port")
    .name("Soul Catcher Item Port")
    .controllerId("mm:soul_catcher")
    .config("mm:item", c => {
        c.rows(1)
         .columns(1);
    })

})