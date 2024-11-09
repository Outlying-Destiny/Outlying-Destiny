ServerEvents.recipes(event => {

    //Functions
    function TPPIE (fluid, fluidamount, input){event.custom({"type": "pneumaticcraft:thermo_plant","exothermic": false,"fluid_output": {"amount": fluidamount,"fluid": 'immersiveengineering:'+fluid},"item_input": {"item": input},"pressure": 2.0,"speed": 0.5})}
    function fermenter(fluid, fluidamount, input){event.custom({"type":"immersiveengineering:fermenter","energy":6400,"fluid":{"amount":fluidamount,"fluid":'immersiveengineering:'+fluid},"input":{"item":input}})}
    function TF(fluid, fluidamount, input){
        TPPIE(fluid, fluidamount, input)
        fermenter(fluid, fluidamount, input)
    }
    function TPPItoF (fluid, fluidamount, input, pressure, temp, speed){event.custom({"type": "pneumaticcraft:thermo_plant","exothermic": false,"fluid_output": {"amount": fluidamount,"fluid": fluid},"item_input": {"item": input},"pressure": pressure,"speed": speed, "temperature": {"min_temp": temp}})}
    function TPPIFtoF (fluido, fluidoamount, fluidi, fluidiamount, input, pressure, temp, speed){event.custom({"type": "pneumaticcraft:thermo_plant","exothermic": false,"fluid_input": {"type": "pneumaticcraft:fluid","amount": fluidiamount,"fluid": fluidi},"fluid_output": {"amount": fluidoamount,"fluid": fluido},"item_input": {"item": input},"temperature": {"min_temp": temp},"pressure": pressure,"speed": speed})}
    function TPPIFtoI (output, fluidi, fluidiamount, input, pressure, temp, speed){event.custom({"type": "pneumaticcraft:thermo_plant","exothermic": false,"fluid_input": {"type": "pneumaticcraft:fluid","amount": fluidiamount,"fluid": fluidi},"item_output": {"item": output},"item_input": {"item": input},"temperature": {"min_temp": temp},"pressure": pressure,"speed": speed})}

    //Plant Oil
    event.remove({id:/pneumaticcraft:thermo_plant.+vegetable_oil_from_.+/})
    TPPIE('plantoil', 60, 'minecraft:beetroot_seeds')
    TPPIE('plantoil', 20, 'minecraft:melon_seeds')
    TPPIE('plantoil', 40, 'minecraft:pumpkin_seeds')
    TPPIE('plantoil', 80, 'farmersdelight:cabbage_seeds')
    TPPIE('plantoil', 60, 'farmersdelight:tomato_seeds')
    TPPIE('plantoil', 120, 'immersiveengineering:seed')
    TPPIE('plantoil', 80, 'minecraft:wheat_seeds')

    //Ethanol
    event.remove({id:/pneumaticcraft:thermo_plant.+ethanol_from_.+/})
    event.remove({id:'immersiveengineering:fermenter/melon_slice'})
    TPPIE('ethanol', 80, 'minecraft:potato')
    TPPIE('ethanol', 80, 'thermal:tomato')
    TPPIE('ethanol', 80, 'farmersdelight:tomato')
    TPPIE('ethanol', 50, 'minecraft:sweet_berries')
    TPPIE('ethanol', 80, 'minecraft:apple')
    TPPIE('ethanol', 80, 'minecraft:sugar_cane')
    TPPIE('ethanol', 250, 'minecraft:honey_bottle')
    TPPIE('ethanol', 100, 'minecraft:glow_berries')
    TPPIE('ethanol', 40, 'minecraft:beetroot')
    TF('ethanol', 25, 'minecraft:melon_slice')

    //Molten Plastic
    event.remove({id:/pneumaticcraft:thermo_plant\/plastic_from_(biodiesel|lpg)/})
    TPPIFtoF('pneumaticcraft:plastic', 1000, 'immersiveengineering:biodiesel', 200, 'minecraft:charcoal', 4, 373, 0.5)

    //Molten Lapis
    TPPItoF('kubejs:molten_lapis', 250, 'minecraft:lapis_lazuli', 2.5, 393, 0.75)

    //Lubricant
    event.remove({id:/pneumaticcraft:thermo_plant\/lubricant_from_(biodiesel|diesel)/})
    TPPIFtoF('pneumaticcraft:lubricant', 1000, 'immersiveengineering:biodiesel', 1000, 'minecraft:redstone', 3, 373, 0.5)

    //Reinforced Pressure Tube
    event.remove({id:'pneumaticcraft:thermo_plant/reinforced_pressure_tube'})
    TPPIFtoI('pneumaticcraft:reinforced_pressure_tube', 'pneumaticcraft:plastic', 100, 'pneumaticcraft:pressure_tube', 4.5, 273, 1)
})