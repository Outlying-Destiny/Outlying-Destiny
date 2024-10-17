ItemEvents.modification(event => {

    //Stack Size

    const StackSize = [
        {i:'minecraft:enderpearl', n:'64'},
        {i:'aether:skyroot_poison_bucket', n:'16'},
        {i:'aether:skyroot_remedy_bucket', n:'16'},
        {i:'immersiveengineering:logic_circuit', n:'64'},
    ]
  
    StackSize.forEach((StackSize) => {
        event.modify(StackSize.i, item => {item.maxStackSize = StackSize.n})
    })

    //Durability
    const Durability = [
        {i:'botania:manasteel_shears', n:'1428'},
        {i:'botania:elementium_shears', n:'1904'}
    ]

    Durability.forEach((Durability) => {
        event.modify(Durability.i, item => {item.maxDamage = Durability.n})
    })

})