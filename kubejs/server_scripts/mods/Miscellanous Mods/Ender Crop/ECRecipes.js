ServerEvents.recipes(event => {

    //Ender Crops
    event.remove({id:'endercrop:ender_seeds'})
    event.shaped('endercrop:ender_seeds', [
        ' A ',
        'ABA',
        ' A '
        ], {
        A:'minecraft:ender_pearl',
        B:'#forge:seeds'
    })
})