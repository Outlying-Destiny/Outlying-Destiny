ServerEvents.recipes(event => {

    //Function Igneous Extruder
    function igneous(output, adjacent, below) {
        event.custom({
            type: 'thermal:rock_gen',
            adjacent: adjacent,
            below: below,
            result: {
                item: output
            }
        })
    }
    
    //Netherrack
    igneous('minecraft:netherrack', 'minecraft:water', 'minecraft:obsidian')

})