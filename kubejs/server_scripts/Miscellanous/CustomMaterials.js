ServerEvents.recipes(event => {

    const custommaterials = [
        {item:'kubejs:neptune'},
        {item:'kubejs:valkyrie'},
        {item:'kubejs:phoenix'},
        {item:'kubejs:demon'},
        {item:'kubejs:enchanted'},
        {item:'kubejs:evil_infused'},
        {item:'kubejs:crystalline_alloy'},
        {item:'kubejs:crystalline_pink_slime'},
        {item:'kubejs:dark_soularium'}
    ]

    custommaterials.forEach((mat) => {
        event.shapeless(mat.item+'_block', '9x '+mat.item+'_ingot')
        event.shapeless('9x '+mat.item+'_ingot', mat.item+'_block')
    })
})