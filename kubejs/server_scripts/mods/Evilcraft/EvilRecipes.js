ServerEvents.recipes(event => {

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
        " E   "],"key": {"A": {"item": "mob_grinding_utils:spikes"},"B": {"item": "thermal:signalum_glass"},"C": {"item": "kubejs:dark_soul_infused_block"},"D": {"item": "kubejs:ender_core"},"E": {"item": "extendedcrafting:black_iron_block"}},"result": {"item": "evilcraft:blood_extractor"}})

//Blood Extractor
event.remove({id:'evilcraft:crafting/blood_extractor'})
event.custom({"type": "extendedcrafting:shaped_table","pattern": [
    "   A ",
    " BBAA",
    " CDB ",
    "ECCB ",
    "EE   "],"key": {"A": {"item": "mob_grinding_utils:spikes"},"B": {"item": "thermal:signalum_glass"},"C": {"item": "kubejs:dark_soul_infused_block"},"D": {"item": "kubejs:ender_core"},"E": {"item": "extendedcrafting:black_iron_block"}},"result": {"item": "evilcraft:blood_extractor"}})


})