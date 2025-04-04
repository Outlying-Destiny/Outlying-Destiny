ServerEvents.recipes(event => {

    //Functions
    function fluidentity(output, outputamount, lens, entity, weight, depth){event.custom({"type": "industrialforegoing:laser_drill_fluid","catalyst": {"item": "industrialforegoing:laser_lens"+lens},"entity": entity,"output": "{Amount:"+outputamount+",FluidName:\""+output+"\"}","pointer": 0,"rarity": [{"blacklist": {},"depth_max": depth[0],"depth_min": depth[1],"weight": weight,"whitelist": {}}]})}
    function fluidnether(output, outputamount, lens, weight, depth){event.custom({"type": "industrialforegoing:laser_drill_fluid","catalyst": {"item": "industrialforegoing:laser_lens"+lens},"entity": "minecraft:empty","output": "{Amount:"+outputamount+",FluidName:\""+output+"\"}","pointer": 0,"rarity": [{"blacklist": {},"depth_max": depth[0],"depth_min": depth[1],"weight": weight,"whitelist": {"type": "minecraft:worldgen/biome","values": ["minecraft:nether_wastes","minecraft:basalt_deltas","minecraft:warped_forest","minecraft:crimson_forest","minecraft:soul_sand_valley"]}}]})}

    //Faster Ether Gas
    event.remove({id:"industrialforegoing:laser_drill_fluid/ether_gas"})
    fluidentity('industrialforegoing:ether_gas', 15, 10, 'minecraft:wither', 1, [256, -64])

    //Faster Lava
    event.remove({id:'industrialforegoing:laser_drill_fluid/lava'})
    fluidnether('minecraft:lava', 1500, 1, 1, [20, 5])

})