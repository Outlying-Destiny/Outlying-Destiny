//WorldgenEvents.add(event => {
//    // use the anchors helper from the event
//    const { anchors } = event
//  
//    event.addOre(ore => {
//      ore.id = 'kubejs:emerald_everywhere' // (optional, but recommended) custom id for the feature
//
//      // examples on how to use targets
//      ore.addTarget('#minecraft:stone_ore_replaceables', 'minecraft:emerald_ore') // replace anything in the vanilla stone_ore_replaceables tag with Glowstone
//      ore.addTarget('minecraft:deepslate', 'minecraft:emerald')       // replace Deepslate with Nether Wart Blocks
//  
//      ore.count([4, 5])             // generate between 15 and 50 veins (chosen at random), you could use a single number here for a fixed amount of blocks
//        .squared()                    // randomly spreads the ores out across the chunk, instead of generating them in a column
//        .triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
//          anchors.aboveBottom(1),    // the lower bound should be 32 blocks above the bottom of the world, so in this case, Y = -32 since minY = -64
//          anchors.absolute(32)	      // the upper bound, meanwhile is set to be just exactly at Y = 96
//        )								              // in total, the ore can be found between Y levels -32 and 96, and will be most likely at Y = (96 + -32) / 2 = 32
//  
//      // more, optional parameters (default values are shown here)
//      ore.size = 4                            // max. vein size
//      ore.worldgenLayer = 'underground_ores'  // what generation step the ores should be generated in (see below)
//      ore.chance = 0							            // if != 0 and count is unset, the ore has a 1/n chance to generate per chunk
//    })
//  })