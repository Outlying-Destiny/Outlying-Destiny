ServerEvents.recipes(event => {
    
    //Functions
    function smelter2(output1, outputchance1, output2, outputchance2, input){event.custom({"type": "thermal:smelter","ingredient": {"tag": input},"result": [{"item": output1,"chance": outputchance1},{"item": output2,"chance": outputchance2}]})}
    function smelter3(output1, outputchance1, output2, outputchance2, output3, outputchance3, input){event.custom({"type": "thermal:smelter","ingredient": {"tag": input},"result": [{"item": output1,"chance": outputchance1},{"item": output2,"chance": outputchance2},{"item": output3,"chance": outputchance3}]})}
    function smelterraw(output1, outputchance1, output2, outputchance2, input){event.custom({"type": "thermal:smelter","ingredient": {"tag": input},"result": [{"item": output1,"chance": outputchance1,"locked": true},{"item": output2,"chance": outputchance2}],"energy": 1600})}
    function pulverizer2(output1, outputchance1, output2, outputchance2, input){event.custom({"type": "thermal:pulverizer","ingredient": {"tag": input},"result": [{"item": output1,"chance": outputchance1},{"item": output2,"chance": outputchance2}]})}
    function pulverizer3(output1, outputchance1, output2, outputchance2, output3, outputchance3, input){event.custom({"type": "thermal:pulverizer","ingredient": {"tag": input},"result": [{"item": output1,"chance": outputchance1},{"item": output2,"chance": outputchance2},{"item": output3,"chance": outputchance3}]})}
    function pulverizerraw(output1, outputchance1, output2, outputchance2, input){event.custom({"type": "thermal:pulverizer","ingredient": {"tag": input},"result": [{"item": output1,"chance": outputchance1,"locked": true},{"item": output2,"chance": outputchance2}],"energy": 2000})}
    function catalyst(catalyst, machine, primary, secondary, energy, min, use){event.custom({"type": "thermal:"+machine+"_catalyst","ingredient": {"item": catalyst},"primary_mod": primary,"secondary_mod": secondary,"energy_mod": energy,"min_chance": min,"use_chance": use})}
    function oreprocraw(output1, outputcrushed1, outputmult1, output2, outputcrushed2, outputnugget2, outputmult2, input){
        smelter3(output1, 1*outputmult1, output2, 0.2*outputmult2, "thermal:rich_slag", 0.2, "forge:ores/"+input)
        pulverizer3(outputcrushed1, 2*outputmult1, outputcrushed2, 0.2*outputmult2, "minecraft:gravel", 0.2, "forge:ores/"+input)
        smelterraw(output1, 1.25*outputmult1, outputnugget2, 1*outputmult2, "forge:raw_materials/"+input)
        pulverizerraw(outputcrushed1, 1.5*outputmult1, outputcrushed2, 0.1*outputmult2, "forge:raw_materials/"+input)
    }
    function oreproc3(output1, outputcrushed1, outputmult1, output2, outputcrushed2, outputmult2, input){
        smelter3(output1, 1*outputmult1, output2, 0.2*outputmult2, "thermal:rich_slag", 0.2, "forge:ores/"+input)
        pulverizer3(outputcrushed1, 2*outputmult1, outputcrushed2, 0.2*outputmult2, "minecraft:gravel", 0.2, "forge:ores/"+input)
    }
    function oreproc2(output, outputcrushed, outputmult, input){
        smelter2(output, 1*outputmult, "thermal:rich_slag", 0.2, "forge:ores/"+input)
        pulverizer2(outputcrushed, 2*outputmult, "minecraft:gravel", 0.2, "forge:ores/"+input)
    }

    //Pulverizer Cleaning
    event.remove({id:/therma.+pulverizer.+/})

    //Induction Smelter Cleaning
    event.remove({id: /thermal:machines.+smelter.+tools/})
    event.remove({id: /thermal:machines.+smelter.+armor/})

    //Catalysts
    event.remove({id:/thermal:machines\/smelter\/smelter_catalyst/})
    catalyst('thermal:cinnabar', 'smelter', 2.75, 2.75, 2.5, 0.4, 0.6)
    catalyst('thermal:cinnabar_dust', 'smelter', 2.25, 3.25, 2, 0.55, 0.8)
    catalyst('thermal:rich_slag', 'smelter', 2, 1.75, 1.75, 0.1, 0.6)
    catalyst('minecraft:flint', 'pulverizer', 1.15, 1.5, 1.1, 0.05, 0.2)
    catalyst('thermal:basalz_powder', 'pulverizer', 1.35, 2.25, 1.25, 0.2, 0.4)
    catalyst('kubejs:petrotheum_dust', 'pulverizer', 1.6, 3, 1.4, 0.25, 0.55)

    //Ore Processing
    event.remove({id:/thermal:machines\/smelter\/smelter.+_ore/})
    event.remove({id:/thermal:machines\/smelter\/smelter_raw/})
    event.remove({id:'thermal:machines/smelter/smelter_ancient_debris'})
    oreproc2("minecraft:coal", "mekanism:dust_coal", 1, "coal")
    oreprocraw("minecraft:copper_ingot", "thermal:copper_dust", 1, "minecraft:gold_ingot", "thermal:gold_dust", "minecraft:gold_nugget", 1, "copper")
    oreprocraw("minecraft:iron_ingot", "thermal:iron_dust", 1, "thermal:nickel_ingot", "thermal:nickel_dust", "thermal:nickel_nugget", 1, "iron")
    oreprocraw("minecraft:gold_ingot", "thermal:gold_dust", 1, "minecraft:copper_ingot", "thermal:copper_dust", "thermal:copper_nugget", 1, "gold")
    oreproc3("minecraft:redstone", 'minecraft:redstone', 4.5, "thermal:cinnabar", 'thermal:cinnabar_dust', 1.5, "redstone")
    oreproc3("minecraft:lapis_lazuli", "thermal:lapis_dust", 4.5, "thermal:sulfur", "thermal:sulfur_dust", 2.5, "lapis")
    oreproc3("minecraft:diamond", "thermal:diamond_dust", 1, "minecraft:coal", "mekanism:dust_coal", 1, "diamond")
    oreproc2("minecraft:emerald", "thermal:emerald_dust", 1, "emerald")
    oreproc3("minecraft:quartz", "thermal:quartz_dust", 1, "thermal:sulfur", "thermal:sulfur_dust", 2.5, "quartz")
    oreproc2("minecraft:netherite_scrap", "mekanism:dirty_netherite_scrap", 1, "netherite_scrap")
    oreprocraw("thermal:lead_ingot", "thermal:lead_dust", 1, "thermal:silver_ingot", "thermal:silver_dust", "thermal:silver_nugget", 1, "lead")
    oreprocraw("thermal:silver_ingot", "thermal:silver_dust", 1,"thermal:lead_ingot", "thermal:lead_dust", "thermal:lead_nugget", 1, "silver")
    oreprocraw("thermal:nickel_ingot", "thermal:nickel_dust", 1, "chemlib:platinum_ingot", "chemlib:platinum_dust", "chemlib:platinum_nugget", 2, "nickel")
    oreprocraw("thermal:tin_ingot", "thermal:tin_dust", 1, "minecraft:copper_ingot", "thermal:copper_dust", "thermal:copper_nugget", 1, "tin")
    oreproc2("thermal:sulfur", "thermal:sulfur_dust", 2.5, "sulfur")
    oreproc2("thermal:niter", "thermal:niter_dust", 2.5, "niter")
    oreproc2("thermal:apatite", "thermal:apatite_dust", 3.5, "apatite")
    oreproc2("thermal:cinnabar", "thermal:cinnabar_dust", 1.5, "cinnabar")
    oreprocraw("mekanism:ingot_osmium", "mekanism:dust_osmium", 1, "minecraft:iron_ingot", "thermal:iron_dust", "minecraft:iron_nugget", 1, "osmium")
    oreprocraw("mekanism:ingot_uranium", "mekanism:dust_uranium", 1, "thermal:lead_ingot", "thermal:lead_dust", "thermal:lead_nugget", 1, "uranium")
    oreproc2("mekanism:fluorite_gem", "mekanism:dust_fluorite", 3, "fluorite")
    oreproc3("forbidden_arcanus:arcane_crystal", "forbidden_arcanus:arcane_crystal_dust", 1, "evilcraft:dark_gem", "evilcraft:dark_gem_crushed", 2.5, "arcane_crystal")
    oreproc3("forbidden_arcanus:rune", "forbidden_arcanus:rune", 1, "forbidden_arcanus:arcane_crystal", "forbidden_arcanus:arcane_crystal_dust", 1, "rune")
    oreproc2("evilcraft:dark_gem", "evilcraft:dark_gem_crushed", 2.5, "dark")
    oreproc2("mysticalagriculture:inferium_essence", "mysticalagriculture:inferium_essence", 3, "inferium")
    oreproc3("ae2:certus_quartz_crystal", "ae2:certus_quartz_dust", 3.5, "thermal:niter", "thermal:niter_dust", 2.5, "certus_quartz")
    oreproc2('draconicevolution:draconium_ingot', 'draconicevolution:draconium_dust', 1, 'draconium')
})