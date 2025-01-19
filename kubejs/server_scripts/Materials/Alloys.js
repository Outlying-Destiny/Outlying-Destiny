ServerEvents.recipes(event => {

    //Function Induction Smelter
    function alloy3(output, outputcount, input1, input1count, input2, input2count, input3, input3count, energy){
      event.custom({"type": "thermal:smelter","ingredients": [{"item": input1,"count": input1count},{"item": input2,"count": input2count},{"item": input3,"count": input3count}],"result": [{"item": output,"count": outputcount}],"energy": energy})
    }

    function alloy2(output, outputcount, input1, input1count, input2, input2count, energy){
      event.custom({"type": "thermal:smelter","ingredients": [{"item": input1,"count": input1count},{"item": input2,"count": input2count}],"result": [{"item": output,"count": outputcount}],"energy": energy})
    }

    function alloy1(output, outputcount, input1, input1count, energy){
      event.custom({"type": "thermal:smelter","ingredients": [{"item": input1,"count": input1count}],"result": [{"item": output,"count": outputcount}],"energy": energy})
    }

    function alloy3tag1(output, outputcount, input1, input1count, input2, input2count, input3, input3count, energy){
      event.custom({"type": "thermal:smelter","ingredients": [{"tag": input1,"count": input1count},{"item": input2,"count": input2count},{"item": input3,"count": input3count}],"result": [{"item": output,"count": outputcount}],"energy": energy})
    }


    function alloy2tag1(output, outputcount, input1, input1count, input2, input2count, energy){
      event.custom({"type": "thermal:smelter","ingredients": [{"tag": input1,"count": input1count},{"item": input2,"count": input2count}],"result": [{"item": output,"count": outputcount}],"energy": energy})
    }
    
    //Alloys Remove
    event.remove({id:/thermal:machines.+smelter.+smelter_alloy_.+/})
    event.remove({id:/thermal:fire_charge.+/})
    event.remove({id:/thermal_extra:.+_glass/})
    event.remove({id:/thermal_extra:machine.+smelter.+ingot/})
    event.remove({id:/thermal:machines.+smelter.+smelter.+dust/})
    event.remove({id:/thermal_extra:machine.+smelter.+dust/})
    event.remove({id:/thermal:compat.+smelter.+dust/})
    event.remove({id:'extendedcrafting:black_iron_ingot'})

    //Alloy Unification
    alloy2('thermal:bronze_ingot', 4, 'thermal:tin_ingot', 1, 'minecraft:copper_ingot', 3, 6000)
    alloy2('thermal:electrum_ingot', 2, 'thermal:silver_ingot', 1, 'minecraft:gold_ingot', 1, 6000)
    alloy2('thermal:constantan_ingot', 2, 'thermal:nickel_ingot', 1, 'minecraft:copper_ingot', 1, 6000)
    alloy2('thermal:invar_ingot', 3, 'thermal:nickel_ingot', 1, 'minecraft:iron_ingot', 2, 6000)
    alloy2('thermal:rose_gold_ingot', 4, 'minecraft:gold_ingot', 1, 'minecraft:copper_ingot', 3, 6000)
    alloy2('thermal:steel_ingot', 1, 'immersiveengineering:dust_coke', 1, 'minecraft:iron_ingot', 1, 4000)

    //Alloys
    alloy3('thermal:lumium_ingot', 1, 'thermal:tin_ingot', 1, 'thermal:electrum_ingot', 1, 'mekanism:ingot_refined_glowstone', 1, 10000)
    alloy3('thermal:signalum_ingot', 1, 'thermal:silver_ingot', 1, 'thermal:rose_gold_ingot', 1, 'enderio:redstone_alloy_ingot', 1, 10000)
    alloy3('thermal:enderium_ingot', 2, 'chemlib:platinum_ingot', 1, 'thermal:lead_ingot', 2, 'enderio:pulsating_alloy_ingot', 1, 18000)
    alloy3('enderio:nethercotta', 2, 'minecraft:clay_ball', 4, 'minecraft:nether_brick', 2, 'thermal:constantan_ingot', 2, 8000)
    alloy2('enderio:pulsating_alloy_ingot', 1, 'minecraft:ender_pearl', 1, 'thermal:nickel_ingot', 1, 6000)
    alloy2('enderio:copper_alloy_ingot', 1, 'ae2:silicon', 1, 'thermal:bronze_ingot', 1, 6000)
    alloy3('enderio:conductive_alloy_ingot', 3, 'minecraft:redstone', 2, 'enderio:copper_alloy_ingot', 2, 'thermal:invar_ingot', 1, 8000)
    alloy3('enderio:energetic_alloy_ingot', 1, 'powah:steel_energized', 1, 'minecraft:redstone', 1, 'minecraft:glowstone_dust', 1, 10000)
    alloy2('enderio:vibrant_alloy_ingot', 1, 'minecraft:ender_pearl', 1, 'enderio:energetic_alloy_ingot', 1, 12000)
    alloy3('enderio:soularium_ingot', 1, 'thermal_extra:soul_sand_dust', 1, 'enderio:nethercotta', 1, 'minecraft:gold_ingot', 1, 10000)
    alloy3('enderio:dark_steel_ingot', 1, 'minecraft:obsidian', 1, 'thermal:steel_ingot', 1, 'thermal:enderium_dust', 1, 12000)
    alloy3('enderio:end_steel_ingot', 1, 'minecraft:end_stone', 1, 'enderio:dark_steel_ingot', 1, 'thermal:lumium_dust', 1, 14000)
    alloy3('extendedcrafting:black_iron_ingot', 4, 'thermal:tar', 6, 'enderio:dark_steel_ingot', 3, 'immersiveengineering:ingot_hop_graphite', 1, 48000)
    alloy3('kubejs:infusing_soul_ingot', 1, 'powah:crystal_blazing', 1, 'enderio:soularium_ingot', 1, 'kubejs:enchanted_ingot', 1, 14000)
    alloy3('thermal_extra:shellite_ingot', 2, 'minecraft:shulker_shell', 1, 'kubejs:biofuel_ingot', 2, 'mekanism:ingot_refined_obsidian', 2, 26000)
    alloy3('kubejs:evil_infused_ingot', 1, 'kubejs:enchanted_ingot', 1, 'kubejs:demon_ingot', 1, 'architects_palette:withered_bone', 1, 12000)
    alloy3('powah_dielectric_paste', 16, 'minecraft:clay_ball', 1, 'immersiveengineering:dust_coke', 2, 'minecraft:blaze_powder', 1, 6000)
    alloy2('kubejs:crystalline_alloy_ingot', 2, 'enderio:pulsating_powder', 1, 'thermal:lumium_ingot', 2, 21000)
    //alloy2('kubejs:crystalline_pink_slime_ingot', 1, 'industrialforegoing:pink_slime_ingot', 1, 'kubejs:crystalline_alloy_ingot',1 ,16000)
    //alloy3('kubejs:dark_soularium_ingot', 1, 'enderio:soularium_ingot', 1, 'enderio:dark_steel_ingot', 10, '', 1, 24000)
    alloy3('kubejs:machinarium_ingot', 4, 'mekanism:alloy_reinforced', 4, 'kubejs:automaton_ingot', 2, 'actuallyadditions:empowered_enori_crystal', 1, 16000)
    alloy2('industrialforegoing:pink_slime_ingot', 1, 'industrialforegoing:pink_slime', 1, 'kubejs:demon_ingot', 1, 8000)
    alloy3('thermal_extra:twinite_ingot', 2, 'industrialforegoing:pink_slime_ingot', 2, 'kubejs:crystalline_alloy_ingot', 2, 'minecraft:netherite_ingot', 1, 34000)
    alloy3('thermal_extra:dragonsteel_ingot', 1, 'draconicevolution:draconium_ingot', 1, 'thermal_extra:shellite_ingot', 1, 'enderio:end_steel_ingot', 1, 20000)
    alloy2('kubejs:extradimensional_alloy_ingot', 3, 'rftoolsbase:dimensionalshard', 3, 'extendedcrafting:enhanced_ender_ingot', 1, 50000)
    alloy3('thermal_extra:abyssal_ingot', 1, 'naturesaura:infused_iron', 1, 'kubejs:extradimensional_alloy_ingot', 1, 'evilcraft:dark_gem', 4, 22000)
    alloy3('kubejs:automaton_ingot', 2, 'thermal:signalum_ingot', 1, 'thermal_extra:dragonsteel_ingot', 1, 'rftoolsbase:dimensionalshard', 2, 36000)
    alloy2('kubejs:dark_soul_infused_ingot', 3, 'enderio:dark_steel_ingot', 1, 'thermal_extra:soul_infused_ingot', 2, 40000)
    
    //Eye of Ender
    event.remove({id:'minecraft:ender_eye'})
    alloy2('minecraft:ender_eye', 1, 'minecraft:blaze_powder', 1, 'minecraft:ender_pearl', 1, 8000)

    //Glasses
    //alloy1('enderio:fused_quartz', 1, 'minecraft:quartz', 4, 4000) Removed because quartz is already used in hardened glass recipe
    alloy1('enderio:fused_quartz', 1, 'minecraft:quartz_block', 1, 4000)
    alloy1('enderio:clear_glass', 1, 'minecraft:glass', 1, 4000)
    const glass = [{material:'soul_infused'},{material:'shellite'},{material:'twinite'},{material:'dragonsteel'},{material:'abyssal'}]
    glass.forEach((glass) => {event.custom({"type": "thermal:smelter","ingredients": [{"item": "thermal:obsidian_glass","count": 2},{"value": [{"tag": "forge:ingots/"+glass.material},{"tag": "forge:dusts/"+glass.material}],"count": 1}],"result": [{"item": "thermal_extra:"+glass.material+"_glass","count": 2}],"energy": 4800})})

    //Organic dyes
    alloy2tag1('enderio:organic_black_dye', 2, 'bookshelf:slime_balls', 1, 'mekanism:dust_coal', 6, 4000)
    alloy2('enderio:organic_black_dye', 1, 'minecraft:egg', 1, 'mekanism:dust_coal', 3, 3000)
    alloy3tag1('enderio:organic_green_dye', 2, 'bookshelf:slime_balls', 1, 'minecraft:green_dye', 2, 'mekanism:dust_coal', 2, 4000)
    alloy3('enderio:organic_green_dye', 1, 'minecraft:egg', 1, 'minecraft:green_dye', 1, 'mekanism:dust_coal', 1, 3000)
    alloy3tag1('enderio:organic_brown_dye', 2, 'bookshelf:slime_balls', 1, 'minecraft:brown_dye', 2, 'mekanism:dust_coal', 2, 4000)
    alloy3('enderio:organic_brown_dye', 1, 'minecraft:egg', 1, 'minecraft:brown_dye', 1, 'mekanism:dust_coal', 1, 3000)

    //Dielectric Paste
    alloy3('powah:dielectric_paste', 16, 'minecraft:clay_ball', 8, 'immersiveengineering:dust_coke', 4, 'minecraft:blaze_powder', 2, 12000)
    
    //Industrial Insulation
    alloy3tag1('enderio:industrial_insulation_block', 1, 'forge:wool', 1, 'thermal:lapis_dust', 1, 'thermal:tin_dust', 1, 8000)

})