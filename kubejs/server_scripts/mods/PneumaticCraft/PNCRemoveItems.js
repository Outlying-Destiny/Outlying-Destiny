ServerEvents.recipes(event => {

    //Compressors
    event.remove({output:'pneumaticcraft:air_compressor'})
    event.remove({output:'pneumaticcraft:advanced_air_compressor'})
    event.remove({output:'pneumaticcraft:thermal_compressor'})
    event.remove({output:'pneumaticcraft:liquid_compressor'})
    event.remove({output:'pneumaticcraft:advanced_liquid_compressor'})
    event.remove({output:'pneumaticcraft:manual_compressor'})
    event.remove({output:'pneumaticcraft:electrostatic_compressor'})
    event.remove({output:'pneumaticcraft:pneumatic_dynamo'})
    
    //Biodiesel
    event.remove({id:'pneumaticcraft:fluid_mixer/biodiesel'})
    event.custom({"type": "pneumaticcraft:fluid_mixer","fluid_output": {"amount": 50,"fluid": "immersiveengineering:biodiesel"},"input1": {"type": "pneumaticcraft:fluid","amount": 25,"tag": "forge:plantoil"},"input2": {"type": "pneumaticcraft:fluid","amount": 25,"tag": "forge:ethanol"},"item_output": {"item": "pneumaticcraft:glycerol"},"pressure": 2.0,"time": 60})

    //Function TPP
    function TPP (fluid, fluidamount, input){
      event.custom({"type": "pneumaticcraft:thermo_plant","exothermic": false,"fluid_output": {"amount": fluidamount,"fluid": 'immersiveengineering:'+fluid},"item_input": {"item": input},"pressure": 2.0,"speed": 0.5})
    }

    //Vegetable Oil
    event.remove({id:/pneumaticcraft:thermo_plant.+vegetable_oil_from_.+/})
    TPP('plantoil', 60, 'minecraft:beetroot_seeds')
    TPP('plantoil', 20, 'minecraft:melon_seeds')
    TPP('plantoil', 40, 'minecraft:pumpkin_seeds')
    TPP('plantoil', 80, 'farmersdelight:cabbage_seeds')
    TPP('plantoil', 60, 'farmersdelight:tomato_seeds')
    TPP('plantoil', 120, 'immersiveengineering:seed')
    TPP('plantoil', 80, 'minecraft:wheat_seeds')

    //Ethanol
    event.remove({id:/pneumaticcraft:thermo_plant.+ethanol_from_.+/})
    TPP('ethanol', 80, 'minecraft:potato')
    TPP('ethanol', 20, 'minecraft:melon_slice')
    TPP('ethanol', 80, 'thermal:tomato')
    TPP('ethanol', 80, 'farmersdelight:tomato')
    TPP('ethanol', 50, 'minecraft:sweet_berries')
    TPP('ethanol', 80, 'minecraft:apple')
    TPP('ethanol', 80, 'minecraft:sugar_cane')
    TPP('ethanol', 250, 'minecraft:honey_bottle')
    TPP('ethanol', 100, 'minecraft:glow_berries')
    TPP('ethanol', 40, 'minecraft:beetroot')

})