ServerEvents.recipes(event => {

    //Function
    function enrichment(output, outputamount, input, inputamount){event.custom({"type":"mekanism:enriching","input":{"amount":inputamount,"ingredient":{"item":input}},"output":{"count":outputamount,"item":output}})}
    function enrichmenttag(output, outputamount, input, inputamount){event.custom({"type":"mekanism:enriching","input":{"amount":inputamount,"ingredient":{"tag":input}},"output":{"count":outputamount,"item":output}})}
    function oreproc(output, outputmult, material){enrichmenttag(output, 2*outputmult, 'forge:ores/'+material, 1)}
    function oreprocraw(output, material){enrichmenttag(output, 4, 'forge:raw_materials/'+material, 3); enrichmenttag(output, 2, 'forge:ores/'+material, 1)}

    //New Enriched Items
    enrichment('kubejs:enriched_rose_gold', 1, 'thermal:rose_gold_ingot', 1)
    enrichment('kubejs:enriched_platinum', 1, 'chemlib:platinum_ingot', 1)
    enrichment('kubejs:enriched_shellite', 1, 'thermal_extra:shellite_ingot', 1)

    //Enriched Obisidan
    event.remove({output:'mekanism:enriched_refined_obsidian'})
    //enrichment('mekanism:enriched_refined_obsidian', 1, 'mekanism:ingot_refined_obsidian', 1)

    //Dusts to Crystals
    event.remove({id:'ae2:transform/certus_quartz_crystals'})
    event.remove({id:'ae2:transform/fluix_crystal'})
    enrichment('ae2:certus_quartz_crystal', 1, 'ae2:certus_quartz_dust', 1)
    enrichment('ae2:fluix_crystal', 1, 'ae2:fluix_dust', 1)
    enrichment('evilcraft:dark_gem', 1, 'evilcraft:dark_gem_crushed', 1)
    enrichment('forbidden_arcanus:arcane_crystal', 1, 'forbidden_arcanus:arcane_crystal_dust', 1)
    const thertal = ['sulfur','niter','apatite','cinnabar']
    thertal.forEach((thertal) => {enrichment('thermal:'+thertal, 1, 'thermal:'+thertal+'_dust', 1)})

    //Ore Processing
    event.remove({id:/mekanism:processing\/(coal|redstone|lapis_lazuli|quartz)\/from_ore/})
    event.remove({id:'mekanism:processing/netherite/ancient_debris_to_scrap'})
    oreproc('mekanism:dust_coal', 1, 'coal')
    oreproc('mekanism:dirty_netherite_scrap', 1, 'netherite_scrap')
    oreproc('minecraft:redstone', 4.5, 'redstone')
    oreproc('thermal:lapis_dust', 4.5, 'lapis')
    oreproc('thermal:quartz_dust', 1, 'quartz')
    oreprocraw('thermal:silver_dust', 'silver')
    oreprocraw('thermal:nickel_dust', 'nickel')
    oreproc('thermal:apatite_dust', 3.5, 'apatite')
    oreproc('thermal:sulfur_dust', 2.5, 'sulfur')
    oreproc('thermal:niter_dust', 2.5, 'niter')
    oreproc('thermal:cinnabar_dust', 1.5, 'cinnabar')
    oreproc('ae2:certus_quartz_dust', 3.5, 'certus_quartz')
    oreproc('mysticalagriculture:inferium_essence', 3, 'inferium')
    oreproc('evilcraft:dark_gem_crushed', 2.5, 'dark')
    oreproc('forbidden_arcanus:arcane_crystal_dust', 1, 'arcane_crystal')
    oreproc('forbidden_arcanus:rune', 1, 'rune')
    oreproc('draconicevolution:draconium_dust', 1, 'draconium')

})