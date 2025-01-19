ServerEvents.recipes(event => {

    //Electrotine Generator
    event.remove({id:'projectred_core:electrotine_generator'})

    //Timer (for being the world's laggiest block in the game)
    event.remove({id:'projectred_integration:timer_gate'})

    //Unused Stuff
    event.remove({id:'projectred_core:draw_plate'})
    event.remove({id:/projectred_core:(copper|iron|gold)_coil/})
    event.remove({id:'projectred_core:motor'})
})