ServerEvents.recipes(event => {

    //Arcane Crystals
    event.remove({ id: 'forbidden_arcanus:arcane_crystal_block_from_arcane_crystal'})
    event.remove({ id: 'forbidden_arcanus:arcane_crystal_from_arcane_crystal_block'})
    event.shapeless('4x forbidden_arcanus:arcane_crystal', 'forbidden_arcanus:arcane_crystal_block')
    event.shaped(
        'forbidden_arcanus:arcane_crystal_block', [
        'AA ',
        'AA ',
        '   '
        ], {
        A: 'forbidden_arcanus:arcane_crystal'
        }
    )

})