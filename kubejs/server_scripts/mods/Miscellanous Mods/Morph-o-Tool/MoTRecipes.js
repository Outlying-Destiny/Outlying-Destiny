ServerEvents.recipes((event) => {

    //Morph-O-Tool
    event.remove({id:'morphtool:tool'})
    event.shaped('morphtool:tool', [' AB',' CD','C  '], {A:'#forge:dyes/green',B:'#forge:dyes/blue',C:'immersiveengineering:stick_steel',D:'#forge:dyes/red'})

})