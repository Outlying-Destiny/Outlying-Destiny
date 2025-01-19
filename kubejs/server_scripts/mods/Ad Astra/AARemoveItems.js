ServerEvents.recipes(event => {

    //Wrench
    event.remove({id:'ad_astra:wrench'})

    //Fluid pipes
    event.remove({id:/ad_astra:.+fluid_pip.+/})

    //Coal Generator
    event.remove({id:'ad_astra:coal_generator'})

    //Water Pump
    event.remove({id:'ad_astra:water_pump'})

    //Etrionic Blast Furnace
    event.remove({id:'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals'})
    event.remove({id:'ad_astra:etrionic_blast_furnace'})
})