ServerEvents.recipes(event => {

    //Void Portal
    event.remove({id:'javd:portal_block'})
    event.custom({"type": "extendedcrafting:shaped_table","pattern": ["ABBBA","BCDCB","BDEDB","BCDCB","ABBBA"],"key": {"A": {"item": "thermal_extra:abyssal_block"},"B": {"item": "compressium:obsidian_2"},"C": {"item": "extendedcrafting:black_iron_block"},"D": {"item": "rftoolsbase:dimensionalshard"},"E": {"item": "thermal_extra:dragonsteel_block"}},"result": {"item": "javd:portal_block"}})

})