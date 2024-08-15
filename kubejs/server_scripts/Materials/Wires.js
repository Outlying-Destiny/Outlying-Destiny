ServerEvents.recipes(event => {

    //Function Metal Press
    function metalpress(output, outputcount, input, energy) {
        event.custom({"type":"immersiveengineering:metal_press","energy":energy/2,"input":{"item":input},"mold":"immersiveengineering:mold_wire","result":{"base_ingredient":{"item":output},"count":outputcount}})
    }
    
    //Function Lathe
    function lathe(output, outputcount, input, energy){
        event.custom({
          "type": "thermal:sawmill",
          "ingredient": {
            "item": input
          },
          "result": [
            {
              "item": output,
              "count": outputcount
            }
          ],
          "energy": energy
        })
    }

    //Function All Wires
    function allwires(output, outputcount, input, energy) {
        metalpress(output, outputcount, input, energy)
        lathe(output, outputcount, input, energy)
    } 
    
    //Remove Wires Crafts
    event.remove({id:/immersiveengineering:crafting.+wire_.+/})
    event.remove({id:/immersiveengineering:metalpress.+wire.+/})

    //Wires
    allwires('immersiveengineering:wire_copper', 2, 'thermal:copper_plate', 3600)
    allwires('immersiveengineering:wire_electrum', 2, 'thermal:electrum_plate', 3600)
    allwires('kubejs:invar_wire', 2, 'thermal:invar_plate', 3600)
    allwires('immersiveengineering:wire_steel', 2, 'thermal:steel_plate', 3600)
    allwires('immersiveengineering:wire_lead', 2, 'thermal:lead_plate', 3600)


})