ServerEvents.recipes(event => {

    //Function Metal Press
    function metalpress(output, outputcount, input, energy) {
        event.custom({"type":"immersiveengineering:metal_press","energy":energy/2,"input":{"item":input},"mold":"immersiveengineering:mold_rod","result":{"base_ingredient":{"item":output},"count":outputcount}})
    }
    
    //Function Lathe
    function lathe(output, outputcount, input, energy){
        event.custom({
          "type": "thermal:sawmill",
          "ingredient": {
            "item": input
          },
          "result": [
            {
              "item": output,
              "count": outputcount
            }
          ],
          "energy": energy
        })
    }

    //Function Crafting Table Rods
    function rod(output, input) {
        event.shaped(output, [
            'A  ',
            'A  ',
            '   '
            ], {
            A: input
            }
        )
    }

    //Function All Rods
    function allrods(output, outputcount, input, energy) {
        metalpress(output, outputcount, input, energy)
        lathe(output, outputcount, input, energy)
        rod(output, input)
    } 

    //Remove Rods Crafts
    event.remove({id:/immersiveengineering:crafting.+stick.+/})
    event.remove({id:/immersiveengineering:metalpress.+rod.+/})
    event.remove({id:/ad_astra:.+rod/})
    event.remove({id:/thermal_extra:(machine\/press|crafting)\/.+_rod/})

    //Rods
    allrods('immersiveengineering:stick_iron', 2, 'minecraft:iron_ingot', 4800)
    allrods('immersiveengineering:stick_steel', 2, 'thermal:steel_ingot', 4800)
    allrods('thermal_extra:invar_rod', 2, 'thermal:invar_ingot', 4800)
    allrods('ad_astra:etrium_rod', 2, 'ad_astra:etrium_ingot', 4800)
    allrods('kubejs:dark_steel_rod', 2, 'enderio:dark_steel_ingot', 4800)
    allrods('kubejs:end_steel_rod', 2, 'enderio:end_steel_ingot', 4800)
    allrods('thermal_extra:signalum_rod', 2, 'thermal:signalum_ingot', 4800)

})