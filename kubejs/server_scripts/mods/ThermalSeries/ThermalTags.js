ServerEvents.tags('item', event => {

    //Sawdust
    event.removeAllTagsFrom('thermal:sawdust')

    //Ruby / Sapphire
    event.removeAllTagsFrom(/thermal:(deepslate_){0,1}(ruby|sapphire)_ore/)

    //Plates & Gears
    event.add('forge:plates', ['thermal_extra:shellite_plate', 'thermalendergy:prismalium_plate', 'thermalendergy:melodium_plate', 'thermalendergy:stellarium_plate'])
    event.add('forge:gears', ['thermal_extra:shellite_gear', 'thermalendergy:prismalium_gear', 'thermalendergy:melodium_gear', 'thermalendergy:stellarium_gear'])
    event.removeAllTagsFrom(/thermal:(ruby|sapphire)_gear/)
    
    //Dusts
    event.removeAllTagsFrom(/thermal_extra:(arcane_gold|zinc)_dust/)
    
    //Niter Dust
    event.add('forge:dusts/saltpeter', 'thermal:niter_dust')

    //Thermal Extra Armor
    event.removeAllTagsFrom(/thermal_extra:.+_(helmet|chestplate|leggings|boots|sword|axe|pickaxe|shovel|hoe|excavator|hammer|knife|sickle)/)

    //Rubberwood Logs
    event.add('thermal:rubberwood_logs', '#forge:rubberwood_logs')
})