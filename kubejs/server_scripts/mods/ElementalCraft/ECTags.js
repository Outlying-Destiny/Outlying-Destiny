ServerEvents.tags('item', event => {

    //Inert Crystal Ores
    event.removeAllTagsFrom(['elementalcraft:inert_crystal_ore', 'elementalcraft:deepslate_inert_crystal_ore'])

    //Pure Ores Tag
    event.removeAll('elementalcraft:pure_ores/sources/ores')

})