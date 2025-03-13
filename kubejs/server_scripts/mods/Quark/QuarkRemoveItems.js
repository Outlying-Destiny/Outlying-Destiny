ServerEvents.recipes(event => {

    //Storage Blocks (Thermal equivalents)
    const rstoreblock = ['gunpowder_sack','apple_crate','sugar_cane_block']
    rstoreblock.forEach((block) => {
        event.remove({id:'quark:building/crafting/compressed/'+block})
        event.remove({id:'quark:building/crafting/compressed/'+block+'_uncompress'})
    })

    //Blackstone / Deepslate Furnace
    event.remove({input:['quark:blackstone_furnace', 'quark:deepslate_furnace']})
    
})