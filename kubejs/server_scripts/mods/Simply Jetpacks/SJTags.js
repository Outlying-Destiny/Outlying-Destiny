ServerEvents.tags('item', event => {

    //Jetpacks
    event.removeAllTagsFrom([/simplyjetpacks:.+(vanilla|ie|mek).+/, 'simplyjetpacks:jetpack_potato'])

})