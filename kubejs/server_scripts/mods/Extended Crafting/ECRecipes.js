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
    encapsulator('extendedcrafting:ender_ingot', 'extendedcrafting:black_iron_ingot', 'thermal:ender', 250)

})