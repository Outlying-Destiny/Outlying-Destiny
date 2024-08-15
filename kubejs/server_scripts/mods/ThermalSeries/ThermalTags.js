ServerEvents.tags('item', event => {

    //Sawdust
    event.removeAllTagsFrom('thermal:sawdust')

    //Shellite Plate
    event.add('forge:plates', ['thermal_extra:shellite_plate', 'thermalendergy:prismalium_plate', 'thermalendergy:melodium_plate', 'thermalendergy:stellarium_plate'])

})