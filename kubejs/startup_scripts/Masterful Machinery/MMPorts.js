MMEvents.registerPorts(event => {

    function port(name, id, type, config) {
        var portname
        switch (type) {
            case 1:
                portname = "mm:item"
                break;           
            case 2:
                portname = "mm:fluid"
                break;
            case 3:
                portname = "mm:energy"
                break;
            case 4:
                portname = "pneumaticcraft/air"
                break;
            default:
                type = 1
                portname = "mm:item"
                break;
        }
        event.create(name.toLowerCase().split(" ").join("_"))
            .name(name)
            .controllerId(id)
            .config(portname, c => {
                switch (type) {
                    case 1:
                        c.rows(config[0])
                        .columns(config[1])
                        break;
                    
                    case 2:
                        c.rows(config[0])
                        .columns(config[1])
                        .slotCapacity(config[2])
                        break;
                    
                    case 3:
                        c.capacity(config*100)
                        .maxReceive(config*2)
                        .maxExtract(config)
                        break;
                    case 4:
                        c.volume(config)
                        break;
                    default:
                        break;
                }
            })
    }

    //Base Ports
    port("Base Tiny Item Port", "mm:base", 1, [1, 1])
    port("Base Tiny Fluid Port", "mm:base", 2, [1, 1, 1000])
    port("Base Small Fluid Port", "mm:base", 2, [1, 1, 4000])
    port("Base Tiny Energy Port", "mm:base", 3, 512)
    port("Base Small Energy Port", "mm:base", 3, 1024)
    
    //The Vat
    port("The Vat Tiny Item Port", "mm:the_vat", 1, [1, 1])
    port("The Vat Small Fluid Port", "mm:the_vat", 2, [1, 1, 4000])
    port("The Vat Tiny Energy Port", "mm:the_vat", 3, 512)

    //Soul Catcher
    port("Soul Catcher Tiny Item Port", "mm:soul_catcher", 1, [1, 1])
    port("Soul Catcher Small Energy Port", "mm:soul_catcher", 3, 1024)

})