ServerEvents.recipes(event => {

    //Functions
    function itemtogas(input, outputamount, output){event.custom({"type":"mekanism:infusion_conversion","input":{"ingredient":{"item":input}},"output":{"amount":outputamount,"infuse_type":output}})}
    function enrichedtogas(input, enrichedinput, output){
        itemtogas(input, 10, output)
        itemtogas(enrichedinput, 40, output)
    }
    function infusing(output, input, gas, gasamount){event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":gasamount,"infuse_type":gas},"itemInput":{"ingredient":{"item":input}},"output":{"item":output}})}

    //New Item To Gas
    event.remove({id:/mekanism:infusion_conversion\/.+\/from_enriched/})
    event.remove({id:/mekanism_extras:infusion_conversion.+/})
    enrichedtogas('thermal:rose_gold_ingot', 'kubejs:enriched_rose_gold', 'kubejs:rose_gold')
    enrichedtogas('chemlib:platinum_ingot', 'kubejs:enriched_platinum', 'kubejs:platinum')
    enrichedtogas('thermal_extra:shellite_ingot', 'kubejs:enriched_shellite', 'kubejs:shellite')
    itemtogas('mekanism:enriched_carbon', 40, 'mekanism:carbon')
    itemtogas('mekanism:enriched_redstone', 40, 'mekanism:redstone')
    itemtogas('mekanism:enriched_diamond', 40, 'mekanism:diamond')
    itemtogas('mekanism:enriched_gold', 40, 'mekanism:gold')
    
    //Base Alloys
    event.remove({id:'mekanism:metallurgic_infusing/alloy/infused'})
    infusing("mekanism:alloy_infused", "minecraft:iron_ingot", "kubejs:rose_gold", 20)
    event.remove({id:'mekanism:metallurgic_infusing/alloy/reinforced'})
    infusing("mekanism:alloy_reinforced", "mekanism:alloy_infused", "kubejs:platinum", 20)
    event.remove({id:'mekanism:metallurgic_infusing/alloy/atomic'})
    infusing("mekanism:alloy_atomic", "mekanism:alloy_reinforced", "kubejs:shellite", 20)

    //Removing Gas
    event.remove({id:/mekanism:infusion_conversion\/(refined_obsidian|tin)\/from_dust/})

    //Removing Bronze Craft
    event.remove({id:/mekanism:processing\/bronze\/(ingot|dust)\/from_infusing/})

    //Redstone Alloy
    infusing("enderio:redstone_alloy_ingot", "enderio:conductive_alloy_ingot", "mekanism:redstone", 80)

})