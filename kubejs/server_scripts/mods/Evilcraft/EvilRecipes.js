ServerEvents.recipes(event => {

    //Dark Gems
    event.remove({id:'evilcraft:crafting/dark_gem'})
    event.remove({id:'evilcraft:crafting/dark_block'})
    event.shapeless('4x evilcraft:dark_gem', 'evilcraft:dark_block')
    event.shaped('evilcraft:dark_block', ['AA ','AA ','   '], {A: 'evilcraft:dark_gem'})

    //Dark Power Gems
    event.remove({id:'evilcraft:crafting/dark_power_gem'})
    event.remove({id:'evilcraft:crafting/dark_power_gem_block'})
    event.shapeless('4x evilcraft:dark_power_gem', 'evilcraft:dark_power_gem_block')
    event.shaped('evilcraft:dark_power_gem_block', ['AA ','AA ','   '], {A: 'evilcraft:dark_power_gem'})

    //Dark Tank
    event.remove({id:'evilcraft:crafting/dark_tank'})
    event.remove({id:'evilcraft:special/dark_tank_large'})
    //event.shaped('evilcraft:dark_tank', [' A ','BCB',' A '], {A: 'evilcraft:dark_gem',B: 'minecraft:iron_ingot',C: 'enderio:fused_quartz'})
    //event.shaped(Item.of('evilcraft:dark_tank', '{Fluid:{Amount:0,FluidName:"minecraft:empty"},capacity:144000}'), [' A ','BCB',' A '], {A: 'evilcraft:dark_block',B: 'minecraft:iron_block',C: 'enderio:fused_quartz'})
    
    //Blood Extractor
    event.remove({id:'evilcraft:crafting/blood_extractor'})
    event.custom({"type": "extendedcrafting:shaped_table","pattern": [
        "   A ",
        " BCAA",
        " BDC ",
        "ECBB ",
        " E   "],"key": {"A": {"item": "mob_grinding_utils:spikes"},"B": {"item": "thermal:signalum_glass"},"C": {"item": "thermal_extra:soul_infused_block"},"D": {"item": "kubejs:abyssal_crystal_block"},"E": {"item": "extendedcrafting:black_iron_block"}},"result": {"item": "evilcraft:blood_extractor"}
    })

    //Blood Extractor
    //event.remove({id:'evilcraft:crafting/blood_extractor'})
    //event.custom({"type": "extendedcrafting:shaped_table","pattern": [
    //    "   A ",
    //    " BBAA",
    //    " CDB ",
    //    "ECCB ",
    //    "EE   "],"key": {"A": {"item": "mob_grinding_utils:spikes"},"B": {"item": "thermal:signalum_glass"},"C": {"item": "thermal_extra:soul_infused_block"},"D": {"item": "kubejs:abyssal_crystal_block"},"E": {"item": "extendedcrafting:black_iron_block"}},"result": {"item": "evilcraft:blood_extractor"}
    //})


    //Weather Container
    event.remove({id:/evilcraft:crafting\/weather_container/})

    //Rejuvenated Flesh
    event.remove({id:'evilcraft:crafting/flesh_rejuvenated'})
    event.shapeless('evilcraft:flesh_rejuvenated', ['evilcraft:flesh_humanoid', 'evilcraft:garmonbozia'])

    //Blood Infusion Core
    event.remove({id:'evilcraft:crafting/blood_infusion_core'})
    
})