ServerEvents.recipes(event => {

    //Functions
    function fluidentity(output, outputamount, lens, entity, weight, depth){event.custom({"type": "industrialforegoing:laser_drill_fluid","catalyst": {"item": "industrialforegoing:laser_lens"+lens},"entity": entity,"output": "{Amount:"+outputamount+",FluidName:\""+output+"\"}","pointer": 0,"rarity": [{"blacklist": {},"depth_max": depth[0],"depth_min": depth[1],"weight": weight,"whitelist": {}}]})}

    //Faster Ether Gas
    event.remove({id:"industrialforegoing:laser_drill_fluid/ether_gas"})
    fluidentity('industrialforegoing:ether_gas', 15, 10, 'minecraft:wither', 1, [256, -64])

})