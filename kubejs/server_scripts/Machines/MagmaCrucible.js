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

    function molten(output, ingot, block, energy){
      crucible(output, 250, ingot, energy)
      crucible(output, 2250, block, energy*9)
    }

    //Fixing Glowstone Dust Recipe
    event.remove({id:'thermal:machines/crucible/crucible_glowstone_dust'})
    crucible('thermal:glowstone', 250, 'minecraft:glowstone_dust', 20000)

    //Making Destabilized Redstone amount constant with other molten materials
    event.remove({id:'thermal:machines/crucible/crucible_redstone_dust'})
    event.remove({id:'thermal:machines/crucible/crucible_redstone_block'})
    molten('thermal:redstone', 'minecraft:redstone', 'minecraft:redstone_block', 8000)

    //Molten Materials
    molten('kubejs:molten_draconium', 'draconicevolution:draconium_ingot', 'draconicevolution:draconium_block', 32000)
    molten('kubejs:molten_signalum', 'thermal:signalum_ingot', 'thermal:signalum_block', 20000)
    molten('thermal_extra:soul_infused', 'thermal_extra:soul_infused_ingot', 'thermal_extra:soul_infused_block', 24000)
    molten('thermal_extra:twinite', 'thermal_extra:twinite_ingot' , 'thermal_extra:twinite_block', 28000)

    //Solidified xp
    crucible('mob_grinding_utils:fluid_xp', 160, 'actuallyadditions:solidified_experience', 4000)
  })