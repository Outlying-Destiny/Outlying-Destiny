ServerEvents.recipes(event => {

    //Remove Ancient Sand to Glass Recipe (added smelt tag instead)
    event.remove({id:'yungscavebiomes:glass_from_ancient_sand'})
})