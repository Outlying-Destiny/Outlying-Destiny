ServerEvents.recipes(event => {

    event.remove({ id: /bloodmagic:arc.+fragments.+/})
    event.remove({ id: /bloodmagic:alchemytable.+corrupted/})
    event.remove({ id: /bloodmagic:arc.+gravels.+/})
    event.remove({ id: /bloodmagic:arc.+dustsfrom_gravel.+/})

    //Remove reverse Netherrite
    event.remove({id:'bloodmagic:arc/reversion/netherite_ingot'})

})