ServerEvents.recipes(event => {

    //Function
    function slice(output, input1, input2, input3, input4, energy){event.custom({"type": "enderio:slicing","energy": energy,"inputs": [{"item": input1},{"item": input2},{"item": input1},{"item": input3},{"item": input4},{"item": input3}],"output": {"item": output}})}    

    //Binding Card Dimensional
    slice('powah:binding_card_dim', 'kubejs:extradimensional_alloy_ingot', 'powah:binding_card', 'kubejs:dielectric_paste_block', 'mekanism:teleportation_core', 40000)

})