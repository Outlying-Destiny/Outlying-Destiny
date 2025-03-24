ServerEvents.tags('item', event => {

    //Portal Activator
    event.removeAll('twilightforest:portal/activator')
    event.add('twilightforest:portal/activator', 'kubejs:token_twilight')

    //Uncrafting
    event.removeAll('twilightforest:uncrafting_ignores_cost')

    //Logs
    function logtagadd(log, oldtag){event.add('twilightforest:'+log+'_logs', '#twilightforest:'+oldtag+'_logs')}
    
    logtagadd('dark', 'darkwood')
    logtagadd('time', 'timewood')
    logtagadd('transformation', 'transwood')
    logtagadd('sorting', 'sortwood')

})