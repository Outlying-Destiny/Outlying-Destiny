ServerEvents.recipes(event => {

    //Function Fluid Encapsulator
    function encapsulator(output, input, fluid, fluidamount) {
        event.custom({
            "type": "thermal:bottler",
            "ingredients": [
              {
                "item": input
              },
              {
                "fluid": fluid,
                "amount": fluidamount
              }
            ],
            "result": [
              {
                "item": output
              }
            ]
          })
    }

    //Luminessence
    event.remove({id:'extendedcrafting:luminessence'})
    encapsulator('extendedcrafting:luminessence', 'thermal:lumium_dust', 'thermal:glowstone', 500)

    //Ender Ingot
    event.remove({id:'extendedcrafting:ender_ingot'})
    encapsulator('extendedcrafting:ender_ingot', 'extendedcrafting:black_iron_ingot', 'enderio:dew_of_the_void', 250)

    //Soul Infused Ingot
    encapsulator('thermal_extra:soul_infused_ingot', 'kubejs:infusing_soul_ingot', 'thermal:refined_fuel', 200)

})