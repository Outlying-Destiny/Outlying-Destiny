ServerEvents.recipes(event => {

    //const custommaterials = []

    const custommaterialsnugget = [
        {item:'neptune'},
        {item:'valkyrie'},
        {item:'phoenix'},
        {item:'crystalline_alloy'},
        {item:'dark_soul_infused'},
        {item:'demon'},
        {item:'enchanted'},
        {item:'evil_infused'},
        {item:'extradimensional_alloy'},
        {item:'automaton'}
    ]

    //custommaterials.forEach((mat) => {
    //    event.shapeless('kubejs:'+mat.item+'_block', '9x kubejs:'+mat.item+'_ingot')
    //    event.shapeless('9x kubejs:'+mat.item+'_ingot', 'kubejs:'+mat.item+'_block')
    //})

    custommaterialsnugget.forEach((mat) => {
        event.shapeless('kubejs:'+mat.item+'_block', '9x kubejs:'+mat.item+'_ingot')
        event.shapeless('9x kubejs:'+mat.item+'_ingot', 'kubejs:'+mat.item+'_block')
        event.shapeless('kubejs:'+mat.item+'_ingot', '9x kubejs:'+mat.item+'_nugget')
        event.shapeless('9x kubejs:'+mat.item+'_nugget', 'kubejs:'+mat.item+'_ingot')
    })
})