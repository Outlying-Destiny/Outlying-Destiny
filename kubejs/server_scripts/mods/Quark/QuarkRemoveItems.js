ServerEvents.recipes(event => {

    //Gunpowder Sack
    event.remove({output:'quark:gunpowder_sack'})
    event.remove({input:'quark:gunpowder_sack'})

    //Blackstone / Deepslate Furnace
    event.remove({input:['quark:blackstone_furnace', 'quark:deepslate_furnace']})
    
})