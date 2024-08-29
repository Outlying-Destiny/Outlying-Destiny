ServerEvents.recipes(event => {

    //Mega Torch
    event.remove({id:'torchmaster:megatorch'})
    event.shaped('torchmaster:megatorch', [
        'AAA',
        'BCB',
        'EDE'
        ], {
        A:'extendedcrafting:luminessence_block',
        B:'kubejs:empowered_energized_steel',
        C:'enderio:frank_n_zombie',
        D:'#minecraft:logs',
        E:'thermal_extra:soul_infused_block'
    })

    //Dread Lamp
    event.remove({id:'torchmaster:dreadlamp'})
    event.shaped('torchmaster:dreadlamp', [
        'AAA',
        'BCB',
        'ADA'
        ], {
        A:'minecraft:obsidian',
        B:'thermal_extra:soul_infused_glass',
        C:'enderio:frank_n_zombie',
        D:'thermal_extra:soul_infused_block'
    })

})