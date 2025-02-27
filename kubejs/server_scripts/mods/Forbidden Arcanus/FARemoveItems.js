ServerEvents.recipes(event => {

    //Arcane Bone Meal / Magical Farmland
    event.remove({id:'forbidden_arcanus:arcane_bone_meal'})

    //Clibano Recipes
    event.remove({id:/forbidden_arcanus:clibano_combustion/})

    //Golden Orchid
    event.remove({id:'forbidden_arcanus:golden_orchid_seeds'})

    //Arane Crystal Dust Speck (From removed Nipa)
    event.remove({id:'forbidden_arcanus:arcane_crystal_dust'})
})