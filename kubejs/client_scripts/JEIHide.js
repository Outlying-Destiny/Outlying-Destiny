JEIEvents.hideItems(event => {

    //Actually Additions
    event.hide([/actuallyadditions:lamp.+/, /actuallyadditions:.+_aiot/, /actuallyadditions:.+_crystal_cluster/, /actuallyadditions:.+pattern/, /actuallyadditions:ric.+/, /actuallyadditions:void_crysta(l|l_shard|l_block)/, /actuallyadditions:empowered_void_crysta(l|l_block)/, /actuallyadditions.+black_quart.+/, 'actuallyadditions:oil_generator', 'actuallyadditions:coal_generator', 'actuallyadditions:leaf_generator', 'actuallyadditions:bio_reactor', 'actuallyadditions:heat_collector', 'actuallyadditions:wings_of_the_bats', 'actuallyadditions:laser_upgrade_range', 'actuallyadditions:laser_upgrade_invisibility', 'actuallyadditions:lamp_controller', 'actuallyadditions:crate_keeper', 'actuallyadditions:crate_small', 'actuallyadditions:bats_wing', 'actuallyadditions:water_bowl', 'actuallyadditions:ender_star', 'actuallyadditions:engineers_goggles', 'actuallyadditions:engineers_goggles_advanced', 'actuallyadditions:tiny_torch', 'actuallyadditions:shock_suppressor', 'actuallyadditions:powered_furnace', 'actuallyadditions:lava_factory_controller', 'actuallyadditions:lava_factory_casing', 'actuallyadditions:xp_solidifier','actuallyadditions:crusher', 'actuallyadditions:crusher_double', 'actuallyadditions:greenhouse_glass', 'actuallyadditions:ring', 'actuallyadditions:ring_of_magnetizing', 'actuallyadditions:ring_of_growth', 'actuallyadditions:flax_seeds', 'actuallyadditions:travelers_sack', 'actuallyadditions:void_sack', 'actuallyadditions:teleport_staff', 'actuallyadditions:feeder', 'actuallyadditions:energizer', 'actuallyadditions:enervator', 'actuallyadditions:farmer', 'actuallyadditions:battery_box', 'actuallyadditions:laser_relay', 'actuallyadditions:laser_relay_advanced', 'actuallyadditions:laser_relay_extreme', 'actuallyadditions:laser_relay_fluids', 'actuallyadditions:laser_relay_item_advanced', 'actuallyadditions:phantom_booster', 'actuallyadditions:fermenting_barrel', 'actuallyadditions:canola_press', 'actuallyadditions:wood_casing', 'actuallyadditions:crafter_on_a_stick'])
    event.hide(['actuallyadditions:lens_of_the_miner', 'actuallyadditions:lens_of_disruption', 'actuallyadditions:lens_of_disenchanting', 'actuallyadditions:lens_of_detonation', 'actuallyadditions:lens_of_certain_death', 'actuallyadditions:lens_of_the_killer'])

    //Ad Astra
    event.hide([/ad_astra:.+fluid_pip.+/, 'ad_astra:water_pump'])
    event.hide(['ad_astra:coal_generator', 'ad_astra:etrionic_blast_furnace'])

    //Alchemistry
    event.hide('chemlib:lithium_dust')

    //Applied Energistics 2
    event.hide(['ae2:crafting_card', 'ae2:spatial_anchor', 'ae2:crystal_resonance_generator', 'ae2:pattern_access_terminal', 'ae2wtlib:wireless_pattern_access_terminal'])
    event.hide(['expatternprovider:circuit_cutter', 'expatternprovider:pattern_terminal_upgrade', /expatternprovider:assembler_matrix_/])
    event.hide(['megacells:radioactive_cell_component', 'megacells:radioactive_chemical_cell'])

    //Baubley Heart Canisters
    event.hide(/bhc:.+_heart_melted/)
    
    //Blood Magic
    event.hide(['#bloodmagic:fragments', '#bloodmagic:gravels', 'bloodmagic:sand_netherite'])

    //Botania
    event.hide(/botania:.+_mushroom/)

    //Building Gadgets
    event.hide(['buildinggadgets2:template_manager', 'buildinggadgets2:template', 'buildinggadgets2:redprint'])
   
    //Compressium
    event.hide(/compressium:.+_[3-9]/)
    
    //Construction Wand
    event.hide(['constructionwand:stone_wand', 'constructionwand:iron_wand'])

    //Draconic Evolution
    event.hide(['draconicevolution:generator', 'draconicevolution:overworld_draconium_ore', 'draconicevolution:deepslate_draconium_ore', 'draconicevolution:nether_draconium_ore'])

    //Ender Crop
    event.hide('endercrop:tilled_end_stone')

    //EnderIO
    event.hide(['enderio:silicon', 'enderio:flour', 'enderio:cake_base', 'enderio:clayed_glowstone', 'enderio:glider_wing', 'enderio:enticing_crystal', /enderio:(powered_){0,1}light.+/, Item.of('minecraft:enchanted_book').enchant('enderio:repellent', 0)])
    event.hide(['enderio:drain', 'enderio:stirling_generator', 'enderio:crafter', 'enderio:soul_engine', 'enderio:primitive_alloy_smelter', 'enderio:alloy_smelter', 'enderio:vacuum_chest', 'enderio:xp_vacuum'])
    event.hide([/enderio.+condui.+/, /enderio.+filte.+/, /enderio:extraction_speed_upgrade.+/])

    //ElementalCraft
    event.hide([/elementalcraft:pure_ore/, 'elementalcraft:purifier', /elementalcraft:(water|air)_mill_grindstone/])
    event.hide(['elementalcraft:inert_crystal_ore', 'elementalcraft:deepslate_inert_crystal_ore'])

    //EvilCraft
    event.hide([/evilcraft:exalted_crafte.+/, 'evilcraft:entangled_chalice', /evilcraft:dark_tank/, /evilcraft:(poisonous_libelle|werewolf)_spawn_egg$/, 'evilcraft:poison_sac', 'evilcraft:flesh_werewolf', /evilcraft:werewolf_(fur|bone)$/, 'evilcraft:ender_tear', 'evilcraft:blood_stain', 'evilcraft:spirit_portal', /evilcraft:broom(_part)?$/])
    
    //Extended Crafting
    event.hide([/extendedcrafting:(enhanced_){0,1}redstone_(ingot|nugget|component|catalyst)/, /extendedcrafting:(auto_){0,1}flux_(alternator|crafter|star)/, 'packagedexcrafting:flux_crafter'])
    event.hide(/extendedcrafting:(basic|advanced|elite|ultimate)_(component|catalyst)/)
    event.hide('extendedcrafting:handheld_table')

    //Extreme Reactors
    event.hide([/bigreactors.+yelloriu.+/, /mysticalagriculture:yellorium.+/])
    event.hide(['bigreactors:yellorite_ore', 'bigreactors:deepslate_yellorite_ore', 'bigreactors:benitoite_ore', 'bigreactors:anglesite_ore'])

    //Farming for Blockheads
    event.hide(['farmingforblockheads:market', 'farmingforblockheads:chicken_nest', 'farmingforblockheads:feeding_trough'])

    //Flux Networks
    event.hide('fluxnetworks:admin_configurator')
    
    //Forbiddern Arcanus
    event.hide(['forbidden_arcanus:xpetrified_ore', 'forbidden_arcanus:stella_arcanum', 'forbidden_arcanus:orb_of_temporary_flight', 'forbidden_arcanus:arcane_bone_meal', 'forbidden_arcanus:golden_orchid_seeds', 'forbidden_arcanus:arcane_crystal_dust_speck', 'forbidden_arcanus:nipa'])

    //FTBQuests
    event.hide(/ftbquests:.+/)

    //Functional Storage
    event.hide(['functionalstorage:collector_upgrade', 'functionalstorage:ender_drawer', /functionalstorage:(framed_){0,1}controller_extension/])

    //Immersive Engineering
    event.hide(['immersiveengineering:dust_saltpeter', 'immersiveengineering:sawblade', 'immersiveengineering:coal_coke', 'immersiveengineering:grindingdisk', 'immersiveengineering:mold_packing_9', 'immersiveengineering:glider', 'immersiveengineering:mold_unpacking', 'immersiveengineering:slag_gravel', 'immersiveengineering:toolupgrade_powerpack_induction', 'immersiveengineering:slag', 'immersiveengineering:slag_glass'])
    event.hide([/immersiveengineering.+alu.+/, 'immersiveengineering:metal_ladder_alu'])
    
    //Industrial Foregoing
    event.hide(['industrialforegoing:raw_ore_meat_bucket', 'industrialforegoing:raw_ore_meat', 'industrialforegoing:fermented_ore_meat_bucket', 'industrialforegoing:fermented_ore_meat', 'industrialforegoing:fermentation_station', 'industrialforegoing:washing_factory', 'industrialforegoing:fluid_sieving_machine'])
    event.hide(['industrialforegoing:tinydryrubber', 'industrialforegoing:plastic'])
    event.hide([/industrialforegoing:conveyo.+/, /industrialforegoing:.+_transporter_type/])
    event.hide(/industrialforegoing:mycelial_.+/)
    event.hide(/industrialforegoing:infinity.+/)
    event.hide(['industrialforegoing:biofuel_generator', 'industrialforegoing:pitiful_generator', 'industrialforegoing:resourceful_furnace', 'industrialforegoing:spores_recreator', 'industrialforegoing:dye_mixer', 'industrialforegoing:mechanical_dirt', 'industrialforegoing:water_condensator', 'industrialforegoing:hydroponic_bed'])
    event.hide([/industrialforegoing:.+_black_hole_.+/, 'industrialforegoing:black_hole_controller'])

    //Iron Jetpacks
    event.hide(['ironjetpacks:cell', 'ironjetpacks:capacitor', /ironjetpacks:.+_coil/, Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:creative"}').strongNBT()])

    //Laserio
    event.hide('laserio:laser_connector_advanced')

    //Mekanism
    event.hide(['mekanism:formulaic_assemblicator', 'mekanism:crafting_formula', /mekanism:(restrictive|diversion)_transporter/, /mekanism:(basic|advanced|elite|ultimate)_tier_installer/, /mekanism_extras:(absolute|supreme|cosmic|infinite)_tier_installer/, 'mekanism:upgrade_gas', /mekanism:dynamic_(tank|valve)/, 'mekanism:oredictionificator'])
    event.hide(['mekanism:enriched_tin', 'mekanism:enriched_refined_obsidian', 'mekanism_extras:enriched_lead'])
    event.hide([/mekanism:qio_(drive_array|dashboard|exporter|importer|redstone_adapter)/, 'mekanism:portable_qio_dashboard', /mekanism:qio_drive_(base|hyper_dense|time_dilating|supermassive)/, /mekanism_extras:qio_drive_(collapse|gamma|black_hole|singularity)/, /mekanism(_extras:expand_|:)radioactive_waste_barrel/, /mekanism.+_bin/])

    //Mob Grinding Utils
    event.hide(['mob_grinding_utils:entity_spawner', 'mob_grinding_utils:spawner_upgrade_height', 'mob_grinding_utils:spawner_upgrade_width', 'mob_grinding_utils:jumbo_tank'])

    //Modular Routers
    event.hide('modularrouters:sender_module_3')

    //Mystical Agriculture
    event.hide([/mysticalagriculture:(enchanter|harvester|soul_extractor|seed_reprocessor|soulium_spawner)/, /mysticalagriculture:(s|passives|hostiles)oulium_dagger/, /mysticalagriculture:(soul_jar|experience_capsule)/, /mystical(agriculture|agradditions):(deepslate_|nether_|end_){0,1}prosperity_ore/, /mysticalagriculture:soulium/, 'mysticalagradditions:molten_soulium_bucket', /mysticalagriculture:.+_soulium_dagger/, /mysticalagriculture.+watering_can/])

    //PneumaticCraft
    event.hide(['pneumaticcraft:air_compressor', 'pneumaticcraft:advanced_air_compressor', 'pneumaticcraft:thermal_compressor', 'pneumaticcraft:liquid_compressor', 'pneumaticcraft:advanced_liquid_compressor', 'pneumaticcraft:manual_compressor', 'pneumaticcraft:electrostatic_compressor','pneumaticcraft:pneumatic_dynamo'])
    event.hide([/pneumaticcraft:spawner_.+/, /pneumaticcraft:.+_spawner/, /pneumaticcraft:.+_drone/, /pneumaticcraft:vacuum/])

    //Powah
    event.hide(/powah:(thermo_generator|furnator|magmator|solar_panel|ender_gate|reactor|ender_cell)_.+/)
    event.hide(['powah:photoelectric_pane', /powah:(deepslate_){0,1}uraninite/, 'powah:dry_ice'])
    
    //Quark
    event.hide(['quark:gunpowder_sack', 'quark:apple_crate'])
    event.hide(['quark:forgotten_hat', 'quark:soul_bead'])

    //RFTools
    event.hide([/rftoolsbase:dimensionalshard_.+/, 'rftoolsutility:spawner', 'rftoolsutility:matter_beamer', 'rftoolsutility:syringe', 'rftoolsutility:wire', 'rftoolsbuilder:shape_card_void'])
    event.hide(['rftoolsutility:environmental_controller', /rftoolsutility:module(plus){0,1}_template/, /rftoolsutility:(blindness|featherfalling|haste|flight|glowing|luck|nightvision|noteleport|peaceful|poison|regeneration|saturation|slowness|speed|waterbreathing|weakness)(plus){0,1}_module/, /rftoolsbuilder:(mover|vehicle)/, /rftoolsbuilder:.+shield/])

    //Simply Jetpacks
    //event.hide([/simplyjetpacks:.+(vanilla|ie|mek).+/, 'simplyjetpacks:jetpack_potato'])
    //event.hide(/simplyjetpacks:armorplating_te[1-4]/)

    //Solar Flux Reborn
    event.hide([/solarflux:twilightforest.+/, /solarflux:sp_tf.+/, /solarflux:(traversal|dispersive|block_charging|furnace)_upgrade/, /solarflux:(emerald|ender)_glass/, 'solarflux:blazing_coating'])

    //Sophisticated Storage
    event.hide('sophisticatedstorage:controller')
    event.hide(/sophisticatedstorage:storag.+/)

    //Structure Gel API
    event.hide(/structure_gel:.+/)

    //Thermal Series
    event.hide([/thermal:dynamo_(numismatic|disenchantment)/, 'thermal_extra:dynamo_frost'])
    event.hide([/thermal.+dynamo_.+_augmen.+/, /thermal_extra:.+_augment/, 'thermal_extra:av_item_filter_augment', 'thermal_extra:augment_smithing_upgrade'])
    event.hide(['thermal_extra:upgrade_augment', 'thermal_extra:abyssal_upgrade_augment'])
    event.hide(['thermal_extra:nitratic_igniter', /thermal_extra:.+_ore_chunk/])
    event.hide([/thermal:.+mushroom_spores/, 'thermal_extra:ancient_dust', 'thermal_extra:sticky_ball', 'thermal:drill_head'])
    event.hide(['thermal:satchel', 'thermal_extra:device_lava_gen', 'thermal:device_water_gen', 'thermal:phytosoil', 'thermal:phytosoil_tiled', 'thermal:device_soil_infuser', 'thermal:xp_crystal', 'thermal:device_xp_condenser', 'thermal:xp_storage_augment', /thermal:press_(packing_2x2|packing_3x3|unpacking|coin)_die/, 'thermal_extra:device_harvester', 'thermal:device_nullifier', 'thermal:charge_bench', 'thermal:chiller_rod_cast'])
    event.hide(['thermal:ruby_ore', 'thermal:deepslate_ruby_ore', 'thermal:sapphire_ore', 'thermal:deepslate_sapphire_ore'])
    event.hide([/thermal:(ruby|sapphire)_gear/])
    event.hide(/thermal_extra:.+_(helmet|chestplate|leggings|boots|sword|axe|pickaxe|shovel|hoe|excavator|hammer|knife|sickle)/)

    //Twilight Forest
    event.hide(/twilightforest:.+boss_spawner/)
    event.hide(['twilightforest:uncrafting_table', 'twilightforest:ore_magnet', 'twilightforest:glass_sword'])

    //Wither Skeleton Tweaks
    event.hide(/wstweaks:(lava|blaze)_blade/)

    //Wormhole
    event.hide('wormhole:coal_generator')

    //Dusts
    event.hide(['ae2:ender_dust', 'enderio:powdered_ender_pearl']) //Ender Pearl
    event.hide(['mekanism:dust_quartz', 'enderio:powdered_quartz']) //Quartz
    event.hide(['enderio:powdered_cobalt', /thermal_extra:(arcane_gold|zinc)_dust/]) //Unusued

    //Sawdust
    event.hide(['immersiveengineering:dust_wood', 'thermal:sawdust'])

    //HammerLib Gears
    event.hide('hammerlib:gears/wooden')
    event.hide('hammerlib:gears/stone')

    //Aether
    event.hide('aether:valkyrie_lance')
    event.hide('aether:iron_ring')

    //Magnets
    event.hide('thermal:flux_magnet')
    event.hide('immersiveengineering:toolupgrade_powerpack_magnet')
    event.hide('enderio:electromagnet')

    //Vacuum
    event.hide('thermal:device_collector')

    //Item Collector
    event.hide('itemcollectors:basic_collector')

    //Furnaces
    event.hide(['quark:deepslate_furnace', 'quark:blackstone_furnace'])

    //Wrenches
    event.hide(['bigreactors:wrench', 'hammerlib:wrench', 'ad_astra:wrench', 'enderio:yeta_wrench'])

    //Debug Stuff
    //event.hide('structure_gel:dynamic_spawner')
    
    //Fluid Buckets
    event.hide(['enderio:xp_juice_bucket', 'pneumaticcraft:biodiesel_bucket', 'pneumaticcraft:vegetable_oil_bucket', 'pneumaticcraft:ethanol_bucket', 'thermal:creosote_bucket', 'thermal_extra:raw_aluminum_bucket'])

})

JEIEvents.addItems(event => {

    //Hidden Augments
    event.add(['thermal:potion_amplifier_augment', 'thermal:potion_duration_augment'])

    //IE Multi test
    event.add(['immersiveengineering:alloy_smelter', 'immersiveengineering:coke_oven', 'immersiveengineering:blast_furnace', 'immersiveengineering:advanced_blast_furnace', 'immersiveengineering:metal_press', 'immersiveengineering:assembler', 'immersiveengineering:auto_workbench', 'immersiveengineering:squeezer', 'immersiveengineering:fermenter', 'immersiveengineering:refinery', 'immersiveengineering:bottling_machine', 'immersiveengineering:arc_furnace', 'immersiveengineering:mixer', 'immersiveengineering:diesel_generator', 'immersiveengineering:tank', 'immersiveengineering:silo'])

    //FTB Questbook
    event.add('ftbquests:book')

    //Thermal Frost Melon (not here for some reasons?)
    event.add('thermal:frost_melon')
})

JEIEvents.hideFluids(event => {

    //Experience
    let exp = ['cofh_core:experience', 'sophisticatedcore:xp_still']
    exp.forEach(fluid => {event.hide(fluid)})
    
    //Biodiesel Line
    let biodiesel = ['pneumaticcraft:biodiesel', 'pneumaticcraft:vegetable_oil', 'pneumaticcraft:ethanol']
    biodiesel.forEach(fluid => {event.hide(fluid)})

    //Fermented Ore Line
    let fermented = ['industrialforegoing:raw_ore_meat', 'industrialforegoing:fermented_ore_meat']
    fermented.forEach(fluid => {event.hide(fluid)})

    //Creosote
    event.hide('thermal:creosote')

    //Crude Oil
    event.hide('thermal:crude_oil')

    //Thermal Extra Molten Fluids
    let molten = ['thermal_extra:raw_aluminum', 'thermal_extra:raw_arcane_gold', 'thermal_extra:raw_copper', 'thermal_extra:raw_gold', 'thermal_extra:raw_iron', 'thermal_extra:raw_lead', 'thermal_extra:raw_nickel', 'thermal_extra:raw_osmium', 'thermal_extra:raw_silver', 'thermal_extra:raw_tin', 'thermal_extra:raw_uranium', 'thermal_extra:raw_zinc']
    molten.forEach(fluid => {event.hide(fluid)})

    //Mystical Agriculture Fluids
    let ma = ['mysticalagradditions:molten_soulium']
    ma.forEach(fluid => {event.hide(fluid)})
})

//const $IEMulti = Java.loadClass('sguest.jeimultiblocks.jei.MultiblockIngredientType')
//JEIEvents.hideCustom(event => {
//  event.get($IEMulti).hideAll()
//}) 