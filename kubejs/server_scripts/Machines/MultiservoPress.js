ServerEvents.recipes(event => {

    //Function MultiservoPress
    function pressfluid(output, outputcount, input, energy){
        event.custom({
            "type": "thermal:press",
            "ingredients": [
              {
                "item": input
              }
            ],
            "result": [
              {
                "fluid": output,
                "amount": outputcount
              }
            ],
            "energy": energy
          })
    }
    function pressboth(output, outputcount, output2, outputcount2, input, energy){
        event.custom({
            "type": "thermal:press",
            "ingredients": [
              {
                "item": input
              }
            ],
            "result": [
              {
                "item": output,
                "count": outputcount
              },
              {
                "fluid": output2,
                "amount": outputcount2
              }
            ],
            "energy": energy
          })
    }

    //Sunflower Oil
    event.remove({id:'thermal_extra:machine/press/sunflower_oil_from_sunflower'})
    pressfluid('thermal_extra:sunflower_oil', 200, 'minecraft:sunflower', 1000)

    //Arboreal Extractor Skip
    const wood = [
        { type: 'minecraft:dark_oak', output: 'thermal:sap', amount: 20},
        { type: 'minecraft:spruce', output: 'thermal:resin', amount: 25},
        { type: 'minecraft:acacia', output: 'thermal:resin', amount: 15},
        { type: 'minecraft:oak', output: 'thermal:resin', amount: 15},
        { type: 'minecraft:birch', output: 'thermal:sap', amount: 10},
        { type: 'minecraft:cherry', output: 'thermal:resin', amount: 15},
        { type: 'minecraft:jungle', output: 'thermal:latex', amount: 15},
        { type: 'thermal:rubberwood', output: 'thermal:latex', amount: 30}
    ]

    wood.forEach((wood) => {
        pressboth(wood.type+'_planks', 2, wood.output, wood.amount*2, wood.type+'_log', 2000)
    })




})