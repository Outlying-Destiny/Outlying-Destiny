ServerEvents.recipes(event => {

    //Freed Soul
    event.shaped('kubejs:freed_soul', ['AEG','CBC','DFD'], {A: 'kubejs:your_soul',B: 'twilightforest:lamp_of_cinders',C: 'naturesaura:sky_ingot_block',D: 'twilightforest:ironwood_block',E: 'twilightforest:carminite_block',F: 'twilightforest:steeleaf_block',G: 'twilightforest:knightmetal_ingot'})

    //Fix Chests Recipes
    event.remove({id:/twilightforest:wood\/.+_chest$/})
    const twilightchest = [['twilight_oak'], ['canopy'], ['mangrove'], ['dark'], ['time'], ['transformation'], ['mining'], ['sorting']]
    twilightchest.forEach((wood) => {
        event.shaped('twilightforest:'+wood+'_chest', ['AAA','A A','AAA'], {A: 'twilightforest:'+wood+'_planks'})
        event.shaped('4x twilightforest:'+wood+'_chest', ['AAA','A A','AAA'], {A: '#twilightforest:'+wood+'_logs'})
    })


})
