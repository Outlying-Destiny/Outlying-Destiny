ServerEvents.recipes(event => {

    //Collector Upgrade
    event.remove({id:'functionalstorage:collector_upgrade'})

    //Ender Drawer
    event.remove({id:'functionalstorage:ender_drawer'})

    //Controller Access Point (trivialize ressource management to the point of boredom)
    event.remove({id:/functionalstorage:(framed_){0,1}controller_extension/})
})