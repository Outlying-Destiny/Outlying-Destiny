ServerEvents.recipes((event) => {

    //Function
    function vat(outputf, outputfcount, inputf, inputfcount, inputi1, inputi2, time, id){
        event.recipes.kubejs.the_vat()
        .id("kubejs:the_vat/"+id)
        .inputItems(inputi1, inputi2)
        .chance(0, vat => vat.inputItems(JsonIO.of({"value": [{"item": "enderio:basic_capacitor"},{"item": "enderio:double_layer_capacitor"},{"item": "enderio:octadic_capacitor"}]})))
        .inputFluids(inputf+' '+inputfcount)
        .outputFluids(outputf+' '+outputfcount)
        .perTick(vat => vat.inputFE(128))
        .duration(time)
    }

    //Liquid Sunshine
    vat('enderio:liquid_sunshine', 1000, 'thermal_extra:refined_sunflower_oil', 1000, 'minecraft:glowstone', 'minecraft:sunflower', 360, 'liquid_sunshine')

    //Fire Water
    vat('enderio:fire_water', 1000, 'enderio:hootch', 1000, 'minecraft:blaze_powder', 'minecraft:redstone', 270, 'fire_water')

    //Fluid of the Void
    vat('enderio:dew_of_the_void', 1000, 'enderio:nutrient_distillation', 4000, 'enderio:pulsating_powder', 'enderio:ender_crystal_powder', 270, 'dew_of_the_void')

    //Vapor of levity
    vat('enderio:vapor_of_levity', 1000, 'enderio:dew_of_the_void', 1000, 'enderio:pulsating_powder', 'enderio:prescient_powder', 360, 'vapor_of_levity')

    //Hootch
    const hootch = [
        {input: 'minecraft:poisonous_potato', mult: 8},
        {input: 'minecraft:potato', mult: 4},
        {input: 'minecraft:apple', mult: 3.5},
        {input: 'pneumaticcraft:wheat_flour', mult: 3},
        {input: '#forge:seeds', mult: 1.6}
    ]

    hootch.forEach((hootch) => {vat('enderio:hootch', 250*hootch.mult, 'minecraft:water', 1000*hootch.mult, hootch.input, 'minecraft:sugar', 180, 'hootch_'+hootch.mult)})

    //Nutrient
    const nutrient = [
        {input: '#forge:heads', mult: 2},
        {input: '#forge:foods/meat/raw', mult: 1},
        {input: '#outlying:rotten_flesh', mult: 1.5}
    ]

    nutrient.forEach((nutrient) => {
        vat('enderio:nutrient_distillation', 500*nutrient.mult, 'minecraft:water', 1000*nutrient.mult, nutrient.input, 'minecraft:sugar', 180, 'nutrient_sugar_'+nutrient.mult)
        vat('enderio:nutrient_distillation', 750*nutrient.mult, 'minecraft:water', 1500*nutrient.mult, nutrient.input, '#forge:mushrooms', 180, 'nutrient_mushrooms_'+nutrient.mult)
        vat('enderio:nutrient_distillation', 1000*nutrient.mult, 'minecraft:water', 2000*nutrient.mult, nutrient.input, 'minecraft:fermented_spider_eye', 180, 'nutrient_fermented_spider_eye_'+nutrient.mult)
    })

    //Clood Seed
    const cloudseed = [
        {input: 'minecraft:clay_ball', mult: 0.5},
        {input: 'minecraft:clay', mult: 2},
        {input: 'thermal:silver_dust', mult: 3.5}
    ]

    cloudseed.forEach((cloudseed) => {
        vat('enderio:cloud_seed', 500*cloudseed.mult, 'minecraft:water', 500*cloudseed.mult, cloudseed.input, 'minecraft:snow_block', 180, 'cloud_seed_snow_block_'+cloudseed.mult)
        vat('enderio:cloud_seed', 1000*cloudseed.mult, 'minecraft:water', 1000*cloudseed.mult, cloudseed.input, 'minecraft:packed_ice', 180, 'cloud_seed_packed_ice_'+cloudseed.mult)
    })

    //Cloud Seed Concentrated
    const csc = [
        {input: 'minecraft:clay_ball', mult: 0.5},
        {input: 'minecraft:clay', mult: 2},
        {input: 'thermal:silver_dust', mult: 2.5},
        {input: 'thermal:electrum_dust', mult: 3.5}
    ]

    csc.forEach((csc) => {vat('enderio:cloud_seed_concentrated', 1000*csc.mult, 'enderio:cloud_seed', 500*csc.mult, csc.input, 'enderio:weather_crystal', 270, 'cloud_seed_concentrated_'+csc.mult)})

})

const $ForgeCapabilities = Java.loadClass("net.minecraftforge.common.capabilities.ForgeCapabilities")

MBDMachineEvents.onBeforeRecipeModify('kubejs:the_vat', (event) => {
    const mbdEvent = event.getEvent();
    const { machine, recipe } = mbdEvent;

    let cap = machine.getCapability($ForgeCapabilities.ITEM_HANDLER).orElse(null);
    let capacitorId = cap.getStackInSlot(2).id;
    
    let divisor = ({
        'enderio:basic_capacitor': 1,
        'enderio:double_layer_capacitor': 2,
        'enderio:octadic_capacitor': 3
    })[capacitorId] || 1;

    let recipeCopy = recipe.copy();
    recipeCopy.duration = Math.ceil(recipeCopy.duration / divisor);

    mbdEvent.setRecipe(recipeCopy);
});