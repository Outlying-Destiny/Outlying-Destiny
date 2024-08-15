ServerEvents.recipes(event => {

    //Alloy Smelter
    event.remove({ output: /enderio:.+alloy_smelter/})

    //Alloy Smelter Crafts
    event.remove({id: /enderio:alloy_smelting.+ingot/})
    event.remove({id: 'enderio:alloy_smelting/nethercotta'})

    //Silicon
    event.remove({id:'enderio:sag_milling/redstone_ore'})
    event.remove({id:'enderio:sag_milling/clay'})
    event.remove({id:'enderio:sag_milling/sand'})

    //Powdered Materials
    event.remove({id:'enderio:sag_milling/ender_pearl'})
    event.remove({id:'enderio:sag_milling/quartz'})
    event.remove({id:'enderio:sag_milling/quartz_ore'})

    //Yeta Wrench
    event.remove({id:'enderio:yeta_wrench'})

    //electromagnet
    event.remove({id:'enderio:electromagnet'})

    //Conduits and upgrades
    event.remove({output:/enderio.+condui.+/})
    event.remove({output:/enderio.+filte.+/})
    event.remove({id:/enderio:extraction_speed_upgrade.+/})

    //Machines
    event.remove({id:'enderio:drain'})
    event.remove({id:'enderio:stirling_generator'})
    event.remove({id:'enderio:crafter'})
    event.remove({id:'enderio:soul_engine'})

    //XP Juice
    event.remove({id:'enderio:tank_fill/experience_bottle'})
    event.remove({id:'enderio:tank_empty/glass_bottle'})

    function EIOTank(output, input, fluid, fluidamount, isemptying){
        event.custom({"type": "enderio:tank","fluid": {"amount": fluidamount,"fluid": fluid},"input": {"item": input},"is_emptying": isemptying,"output": output})
    }
    EIOTank('minecraft:experience_bottle', 'minecraft:glass_bottle', 'mob_grinding_utils:fluid_xp', 250, false)
    EIOTank('minecraft:glass_bottle', 'minecraft:experience_bottle', 'mob_grinding_utils:fluid_xp', 250, true)
    event.remove({id:'thermal:bottler_xp_juice_bucket'})
})