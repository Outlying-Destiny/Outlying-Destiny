ServerEvents.recipes(event => {

    //Heavy Stone Bricks
    event.remove({id:'architects_palette:heavy_stone_bricks'})
    event.shaped('4x architects_palette:heavy_stone_bricks', [
        'A A',
        '   ',
        'A A'
        ], {
        A:'minecraft:stone'
    })
})