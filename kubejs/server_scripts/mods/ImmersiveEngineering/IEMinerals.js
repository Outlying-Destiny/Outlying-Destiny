ServerEvents.recipes(event => {

    //Remove IE Mineral Deposits
    event.remove({id:/immersiveengineering:mineral.+/})

    //Function Mineral Deposits
    function mineral2(output, outputchance, dim, weight, id){
        event.custom(
            {"type":"immersiveengineering:mineral_mix",
            "dimensions":[dim],
            "weight":weight,
            "fail_chance":0,
            "ores":[{"chance":outputchance[0],
            "output":{"item":output[0]}},
            {"chance":outputchance[1],
            "output":{"item":output[1]}}]}
        ).id('immersiveengineering:mineral/'+id)
    }

    function mineral3(output, outputchance, dim, weight, id){
        event.custom(
            {"type":"immersiveengineering:mineral_mix",
            "dimensions":[dim],
            "weight":weight,
            "fail_chance":0,
            "ores":[{"chance":outputchance[0],
            "output":{"item":output[0]}},
            {"chance":outputchance[1],
            "output":{"item":output[1]}},
            {"chance":outputchance[2],
            "output":{"item":output[2]}}]}
        ).id('immersiveengineering:mineral/'+id)
    }

    function mineral4(output, outputchance, dim, weight, id){
        event.custom(
            {"type":"immersiveengineering:mineral_mix",
            "dimensions":[dim],
            "weight":weight,
            "fail_chance":0,
            "ores":[{"chance":outputchance[0],
            "output":{"item":output[0]}},
            {"chance":outputchance[1],
            "output":{"item":output[1]}},
            {"chance":outputchance[2],
            "output":{"item":output[2]}},
            {"chance":outputchance[3],
            "output":{"item":output[3]}}]}
        ).id('immersiveengineering:mineral/'+id)
    }

    mineral2(['minecraft:deepslate_iron_ore', 'minecraft:deepslate_gold_ore'], [0.7, 0.3], 'minecraft:overworld', 20, 'pyrite')
    mineral2(['minecraft:deepslate_iron_ore', 'minecraft:deepslate_copper_ore'], [0.55, 0.45], 'minecraft:overworld', 20, 'chalcopyrite')
    mineral2(['minecraft:deepslate_redstone_ore', 'thermal:deepslate_cinnabar_ore'], [0.8, 0.2], 'minecraft:overworld', 16, 'alkaline')
    mineral2(['minecraft:deepslate_gold_ore', 'kubejs:deepslate_quartz_ore'], [0.75, 0.25], 'minecraft:overworld', 20, 'orogenic')
    mineral2(['thermal:deepslate_tin_ore', 'minecraft:deepslate_copper_ore'],[0.7, 0.3], 'minecraft:overworld', 20, 'cassiterite')
    mineral2(['kubejs:deepslate_certus_quartz_ore', 'kubejs:deepslate_quartz_ore'], [0.7, 0.3], 'minecraft:overworld', 10, 'certus')
    mineral2(['mekanism:deepslate_uranium_ore', 'mekanism:deepslate_fluorite_ore'],[0.85, 0.15], 'minecraft:overworld', 16, 'intragranitic_uranium')
    mineral3(['minecraft:deepslate_iron_ore', 'thermal:deepslate_nickel_ore', 'minecraft:deepslate_copper_ore'],[0.4, 0.4, 0.2], 'minecraft:overworld', 12, 'kambalda')
    mineral3(['minecraft:deepslate_copper_ore', 'minecraft:deepslate_gold_ore', 'thermal:deepslate_silver_ore'],[0.6, 0.3, 0.1], 'minecraft:overworld', 20, 'porphyry')
    mineral3(['minecraft:deepslate_gold_ore', 'thermal:deepslate_lead_ore', 'thermal:deepslate_tin_ore'],[0.4, 0.4, 0.2], 'minecraft:overworld', 12, 'volcanogenic')
    mineral3(['mekanism:deepslate_osmium_ore', 'thermal:deepslate_nickel_ore', 'minecraft:deepslate_copper_ore'],[0.6, 0.2, 0.2], 'minecraft:overworld', 16, 'osmium')
    mineral3(['minecraft:deepslate_coal_ore', 'minecraft:deepslate_diamond_ore', 'thermal:deepslate_sulfur_ore'], [0.75, 0.15, 0.1], 'minecraft:overworld', 20, 'carbon_rich')
    mineral3(['evilcraft:dark_ore_deepslate', 'forbidden_arcanus:deepslate_arcane_crystal_ore', 'forbidden_arcanus:runic_deepslate'], [0.70, 0.25, 0.05], 'minecraft:overworld', 20, 'magical')
    mineral4(['thermal:deepslate_lead_ore', 'thermal:deepslate_silver_ore', 'minecraft:deepslate_lapis_ore', 'mekanism:deepslate_fluorite_ore'],[0.45, 0.3, 0.15, 0.1], 'minecraft:overworld', 16, 'galena')
    mineral4(['minecraft:deepslate_iron_ore', 'minecraft:deepslate_gold_ore', 'minecraft:deepslate_copper_ore', 'mekanism:deepslate_uranium_ore'],[0.5, 0.3, 0.1, 0.1], 'minecraft:overworld', 12, 'iocg')
    mineral4(['thermal:oil_sand', 'minecraft:sand', 'minecraft:clay', 'minecraft:gravel'],[0.5, 0.25, 0.15, 0.1], 'minecraft:overworld', 12, 'bituminous')

    mineral3(['minecraft:soul_sand', 'mysticalagriculture:soulstone', 'mysticalagriculture:soulium_ore'], [0.7, 0.2, 0.1], 'minecraft:the_nether', 35, 'soulium')
    mineral3(['minecraft:nether_quartz_ore', 'minecraft:glowstone', 'minecraft:nether_gold_ore'], [0.5, 0.4, 0.1], 'minecraft:the_nether', 50, 'quartzite')
    mineral3(['minecraft:netherrack', 'minecraft:magma_block', 'minecraft:ancient_debris'], [0.6, 0.3, 0.1], 'minecraft:the_nether', 20, 'ancient')
    
    mineral4(['aether:ambrosium_ore', 'aether:icestone', 'aether:zanite_ore', 'aether:gravitite_ore'],[0.5, 0.3, 0.15, 0.05], 'aether:the_aether', 100, 'ambrosia')

})