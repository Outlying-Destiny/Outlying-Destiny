ServerEvents.recipes(event => {

    //Jetpacks

    /**
     * Copies old jetpack nbt to the new jetpack (whoever Monifactory contibutor coded that, thank you (I hate NBTs))
     * @param {Internal.ModifyRecipeCraftingGrid} grid
     * @param {Internal.ItemStack} result
     * @returns {Internal.ItemStack}
     */

	const copyOldJetpackData = (grid, result) => {
		let item = grid.find('ironjetpacks:jetpack')
		if (!item.nbt) {return result;}
		let nbt = {};
		if (item.nbt.Energy) {nbt.Energy = item.nbt.Energy}
		if (item.nbt.Engine) {nbt.Engine = item.nbt.Engine}
		if (item.nbt.Hover) {nbt.Hover = item.nbt.Hover}
		if (item.nbt.Throttle) {nbt.Throttle = item.nbt.Throttle}
		return result.withNBT(nbt);
	}

    /**
     * @type {Internal.Ingredient[][]}
     */
    const jetpackUpgrade = [
		['hardened', "leadstone", 'thermal:invar_plate', '1'],
        ['darkened', "hardened", 'extendedcrafting:black_iron_slate', '2'],
        ['draconic', "darkened", 'thermal_extra:dragonsteel_plate', '3'],
    ]

	event.shaped(Item.of('ironjetpacks:jetpack', `{Id:"ironjetpacks:leadstone"}`).strongNBT(), ['ABA','ACA','D D'], {A: 'thermal:lead_plate',B: 'thermal:energy_cell',C: 'ironjetpacks:strap',D: Item.of('ironjetpacks:thruster', `{Id:"ironjetpacks:leadstone"}`).weakNBT()})


    jetpackUpgrade.forEach(([newTier, previousTier, plate, upgrade]) => {event.shaped(Item.of('ironjetpacks:jetpack', `{Id:"ironjetpacks:${newTier}"}`).strongNBT(), ['ABA','ACA','D D'], {A: plate,B: 'thermal:upgrade_augment_'+upgrade,C: Item.of('ironjetpacks:jetpack', `{Id:"ironjetpacks:${previousTier}"}`).weakNBT(),D: Item.of('ironjetpacks:thruster', `{Id:"ironjetpacks:${newTier}"}`).weakNBT()}).modifyResult(copyOldJetpackData).id(`kubejs:ironjetpacks/upgrade/${newTier}`);})

    //Thrusters
    function thruster(output, input1, input2, input3){event.shaped(Item.of('ironjetpacks:thruster', `{Id:"ironjetpacks:${output}"}`), ['ABA','BCB','DED'], {A:input1,B:input2,C:'thermal:dynamo_'+input3,D:'thermal:signalum_block',E:'kubejs:red_gear'})}
    thruster('leadstone', 'thermal:lead_block', 'thermal:rf_coil', 'gourmand')
    thruster('hardened', 'thermal:invar_block', 'enderio:basic_capacitor', 'magmatic')
    thruster('darkened', 'extendedcrafting:black_iron_block', 'enderio:double_layer_capacitor', 'stirling')
    thruster('draconic', 'thermal_extra:dragonsteel_block', 'enderio:octadic_capacitor', 'lapidary')

    //Dynamos
    function dynamo(output, input1, input2){
        event.remove({id:output})
        event.shaped(output, [' A ','BCB','DED'], {A:'thermal:rf_coil',B:input1,C:'thermal:machine_frame',D:input2,E:'mekanism:elite_control_circuit'})
    }
    dynamo('thermal:dynamo_gourmand', 'thermal:lead_plate', 'thermal:bronze_gear')
    dynamo('thermal:dynamo_magmatic', 'thermal:invar_plate', 'thermal:steel_gear')
    dynamo('thermal:dynamo_stirling', 'extendedcrafting:black_iron_slate', 'enderio:dark_bimetal_gear')
    dynamo('thermal:dynamo_lapidary', 'thermal_extra:dragonsteel_plate', 'thermal:netherite_gear')
})