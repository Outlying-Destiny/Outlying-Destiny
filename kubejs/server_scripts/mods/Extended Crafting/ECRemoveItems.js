ServerEvents.recipes(event => {

    //Redstone Ingot Stuff
    event.remove({id:/extendedcrafting:(enhanced_){0,1}redstone_(ingot|nugget|component|catalyst)/})
    event.remove({id:/extendedcrafting:(auto_){0,1}flux_(alternator|crafter|star)/})
    event.remove({id:'packagedexcrafting:flux_crafter'})

    //Handheld table (Already in AA)
    event.remove({id:'extendedcrafting:handheld_table'})

    //Main Components / Catalysts
    event.remove({id:/extendedcrafting:(basic|advanced|elite|ultimate)_(component|catalyst)/})
})