ServerEvents.tags('item', event => {

    //Coke
    event.removeAllTagsFrom('immersiveengineering:coal_coke')

    //Sawdust
    event.removeAllTagsFrom('immersiveengineering:dust_wood')

    //Nitrate Dust
    event.removeAllTagsFrom('immersiveengineering:dust_saltpeter')

    //Aluminium
    event.removeAllTagsFrom(/immersiveengineering:(nugget|ingot|storage|dust)_aluminum/)

})