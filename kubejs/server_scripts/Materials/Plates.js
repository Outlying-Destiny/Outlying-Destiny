ServerEvents.recipes(event => {

    //Function Metal Press
    function metalpress(output, input, count, energy, type) {
        event.custom({"type":"immersiveengineering:metal_press","energy":energy/2,"input":{"base_ingredient":{"item":input},"count":count},"mold":"immersiveengineering:mold_"+type,"result":{"item":output}})
    }

    //Function Multiservo Press
    function multiservo(output, input, count, energy, type) {
        event.custom({
            "type": "thermal:press",
            "ingredients": [
              {
                "item": input,
                "count": count
              },
              {
                "item": "thermal:press_"+type+"_die"
              }
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
    function allpress(output, input, count, energy, type) {
        metalpress(output, input, count, energy, type)
        multiservo(output, input, count, energy, type)
    }
    
    //Remove Plates Crafts
    event.remove({id:/thermal.+machine.+plate/})
    event.remove({id:/thermal:compat.+plate/})
    event.remove({id:/immersiveengineering:metalpress.+plate.+/})
    event.remove({id:/ad_astra:compressing.+plate.+/})
    event.remove({id:'extendedcrafting:black_iron_slate'})


    //Plates
    allpress('thermal:tin_plate', 'thermal:tin_ingot', 1, 4800, 'plate')
    allpress('thermal:lead_plate', 'thermal:lead_ingot', 1, 4800, 'plate')
    allpress('thermal:silver_plate', 'thermal:silver_ingot', 1, 4800, 'plate')
    allpress('thermal:nickel_plate', 'thermal:nickel_ingot', 1, 4800, 'plate')
    allpress('thermal:bronze_plate', 'thermal:bronze_ingot', 1, 4800, 'plate')
    allpress('thermal:electrum_plate', 'thermal:electrum_ingot', 1, 4800, 'plate')
    allpress('thermal:invar_plate', 'thermal:invar_ingot', 1, 4800, 'plate')
    allpress('thermal:constantan_plate', 'thermal:constantan_ingot', 1, 4800, 'plate')
    allpress('thermal:steel_plate', 'thermal:steel_ingot', 1, 4800, 'plate')
    allpress('thermal:rose_gold_plate', 'thermal:rose_gold_ingot', 1, 4800, 'plate')
    allpress('thermal:iron_plate', 'minecraft:iron_ingot', 1, 4800, 'plate')
    allpress('thermal:gold_plate', 'minecraft:gold_ingot', 1, 4800, 'plate')
    allpress('thermal:copper_plate', 'minecraft:copper_ingot', 1, 4800, 'plate')
    allpress('thermal:netherite_plate', 'minecraft:netherite_ingot', 1, 4800, 'plate')
    allpress('thermal:signalum_plate', 'thermal:signalum_ingot', 1, 4800, 'plate')
    allpress('thermal:lumium_plate', 'thermal:lumium_ingot', 1, 4800, 'plate')
    allpress('thermal:enderium_plate', 'thermal:enderium_ingot', 1, 4800, 'plate')
    allpress('immersiveengineering:plate_uranium', 'mekanism:ingot_uranium', 1, 4800, 'plate')
    allpress('ad_astra:etrium_plate', 'ad_astra:etrium_ingot', 1, 4800, 'plate')
    allpress('ad_astra:desh_plate', 'ad_astra:desh_ingot', 1, 4800, 'plate')
    allpress('ad_astra:ostrum_plate', 'ad_astra:ostrum_ingot', 1, 4800, 'plate')
    allpress('ad_astra:calorite_plate', 'ad_astra:calorite_ingot', 1, 4800, 'plate')
    allpress('thermalendergy:prismalium_plate', 'thermalendergy:prismalium_ingot', 1, 4800, 'plate')
    allpress('thermalendergy:melodium_plate', 'thermalendergy:melodium_ingot', 1, 4800, 'plate')
    allpress('thermalendergy:stellarium_plate', 'thermalendergy:stellarium_ingot', 1, 4800, 'plate')
    allpress('thermal_extra:soul_infused_plate', 'thermal_extra:soul_infused_ingot', 1, 4800, 'plate')
    allpress('thermal_extra:shellite_plate', 'thermal_extra:shellite_ingot', 1, 4800, 'plate')
    allpress('thermal_extra:twinite_plate', 'thermal_extra:twinite_ingot', 1, 4800, 'plate')
    allpress('thermal_extra:dragonsteel_plate', 'thermal_extra:dragonsteel_ingot', 1, 4800, 'plate')
    allpress('extendedcrafting:black_iron_slate', 'extendedcrafting:black_iron_ingot', 1, 4800, 'plate')
})