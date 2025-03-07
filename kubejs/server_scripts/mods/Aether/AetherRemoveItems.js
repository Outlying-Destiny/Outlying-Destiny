ServerEvents.recipes(event => {

    //Iron Ring
    event.remove({id:'aether:iron_ring'})
    
    //Altar Repairing
    event.remove({id:/(aether|lost_aether_content):.+_repairing$/})

})