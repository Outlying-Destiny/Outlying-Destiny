ServerEvents.recipes(event => {

    //Dark Tank
    event.remove({id:'evilcraft:crafting/dark_tank'})
    event.remove({id:'evilcraft:special/dark_tank_large'})
    event.shaped('evilcraft:dark_tank', [' A ','BCB',' A '], {A: 'evilcraft:dark_gem',B: 'minecraft:iron_ingot',C: 'enderio:fused_quartz'})
    event.shaped(Item.of('evilcraft:dark_tank', '{Fluid:{Amount:0,FluidName:"minecraft:empty"},capacity:144000}'), [' A ','BCB',' A '], {A: 'evilcraft:dark_block',B: 'minecraft:iron_block',C: 'enderio:fused_quartz'})
    
})