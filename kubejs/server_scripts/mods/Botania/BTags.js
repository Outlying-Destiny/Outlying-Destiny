ServerEvents.tags('item', event => {

    //Mushrooms
    event.removeAllTagsFrom(/botania:.+_mushroom/)

    //Metamorphic Stone
    event.removeAll('botania:marimorphosis_convertable')
    event.add('botania:marimorphosis_convertable', 'elementalcraft:purerock')

})