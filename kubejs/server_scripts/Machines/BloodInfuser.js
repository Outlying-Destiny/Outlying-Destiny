ServerEvents.recipes(event => {

    //Function
    function infuse(output, tier, input, fluidamount, time){event.custom({"type": "evilcraft:blood_infuser","item": input,"fluid": {"fluid": "evilcraft:blood","amount": fluidamount},"result": {"item": output},"duration": time,"xp": 0,"tier": tier})}

    //Remove Useless / Unwanted Convenience Recipe
    event.remove({id:/evilcraft:blood_infuser\/convenience\/minecraft_(leather|ender_pearl|zombie_head|creeper_head|wither_skeleton_skull|spider_eye|redstone|netherrack|soul_sand|blaze_rod|nether_wart|ghast_tear|red_mushroom|grass_block)/})
})