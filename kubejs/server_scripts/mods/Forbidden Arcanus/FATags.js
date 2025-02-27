ServerEvents.tags('item', event => {

    //Ores
    event.add('forge:ores/arcane_crystal', '#forbidden_arcanus:arcane_crystal_ores')
    event.add('forge:ores/rune', '#forbidden_arcanus:runic_stones')
    event.add('forge:ores', ['#forbidden_arcanus:arcane_crystal_ores', '#forbidden_arcanus:runic_stones'])
})

ServerEvents.tags('block', event => {

    //Ores
    event.add('forge:ores/arcane_crystal', '#forbidden_arcanus:arcane_crystal_ores')
    event.add('forge:ores/rune', '#forbidden_arcanus:runic_stones')
    event.add('forge:ores', ['#forbidden_arcanus:arcane_crystal_ores', '#forbidden_arcanus:runic_stones'])
})