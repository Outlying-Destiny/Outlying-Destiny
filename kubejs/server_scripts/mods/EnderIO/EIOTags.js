ServerEvents.tags('item', event => {

    //Silicon
    event.removeAllTagsFrom('enderio:silicon')

    //Powdered Materials
    event.removeAllTagsFrom('enderio:powdered_ender_pearl')
    event.removeAllTagsFrom('enderio:powdered_cobalt')
    event.removeAllTagsFrom('enderio:powdered_quartz')

    //Enderman Head
    event.add('forge:heads', 'enderio:enderman_head')

    //Dark Bimetal Gear
    event.removeAllTagsFrom('enderio:dark_bimetal_gear')

})