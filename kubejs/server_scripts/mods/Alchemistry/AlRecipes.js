ServerEvents.recipes(event => {

    //Functions
    function compactor(output, input, inputcount){event.custom({"type": "alchemistry:compactor","group": "alchemistry:compactor","input": {"count": inputcount,"ingredient": {"item": input}},"result": {"item": output}})}

    //Cinnabar Unification Fix
    event.remove({id:'alchemistry:dissolver/mercury_sulfide_dust'})
    event.remove({id:'alchemistry:combiner/mercury_sulfide_dust'})
    event.remove({id:'alchemistry:compactor/mercury_sulfide_dust'})

    //Lithium Unification
    event.remove({id:/chemlib:lithium_ingot_from_(smelt|blast)ing_lithium_dust/})
    event.remove({id:'alchemistry:compactor/lithium_dust'})
    event.smelting('chemlib:lithium_ingot', 'mekanism:dust_lithium')
    event.blasting('chemlib:lithium_ingot', 'mekanism:dust_lithium')
    compactor('mekanism:dust_lithium', 'chemlib:lithium', 16)
    
})