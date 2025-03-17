ServerEvents.recipes(event => {

    //Function
    function centrifugei3f(outputfluid, outputfluidamount, output, outputchance, input, energy){event.custom({"type": "thermal:centrifuge","ingredient": {"item": input},"result": [{"item": output[0],"chance": outputchance[0],"locked": true},{"item": output[1],"chance": outputchance[1]},{"item": output[2],"chance": outputchance[2]},{"fluid": outputfluid,"amount": outputfluidamount}],"energy": energy})}
    function centrifugei2(output, outputchance, input, energy){event.custom({"type": "thermal:centrifuge","ingredient": {"item": input},"result": [{"item": output[0],"chance": outputchance[0],"locked": true},{"item": output[1],"chance": outputchance[1]}],"energy": energy})}

    //Oil Sand
    event.remove({id:/thermal:machines\/centrifuge\/centrifuge_oil(_|_red_)sand/})
    centrifugei3f('pneumaticcraft:oil', 100, ['minecraft:red_sand', "thermal:bitumen", "thermal:tar"], [0.75, 1.5, 1], 'thermal:oil_red_sand', 20000)
    centrifugei3f('pneumaticcraft:oil', 100, ['minecraft:sand', "thermal:bitumen", "thermal:tar"], [0.75, 1.5, 1], 'thermal:oil_sand', 20000)

    //Grains of Infinity
    centrifugei2(['minecraft:cobblestone', 'enderio:grains_of_infinity'], [1, 0.4], 'minecraft:cobbled_deepslate', 8000)

})