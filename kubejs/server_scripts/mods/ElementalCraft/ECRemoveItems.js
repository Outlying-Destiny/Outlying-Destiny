ServerEvents.recipes(event => {

    //Purifier
    event.remove({output:'elementalcraft:purifier'})
    event.remove({id:/elementalcraft:.+_to_pure_ore/})

    //Inert Crystal Ore
    event.remove({id:'elementalcraft:inert_crystal'})
    event.remove({id:'elementalcraft:inertcrystal_from_blasting'})
    event.remove({id:'elementalcraft:grinding/inert_crystal'})

    //Water / Air Mill Grindstone
    event.remove({id:/elementalcraft:(water|air)_mill_grindstone/})
    event.remove({id:/elementalcraft:grinding/})

})