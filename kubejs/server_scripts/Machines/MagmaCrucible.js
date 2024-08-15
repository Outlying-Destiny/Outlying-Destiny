ServerEvents.recipes(event => {

    //Function Magma Crucible
    function crucible(output, amount, input, energy){
        event.custom({
            "type": "thermal:crucible",
            "ingredient": {
              "item": input
            },
            "result": [
              {
                "fluid": output,
                "amount": amount
              }
            ],
            "energy": energy
          })
    }

    //Fixing Glowstone Dust Recipe
    event.remove({id:'thermal:machines/crucible/crucible_glowstone_dust'})
    crucible('thermal:glowstone', 250, 'minecraft:glowstone_dust', 20000)

    //Molten Materials
    function molten(output, ingot, block, energy){
      crucible(output, 250, ingot, energy)
      crucible(output, 2250, block, energy*9)
    }
    molten('kubejs:molten_draconium', 'draconicevolution:draconium_ingot', 'draconicevolution:draconium_block', 32000)
    molten('kubejs:molten_signalum', 'thermal:signalum_ingot', 'thermal:signalum_block', 20000)
    molten('thermal_extra:soul_infused', 'thermal_extra:soul_infused_ingot', 'thermal_extra:soul_infused_block', 24000)
    molten('thermal_extra:twinite', 'thermal_extra:twinite_ingot' , 'thermal_extra:twinite_block', 28000)
})