ServerEvents.recipes(event => {

    //Function Fluid Encapsulator
    function encapsulator(output, input, fluid, fluidamount, energy) {
        event.custom({"type": "thermal:bottler","ingredients": [{"item": input},{"fluid": fluid,"amount": fluidamount}],"result": [{"item": output}],"energy": energy})
    }
    function encapsulatortag(output, input, fluid, fluidamount, energy) {
      event.custom({"type": "thermal:bottler","ingredients": [{"tag": input},{"fluid": fluid,"amount": fluidamount}],"result": [{"item": output}],"energy": energy})
  }

    //Luminessence
    event.remove({id:'extendedcrafting:luminessence'})
    encapsulator('extendedcrafting:luminessence', 'thermal:lumium_dust', 'thermal:glowstone', 500, 12000)

    //Ender Ingot
    event.remove({id:'extendedcrafting:ender_ingot'})
    encapsulator('extendedcrafting:ender_ingot', 'extendedcrafting:black_iron_ingot', 'enderio:dew_of_the_void', 250, 12000)

    //Soul Infused Ingot
    encapsulator('thermal_extra:soul_infused_ingot', 'kubejs:infusing_soul_ingot', 'thermal:refined_fuel', 200, 14000)

    //Biofuel Infused Ingot
    encapsulator('kubejs:biofuel_ingot', 'thermal:lead_ingot', 'industrialforegoing:biofuel', 250, 8000)

    //Dimensional Shard
    event.remove({id:'rftoolsbase:dimensionalshard'})
    encapsulator('rftoolsbase:dimensionalshard', 'minecraft:diamond', 'industrialforegoing:ether_gas', 100, 12000)

    //Dragon's Breath
    encapsulator('minecraft:dragon_breath', 'botania:ender_air_bottle', 'kubejs:molten_draconium', 250, 6000)

    //Treated Wood Planks
    encapsulatortag('immersiveengineering:treated_wood_horizontal', 'minecraft:planks', 'immersiveengineering:creosote', 100, 1000)

    //Sunny Quartz
    event.remove({id:'botania:quartz_sunny'})
    encapsulator('botania:quartz_sunny', 'botania:quartz_mana', 'enderio:liquid_sunshine', 500, 10000)

    //Red Alloy Ingot
    encapsulator('projectred_core:red_ingot', 'minecraft:iron_ingot', 'thermal:redstone', 500, 8000)

    //Florb Thermal Extra fix
    function florb(fluid, florbnbt) {event.custom({"type": "thermal:bottler","ingredients": [{"item": 'thermal:florb'},{"fluid": fluid,"amount": 1000}],"result": [{"type": "forge:nbt", "item": "thermal:florb", "nbt": florbnbt}],"energy": 400})}
    florb('thermal_extra:sunflower_oil', '{Fluid:{Amount:1000,FluidName:"thermal_extra:sunflower_oil"}}')
})