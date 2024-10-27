ServerEvents.recipes(event => {
    
    //Functions
    function smelter2(output1, outputchance1, output2, outputchance2, input){event.custom({"type": "thermal:smelter","ingredient": {"tag": input},"result": [{"item": output1,"chance": outputchance1,"locked": true},{"item": output2,"chance": outputchance2}]})}
    function smelter3(output1, outputchance1, output2, outputchance2, output3, outputchance3, input){event.custom({"type": "thermal:smelter","ingredient": {"tag": input},"result": [{"item": output1,"chance": outputchance1},{"item": output2,"chance": outputchance2},{"item": output3,"chance": outputchance3}]})}
    function pulverizer2(output1, outputchance1, output2, outputchance2, input){event.custom({"type": "thermal:pulverizer","ingredient": {"tag": input},"result": [{"item": output1,"chance": outputchance1},{"item": output2,"chance": outputchance2}]})}
    function pulverizer3(output1, outputchance1, output2, outputchance2, output3, outputchance3, input){event.custom({"type": "thermal:pulverizer","ingredient": {"tag": input},"result": [{"item": output1,"chance": outputchance1},{"item": output2,"chance": outputchance2},{"item": output3,"chance": outputchance3}]})}
    function catalyst(catalyst, machine, primary, secondary, energy, min, use){event.custom({"type": "thermal:"+machine+"_catalyst","ingredient": {"item": catalyst},"primary_mod": primary,"secondary_mod": secondary,"energy_mod": energy,"min_chance": min,"use_chance": use})}
    
    //Catalysts
    event.remove({id:/thermal:machines\/(smelter|pulverizer)\/(smelter|pulverizer)_catalyst.+/})
    catalyst('thermal:cinnabar', 'smelter', 3, 3, 2.5, 0.4, 0.6)
    catalyst('thermal:cinnabar_dust', 'smelter', 2.5, 3.5, 2, 0.55, 0.8)
    catalyst('thermal:rich_slag', 'smelter', 2.5, 2.25, 1.75, 0.1, 0.6)
    catalyst('minecraft:flint', 'pulverizer', 1.1, 1.5, 1.1, 0.05, 0.2)
    catalyst('thermal:basalz_powder', 'pulverizer', 1.25, 2.5, 1, 0.2, 0.5)

    //Pulverizer Cleaning
    event.remove({not:[{id:/therma.+pulverizer.+ore/}, {id:/therma.+pulverizer.+raw.+/}, {id:/therma.+pulverizer.+catalyst+/}], id:/therma.+pulverizer.+/})

    //Induction Smelter Cleaning
    event.remove({id: /thermal:machines.+smelter.+tools/})
    event.remove({id: /thermal:machines.+smelter.+armor/})

    //Nickel Ore into Platinum
    event.remove({id:/thermal:machines\/(pulverizer|smelter)\/(pulverizer|smelter)_(nickel_ore|raw_nickel)/})
    pulverizer3("thermal:nickel_dust", 2, "chemlib:platinum_dust", 0.2, "minecraft:gravel", 0.2, "forge:ores/nickel")
    smelter3("thermal:nickel_ingot", 1, "chemlib:platinum_ingot", 0.4, "thermal:rich_slag", 0.2, "forge:ores/nickel")
    pulverizer2("thermal:nickel_dust", 1.25, "chemlib:platinum_dust", 0.05, "forge:raw_materials/nickel")
    smelter2("thermal:nickel_ingot", 1.5, "chemlib:platinum_nugget", 1, "forge:raw_materials/nickel")

    //Copper Ore fix
    event.remove({id:'thermal:machines/pulverizer/pulverizer_copper_ore'})
    event.remove({id:'thermal:machines/smelter/smelter_copper_ore'})
    pulverizer3("thermal:copper_dust", 2, "thermal:gold_dust", 0.1, "minecraft:gravel", 0.2, "forge:ores/copper")
    smelter3("minecraft:copper_ingot", 1, "minecraft:gold_ingot", 0.2, "thermal:rich_slag", 0.2, "forge:ores/copper")

    //Induction Smelter unboostable cinnabar
    event.remove({id: "thermal:machines/smelter/smelter_redstone_ore"})
    event.remove({id: "thermal:machines/smelter/smelter_gold_ore"})
    event.remove({id: "thermal:machines/smelter/smelter_cinnabar_ore"})
    smelter3("minecraft:redstone", 3.5, "minecraft:quartz", 0.05, "thermal:rich_slag", 0.2, "forge:ores/redstone")
    smelter3("minecraft:gold_ingot", 1, "minecraft:quartz", 0.1, "thermal:rich_slag", 0.2, "forge:ores/gold")

    //Ore Dupe
    smelter3("mekanism:ingot_osmium", 1, "minecraft:iron_ingot", 0.2, "thermal:rich_slag", 0.2, "forge:ores/osmium")
    smelter2("mekanism:ingot_osmium", 1.5, "minecraft:iron_nugget", 1, "forge:raw_materials/osmium")
    pulverizer3("mekanism:dust_osmium", 2, "thermal:iron_dust", 0.2, "minecraft:gravel", 0.2, "forge:ores/osmium")
    pulverizer2("mekanism:dust_osmium", 1.25, "thermal:iron_dust", 0.05, "forge:raw_materials/osmium")
    smelter3("mekanism:ingot_uranium", 1, "thermal:lead_ingot", 0.2, "thermal:rich_slag", 0.2, "forge:ores/uranium")
    smelter2("mekanism:ingot_uranium", 1.5, "thermal:lead_nugget", 1, "forge:raw_materials/uranium")
    pulverizer3("mekanism:dust_uranium", 2, "thermal:lead_dust", 0.2, "minecraft:gravel", 0.2, "forge:ores/uranium")
    pulverizer2("mekanism:dust_uranium", 1.25, "thermal:lead_dust", 0.05, "forge:raw_materials/uranium")
    event.remove({id:'thermal:compat/immersiveengineering/smelter_ie_raw_uranium'})

})