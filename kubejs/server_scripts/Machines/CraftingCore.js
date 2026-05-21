ServerEvents.recipes(event => {

    //Function Combination Crafting
    function combination4(output, baseinput, input1, input2, input3, input4, energyrate, time){event.custom({"type": "extendedcrafting:combination","powerCost": energyrate*time,"powerRate": energyrate,"input": {"item": baseinput, "count": 1},"ingredients": [{"item":input1},{"item":input2},{"item":input3},{"item":input4}],"result": {"item": output }})}
    function combination8(output, baseinput, input1, input2, input3, input4, input5, input6, input7, input8, energyrate, time){event.custom({"type": "extendedcrafting:combination","powerCost": energyrate*time,"powerRate": energyrate,"input": {"item": baseinput, "count": 1},"ingredients": [{"item":input1},{"item":input2},{"item":input3},{"item":input4},{"item":input5},{"item":input6},{"item":input7},{"item":input8}],"result": {"item": output }})}

    //Advanced Coil
    combination4('actuallyadditions:advanced_coil', 'actuallyadditions:basic_coil', 'actuallyadditions:palis_crystal', 'actuallyadditions:palis_crystal', 'actuallyadditions:palis_crystal', 'actuallyadditions:palis_crystal', 256, 20)

    //Abyssal Crystal
    combination8('kubejs:abyssal_crystal_block', 'thermal_extra:abyssal_glass', 'thermal_extra:abyssal_ingot', 'actuallyadditions:empowered_palis_crystal', 'thermal_extra:abyssal_ingot', 'actuallyadditions:empowered_palis_crystal', 'thermal_extra:abyssal_ingot', 'actuallyadditions:empowered_palis_crystal', 'thermal_extra:abyssal_ingot', 'actuallyadditions:empowered_palis_crystal', 512, 60)
 
})