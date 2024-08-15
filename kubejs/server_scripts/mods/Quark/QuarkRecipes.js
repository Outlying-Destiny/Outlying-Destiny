ServerEvents.recipes(event => {

    //Dirty Glass
    event.remove({id:'quark:tweaks/crafting/dirty_glass'})
    event.shapeless('quark:dirty_glass', ['#c:glass_blocks', '#minecraft:dirt'])

})