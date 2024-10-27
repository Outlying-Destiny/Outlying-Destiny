ServerEvents.recipes(event => {

    //Function
    function enrichment(output, outputamount, input, inputamount){event.custom({"type":"mekanism:enriching","input":{"amount":inputamount,"ingredient":{"item":input}},"output":{"count":outputamount,"item":output}})}

    //New Enriched Items
    enrichment('kubejs:enriched_rose_gold', 1, 'thermal:rose_gold_ingot', 1)
    enrichment('kubejs:enriched_platinum', 1, 'chemlib:platinum_ingot', 1)
    enrichment('kubejs:enriched_shellite', 1, 'thermal_extra:shellite_ingot', 1)

    //Enriched Obisidan
    event.remove({output:'mekanism:enriched_refined_obsidian'})
    enrichment('mekanism:enriched_refined_obsidian', 1, 'mekanism:ingot_refined_obsidian', 1)

    //Ore Dupe
    enrichment('thermal:raw_silver', 3, 'thermal:silver_dust', 4)
    enrichment('thermal:raw_nickel', 3, 'thermal:nickel_dust', 4)
})