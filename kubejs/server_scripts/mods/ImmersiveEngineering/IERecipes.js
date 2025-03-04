ServerEvents.recipes(event => {

    //Functions
    function box(output, input1, input2, input3){event.shaped(output, ['ABA','BCB','ABA'], {A: input1,B: input2,C: input3})}
    function detailedbox(output, input1, input2, input3, input4){event.shaped(output, ['ABA','CDC','ABA'], {A: input1,B: input2,C: input3, D: input4})}
    function sheetmetal(output, SheetmetalInput) {event.shaped(output, [' A ','A A',' A '], {A: SheetmetalInput})}
    function component(output, ComponentInput, ComponentPlateInput) {
        event.shaped(output, ['AAA','ABA','AAA'], {A: ComponentInput,B: 'thermal:bronze_ingot'})
        event.custom({"type":"immersiveengineering:blueprint","category":"components","inputs":[{"base_ingredient":{"item":ComponentPlateInput},"count":2},{"item":"thermal:bronze_ingot"}],"result":{"item":output}})
    }
    function arcfurnace3(output, outputcount, baseinput, baseinputcount, extrainput1, extrainputcount1, extrainput2, extrainputcount2, energy, time){event.custom({"type":"immersiveengineering:arc_furnace","additives":[{"base_ingredient":{"item":extrainput1}, "count":extrainputcount1}, {"base_ingredient":{"item":extrainput2}, "count":extrainputcount2}],"energy":energy,"input":{"base_ingredient":{"item":baseinput}, "count":baseinputcount},"results":[{"base_ingredient":{"item":output}, "count":outputcount}],"slag":{"tag":"forge:slag"},"time":time})}
    function accumulator(tier, input1, input2, input3){event.shaped('immersiveengineering:capacitor_'+tier, ['ABA','DED','ACA'], {A: '#forge:treated_wood',B: input1,C: input2,D: 'immersiveengineering:coil_'+tier,E: input3}).modifyResult(copyOldAccumulatorData)}
    
    //Engineer Hammer
    event.replaceInput({ output: 'immersiveengineering:hammer'},'minecraft:iron_ingot','naturesaura:infused_stone')
    event.remove( {id:/immersiveengineering:crafting.+hammer.+/} )
    
    //Coke Oven
    event.remove({id:'immersiveengineering:crafting/cokebrick'})
    box('2x immersiveengineering:cokebrick', 'minecraft:clay_ball', 'minecraft:brick', 'naturesaura:infused_stone')

    //Coke
    event.remove({ output: 'immersiveengineering:coal_coke' })
    event.remove({ input: 'immersiveengineering:coal_coke' })

    //Plant Oil Thermal Compat
    event.remove({id:'thermal:compat/immersiveengineering/press_ie_hemp_to_plantoil'})

    //Metal Press Mold
    event.remove({id:/immersiveengineering:blueprint.+mold.+/})
    function mold(output) {event.custom({"type":"immersiveengineering:blueprint","category":"molds","inputs":[{"base_ingredient":{"item":"thermal:steel_ingot"},"count":3},{"item":"immersiveengineering:wirecutter"}],"result":{"item":output}})}
    mold('immersiveengineering:mold_plate')
    mold('immersiveengineering:mold_rod')
    mold('immersiveengineering:mold_gear')
    mold('immersiveengineering:mold_bullet_casing')
    mold('immersiveengineering:mold_wire')
    mold('immersiveengineering:mold_packing_4')

    //Wire Coils
    event.shaped('immersiveengineering:wirecoil_copper', [' A ','ABA',' A '], {A: 'minecraft:copper_ingot',B: '#balm:wooden_rods'})

    //Mechanical Components
    event.remove({id:/immersiveengineering:.+component_iron/})
    event.remove({id:/immersiveengineering:.+component_steel/})
    component('immersiveengineering:component_iron', 'minecraft:iron_ingot', 'thermal:iron_plate')
    component('immersiveengineering:component_steel', 'thermal:steel_ingot', 'thermal:steel_plate')

    //Sheetmetals
    sheetmetal('immersiveengineering:sheetmetal_iron', 'minecraft:iron_ingot')
    sheetmetal('immersiveengineering:sheetmetal_steel', 'thermal:steel_ingot')

    //Heavy Engineering Block
    event.shapeless('immersiveengineering:heavy_engineering', ['immersiveengineering:sheetmetal_steel', 'immersiveengineering:component_steel', 'thermal:electrum_ingot'])
    
    //Light Engineering Block
    event.shapeless('immersiveengineering:light_engineering', ['immersiveengineering:sheetmetal_iron', 'immersiveengineering:component_iron', 'thermal:constantan_ingot'])
    event.replaceInput({ output: 'immersiveengineering:light_engineering'},'minecraft:copper_ingot','thermal:constantan_ingot')

    //Redstone Engineering Block
    event.remove({id: 'immersiveengineering:crafting/rs_engineering'})
    box('immersiveengineering:rs_engineering', 'immersiveengineering:sheetmetal_iron', 'minecraft:redstone', 'thermal:rose_gold_ingot')
    box('4x immersiveengineering:rs_engineering', 'immersiveengineering:sheetmetal_iron', 'mekanism:alloy_infused', 'kubejs:red_alloy_ingot')

    //Thermoelectric Generator
    event.replaceInput({ output: 'immersiveengineering:thermoelectric_generator' },'#forge:plates/constantan','thermal:constantan_ingot'         )

    //Blueprints
    event.replaceInput({output:'immersiveengineering:blueprint'},'#forge:plates/iron','immersiveengineering:hammer')
    event.replaceInput({output:'immersiveengineering:blueprint'},'#forge:ingots/aluminum','thermal:invar_ingot')
    event.remove({id:"immersiveengineering:metalpress/electrode"})
    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'), [' A ','DDD','EEE'], {A:'immersiveengineering:mold_rod',D:'minecraft:blue_dye',E:'minecraft:paper'}
    )

    //Dielectric Paste
    arcfurnace3("powah:dielectric_paste", 16, "immersiveengineering:dust_coke", 4, "minecraft:clay_ball", 8, "minecraft:blaze_powder", 2, 153600, 300)

    //Wooden Barrel
    event.remove({output:'immersiveengineering:wooden_barrel'})
    event.shaped('immersiveengineering:wooden_barrel', ['AAA','BCB','BBB'], {A:'#forge:treated_wood_slab',B:'#forge:treated_wood',C:'immersiveengineering:wire_steel'
    })

    //Conveyor Belts
    event.replaceInput({output:'immersiveengineering:conveyor_basic'},'minecraft:iron_ingot','thermal:steel_ingot')

    //Radiator Block
    event.remove({output:'immersiveengineering:radiator'})
    detailedbox('2x immersiveengineering:radiator', 'immersiveengineering:sheetmetal_steel', 'mekanism:alloy_infused', 'immersiveengineering:ingot_hop_graphite', 'mekanism:advanced_control_circuit')

    //Generator Block
    event.replaceInput({output:'immersiveengineering:generator'},'immersiveengineering:component_iron','mekanism:energy_tablet')

    //Accumulators
        /**
     * Copies old Accumulator nbt to the new Accumulator (whoever Monifactory contibutor coded that, thank you (again))
     * @param {Internal.ModifyRecipeCraftingGrid} grid
     * @param {Internal.ItemStack} result
     * @returns {Internal.ItemStack}
     */
	const copyOldAccumulatorData = (grid, result) => {
		let item = grid.find(/immersiveengineering:capacitor_.+/)
		if (!item.nbt) {
            return result;
		}

		let nbt = {};
		if (item.nbt.energy) {
			nbt.energy = item.nbt.energy
		}
		return result.withNBT(nbt);
	}

    event.remove({output:/immersiveengineering:capacitor_.+/})
    accumulator('lv', 'thermal:lead_plate', 'thermal:lead_plate', 'minecraft:iron_ingot')
    accumulator('mv', 'thermal:nickel_plate', 'thermal:iron_plate', 'immersiveengineering:capacitor_lv')
    accumulator('hv', 'thermal:invar_plate', 'immersiveengineering:ingot_hop_graphite', 'immersiveengineering:capacitor_mv')

    //Circuit Board
    event.remove({output:'immersiveengineering:circuit_board'})
    event.custom({"type":"immersiveengineering:blueprint","category":"components","inputs":[{"base_ingredient":{"item":'immersiveengineering:plate_duroplast'},"count":2},{"base_ingredient":{"item":'mekanism:basic_control_circuit'},"count":3},{"base_ingredient":{"item":"thermal:copper_plate"},"count":4}],"result":{"item":"immersiveengineering:circuit_board"}})

    //Logic Circuit
    event.custom({"type":"immersiveengineering:blueprint","category":"components","inputs":[{"item":"immersiveengineering:circuit_board"},{"base_ingredient":{"item":'immersiveengineering:component_electronic'},"count":4}],"result":{"item":"immersiveengineering:logic_circuit"}})

    //Advanced Electric Component
    event.remove({id:'immersiveengineering:blueprint/component_electronic_adv'})
    event.custom({"type":"immersiveengineering:blueprint","category":"components","inputs":[{"base_ingredient":{"item":'immersiveengineering:plate_duroplast'},"count":2},{"base_ingredient":{"item":'immersiveengineering:electron_tube'},"count":2},{"base_ingredient":{"item":'kubejs:invar_wire'},"count":4}],"result":{"item":'immersiveengineering:component_electronic_adv'}})

    //External Heater
    event.replaceInput({output:'immersiveengineering:furnace_heater'},'#forge:plates/copper','thermal:steel_plate')

    //Treated Stick Fix
    event.shaped('4x immersiveengineering:stick_treated', ['A  ','A  ','   '], {A:'#forge:treated_wood'})

    //Slag Brick StoneCutter Fix
    event.remove({id:'immersiveengineering:stonecutting/slag_brick'})
    event.stonecutting('immersiveengineering:slag_brick', 'thermal:slag')

    //Remove Arc Furnace Ore Proc
    event.remove({id:/immersiveengineering:arcfurnace\/(raw|ore|dust|netherite)_/})

})