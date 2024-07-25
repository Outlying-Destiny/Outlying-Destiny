MMEvents.registerControllers(event => {
    
    //Soul Catcher
    event.create("soul_catcher")
        .name("Soul Catcher")
        .type("mm:machine");

    //The Vat
    event.create("the_vat")
        .name("The Vat")
        .type("mm:machine");
        
})