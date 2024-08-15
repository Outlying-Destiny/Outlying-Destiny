JEIEvents.hideItems(event => {

    //Blood Magic Stuff
    event.hide(['#bloodmagic:fragments', '#bloodmagic:gravels'])
    
    //Furnaces
    event.hide(['quark:deepslate_furnace', 'quark:blackstone_furnace'])

    //Gunpowder Sack
    event.hide('quark:gunpowder_sack')

    //Draconic
    event.hide('draconicevolution:generator')

    //Immersive Engineering
    event.hide(['immersiveengineering:dust_saltpeter', 'immersiveengineering:sawblade', 'immersiveengineering:coal_coke', 'immersiveengineering:grindingdisk'])
    event.hide(/immersiveengineering.+alu.+/)
    event.hide('immersiveengineering:metal_ladder_alu')

    //Industrial Foregoing
    event.hide(['industrialforegoing:raw_ore_meat_bucket', 'industrialforegoing:raw_ore_meat', 'industrialforegoing:fermented_ore_meat_bucket', 'industrialforegoing:fermented_ore_meat', 'industrialforegoing:fermentation_station', 'industrialforegoing:washing_factory', 'industrialforegoing:fluid_sieving_machine'])
    event.hide(['industrialforegoing:tinydryrubber', 'industrialforegoing:plastic'])
    event.hide([/industrialforegoing:conveyo.+/, /industrialforegoing:.+_transporter_type/])
    event.hide(/industrialforegoing:mycelial_.+/)
    event.hide(/industrialforegoing:infinity.+/)
    event.hide(['industrialforegoing:biofuel_generator', 'industrialforegoing:pitiful_generator', 'industrialforegoing:resourceful_furnace'])

    //Building Gadgets
    event.hide(['buildinggadgets2:template_manager', 'buildinggadgets2:template', 'buildinggadgets2:redprint'])

    //HammerLib Gears
    event.hide('hammerlib:gears/wooden')
    event.hide('hammerlib:gears/stone')

    //Dimensional Shard Ores
    event.hide(/rftoolsbase:dimensionalshard_.+/)

    //ElementalCraft Pure Ores
    event.hide(/elementalcraft:pure_ore/)
    event.hide('elementalcraft:purifier')

    //Twilight Stuff
    event.hide(/twilightforest:.+boss_spawner/)
    event.hide('twilightforest:uncrafting_table')

    //Thermal Stuff
    event.hide(/thermal:.+mushroom_spores/)

    //Mekanism Personal Chest
    //event.hide('mekanism:personal_chest')

    //PneumaticCraft Compressors
    event.hide(['pneumaticcraft:air_compressor', 'pneumaticcraft:advanced_air_compressor', 'pneumaticcraft:thermal_compressor', 'pneumaticcraft:liquid_compressor', 'pneumaticcraft:advanced_liquid_compressor', 'pneumaticcraft:manual_compressor', 'pneumaticcraft:electrostatic_compressor','pneumaticcraft:pneumatic_dynamo'])

    //Thermal Stuff
    //event.hide(/thermal:dynamo.+/)
    event.hide([/thermal_extra:.+_augment_[1-2]/, /thermal.+dynamo_.+_augmen.+/, /thermal_extra:fluid_tank_augment_[4-6]/, /thermal_extra:potion_.+_augment_[3-4]/, /thermal_extra:rf_coil.+augment_[4-5]/, 'thermal_extra:machine_speed_augment_3', 'thermal_extra:machine_efficiency_augment_3', /thermal_extra:area_radius_augment_[3-4]/, 'thermalendergy:melodic_range_augment'])
    event.hide('thermal_extra:upgrade_augment')

    //ProjectRed Backpacks
    event.hide(/projectred_exploration:.+backpack/)

    //EnderIO Stuff
    event.hide(['enderio:silicon', 'enderio:flour', 'enderio:cake_base', 'enderio:clayed_glowstone'])
    event.hide(['enderio:drain', 'enderio:stirling_generator', 'enderio:crafter', 'enderio:soul_engine'])

    //Extended Crafting Redstone Ingot
    event.hide('extendedcrafting:redstone_ingot')

    //Ender Pearl Dust
    event.hide(['ae2:ender_dust', 'enderio:powdered_ender_pearl'])

    //Quartz Dust
    event.hide(['mekanism:dust_quartz', 'enderio:powdered_quartz'])

    //Cobalt Dust
    event.hide('enderio:powdered_cobalt')

    //Sawdust
    event.hide(['immersiveengineering:dust_wood', 'thermal:sawdust'])

    //Aether Valkyrie Lance
    event.hide('aether:valkyrie_lance')

    //Yellorium Stuff
    event.hide(/bigreactors.+yelloriu.+/)
    event.hide(/mysticalagriculture:yellorium.+/)
    event.hide('bigreactors:deepslate_yellorite_ore')

    //Sophisticated Storage Stuff
    event.hide('sophisticatedstorage:controller')
    event.hide(/sophisticatedstorage:storag.+/)

    //Functional Storage Stuff
    event.hide('functionalstorage:collector_upgrade')

    //Magnet
    event.hide('thermal:flux_magnet')
    event.hide('immersiveengineering:toolupgrade_powerpack_magnet')
    event.hide('enderio:electromagnet')

    //Vacuum
    event.hide('thermal:device_collector')

    //Item Collector
    event.hide('itemcollectors:basic_collector')

    //Construction Wand Stuff
    event.hide(['constructionwand:stone_wand', 'constructionwand:iron_wand'])

    //Iron Jetpacks Stuff
    event.hide('ironjetpacks:capacitor')
    event.hide('ironjetpacks:thruster')
    event.hide('ironjetpacks:cell')
    event.hide(/ironjetpacks:.+coil/)

    //Wrenches
    event.hide(['bigreactors:wrench', 'hammerlib:wrench', 'ad_astra:wrench', 'enderio:yeta_wrench'])

    //Ad Astra Stuff
    event.hide(/ad_astra:.+fluid_pip.+/)
    event.hide('ad_astra:coal_generator')

    //Masterful Machinery Stuff
    event.hide(/mm:.+energy_port_output/)
    event.hide(['mm:the_vat_tiny_item_port_output'])

    //EnderIO Conduits and Upgrades
    event.hide(/enderio.+condui.+/)
    event.hide(/enderio.+filte.+/)
    event.hide(/enderio:extraction_speed_upgrade.+/)

    //Fluid Buckets
    event.hide(['enderio:xp_juice_bucket', 'pneumaticcraft:biodiesel_bucket', 'pneumaticcraft:vegetable_oil_bucket', 'pneumaticcraft:ethanol_bucket', 'thermal:creosote_bucket'])

})

JEIEvents.hideFluids(event => {

    //Experience
    let exp = ['cofh_core:experience', 'enderio:xp_juice', 'enderio:flowing_xp_juice', 'sophisticatedcore:xp_still']
    exp.forEach(fluid => { event.hide(fluid) })
    
    //Biodiesel Line
    let biodiesel = ['pneumaticcraft:biodiesel', 'pneumaticcraft:vegetable_oil', 'pneumaticcraft:ethanol']
    biodiesel.forEach(fluid => { event.hide(fluid) })

    //Creosote
    event.hide('thermal:creosote')
})