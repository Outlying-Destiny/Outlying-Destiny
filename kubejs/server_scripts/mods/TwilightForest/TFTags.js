ServerEvents.tags('item', event => {

    //Portal Activator
    event.removeAll('twilightforest:portal/activator')
    event.add('twilightforest:portal/activator', 'kubejs:token_twilight')

})