ServerEvents.recipes(event => {

    //Red Alloy Compound
    event.shapeless('kubejs:red_alloy_compound', ['minecraft:iron_ingot', '4x minecraft:redstone'])
    
    //Purifying Soap
    event.shapeless('kubejs:purifying_soap', ['bloodmagic:plantoil', '#minecraft:small_flowers', 'mekanism:salt', 'minecraft:charcoal', 'minecraft:water_bucket'])
    
    //Purifying Water
    event.custom({
        "type": "lychee:item_inside",
        "post": [
            {
                "type": "place",
                "block": "kubejs:purifying_water"
            }
        ],
        "item_in": [
            {
                "item": "kubejs:purifying_soap"
            }
        ],
        "block_in": {
            "blocks": [
              "minecraft:water"
            ],
            "state": {
                "level": "0"
            }
        },
        "time": 1
    })

    //Purified Gem Block
    event.custom({
        "type": "lychee:item_inside",
        "post": [
            {
                "type": "drop_item",
                "item": "kubejs:purified_block"
            },
            {
                "type": "place",
                "block": "minecraft:air"
            }
        ],
        "item_in": [
            {
                "item": "evilcraft:dark_block"
            }
        ],
        "block_in": {
            "blocks": [
              "kubejs:purifying_water"
            ],
            "state": {
                "level": "0"
            }
        },
        "time": 1
    })

    //Purified Gem Conversion
    event.shapeless('kubejs:purified_block', '4x kubejs:purified_gem')
    event.shapeless('4x kubejs:purified_gem', 'kubejs:purified_block')
    
})