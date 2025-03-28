ServerEvents.recipes(event => {

    //Function
    function compressor(output, input, gas){event.custom({
        "type": "mekanism:compressing",
        "chemicalInput": {
          "amount": 1,
          "gas": gas
        },
        "itemInput": {
          "ingredient": {
            "item": input
          }
        },
        "output": {
          "item": output
        }
      })}

    //Radiance
    event.remove({id:'mekanism_extras:processing/dust_radiance/from_glowstone'})
    compressor('mekanism_extras:dust_radiance', 'extendedcrafting:luminessence', 'mekanism:uranium_oxide')

})