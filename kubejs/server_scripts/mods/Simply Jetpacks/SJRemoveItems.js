ServerEvents.recipes(event => {

    //Vanilla
    event.remove({id:/simplyjetpacks:vanilla.+/})

    //Immersive Engineering
    event.remove({id:/simplyjetpacks:ie.+/})

    //Mekanism
    event.remove({id:/simplyjetpacks:mek.+/})

    //Potato
    event.remove({id:'simplyjetpacks:jetpack_potato'})
    
})