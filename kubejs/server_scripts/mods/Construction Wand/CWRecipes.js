ServerEvents.recipes(event => {

    //Diamond Wand
    event.replaceInput(
        { output: 'constructionwand:diamond_wand'},
        'minecraft:diamond',
        'thermal:enderium_ingot'
    )


    //Infinity Wand
    event.replaceInput(
        { output: 'constructionwand:infinity_wand'},
        'minecraft:nether_star',
        'thermal_extra:dragonsteel_ingot'
    )

    //Angel Core
    event.replaceInput(
        { output: 'constructionwand:core_angel'},
        'minecraft:gold_ingot',
        'kubejs:valkyrie_ingot'
    )

    //Destruction Core
    event.remove({id:'constructionwand:core_destruction'})
    event.shaped(
        'constructionwand:core_destruction', [
        ' AB',
        'ACA',
        'BA '
        ], {
        A: '#forge:glass_panes',
        B: 'kubejs:demon_pickaxe',
        C: 'kubejs:demon_block'
        }
    )

})