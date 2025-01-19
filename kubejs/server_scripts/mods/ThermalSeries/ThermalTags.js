ServerEvents.tags('item', event => {

    //Sawdust
    event.removeAllTagsFrom('thermal:sawdust')

    //Ruby / Sapphire
    event.removeAllTagsFrom(['thermal:ruby_ore', 'thermal:deepslate_ruby_ore', 'thermal:sapphire_ore', 'thermal:deepslate_sapphire_ore'])

    //Plates & Gears
    event.add('forge:plates', ['thermal_extra:shellite_plate', 'thermalendergy:prismalium_plate', 'thermalendergy:melodium_plate', 'thermalendergy:stellarium_plate'])
    event.add('forge:gears', ['thermal_extra:shellite_gear', 'thermalendergy:prismalium_gear', 'thermalendergy:melodium_gear', 'thermalendergy:stellarium_gear'])
    
    //Niter Dust
    event.add('forge:dusts/saltpeter', 'thermal:niter_dust')

    //Thermal Extra Armor
    event.removeAllTagsFrom(/thermal_extra:.+_(helmet|chestplate|leggings|boots|sword|axe|pickaxe|shovel|hoe|excavator|hammer|knife|sickle)/)

})