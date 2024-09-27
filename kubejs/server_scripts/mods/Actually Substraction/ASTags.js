ServerEvents.tags('item', event => {

    //Flax Seeds
    event.removeAllTagsFrom('actuallyadditions:flax_seeds')

    //Rice
    event.removeAllTagsFrom(/actuallyadditions:ric.+/)

    //Phantomfaces
    event.add('outlying:phantomfaces', /actuallyadditions:phantom_(item|liqui|energy|redstone)face/)

})