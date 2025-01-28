ServerEvents.tags('item', event => {

    //(Enhanced) Redstone Ingot
    event.removeAllTagsFrom(/extendedcrafting:(enhanced_){0,1}redstone_(ingot|nugget)/)

    //Black Iron Plate
    event.add('forge:plates', 'extendedcrafting:black_iron_slate')
    event.add('forge:plates/black_iron', 'extendedcrafting:black_iron_slate')
})