ServerEvents.recipes(event => {

    //Function
    function infuse(output, outputamount, input1, inputamount1, input2, inputamount2){
        event.custom({"type":"mekanism:chemical_infusing","leftInput":{"amount":inputamount1,"gas":input1},"output":{"amount":outputamount,"gas":output},"rightInput":{"amount":inputamount2,"gas":input2}})
    }

    //Sulfuric Acid
    event.remove({id:'mekanism:chemical_infusing/sulfuric_acid'})
    infuse('mekanism:sulfuric_acid', 1, 'mekanism:sulfur_trioxide', 1, 'mekanism:steam', 1)

})