ServerEvents.recipes(event => {

    event.remove({output:/^sophisticatedstorage:limited.+barrel.+/ })
    event.remove({id:'sophisticatedstorage:controller'})
    event.remove({id:/sophisticatedstorage:storag.+/})
    event.remove({id:/minecraft:storage.+from.+/})

    //Fix Log Warnings
    event.remove({id:/sophisticatedstorage:.+_chest_from_quark_.+_chest/})

})