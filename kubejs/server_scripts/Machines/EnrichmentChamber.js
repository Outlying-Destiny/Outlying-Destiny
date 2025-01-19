ServerEvents.recipes(event => {

    //Function
    function enrichment(output, outputamount, input, inputamount){event.custom({"type":"mekanism:enriching","input":{"amount":inputamount,"ingredient":{"item":input}},"output":{"count":outputamount,"item":output}})}
    function enrichmenttag(output, outputamount, input, inputamount){event.custom({"type":"mekanism:enriching","input":{"amount":inputamount,"ingredient":{"tag":input}},"output":{"count":outputamount,"item":output}})}

    //New Enriched Items
    enrichment('kubejs:enriched_rose_gold', 1, 'thermal:rose_gold_ingot', 1)
    enrichment('kubejs:enriched_platinum', 1, 'chemlib:platinum_ingot', 1)
    enrichment('kubejs:enriched_shellite', 1, 'thermal_extra:shellite_ingot', 1)

    //Enriched Obisidan
    event.remove({output:'mekanism:enriched_refined_obsidian'})
    enrichment('mekanism:enriched_refined_obsidian', 1, 'mekanism:ingot_refined_obsidian', 1)

    //Ore Dupe
    enrichment('thermal:silver_dust', 4, 'thermal:raw_silver', 3)
    enrichmenttag('thermal:silver_dust', 2,'forge:ores/silver', 1)
    enrichment('thermal:nickel_dust', 4, 'thermal:raw_nickel', 3)
    enrichmenttag('thermal:nickel_dust', 2,'forge:ores/nickel', 1)
    enrichment('draconicevolution:draconium_dust', 2,'draconicevolution:end_draconium_ore', 1)

    //AE2 Dusts to Crystals
    event.remove({id:'ae2:transform/certus_quartz_crystals'})
    event.remove({id:'ae2:transform/fluix_crystal'})
    enrichment('ae2:certus_quartz_crystal', 1, 'ae2:certus_quartz_dust', 1)
    enrichment('ae2:fluix_crystal', 1, 'ae2:fluix_dust', 1)
})