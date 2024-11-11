ServerEvents.recipes(event => {

    //Formulaic Assembler
    event.remove({id:'mekanism:formulaic_assemblicator'})
    event.remove({id:'mekanism:crafting_formula'})

    //Enriched Tin
    event.remove({id:'mekanism:enriching/enriched/tin'})

    //Mekanism Transport Stuff
    event.remove({id:/mekanism:transmitter\/(restrictive|diversion)_transporter/})

})