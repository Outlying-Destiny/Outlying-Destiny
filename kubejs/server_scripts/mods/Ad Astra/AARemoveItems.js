ServerEvents.recipes(event => {

    //Wrench
    event.remove({id:'ad_astra:wrench'})

    //Fluid pipes
    event.remove({id:/ad_astra:.+fluid_pip.+/})

    //Coal Generator
    event.remove({id:'ad_astra:coal_generator'})
})