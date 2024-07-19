ServerEvents.recipes(event => {

    event.remove({ output:'pneumaticcraft:air_compressor'})
    event.remove({ output:'pneumaticcraft:advanced_air_compressor'})
    event.remove({ output:'pneumaticcraft:thermal_compressor'})
    event.remove({ output:'pneumaticcraft:liquid_compressor'})
    event.remove({ output:'pneumaticcraft:advanced_liquid_compressor'})
    event.remove({output:'pneumaticcraft:manual_compressor'})
    event.remove({output:'pneumaticcraft:electrostatic_compressor'})
    event.remove({output:'pneumaticcraft:pneumatic_dynamo'})
    

})