ServerEvents.recipes(event => {

    //Functions
    function TPP (fluid, fluidamount, input){event.custom({"type": "pneumaticcraft:thermo_plant","exothermic": false,"fluid_output": {"amount": fluidamount,"fluid": 'immersiveengineering:'+fluid},"item_input": {"item": input},"pressure": 2.0,"speed": 0.5})}
    function fermenter(fluid, fluidamount, input){event.custom({"type":"immersiveengineering:fermenter","energy":6400,"fluid":{"amount":fluidamount,"fluid":'immersiveengineering:'+fluid},"input":{"item":input}})}
    function TF(fluid, fluidamount, input){
        TPP(fluid, fluidamount, input)
        fermenter(fluid, fluidamount, input)
    }

    //Plant Oil
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
    event.remove({id:'immersiveengineering:fermenter/melon_slice'})
    TPP('ethanol', 80, 'minecraft:potato')
    TPP('ethanol', 80, 'thermal:tomato')
    TPP('ethanol', 80, 'farmersdelight:tomato')
    TPP('ethanol', 50, 'minecraft:sweet_berries')
    TPP('ethanol', 80, 'minecraft:apple')
    TPP('ethanol', 80, 'minecraft:sugar_cane')
    TPP('ethanol', 250, 'minecraft:honey_bottle')
    TPP('ethanol', 100, 'minecraft:glow_berries')
    TPP('ethanol', 40, 'minecraft:beetroot')
    TF('ethanol', 25, 'minecraft:melon_slice')

})