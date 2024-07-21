ServerEvents.recipes(event => {

    const aethermaterials = [
        {
            item: 'neptune',
            ingotid: 'kubejs:neptune_ingot',
            blockid: 'kubejs:neptune_block'
        },
        {
            item: 'valkyrie',
            ingotid: 'kubejs:valkyrie_ingot',
            blockid: 'kubejs:valkyrie_block'
        },
        {
            item: 'phoenix',
            ingotid: 'kubejs:phoenix_ingot',
            blockid: 'kubejs:phoenix_block'
        }
    ]

    aethermaterials.forEach((material) => {
        event.shaped(
            'aether:'+material.item+'_chestplate', [
            'A A',
            'AAA',
            'AAA'
            ], {
            A: material.ingotid
            }
        )
        event.shaped(
            'aether:'+material.item+'_leggings', [
            'AAA',
            'A A',
            'A A'
            ], {
            A: material.ingotid
            }
        )
        event.shaped(
            'aether:'+material.item+'_helmet', [
            'AAA',
            'A A',
            '   '
            ], {
            A: material.ingotid
            }
        )
        event.shaped(
            'aether:'+material.item+'_boots', [
            '   ',
            'A A',
            'A A'
            ], {
            A: material.ingotid
            }
        )
        event.shaped(
            'aether:'+material.item+'_gloves', [
            '   ',
            'A A',
            '   '
            ], {
            A: material.ingotid
            }
        )
        recycling(material.ingotid, 8, 'aether:'+material.item+'_chestplate')
        recycling(material.ingotid, 7, 'aether:'+material.item+'_leggings')
        recycling(material.ingotid, 5, 'aether:'+material.item+'_helmet')
        recycling(material.ingotid, 4, 'aether:'+material.item+'_boots')
        recycling(material.ingotid, 2, 'aether:'+material.item+'_gloves')
    })

    event.shaped(
        'aether:valkyrie_cape', [
        'AA ',
        'AA ',
        'AA '
        ], {
        A: 'kubejs:valkyrie_ingot'
        }
    )
    event.shaped(
        'lost_aether_content:phoenix_cape', [
        'AA ',
        'AA ',
        'AA '
        ], {
        A: 'kubejs:phoenix_ingot'
        }
    )
    //event.shaped(
    //    'aether:valkyrie_lance', [
    //    'A  ',
    //    ' A ',
    //    '  B'
    //    ], {
    //    A: 'kubejs:valkyrie_ingot',
    //    B: '#forge:rods/wooden'
    //    }
    //)
    event.shaped(
        'aether:valkyrie_shovel', [
        ' A ',
        ' B ',
        ' B '
        ], {
        A: 'kubejs:valkyrie_ingot',
        B: '#forge:rods/wooden'
        }
    )
    event.shaped(
        'aether:valkyrie_pickaxe', [
        'AAA',
        ' B ',
        ' B '
        ], {
        A: 'kubejs:valkyrie_ingot',
        B: '#forge:rods/wooden'
        }
    )
    event.shaped(
        'aether:valkyrie_axe', [
        'AA ',
        'AB ',
        ' B '
        ], {
        A: 'kubejs:valkyrie_ingot',
        B: '#forge:rods/wooden'
        }
    )
    event.shaped(
        'aether:valkyrie_hoe', [
        'AA ',
        ' B ',
        ' B '
        ], {
        A: 'kubejs:valkyrie_ingot',
        B: '#forge:rods/wooden'
        }
    )
    event.shaped(
        'lost_aether_content:phoenix_sword', [
        ' A ',
        ' A ',
        ' B '
        ], {
        A: 'kubejs:phoenix_ingot',
        B: '#forge:rods/wooden'
        }
    )
    event.shaped(
        'lost_aether_content:phoenix_shovel', [
        ' A ',
        ' B ',
        ' B '
        ], {
        A: 'kubejs:phoenix_ingot',
        B: '#forge:rods/wooden'
        }
    )
    event.shaped(
        'lost_aether_content:phoenix_pickaxe', [
        'AAA',
        ' B ',
        ' B '
        ], {
        A: 'kubejs:phoenix_ingot',
        B: '#forge:rods/wooden'
        }
    )
    event.shaped(
        'lost_aether_content:phoenix_axe', [
        'AA ',
        'AB ',
        ' B '
        ], {
        A: 'kubejs:phoenix_ingot',
        B: '#forge:rods/wooden'
        }
    )
    event.shaped(
        'lost_aether_content:phoenix_hoe', [
        'AA ',
        ' B ',
        ' B '
        ], {
        A: 'kubejs:phoenix_ingot',
        B: '#forge:rods/wooden'
        }
    )
    event.shaped(
        'aether:phoenix_bow', [
        ' AB',
        'A B',
        ' AB'
        ], {
        A: 'kubejs:phoenix_ingot',
        B: 'evilcraft:golden_string'
        }
    )

    //Function Arc Furnace Recycling
    function recycling(output, outputcount, input){
        event.custom({"type":"immersiveengineering:arc_furnace",
            "additives":[],
            "energy":51200,
            "input":{"item":input},
            "results":[{"base_ingredient":{"item":output},"count":outputcount}],
            "time":100})
    }

    //Recycling
    recycling('kubejs:valkyrie_ingot', 6, 'aether:valkyrie_cape')
    //recycling('kubejs:valkyrie_ingot', 2, 'aether:valkyrie_lance')
    recycling('kubejs:valkyrie_ingot', 1, 'aether:valkyrie_shovel')
    recycling('kubejs:valkyrie_ingot', 3, 'aether:valkyrie_pickaxe')
    recycling('kubejs:valkyrie_ingot', 3, 'aether:valkyrie_axe')
    recycling('kubejs:valkyrie_ingot', 2, 'aether:valkyrie_hoe')
    recycling('kubejs:phoenix_ingot', 3, 'aether:phoenix_bow')
    recycling('kubejs:phoenix_ingot', 6, 'lost_aether_content:phoenix_cape')
    recycling('kubejs:phoenix_ingot', 2, 'lost_aether_content:phoenix_sword')
    recycling('kubejs:phoenix_ingot', 1, 'lost_aether_content:phoenix_shovel')
    recycling('kubejs:phoenix_ingot', 3, 'lost_aether_content:phoenix_pickaxe')
    recycling('kubejs:phoenix_ingot', 3, 'lost_aether_content:phoenix_axe')
    recycling('kubejs:phoenix_ingot', 2, 'lost_aether_content:phoenix_hoe')

    //Altar
    event.remove({id:'aether:altar'})
    event.shaped(
        'aether:altar', [
        'AAA',
        'ACA',
        'BBB'
        ], {
        A: 'aether:skyroot_planks',
        B: 'aether:holystone',
        C: 'aether:ambrosium_block'
        }
    )

    //Catalyst
    event.remove({id:'undergarden:catalyst'})
    event.custom({   
        "type":"immersiveengineering:arc_furnace",
            "additives":[{"base_ingredient":{"item":'aether:zanite_gemstone'},"count":16}, {"base_ingredient":{"item":'aether:aechor_petal'},"count":4}, {"base_ingredient":{"item":'aether:skyroot_poison_bucket'},"count":2}],
            "energy":204800,
            "input":{"base_ingredient":{"item":'aether:enchanted_gravitite'},
                "count":1},
            "results":[{"base_ingredient":{"item":'kubejs:base_core'},
                "count":1}],
            "time":200
    })
    event.custom({   
        "type":"immersiveengineering:arc_furnace",
            "additives":[{"base_ingredient":{"item":'aether:golden_amber'},"count":24}, {"base_ingredient":{"item":'aether:enchanted_berry'},"count":8}, {"base_ingredient":{"item":'aether:golden_aercloud'},"count":4}, {"base_ingredient":{"item":'aether:skyroot_remedy_bucket'},"count":2}],
            "energy":307200,
            "input":{"base_ingredient":{"item":'kubejs:base_core'},
                "count":1},
            "results":[{"base_ingredient":{"item":'kubejs:enchanted_core'},
                "count":1}],
            "time":300
    })
    event.custom({   
        "type":"immersiveengineering:arc_furnace",
            "additives":[{"base_ingredient":{"item":'kubejs:neptune_ingot'},"count":4}, {"base_ingredient":{"item":'aether:blue_aercloud'},"count":4}, {"base_ingredient":{"item":'aether:crystal_leaves'},"count":4}, {"base_ingredient":{"item":'aether:aerogel'},"count":4}],
            "energy":409600,
            "input":{"base_ingredient":{"item":'kubejs:enchanted_core'},
                "count":1},
            "results":[{"base_ingredient":{"item":'kubejs:frozen_core'},
                "count":1}],
            "time":400
    })
    event.custom({   
        "type":"immersiveengineering:arc_furnace",
            "additives":[{"base_ingredient":{"item":'kubejs:valkyrie_ingot'},"count":4}, {"base_ingredient":{"item":'kubejs:phoenix_ingot'},"count":4}],
            "energy":2457600,
            "input":{"base_ingredient":{"item":'kubejs:frozen_core'},
                "count":1},
            "results":[{"base_ingredient":{"item":'undergarden:catalyst'},
                "count":1}],
            "time":600
    })    

})