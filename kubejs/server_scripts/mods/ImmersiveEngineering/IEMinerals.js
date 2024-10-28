ServerEvents.recipes(event => {

    //Remove IE Mineral Deposits
    event.remove({id:/immersiveengineering:mineral.+/})

    //Function Mineral Deposits
    function mineral2(output, outputchance, dim, weight, id, name, rarity){
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

        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "kubejs:excavator",
            "time": 45,
            "requirements": [
            { "type": "custommachinery:item", "mode": "input", "item": "immersiveengineering:coresample", "nbt": "{display:{Lore:['\""+rarity+"\"'],Name:\'{\"text\":\""+name+"§r\",\"italic\":\"false\"}\'},mineralInfo:[{mineral:\"immersiveengineering:mineral/"+id+"\"}]}", "amount": 1 },
            { "type": "custommachinery:item", "mode": "output", "item": output[0], "amount": outputchance[0]*100 },
              { "type": "custommachinery:item", "mode": "output", "item": output[1], "amount": outputchance[1]*100 },
              { "type": "custommachinery:dimension", "filter": dim }
            ]
        })
    }

    function mineral3(output, outputchance, dim, weight, id, name, rarity){
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

        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "kubejs:excavator",
            "time": 45,
            "requirements": [
            { "type": "custommachinery:item", "mode": "input", "item": "immersiveengineering:coresample", "nbt": "{display:{Lore:['\""+rarity+"\"'],Name:\'{\"text\":\""+name+"§r\",\"italic\":\"false\"}\'},mineralInfo:[{mineral:\"immersiveengineering:mineral/"+id+"\"}]}", "amount": 1 },
            { "type": "custommachinery:item", "mode": "output", "item": output[0], "amount": outputchance[0]*100 },
              { "type": "custommachinery:item", "mode": "output", "item": output[1], "amount": outputchance[1]*100 },
              { "type": "custommachinery:item", "mode": "output", "item": output[2], "amount": outputchance[2]*100 },
              { "type": "custommachinery:dimension", "filter": dim }
            ]
        })
    }

    function mineral4(output, outputchance, dim, weight, id, name, rarity){
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

        event.custom({
            "type": "custommachinery:custom_machine",
            "machine": "kubejs:excavator",
            "time": 45,
            "requirements": [
              { "type": "custommachinery:item", "mode": "input", "item": "immersiveengineering:coresample", "nbt": "{display:{Lore:['\""+rarity+"\"'],Name:\'{\"text\":\""+name+"§r\",\"italic\":\"false\"}\'},mineralInfo:[{mineral:\"immersiveengineering:mineral/"+id+"\"}]}", "amount": 1 },
              { "type": "custommachinery:item", "mode": "output", "item": output[0], "amount": outputchance[0]*100 },
              { "type": "custommachinery:item", "mode": "output", "item": output[1], "amount": outputchance[1]*100 },
              { "type": "custommachinery:item", "mode": "output", "item": output[2], "amount": outputchance[2]*100 },
              { "type": "custommachinery:item", "mode": "output", "item": output[3], "amount": outputchance[3]*100 },
              { "type": "custommachinery:dimension", "filter": dim }
            ]
        })
    }

    mineral2(['minecraft:deepslate_iron_ore', 'minecraft:deepslate_gold_ore'], [0.7, 0.3], 'minecraft:overworld', 20, 'pyrite', 'Pyrite', '§r§fCommon')
    mineral2(['minecraft:deepslate_iron_ore', 'minecraft:deepslate_copper_ore'], [0.55, 0.45], 'minecraft:overworld', 20, 'chalcopyrite', 'Chalcopyrite', '§r§fCommon')
    mineral2(['minecraft:deepslate_redstone_ore', 'thermal:deepslate_cinnabar_ore'], [0.8, 0.2], 'minecraft:overworld', 16, 'alkaline', 'Alkaline', '§r§bUncommon')
    mineral2(['minecraft:deepslate_gold_ore', 'kubejs:deepslate_quartz_ore'], [0.75, 0.25], 'minecraft:overworld', 20, 'orogenic', 'Orogenic', '§r§fCommon')
    mineral2(['thermal:deepslate_tin_ore', 'minecraft:deepslate_copper_ore'],[0.7, 0.3], 'minecraft:overworld', 20, 'cassiterite', 'Cassiterite', '§r§fCommon')
    mineral2(['kubejs:deepslate_certus_quartz_ore', 'kubejs:deepslate_quartz_ore'], [0.7, 0.3], 'minecraft:overworld', 10, 'certus', 'Certus', '§r§6Very Rare')
    mineral2(['mekanism:deepslate_uranium_ore', 'mekanism:deepslate_fluorite_ore'],[0.85, 0.15], 'minecraft:overworld', 16, 'intragranitic_uranium', 'Intragranatic Uranium', '§r§bUncommon')
    mineral3(['minecraft:deepslate_iron_ore', 'thermal:deepslate_nickel_ore', 'minecraft:deepslate_copper_ore'],[0.4, 0.4, 0.2], 'minecraft:overworld', 12, 'kambalda', 'Kambalda', '§r§dRare')
    mineral3(['minecraft:deepslate_copper_ore', 'minecraft:deepslate_gold_ore', 'thermal:deepslate_silver_ore'],[0.55, 0.3, 0.15], 'minecraft:overworld', 20, 'porphyry', 'Porphyry', '§r§fCommon')
    mineral3(['minecraft:deepslate_gold_ore', 'thermal:deepslate_lead_ore', 'thermal:deepslate_tin_ore'],[0.4, 0.4, 0.2], 'minecraft:overworld', 12, 'volcanogenic', 'Volcanogenic', '§r§dRare')
    mineral3(['mekanism:deepslate_osmium_ore', 'thermal:deepslate_nickel_ore', 'minecraft:deepslate_copper_ore'],[0.55, 0.3, 0.15], 'minecraft:overworld', 16, 'osmium', 'Osmium', '§r§bUncommon')
    mineral3(['minecraft:deepslate_coal_ore', 'minecraft:deepslate_diamond_ore', 'thermal:deepslate_sulfur_ore'], [0.70, 0.15, 0.15], 'minecraft:overworld', 20, 'carbon_rich', 'Carbon-Rich', '§r§fCommon')
    mineral3(['evilcraft:dark_ore_deepslate', 'forbidden_arcanus:deepslate_arcane_crystal_ore', 'forbidden_arcanus:runic_deepslate'], [0.70, 0.25, 0.05], 'minecraft:overworld', 10, 'magical', 'Magical', "§r§6Very Rare")
    mineral4(['thermal:deepslate_lead_ore', 'thermal:deepslate_silver_ore', 'minecraft:deepslate_lapis_ore', 'mekanism:deepslate_fluorite_ore'],[0.45, 0.3, 0.15, 0.1], 'minecraft:overworld', 16, 'galena', 'Galena', "§r§bUncommon")
    mineral4(['minecraft:deepslate_iron_ore', 'minecraft:deepslate_gold_ore', 'minecraft:deepslate_copper_ore', 'mekanism:deepslate_uranium_ore'],[0.5, 0.25, 0.15, 0.1], 'minecraft:overworld', 12, 'iocg', 'IOCG', "§dRare")
    mineral4(['thermal:oil_sand', 'minecraft:sand', 'minecraft:clay', 'minecraft:gravel'],[0.5, 0.25, 0.15, 0.1], 'minecraft:overworld', 12, 'bituminous', 'Bituminous', "§r§dRare")

    mineral3(['minecraft:soul_sand', 'mysticalagriculture:soulstone', 'mysticalagriculture:soulium_ore'], [0.7, 0.2, 0.1], 'minecraft:the_nether', 35, 'soulium', 'Soulium', '§r§bUncommon')
    mineral3(['minecraft:nether_quartz_ore', 'minecraft:glowstone', 'minecraft:nether_gold_ore'], [0.5, 0.4, 0.1], 'minecraft:the_nether', 50, 'quartzite', 'Quartzite', '§r§fCommon')
    mineral3(['minecraft:netherrack', 'minecraft:magma_block', 'minecraft:ancient_debris'], [0.6, 0.3, 0.1], 'minecraft:the_nether', 20, 'ancient', 'Ancient', '§r§6Very Rare')
    
    mineral4(['aether:ambrosium_ore', 'aether:icestone', 'aether:zanite_ore', 'aether:gravitite_ore'],[0.5, 0.3, 0.15, 0.05], 'aether:the_aether', 100, 'ambrosia', 'Ambrosia', "§r§fCommon")

})