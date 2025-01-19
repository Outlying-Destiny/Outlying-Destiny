ServerEvents.recipes(event => {

    //Crystal Resonance Generator
    event.remove({id:'ae2:network/crystal_resonance_generator'})
    
    //Ender Dust
    event.remove({id:'ae2:inscriber/ender_dust'})

    //Crafting Card
    event.remove({id:'ae2:materials/cardcrafting'})

    //Spatial Anchor
    event.remove({id:'ae2:network/blocks/spatial_anchor'})

    //Circuit Slicer
    event.remove({id:'expatternprovider:circuit_cutter'})

    //Mega Cells Radioactive Stuff
    event.remove({id:'megacells:crafting/radioactive_cell_component'})
    event.remove({id:'megacells:cells/standard/radioactive_chemical_cell'})
})