ServerEvents.recipes(event => {

    //Functions
    function box(output, input1, input2, input3){event.shaped(output, ['ABA','BCB','ABA'], {A: input1,B: input2,C: input3})}
    function detailedbox(output, input1, input2, input3, input4){event.shaped(output, ['ABA','CDC','ABA'], {A: input1,B: input2,C: input3,D: input4})}
    function mattoblo(block, material){
      event.shapeless(block, material)
      event.shapeless(material, block)
    }
    function custommat(name, material){
        event.shapeless('kubejs:'+name+'_component', ['extendedcrafting:black_iron_slate', 'extendedcrafting:luminessence', '2x '+material])
        event.shaped('kubejs:'+name+'_catalyst', [' A ','ABA',' A '], {A: 'kubejs:'+name+'_component',B: 'extendedcrafting:black_iron_ingot'})
    }

    //Custom Materials
    custommat('automaton', 'kubejs:automaton_ingot')
    custommat('abyssal', 'thermal_extra:abyssal_ingot')
    custommat('signalum', 'thermal:signalum_ingot')

    //Machine Frame
    event.remove({id:'extendedcrafting:frame'})
    box('extendedcrafting:frame', 'extendedcrafting:black_iron_ingot', 'thermal:enderium_glass', 'enderio:ensouled_chassis')

    //Ender Crafter
    event.remove({id:'extendedcrafting:ender_crafter'})
    event.remove({id:'extendedcrafting:auto_ender_crafter'})
    event.shaped('extendedcrafting:ender_crafter', ['AAA','BCB','BBB'], {A: 'enderio:pulsating_alloy_ingot',B: 'extendedcrafting:ender_ingot',C: 'kubejs:ender_core'}).damageIngredient('kubejs:ender_core')
    detailedbox('extendedcrafting:auto_ender_crafter', 'extendedcrafting:ender_ingot', 'kubejs:abyssal_component', 'kubejs:automaton_component', 'extendedcrafting:ender_crafter')
    
    //Ender Alternator
    event.remove({id:'extendedcrafting:ender_alternator'})
    event.shaped('2x extendedcrafting:ender_alternator', ['   ',' A ','BBB'], {A: 'enderio:pulsating_alloy_ingot',B: 'extendedcrafting:ender_ingot'})

    //Compressed Crafting Tables
    mattoblo('kubejs:compressed_crafting_table', '9x minecraft:crafting_table')
    mattoblo('kubejs:double_compressed_crafting_table', '9x kubejs:compressed_crafting_table')
    
    //Basic Crafting Table
    event.remove({id:'extendedcrafting:basic_table'})
    event.remove({id:'extendedcrafting:advanced_auto_table'})
    event.shaped('extendedcrafting:basic_table', ['ABA',' C ','DDD'], {A: 'kubejs:signalum_catalyst',B: 'kubejs:double_compressed_crafting_table',C: 'extendedcrafting:frame',D: 'extendedcrafting:black_iron_slate'})
    detailedbox('extendedcrafting:basic_auto_table', 'extendedcrafting:black_iron_ingot', 'kubejs:signalum_catalyst', 'kubejs:automaton_component', 'extendedcrafting:basic_table')

    //Crafting Core
    event.remove({id:'extendedcrafting:crafting_core'})
    event.custom({"type": "extendedcrafting:shaped_table","pattern": ["ABA","CDC","AEA"],"key": {"A": {"item": "extendedcrafting:black_iron_ingot"},"B": {"item": "extendedcrafting:ender_catalyst"},"C": {"item": "extendedcrafting:enhanced_ender_component"},"D": {"item": "extendedcrafting:frame"},"E": {"item": "extendedcrafting:black_iron_slate"}},"result": {"item": "extendedcrafting:crafting_core"}})

    //Advanced Table
    event.remove({id:'extendedcrafting:advanced_table'})
    event.remove({id:'extendedcrafting:advanced_auto_table'})
    event.custom({"type": "extendedcrafting:shaped_table","pattern": ["AAA"," B ","CDC"],"key": {"A": [{"item": "extendedcrafting:basic_table"},{"item": "extendedcrafting:basic_auto_table"}],"B": {"item": "thermal_extra:abyssal_block"},"C": {"item": "kubejs:abyssal_catalyst"},"D": {"item": "kubejs:abyssal_component"}},"result": {"item": "extendedcrafting:advanced_table"}})
    detailedbox('extendedcrafting:advanced_auto_table', 'extendedcrafting:black_iron_ingot', 'kubejs:abyssal_catalyst', 'kubejs:automaton_component', 'extendedcrafting:advanced_table')
})