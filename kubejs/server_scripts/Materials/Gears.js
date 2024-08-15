ServerEvents.recipes(event => {

    //Function Metal Press
    function metalpress(output, input, count, energy) {
        event.custom({"type":"immersiveengineering:metal_press","energy":energy/2,"input":{"base_ingredient":{"item":input},"count":count},"mold":"immersiveengineering:mold_gear","result":{"item":output}})
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
              {
                "item": "thermal:press_gear_die"
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
    function allpress(output, input, count, energy) {
        metalpress(output, input, count, energy)
        multiservo(output, input, count, energy)
    }
    
    //Remove Gears Crafts
    event.remove({id:/thermal.+parts.+gear/})
    event.remove({id:/thermal.+machine.+gear/})
    event.remove({id:/thermalendergy:.+gear/})
    event.remove({id:/immersiveengineering:metalpress.+gear.+/})
    event.remove({id:/industrialforegoing:.+_gear/})
    event.remove({id:'enderio:iron_gear'})

    //Gears
    allpress('thermal:tin_gear', 'thermal:tin_ingot', 4, 9600)
    allpress('thermal:lead_gear', 'thermal:lead_ingot', 4, 9600)
    allpress('thermal:silver_gear', 'thermal:silver_ingot', 4, 9600)
    allpress('thermal:nickel_gear', 'thermal:nickel_ingot', 4, 9600)
    allpress('thermal:bronze_gear', 'thermal:bronze_ingot', 4, 9600)
    allpress('thermal:electrum_gear', 'thermal:electrum_ingot', 4, 9600)
    allpress('thermal:invar_gear', 'thermal:invar_ingot', 4, 9600)
    allpress('thermal:constantan_gear', 'thermal:constantan_ingot', 4, 9600)
    allpress('thermal:ruby_gear', 'thermal:ruby', 4, 9600)
    allpress('thermal:sapphire_gear', 'thermal:sapphire', 4, 9600)
    allpress('thermal:steel_gear', 'thermal:steel_ingot', 4, 9600)
    allpress('thermal:rose_gold_gear', 'thermal:rose_gold_ingot', 4, 9600)
    allpress('thermal:iron_gear', 'minecraft:iron_ingot', 4, 9600)
    allpress('thermal:gold_gear', 'minecraft:gold_ingot', 4, 9600)
    allpress('thermal:copper_gear', 'minecraft:copper_ingot', 4, 9600)
    allpress('thermal:netherite_gear', 'minecraft:netherite_ingot', 4, 9600)
    allpress('thermal:signalum_gear', 'thermal:signalum_ingot', 4, 9600)
    allpress('thermal:lumium_gear', 'thermal:lumium_ingot', 4, 9600)
    allpress('thermal:enderium_gear', 'thermal:enderium_ingot', 4, 9600)
    allpress('thermal:lapis_gear', 'minecraft:lapis_lazuli', 4, 9600)
    allpress('thermal:diamond_gear', 'minecraft:diamond', 4, 9600)
    allpress('thermal:emerald_gear', 'minecraft:emerald', 4, 9600)
    allpress('thermal:quartz_gear', 'minecraft:quartz', 4, 9600)
    allpress('pneumaticcraft:compressed_iron_gear', 'pneumaticcraft:ingot_iron_compressed', 4, 9600)
    allpress('thermalendergy:prismalium_gear', 'thermalendergy:prismalium_ingot', 4, 9600)
    allpress('thermalendergy:melodium_gear', 'thermalendergy:melodium_ingot', 4, 9600)
    allpress('thermalendergy:stellarium_gear', 'thermalendergy:stellarium_ingot', 4, 9600)
    allpress('thermal_extra:soul_infused_gear', 'thermal_extra:soul_infused_ingot', 4, 9600)
    allpress('thermal_extra:shellite_gear', 'thermal_extra:shellite_ingot', 4, 9600)
    allpress('thermal_extra:twinite_gear', 'thermal_extra:twinite_ingot', 4, 9600)
    allpress('thermal_extra:dragonsteel_gear', 'thermal_extra:dragonsteel_ingot', 4, 9600)
    allpress('kubejs:energized_steel_gear', 'powah:steel_energized', 4, 9600)
    //allpress('kubejs:red_gear', 'projectred_core:red_ingot', 4, 9600)
})