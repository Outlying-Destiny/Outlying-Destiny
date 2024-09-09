ServerEvents.recipes(event => {

    //Deepslate Quartz Ore
    event.smelting('minecraft:quartz', '#forge:ores/quartz').xp(0.2)
    event.blasting('minecraft:quartz', '#forge:ores/quartz').xp(0.2)
    event.remove({id:'mekanism:processing/quartz/to_ore'})
    event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"item":"minecraft:netherrack"}},"mainInput":{"amount":8,"ingredient":{"tag":"forge:dusts/quartz"}},"output":{"item":"minecraft:nether_quartz_ore"}})
    event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"item":"minecraft:deepslate"}},"mainInput":{"amount":8,"ingredient":{"tag":"forge:dusts/quartz"}},"output":{"item":"kubejs:deepslate_quartz_ore"}})
    event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"item":"minecraft:cobblestone"}},"mainInput":{"amount":8,"ingredient":{"tag":"forge:dusts/quartz"}},"output":{"item":"kubejs:quartz_ore"}})
    event.remove({id:'mekanism:processing/quartz/from_ore'})
    event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:ores/quartz"}},"output":{"count":2,"item":"minecraft:quartz"}})

    //Deepslate Certus Quartz Ore
    event.smelting('ae2:certus_quartz_crystal', '#forge:ores/certus_quartz').xp(0.2)
    event.blasting('ae2:certus_quartz_crystal', '#forge:ores/certus_quartz').xp(0.2)
    event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"item":"minecraft:deepslate"}},"mainInput":{"amount":8,"ingredient":{"tag":"forge:gems/certus_quartz"}},"output":{"item":"kubejs:deepslate_certus_quartz_ore"}})
    event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"item":"minecraft:cobblestone"}},"mainInput":{"amount":8,"ingredient":{"tag":"forge:gems/certus_quartz"}},"output":{"item":"kubejs:certus_quartz_ore"}})
    event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:ores/certus_quartz"}},"output":{"count":2,"item":"ae2:certus_quartz_crystal"}})
    event.custom({"type": "thermal:pulverizer","ingredient": {"tag": "forge:ores/certus_quartz"},"result": [{"item": "ae2:certus_quartz_dust","chance": 2.5},{"item": "thermal:sulfur","chance": 0.25}],"experience": 0.5})
    event.custom({"type": "thermal:smelter","ingredient": {"tag": "forge:ores/certus_quartz"},"result": [{"item": "ae2:certus_quartz_crystal","chance": 1.5},{"item": "thermal:sulfur","chance": 0.5},{"item": "thermal:rich_slag","chance": 0.15}],"experience": 0.5})

})