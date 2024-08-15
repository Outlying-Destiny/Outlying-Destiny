ServerEvents.recipes(event => {

    //Function Metal Press
    function metalpress(output, input, count, energy) {
        event.custom({"type":"immersiveengineering:metal_press","energy":energy/2,"input":{"base_ingredient":{"item":input},"count":count},"mold":"immersiveengineering:mold_plate","result":{"item":output}})
    }

    //Function Multiservo Press
    function multiservo(output, input, count, energy) {
        event.custom({
            "type": "thermal:press",
            "ingredients": [
              {
                "item": input,
                "count": count
              },
            ],
            "result": [
              {
                "item": output
              }
            ],
            "energy": energy
        })
    }

    //Function All Press
    function allpress(output, input, count, energy) {
        metalpress(output, input, count, energy)
        multiservo(output, input, count, energy)
    }
    
    //Remove Plates Crafts
    event.remove({id:/thermal.+machine.+plate/})
    event.remove({id:/thermal:compat.+plate/})
    event.remove({id:/immersiveengineering:metalpress.+plate.+/})
    event.remove({id:/ad_astra:compressing.+plate.+/})
    event.remove({id:'extendedcrafting:black_iron_slate'})


    //Plates
    allpress('thermal:tin_plate', 'thermal:tin_ingot', 1, 4800)
    allpress('thermal:lead_plate', 'thermal:lead_ingot', 1, 4800)
    allpress('thermal:silver_plate', 'thermal:silver_ingot', 1, 4800)
    allpress('thermal:nickel_plate', 'thermal:nickel_ingot', 1, 4800)
    allpress('thermal:bronze_plate', 'thermal:bronze_ingot', 1, 4800)
    allpress('thermal:electrum_plate', 'thermal:electrum_ingot', 1, 4800)
    allpress('thermal:invar_plate', 'thermal:invar_ingot', 1, 4800)
    allpress('thermal:constantan_plate', 'thermal:constantan_ingot', 1, 4800)
    allpress('thermal:steel_plate', 'thermal:steel_ingot', 1, 4800)
    allpress('thermal:rose_gold_plate', 'thermal:rose_gold_ingot', 1, 4800)
    allpress('thermal:iron_plate', 'minecraft:iron_ingot', 1, 4800)
    allpress('thermal:gold_plate', 'minecraft:gold_ingot', 1, 4800)
    allpress('thermal:copper_plate', 'minecraft:copper_ingot', 1, 4800)
    allpress('thermal:netherite_plate', 'minecraft:netherite_ingot', 1, 4800)
    allpress('thermal:signalum_plate', 'thermal:signalum_ingot', 1, 4800)
    allpress('thermal:lumium_plate', 'thermal:lumium_ingot', 1, 4800)
    allpress('thermal:enderium_plate', 'thermal:enderium_ingot', 1, 4800)
    allpress('immersiveengineering:plate_uranium', 'mekanism:ingot_uranium', 1, 4800)
    allpress('ad_astra:etrium_plate', 'ad_astra:etrium_ingot', 1, 4800)
    allpress('ad_astra:desh_plate', 'ad_astra:desh_ingot', 1, 4800)
    allpress('ad_astra:ostrum_plate', 'ad_astra:ostrum_ingot', 1, 4800)
    allpress('ad_astra:calorite_plate', 'ad_astra:calorite_ingot', 1, 4800)
    allpress('thermalendergy:prismalium_plate', 'thermalendergy:prismalium_ingot', 1, 4800)
    allpress('thermalendergy:melodium_plate', 'thermalendergy:melodium_ingot', 1, 4800)
    allpress('thermalendergy:stellarium_plate', 'thermalendergy:stellarium_ingot', 1, 4800)
    allpress('thermal_extra:soul_infused_plate', 'thermal_extra:soul_infused_ingot', 1, 4800)
    allpress('thermal_extra:shellite_plate', 'thermal_extra:shellite_ingot', 1, 4800)
    allpress('thermal_extra:twinite_plate', 'thermal_extra:twinite_ingot', 1, 4800)
    allpress('thermal_extra:dragonsteel_plate', 'thermal_extra:dragonsteel_ingot', 1, 4800)
    allpress('extendedcrafting:black_iron_slate', 'extendedcrafting:black_iron_ingot', 1, 4800)
})