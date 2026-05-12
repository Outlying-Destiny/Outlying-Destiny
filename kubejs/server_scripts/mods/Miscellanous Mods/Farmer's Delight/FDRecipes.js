ServerEvents.recipes(event => {

    //Remove Wood Salvaging
    event.remove({id:/farmersdelight:salvaging\/.+_(chest_boat|furniture)/})

})