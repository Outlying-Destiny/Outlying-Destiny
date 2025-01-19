ServerEvents.recipes(event => {

    //Decoration Table
    event.remove({id:'sophisticatedstorage:decoration_table'})
    event.shaped('sophisticatedstorage:decoration_table', ['AAA','B B','B B'], {A:'#minecraft:logs',B:'#minecraft:planks'})

})