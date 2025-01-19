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

    //Spawner
    event.remove({id:/pneumaticcraft:spawner_.+/})
    event.remove({id:'pneumaticcraft:pressurized_spawner'})
    event.remove({id:'pneumaticcraft:thermo_plant/spawner_core'})
    event.remove({id:/pneumaticcraft:vacuum/})

    //Drones
    event.remove({id:/pneumaticcraft:.+_drone/})
})