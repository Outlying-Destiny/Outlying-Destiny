ServerEvents.recipes(event => {

    //Dirty Glass
    event.remove({id:'quark:tweaks/crafting/dirty_glass'})
    event.shapeless('quark:dirty_glass', ['#c:glass_blocks', '#minecraft:dirt'])

    //Gold Bars
    event.remove({id:'quark:building/crafting/gold_bars'})
    event.shaped('8x quark:gold_bars', ['   ','AAA','AAA'], {A:'thermal_extra:gold_rod'})

})