ServerEvents.recipes(event => {

    event.remove({output:/projectred_exploration:.+backpack/})
    event.remove({id:'projectred_exploration:athame'})
    

})