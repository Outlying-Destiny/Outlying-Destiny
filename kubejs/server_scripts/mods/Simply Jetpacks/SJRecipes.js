ServerEvents.recipes(event => {

    //Check Combiner.js for jetpack platings

    //Functions
    function thruster(output, input1, input2, input3){
        event.remove({id:'simplyjetpacks:thermal/thruster_te'+output})
        event.shaped('simplyjetpacks:thruster_te'+output, ['ABA','BCB','DED'], {A:input1,B:input2,C:input3,D:'thermal:signalum_block',E:'kubejs:red_gear'})
    }
    function dynamo(output, input1, input2){
        event.remove({id:output})
        event.shaped(output, [' A ','BCB','DED'], {A:'thermal:rf_coil',B:input1,C:'thermal:machine_frame',D:input2,E:'mekanism:elite_control_circuit'})
    }

    //Leadstone
    thruster('1', 'thermal:lead_block', 'thermal:rf_coil', 'thermal:dynamo_gourmand')
    dynamo('thermal:dynamo_gourmand', 'thermal:lead_plate', 'thermal:invar_gear')

    //Hardened
    event.replaceInput({output:'simplyjetpacks:jetpack_te2'},'thermal:energy_cell','thermal:upgrade_augment_1')
    thruster('2', 'thermal:invar_block', 'enderio:basic_capacitor', 'thermal:dynamo_magmatic')
    dynamo('thermal:dynamo_magmatic', 'thermal:invar_plate', 'thermal:steel_gear')

    //Darkened
    event.replaceInput({output:'simplyjetpacks:jetpack_te3'},'thermal:energy_cell','thermal:upgrade_augment_2')
    thruster('3', 'extendedcrafting:black_iron_block', 'enderio:double_layer_capacitor', 'thermal:dynamo_stirling')
    dynamo('thermal:dynamo_stirling', 'extendedcrafting:black_iron_slate', 'enderio:dark_bimetal_gear')

    //Draconic
    event.replaceInput({output:'simplyjetpacks:jetpack_te4'},'thermal:energy_cell','thermal:upgrade_augment_3')
    thruster('4', 'thermal_extra:dragonsteel_block', 'enderio:octadic_capacitor', 'thermal:dynamo_lapidary')
    dynamo('thermal:dynamo_lapidary', 'thermal_extra:dragonsteel_plate', 'thermal:netherite_gear')

})