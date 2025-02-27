ServerEvents.recipes(event => {

    //Function SagMill
    function sagmillnoboost(output, outputcount, input, energy){event.custom({"type": "enderio:sag_milling","bonus": "none","energy": energy,"input": {"item": input},"outputs": [{"count": outputcount,"item": output}]})}
    function sagmillnoboosttag(output, outputcount, input, energy){event.custom({"type": "enderio:sag_milling","bonus": "none","energy": energy,"input": {"tag": input},"outputs": [{"count": outputcount,"item": output}]})}

    //Function Crusher Mekanism
    function crusher(output, input){event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":input}},"output":{"item":output}})}

    //Function All Crush
    function allcrush(output, outputcount, input, energy) {
        sagmillnoboost(output, outputcount, input, energy)
        crusher(output, input)
    }

    //Remove Blend Crafts
    event.remove({id:'thermal:bronze_dust_4'})
    event.remove({id:'thermal:invar_dust_3'})
    event.remove({id:'thermal:signalum_dust_4'})
    event.remove({id:'thermal:lumium_dust_4'})
    event.remove({id:'thermal:enderium_dust_2'})
    event.remove({id:/thermal_extra:(soul_infused|shellite|twinite|dragonsteel|abyssal)_dust/})
    event.remove({id:/immersiveengineering:crafting\/(electrum|constantan)_mix/})
    event.remove({id:'mekanism:processing/steel/ingot_to_dust'})
    event.remove({id:'mekanism:processing/bronze/dust/from_ingot'})
    event.remove({id:'mekanism:processing/refined_obsidian/dust/from_ingot'})
    event.remove({id:'mekanism:processing/refined_glowstone/ingot_to_dust'})

    //Remove Quartz Dust Mekanism Recipe
    event.remove({id:'mekanism:processing/quartz/to_dust'})

    //Remove Arcane Crystal Dust from Smelting / Blasting
    event.remove({id:/forbidden_arcanus:(smelting|blasting)\/arcane_crystal_dust_from_/})
    
    //SAG Mill Dusts from non ingot
    sagmillnoboost('thermal_extra:soul_sand_dust', 1, 'minecraft:soul_sand', 1800)
    sagmillnoboost('thermal:ender_pearl_dust', 1, 'minecraft:ender_pearl', 1800)

    //SAG Mill
    sagmillnoboost('mekanism:dust_fluorite', 1, 'mekanism:fluorite_gem', 2400)
    sagmillnoboost('mekanism:dust_osmium', 1, 'mekanism:ingot_osmium', 2400)
    sagmillnoboost('mekanism:dust_uranium', 1, 'mekanism:ingot_uranium', 2400)
    sagmillnoboosttag('ae2:certus_quartz_dust', 1, 'ae2:all_certus_quartz', 2400)
    sagmillnoboost('ae2:fluix_dust', 1, 'ae2:fluix_crystal', 2400)
    sagmillnoboost('ae2:sky_dust', 1, 'ae2:sky_stone_block', 2400)
    sagmillnoboost('ae2:sky_dust', 1, 'ad_astra:sky_stone', 2400)
    sagmillnoboost('mekanism:dust_charcoal', 1, 'minecraft:charcoal', 2400)
    sagmillnoboost('mekanism:dust_coal', 1, 'minecraft:coal', 2400)
    sagmillnoboost('mekanism:dust_fluorite', 1, 'mekanism:fluorite_gem', 2400)
    sagmillnoboost('thermal:tin_dust', 1, 'thermal:tin_ingot', 2400)
    sagmillnoboost('thermal:lead_dust', 1, 'thermal:lead_ingot', 2400)
    sagmillnoboost('thermal:copper_dust', 1, 'minecraft:copper_ingot', 2400)
    sagmillnoboost('thermal:netherite_dust', 1, 'minecraft:netherite_ingot', 2400)
    sagmillnoboost('thermal:diamond_dust', 1, 'minecraft:diamond', 2400)
    sagmillnoboost('thermal:emerald_dust', 1, 'minecraft:emerald', 2400)

    //SAG Mill + Crusher
    allcrush('thermal:sulfur_dust', 1, 'thermal:sulfur', 2400)
    allcrush('thermal:niter_dust', 1, 'thermal:niter', 2400)
    allcrush('thermal:cinnabar_dust', 1, 'thermal:cinnabar', 2400)
    allcrush('thermal:apatite_dust', 1, 'thermal:apatite', 2400)
    allcrush('thermal:sapphire_dust', 1, 'thermal:sapphire', 2400)
    allcrush('thermal:ruby_dust', 1, 'thermal:ruby', 2400)
    allcrush('thermal:nickel_dust', 1, 'thermal:nickel_ingot', 2400)
    allcrush('thermal:silver_dust', 1, 'thermal:silver_ingot', 2400)
    allcrush('thermal:quartz_dust', 1, 'minecraft:quartz', 2400)
    allcrush('bigreactors:blutonium_dust', 1, 'bigreactors:blutonium_ingot', 2400)
    allcrush('bigreactors:cyanite_dust', 1, 'bigreactors:cyanite_ingot', 2400)
    allcrush('bigreactors:magentite_dust', 1, 'bigreactors:magentite_ingot', 2400)
    allcrush('bigreactors:graphite_dust', 1, 'bigreactors:graphite_ingot', 2400)
    allcrush('bigreactors:ludicrite_dust', 1, 'bigreactors:ludicrite_ingot', 2400)
    allcrush('bigreactors:ridiculite_dust', 1, 'bigreactors:ridiculite_ingot', 2400)
    allcrush('bigreactors:inanite_dust', 1, 'bigreactors:inanite_ingot', 2400)
    allcrush('bigreactors:insanite_dust', 1, 'bigreactors:insanite_ingot', 2400)
    allcrush('thermal:bronze_dust', 1, 'thermal:bronze_ingot', 2400)
    allcrush('thermal:invar_dust', 1, 'thermal:invar_ingot', 2400)
    allcrush('thermal:signalum_dust', 1, 'thermal:signalum_ingot', 2400)
    allcrush('thermal:lumium_dust', 1, 'thermal:lumium_ingot', 2400)
    allcrush('thermal:enderium_dust', 1, 'thermal:enderium_ingot', 2400)
    allcrush('thermal:electrum_dust', 1, 'thermal:electrum_ingot', 2400)
    allcrush('thermal:constantan_dust', 1, 'thermal:constantan_ingot', 2400)
    allcrush('thermal_extra:soul_infused_dust', 1, 'thermal_extra:soul_infused_ingot', 2400)
    allcrush('thermal_extra:shellite_dust', 1, 'thermal_extra:shellite_ingot', 2400)
    allcrush('thermal_extra:twinite_dust', 1, 'thermal_extra:twinite_ingot', 2400)
    allcrush('thermal_extra:dragonsteel_dust', 1, 'thermal_extra:dragonsteel_ingot', 2400)
    allcrush('thermal_extra:abyssal_dust', 1, 'thermal_extra:abyssal_ingot', 2400)
    allcrush('thermal:rose_gold_dust', 1, 'thermal:rose_gold_ingot', 2400)
    allcrush('thermal_extra:amethyst_dust', 1, 'minecraft:amethyst_shard', 2400)
    allcrush('thermal:steel_dust', 1, 'thermal:steel_ingot', 2400)
    allcrush('thermalendergy:prismalium_dust', 1, 'thermalendergy:prismalium_ingot', 2400)
    allcrush('thermalendergy:melodium_dust', 1, 'thermalendergy:melodium_ingot', 2400)
    allcrush('thermalendergy:stellarium_dust', 1, 'thermalendergy:stellarium_ingot', 2400)
    allcrush('immersiveengineering:dust_coke', 1, 'thermal:coal_coke', 2400)
    allcrush('immersiveengineering:dust_hop_graphite', 1, 'immersiveengineering:ingot_hop_graphite', 2400)
    allcrush('evilcraft:dark_gem_crushed', 1, 'evilcraft:dark_gem', 2400)
    allcrush('forbidden_arcanus:arcane_crystal_dust', 1, 'forbidden_arcanus:arcane_crystal', 2400)
    allcrush('draconicevolution:draconium_dust', 1, 'draconicevolution:draconium_ingot', 2400)
})