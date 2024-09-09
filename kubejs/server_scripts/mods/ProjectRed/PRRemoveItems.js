ServerEvents.recipes(event => {

    //Backpack
    event.remove({output:/projectred_exploration:.+backpack/})

    //Athame
    event.remove({id:'projectred_exploration:athame'})

})