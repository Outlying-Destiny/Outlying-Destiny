ServerEvents.recipes(event => {

    //Function Combination Crafting
    function combination4(output, baseinput, input1, input2, input3, input4, energyrate, time){event.custom({"type": "extendedcrafting:combination","powerCost": energyrate*time,"powerRate": energyrate,"input": {"item": baseinput, "count": 1},"ingredients": [{"item":input1},{"item":input2},{"item":input3},{"item":input4}],"result": {"item": output }})}    
    //function combinatione(output, baseinput, input1, input2, input3, florbnbt, energyrate, time){event.custom({"type": "extendedcrafting:combination","powerCost": energyrate*time,"powerRate": energyrate,"input": {"item": baseinput, "count": 1},"ingredients": [{"item":input1},{"item":input2},{"item":input3},{"type": "forge:nbt", "item": "thermal:florb", "nbt": florbnbt}],"result": {"item": output }})}    

    //Advanced Coil
    combination4('actuallyadditions:advanced_coil', 'actuallyadditions:basic_coil', 'actuallyadditions:palis_crystal', 'actuallyadditions:palis_crystal', 'actuallyadditions:palis_crystal', 'actuallyadditions:palis_crystal', 128, 20)

    //Empowered Powah Materials
    //combinatione('actuallyadditions:empowered_enori_crystal', 'powah:steel_energized', 'enderio:energized_gear', 'extendedcrafting:luminessence', 'mekanism:yellow_cake_uranium', '{Fluid:{Amount:1000,FluidName:"thermal_extra:sunflower_oil"}}', 200, 100)
    //combinatione('actuallyadditions:empowered_palis_crystal', 'powah:crystal_blazing', 'minecraft:packed_ice', 'aether:aerogel', 'minecraft:obsidian', '{Fluid:{Amount:1000,FluidName:"enderio:fire_water"}}', 1000, 100)
 
})