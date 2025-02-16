ServerEvents.recipes(event => {

    //x3 and more compressed blocks (config file breaks tags)
    event.remove({id:/compressium:.+_[3-9]/})
})