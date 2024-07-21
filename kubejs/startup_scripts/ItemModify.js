ItemEvents.modification(event => {

    //Stack Size
    event.modify('minecraft:ender_pearl', item => {
        item.maxStackSize = 64
    })
    event.modify('aether:skyroot_poison_bucket', item => {
        item.maxStackSize = 16
    })
    event.modify('aether:skyroot_remedy_bucket', item => {
        item.maxStackSize = 16
    })

    //Durability
    event.modify('botania:manasteel_shears', item => {
        item.maxDamage = 1428
      })
    event.modify('botania:elementium_shears', item => {
        item.maxDamage = 1904
      })

})