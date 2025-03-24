ItemEvents.modification(event => {

    //Stack Size
    const StackSize = [
        {i:'minecraft:ender_pearl', n:64},
        {i:'aether:skyroot_poison_bucket', n:16},
        {i:'aether:skyroot_remedy_bucket', n:16},
        {i:'immersiveengineering:logic_circuit', n:64},
        {i:'minecraft:snowball', n:64}
    ]
  
    StackSize.forEach((StackSize) => {
        event.modify(StackSize.i, item => {item.maxStackSize = StackSize.n})
    })

    //Durability
    const Durability = [
        {i:'botania:manasteel_shears', n:1428},
        {i:'botania:elementium_shears', n:1904}
    ]

    Durability.forEach((Durability) => {
        event.modify(Durability.i, item => {item.maxDamage = Durability.n})
    })

    //Burn Time
    const BurnTime = [
        {i:'evilcraft:dark_gem_crushed', n:400}
    ]

    BurnTime.forEach((BurnTime) => {
        event.modify(BurnTime.i, item => {item.burnTime = BurnTime.n})
    })

    //Fire Resistant
    const FireResistant = [
        {i:'minecraft:gold_nugget'},
        {i:'minecraft:gold_ingot'},
        {i:'minecraft:gold_block'}
    ]
  
    FireResistant.forEach((FireResistant) => {
        event.modify(FireResistant.i, item => {item.fireResistant = true})
    })
})