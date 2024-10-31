ServerEvents.recipes(event => {

    //Diamond Wand
    event.remove({id:'constructionwand:diamond_wand'})
    event.shaped(
        'constructionwand:diamond_wand', [
        ' AA',
        ' BA',
        'B  '
        ], {
        A: 'thermal:enderium_plate',
        B: '#forge:rods/wooden'
        }
    )


    //Infinity Wand
    event.remove({id:'constructionwand:infinity_wand'})
    event.shaped(
        'constructionwand:infinity_wand', [
        ' AA',
        ' BA',
        'B  '
        ], {
        A: 'thermal_extra:dragonsteel_plate',
        B: '#forge:rods/wooden'
        }
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