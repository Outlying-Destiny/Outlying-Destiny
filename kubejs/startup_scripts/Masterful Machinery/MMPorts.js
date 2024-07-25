MMEvents.registerPorts(event => {

    //Soul Catcher
    event.create("soul_catcher_energy_port")
        .name("Soul Catcher Energy Port")
        .controllerId("mm:soul_catcher")
        .config("mm:energy", c => {
            c.capacity(102400)
             .maxReceive(2048)
             .maxExtract(1024);
    })

    event.create("soul_catcher_item_port")
    .name("Soul Catcher Item Port")
    .controllerId("mm:soul_catcher")
    .config("mm:item", c => {
        c.rows(1)
         .columns(1);
    })

    //The Vat
    event.create("the_vat_energy_port")
    .name("The Vat Energy Port")
    .controllerId("mm:the_vat")
    .config("mm:energy", c => {
        c.capacity(51200)
         .maxReceive(1024)
         .maxExtract(512);
    })

    event.create("the_vat_item_port")
    .name("The Vat Item Port")
    .controllerId("mm:the_vat")
    .config("mm:item", c => {
        c.rows(1)
         .columns(1);
    })

    event.create("the_vat_fluid_port")
    .name("The Vat Fluid Port")
    .controllerId("mm:the_vat")
    .config("mm:fluid", c => {
        c.rows(1)
         .columns(1)
         .slotCapacity(8000);
    })

})