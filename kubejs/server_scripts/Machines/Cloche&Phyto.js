ServerEvents.recipes(event => {

    //Functions machines (render is generic, crop or stacking)
    function phyto(sapling, log){event.custom({"type": "thermal:insolator","ingredient": {"item": sapling+'_sapling',},"result": [{"item": log+'_log',"chance": 6.0},{"item": sapling+'_sapling',"chance": 1.1}],"energy_mod": 3.0,"water_mod": 3.0})}
    function gardensapling(sapling, log){event.custom({"type":"immersiveengineering:cloche","input":{"item":sapling+'_sapling'},"render":{"type":"generic","block":sapling+'_sapling'},"results":[{"count":6,"item":log+'_log'}, {"item":sapling+'_sapling'}],"soil":{"item":"minecraft:dirt"},"time":800})}
    function sapling(wood){phyto(wood, wood), gardensapling(wood, wood)}
    function saplingannoying(sapling, log){phyto(sapling, log), gardensapling(sapling, log)}
    function gardenitem(output, outputcount, input, soil, time, typerender, blockrender){event.custom({"type":"immersiveengineering:cloche","input":{"item":input},"render":{"type":typerender,"block":blockrender},"results":[{"count":outputcount,"item":output}],"soil":{"item":soil},"time":time})}
    //function gardentag(output, outputcount, input, soil, time, typerender, blockrender){event.custom({"type":"immersiveengineering:cloche","input":{"item":input},"render":{"type":typerender,"block":blockrender},"results":[{"count":outputcount,"item":output}],"soil":{"tag":soil},"time":time})}
    
    //Functions Fertilizer
    function fertilizer(fertilizer, multiplier){event.custom({"type":"immersiveengineering:fertilizer","growthModifier":multiplier,"input":{"item":fertilizer}})}
    function catalyst(catalyst, primary, secondary, energy, minchance, usechance){event.custom({"type": "thermal:insolator_catalyst","ingredient": {"item": catalyst},"primary_mod": primary,"secondary_mod": secondary,"energy_mod": energy,"min_chance": minchance,"use_chance": usechance})}

    //Garden Cloche Fertilizers
    event.remove({id:'immersiveengineering:fertilizer/saltpeter'})
    fertilizer('thermal:niter_dust', 1.2)
    fertilizer('thermal:apatite_dust', 1.3)
    fertilizer('thermal:phytogro', 1.5)
    fertilizer('industrialforegoing:fertilizer', 1.8)
    fertilizer('mysticalagriculture:mystical_fertilizer', 2)

    //Phyto-Insolator Fertilizers
    catalyst('thermal:phytogro', 1.5, 1.5, 0.8, 0.5, 0.4)
    catalyst('industrialforegoing:fertilizer', 1.8, 1.8, 0.75, 0.45, 0.3)
    catalyst('mysticalagriculture:mystical_fertilizer', 2, 2, 0.70, 0.55, 0.45)

    //Garden Cloche Saplings
    gardensapling('minecraft:oak', 'minecraft:oak')
    gardensapling('minecraft:spruce', 'minecraft:spruce')
    gardensapling('minecraft:birch', 'minecraft:birch')
    gardensapling('minecraft:jungle', 'minecraft:jungle')
    gardensapling('minecraft:acacia', 'minecraft:acacia')
    gardensapling('minecraft:dark_oak', 'minecraft:dark_oak')
    gardensapling('minecraft:cherry', 'minecraft:cherry')
    gardensapling('thermal:rubberwood', 'thermal:rubberwood')
    gardensapling('quark:ancient', 'quark:ancient')
    gardensapling('quark:blue_blossom', 'quark:blossom')
    gardensapling('quark:lavender_blossom', 'quark:blossom')
    gardensapling('quark:orange_blossom', 'quark:blossom')
    gardensapling('quark:yellow_blossom', 'quark:blossom')
    gardensapling('quark:red_blossom', 'quark:blossom')

    //Both Saplings
    event.remove({not:{id:/thermal.+saplin.+/}, id:/thermal.+insolator.+/})
    sapling('architects_palette:twisted')
    sapling('forbidden_arcanus:aurum')
    sapling('aether:skyroot')
    sapling('aether:golden_oak')
    sapling('twilightforest:twilight_oak')
    sapling('twilightforest:canopy')
    sapling('twilightforest:time')
    sapling('twilightforest:transformation')
    sapling('twilightforest:mining')
    sapling('twilightforest:sorting')
    sapling('twilightforest:hollow_oak')
    sapling('undergarden:smogstem')
    sapling('undergarden:wigglewood')
    sapling('undergarden:grongle')
    saplingannoying('twilightforest:darkwood', 'twilightforest:dark')
    saplingannoying('twilightforest:rainbow_oak', 'twilightforest:twilight_oak')
    saplingannoying('lost_aether_content:crystal', 'aether:skyroot')
    saplingannoying('lost_aether_content:holiday', 'aether:skyroot')

    //Garden Cloche Crops
    gardenitem('minecraft:cocoa_beans', 2, 'minecraft:cocoa_beans', 'minecraft:jungle_log', 560, 'crop', 'minecraft:cocoa')
})