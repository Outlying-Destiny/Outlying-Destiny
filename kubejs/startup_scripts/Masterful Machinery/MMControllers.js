MMEvents.registerControllers(event => {

    function controller(name) {
        event.create(name.toLowerCase().split(" ").join("_"))
            .name(name)
            .type("mm:machine");
    }

    //controller("Soul Catcher")
    controller("The Vat")
    
})