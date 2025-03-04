ServerEvents.recipes(event => {

    //Functions
    //function smelting(output, input, xp){event.smelting(output, input).xp(xp)}
    function blastingo(output, input, xp){event.blasting(output, input).xp(xp)}
    function blasting(output, input, xp){event.smelting(output, input).xp(xp); {event.blasting(output, input).xp(xp)}}
    //function smoking(output, input, xp){event.smelting(output, input).xp(xp); {event.smoking(output, input).xp(xp)}}

    //Dust to Ingot
    event.remove({id:'draconicevolution:components/draconium_ingot_from_dust'})
    blasting('bigreactors:ludicrite_ingot', 'bigreactors:ludicrite_dust', 0.7)
    blasting('bigreactors:ridiculite_ingot', 'bigreactors:ridiculite_dust', 0.7)
    blasting('bigreactors:inanite_ingot', 'bigreactors:inanite_dust', 0.7)
    blasting('bigreactors:insanite_ingot', 'bigreactors:insanite_dust', 0.7)
    blasting('draconicevolution:draconium_ingot', 'draconicevolution:draconium_dust', 0.7)
    blastingo('mekanism:ingot_uranium', 'mekanism:dust_uranium', 0.7)
    
    //Ore to Ingot
    event.remove({id:/minecraft:quartz(_from_blasting)?$/})
    event.remove({id:/thermal:smelting\/niter_from_/})
    blasting('minecraft:quartz', '#forge:ores/quartz', 0.6)
    blasting('ae2:certus_quartz_crystal', '#forge:ores/certus_quartz', 0.6)
    blasting('mekanism:fluorite_gem', '#forge:ores/fluorite', 0.6)
    blasting('evilcraft:dark_gem', '#forge:ores/dark', 0.6)
    blastingo('draconicevolution:draconium_ingot', '#forge:ores/draconium', 1.0)
    blasting('thermal:niter', '#forge:ores/niter', 0.6)

    //Red Alloy Ingot
    blasting('kubejs:red_alloy_ingot', 'kubejs:red_alloy_compound', 0)
})