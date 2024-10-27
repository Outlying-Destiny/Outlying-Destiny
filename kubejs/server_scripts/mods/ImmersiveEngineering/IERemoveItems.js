ServerEvents.recipes(event => {

    //Crusher
    event.remove({id:/immersiveengineering:crusher.+/})
    event.remove({id:/farmersdelight:integration.+immersiveengineering.+crusher.+/})

    //Saw Mill
    event.remove({id:/immersiveengineering.+sawmill.+/})
    event.remove({id:'immersiveengineering:crafting/sawblade'})

    //Magnet
    event.remove({id:'immersiveengineering:crafting/toolupgrade_powerpack_magnet'})

    //Grinding Disk
    event.remove({id:'immersiveengineering:bottling/grindingdisk'})

    //Aluminium
    event.remove({output:/immersiveengineering.+alu.+/})
    event.remove({id:'industrialforegoing:laser_drill_ore/raw_materials/aluminum'})
    event.remove({id:'immersiveengineering:crafting/metal_ladder_alu'})
    event.remove({id:'immersiveengineering:arcfurnace/raw_ore_aluminum'})
    event.replaceInput({output:/immersiveengineering:.+/},'#forge:ingots/aluminum','thermal:invar_ingot')
    event.replaceInput({output:/immersiveengineering:.+/},'#forge:plates/aluminum','thermal:invar_plate')
    event.replaceInput({output:/immersiveengineering:.+/},'#forge:dusts/aluminum','thermal:invar_dust')
    event.replaceInput({output:/immersiveengineering:.+/},'#forge:rods/aluminum','kubejs:invar_rod')
    event.replaceInput({output:/immersiveengineering:.+/},'#forge:wires/aluminum','kubejs:invar_wire')
    event.remove({id:'immersiveengineering:crafting/wirecoil_steel'})
    event.remove({id:'immersiveengineering:crafting/wirecoil_redstone'})
    event.shaped('4x immersiveengineering:wirecoil_steel', [' A ','BCB',' A '], {A: 'immersiveengineering:wire_steel',B: 'kubejs:invar_wire',C: '#balm:wooden_rods'})
    event.shaped('4x immersiveengineering:wirecoil_redstone', [' A ','BCB',' A '], {A: 'kubejs:invar_wire',B: 'minecraft:redstone',C: '#balm:wooden_rods'})
    event.remove({id:/therma(l|l_extra):compat.+/})

})