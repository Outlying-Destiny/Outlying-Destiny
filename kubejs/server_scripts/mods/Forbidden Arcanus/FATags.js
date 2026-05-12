ServerEvents.tags('item', event => {

    //Ores
    event.removeAllTagsFrom(['forbidden_arcanus:arcane_crystal_ore', 'forbidden_arcanus:deepslate_arcane_crystal_ore', 'forbidden_arcanus:runic_stone', 'forbidden_arcanus:runic_deepslate', 'forbidden_arcanus:runic_darkstone'])
})

ServerEvents.tags('block', event => {

    //Ores
    event.removeAllTagsFrom(['forbidden_arcanus:arcane_crystal_ore', 'forbidden_arcanus:deepslate_arcane_crystal_ore', 'forbidden_arcanus:runic_stone', 'forbidden_arcanus:runic_deepslate', 'forbidden_arcanus:runic_darkstone'])
})