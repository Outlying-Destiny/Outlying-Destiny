JEIEvents.hideItems(event => {

    //Blood Magic Stuff
    event.hide([ '#bloodmagic:fragments', '#bloodmagic:gravels' ])
    
    //Furnaces
    event.hide([ 'quark:deepslate_furnace', 'quark:blackstone_furnace' ])

    //Gunpowder Sack
    event.hide('quark:gunpowder_sack')

    //IE Coke
    event.hide('immersiveengineering:coal_coke')

    //HammerLib Gears
    event.hide('hammerlib:gears/wooden')
    event.hide('hammerlib:gears/stone')

    //Dimensional Shard Ores
    event.hide(/rftoolsbase:dimensionalshard_.+/)

    //ElementalCraft Pure Ores
    event.hide(/elementalcraft:pure_ore/)
    event.hide('elementalcraft:purifier')

    //Twilight Forest boss spawners
    event.hide(/twilightforest:.+boss_spawner/)

    //Twilight Forest Uncrafting Table
    event.hide('twilightforest:uncrafting_table')

    //Mekanism Personal Chest
    event.hide('mekanism:personal_chest')

    //PneumaticCraft Compressors
    event.hide(['pneumaticcraft:air_compressor', 'pneumaticcraft:advanced_air_compressor', 'pneumaticcraft:thermal_compressor', 'pneumaticcraft:liquid_compressor', 'pneumaticcraft:advanced_liquid_compressor', 'pneumaticcraft:manual_compressor', 'pneumaticcraft:electrostatic_compressor','pneumaticcraft:pneumatic_dynamo'])

    //Thermal Dynamos
    //event.hide(/thermal:dynamo.+/)

    //ProjectRed Backpacks
    event.hide(/projectred_exploration:.+backpack/)

    //EnderIO Stuff
    event.hide('enderio:silicon')
    event.hide('enderio:flour')
    event.hide('enderio:cake_base')
    event.hide('enderio:clayed_glowstone')

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

    //IE Nitrate Dust
    event.hide('immersiveengineering:dust_saltpeter')

    //Aether Valkyrie Lance
    event.hide('aether:valkyrie_lance')

    //Yellorium Stuff
    event.hide(/bigreactors.+yellorium.+/)
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

    //IE Sawblade
    event.hide('immersiveengineering:sawblade')

    //Wrenches
    event.hide(['bigreactors:wrench', 'hammerlib:wrench', 'ad_astra:wrench', 'enderio:yeta_wrench'])

    //Ad Astra Fluid Pipes
    event.hide(/ad_astra:.+fluid_pip.+/)

    //Masterful Machinery Stuff
    event.hide(['mm:soul_catcher_energy_port_output', 'mm:the_vat_energy_port_output', 'mm:the_vat_item_port_output'])

    //EnderIO Conduits and Upgrades
    event.hide(/enderio.+condui.+/)
    event.hide(/enderio.+filte.+/)
    event.hide(/enderio:extraction_speed_upgrade.+/)
})