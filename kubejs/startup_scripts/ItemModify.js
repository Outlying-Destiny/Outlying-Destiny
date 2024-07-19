ItemEvents.modification(event => {

    event.modify('minecraft:ender_pearl', item => {
        item.maxStackSize = 64
    })
    event.modify('aether:skyroot_poison_bucket', item => {
        item.maxStackSize = 16
    })
    event.modify('aether:skyroot_remedy_bucket', item => {
        item.maxStackSize = 16
    })

})