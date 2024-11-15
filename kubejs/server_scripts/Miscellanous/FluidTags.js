ServerEvents.tags('fluid', event => {

    event.remove('forge:experience', ['cofh_core:experience' ,'sophisticatedcore:xp_still', 'enderio:flowing_xp_juice'])
    event.remove('forge:biodiesel', 'pneumaticcraft:biodiesel')
    event.remove('forge:plantoil', 'pneumaticcraft:vegetable_oil')
    event.remove('forge:ethanol', 'pneumaticcraft:ethanol')
    event.remove('forge:creosote', 'thermal:creosote')
    event.remove('forge:crude_oil', 'thermal:crude_oil')

})