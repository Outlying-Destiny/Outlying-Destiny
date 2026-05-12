ServerEvents.recipes(event => {

    //Ender Core
    event.shaped('kubejs:ender_core', ['ABA','BCB','ABA'], {A: 'thermal:enderium_block',B: 'undergarden:forgotten_nugget',C:'undergarden:virulent_mix_bucket'})

    //Catalyst smelting
    event.remove({id:/undergarden:(smelt|blast)_catalyst/})

    //Chest Boats
    const undergardenchestBoat = [['smogstem'], ['wigglewood'], ['grongle']]
    undergardenchestBoat.forEach((wood) => {
        event.shaped('undergarden:'+wood+'_chest_boat', ['ABA','AAA','   '], {A: 'undergarden:'+wood+'_planks', B:'#forge:chests/wooden'})
    })

})