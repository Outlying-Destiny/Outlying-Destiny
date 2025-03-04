StartupEvents.registry('item', event => {

  event.create('iron_fragment').tooltip("Your very first source of iron")
  event.create('twilight_powder').displayName("Powder of Twilight")
  event.create('token_twilight').displayName("Token of Twilight")
  event.create('your_soul').displayName("Your Soul?")
  event.create('freed_soul').displayName("Freed Soul")
  //event.create('empowered_energized_steel').displayName('Empowered Energized Steel').glow(true)
  //event.create('empowered_blazing_crystal').displayName('Empowered Blazing Crystal').glow(true)
  //event.create('empowered_niotic_crystal').displayName('Empowered Niotic Crystal').glow(true)
  //event.create('empowered_spirited_crystal').displayName('Empowered Spirited Crystal').glow(true)
  //event.create('empowered_nitro_crystal').displayName('Empowered Nitro Crystal').glow(true)
  event.create('base_core').displayName('Base Core')
  event.create('enchanted_core').displayName('Enchanted Core')
  event.create('frozen_core').displayName('Frozen Core')
  event.create('dark_steel_shears', 'shears').displayName('Dark Steel Shears').maxDamage(952)
  //event.create('crystalline_pink_slime_ingot').displayName('Crystalline Pink Slime Ingot')
  event.create('void_infused_dye_blend').displayName('Void Infused Dye Blend')
  event.create('soul_attuned_dye_blend').displayName('Soul Attuned Dye Blend')
  //event.create('zombie_soul_vial').displayName('Zombie Soul Vial').texture('enderio:item/filled_soul_vial').maxStackSize(1).glow(true).tag('outlying:soul_vial')
  //event.create('witch_soul_vial').displayName('Witch Soul Vial').texture('enderio:item/filled_soul_vial').maxStackSize(1).glow(true).tag('outlying:soul_vial')
  //event.create('enderman_soul_vial').displayName('Enderman Soul Vial').texture('enderio:item/filled_soul_vial').maxStackSize(1).glow(true).tag('outlying:soul_vial')
  //event.create('shulker_soul_vial').displayName('Shulker Soul Vial').texture('enderio:item/filled_soul_vial').maxStackSize(1).glow(true).tag('outlying:soul_vial')
  event.create('ender_core').displayName('Ender Core').maxDamage(10000)
  event.create('drill_upgrade_base').displayName('Drill Augment Base')
  event.create('drill_upgrade_auto_smelt').displayName('Subtitute Drill Auto-Smelt Augment')
  event.create('aerotheum_dust').displayName('Aerotheum Dust')
  event.create('cryotheum_dust').displayName('Cryotheum Dust')
  event.create('petrotheum_dust').displayName('Petrotheum Dust')
  event.create('pyrotheum_dust').displayName('Pyrotheum Dust')

  //Mekanism Enriched Materials
  event.create('enriched_rose_gold').displayName("Enriched Rose Gold")
  event.create('enriched_platinum').displayName("Enriched Platinum")
  event.create('enriched_shellite').displayName("Enriched Shellite")

  //Ingots
  event.create('neptune_ingot').displayName('Neptune Ingot')
  event.create('valkyrie_ingot').displayName('Valkyrie Ingot')
  event.create('phoenix_ingot').displayName('Phoenix Ingot')
  event.create('demon_ingot').displayName('Demon Ingot').fireResistant(true)
  event.create('enchanted_ingot').displayName('Enchanted Ingot')
  event.create('evil_infused_ingot').displayName('Evil Infused Ingot')
  event.create('crystalline_alloy_ingot').displayName('Crystalline Alloy Ingot')
  event.create('infusing_soul_ingot').displayName('Infusing Soul Ingot')
  event.create('dark_soul_infused_ingot').displayName('Dark Soul Infused Ingot').glow(true)
  event.create('biofuel_ingot').displayName('Biofuel Ingot')
  event.create('extradimensional_alloy_ingot').displayName('Extra-Dimensional Alloy Ingot')
  event.create('extradimensional_alloy_nugget').displayName('Extra-Dimensional Alloy Nugget')
  event.create('automaton_ingot').displayName('Automaton Ingot')
  event.create('automaton_nugget').displayName('Automaton Nugget')
  event.create('machinarium_ingot').displayName('Machinarium Ingot')
  event.create('red_alloy_compound').displayName('Red Alloy Compound')
  event.create('red_alloy_ingot').displayName('Red Alloy Ingot')

  //Tools
  event.create('evil_infused_sword', 'sword').displayName('Evil Infused Sword').tier('evil_infused')
  event.create('evil_infused_pickaxe', 'pickaxe').displayName('Evil Infused Pickaxe').tier('evil_infused')
  event.create('evil_infused_axe', 'axe').displayName('Evil Infused Axe').tier('evil_infused').tag('forge:tools/axes')
  event.create('evil_infused_shovel', 'shovel').displayName('Evil Infused Shovel').tier('evil_infused')
  event.create('evil_infused_hoe', 'hoe').displayName('Evil Infused Hoe').tier('evil_infused')
  event.create('demon_sword', 'sword').displayName('Demon Sword').tier('demon').fireResistant(true)
  event.create('demon_pickaxe', 'pickaxe').displayName('Demon Pickaxe').tier('demon').fireResistant(true)
  event.create('demon_axe', 'axe').displayName('Demon Axe').tier('demon').fireResistant(true).tag('forge:tools/axes')
  event.create('demon_shovel', 'shovel').displayName('Demon Shovel').tier('demon').fireResistant(true)
  event.create('demon_hoe', 'hoe').displayName('Demon Hoe').tier('demon').fireResistant(true)

  //Gears
  event.create('red_gear').displayName('Red Alloy Gear')
  event.create('energized_steel_gear').displayName('Energized Steel Gear').tag('forge:gears')
  event.create('enchanted_gear').displayName('Enchanted Gear').tag('forge:gears')
  event.create('infinity_gear').displayName('Infinity Bimetal Gear').tag('forge:gears')
  event.create('end_bimetal_gear').displayName('End Bimetal Gear').tag('forge:gears')
  event.create('black_iron_gear').displayName('Black Iron Gear').tag('forge:gears')

  //Rods
  event.create('dark_steel_rod').displayName('Dark Steel Rod').tag('forge:rods')
  event.create('end_steel_rod').displayName('End Steel Rod').tag('forge:rods')
  //event.create('invar_rod').displayName('Invar Rod').tag('forge:rods')

  //Wires
  event.create('invar_wire').displayName('Invar Wire').tag('forge:wires')

  //Applied Processors
  event.create('extradimensional_processor_press').displayName('Inscriber Extra-Dimensional Press').tag('ae2:inscriber_presses')
  event.create('printed_extradimensional_processor').displayName('Printed Extra-Dimensional Circuit')
  event.create('extradimensional_processor').displayName('Extra-Dimensional Processor')
  event.create('automaton_processor_press').displayName('Inscriber Automaton Press').tag('ae2:inscriber_presses')
  event.create('printed_automaton_processor').displayName('Printed Automaton Circuit')
  event.create('automaton_processor').displayName('Automaton Processor')

  //Extended Crafting Catalyst
  event.create('automaton_component').displayName('Automaton Component')
  event.create('abyssal_component').displayName('Abyssal Component')
  event.create('signalum_component').displayName('Signalum Component')
  
  //Extended Crafting Component
  event.create('automaton_catalyst').displayName('Automaton Catalyst')
  event.create('abyssal_catalyst').displayName('Abyssal Catalyst')
  event.create('signalum_catalyst').displayName('Signalum Catalyst')

  //Thermal Augments (Base Code from Mierno by FalAut, go play it!)
  const $AugmentItem = Java.loadClass('cofh.thermal.lib.common.item.AugmentItem');
  const $Item$Properties = Java.loadClass('net.minecraft.world.item.Item$Properties');
  event.createCustom('thermal_extra:twinite_rf_coil_augment',() =>new $AugmentItem(new $Item$Properties(), {Type: 'RF', RFXfer: 16, RFMax: 16}))
  event.createCustom('thermal_extra:twinite_rf_coil_storage_augment',() =>new $AugmentItem(new $Item$Properties(), {Type: 'RF', RFXfer: 8, RFMax: 24}))
  event.createCustom('thermal_extra:twinite_rf_coil_xfer_augment',() =>new $AugmentItem(new $Item$Properties(), {Type: 'RF', RFXfer: 24, RFMax: 8}))
  event.createCustom('thermal_extra:twinite_fluid_tank_augment',() =>new $AugmentItem(new $Item$Properties(), {Type: 'Fluid', FluidMax: 16}))
  event.createCustom('thermal_extra:twinite_machine_speed_augment',() =>new $AugmentItem(new $Item$Properties(), {Type: 'Machine', MachineEnergy: 1, MachinePower: 1.1}))
  event.createCustom('thermal_extra:twinite_machine_efficiency_augment',() =>new $AugmentItem(new $Item$Properties(), {Type: 'Machine', MachineEnergy: 0.7, MachineSpeed: -0.1}))
  event.createCustom('thermal_extra:twinite_machine_output_augment',() =>new $AugmentItem(new $Item$Properties(), {Type: 'Machine', MachineEnergy: 1.1, MachineSec: 0.3}))
  event.createCustom('thermal_extra:twinite_machine_catalyst_augment',() =>new $AugmentItem(new $Item$Properties(), {Type: 'Machine', MachineCat: 0.6, MachineEnergy: 1.25}))
  event.createCustom('thermal_extra:twinite_potion_amplifier_augment',() =>new $AugmentItem(new $Item$Properties(), {Type: 'Potion', PotionAmp: 2, PotionDur: -0.5}))
  event.createCustom('thermal_extra:twinite_potion_duration_augment',() =>new $AugmentItem(new $Item$Properties(), {Type: 'Potion', PotionDur: 1.5}))
  event.createCustom('thermal_extra:twinite_area_radius_augment',() =>new $AugmentItem(new $Item$Properties(), {Type: 'Area', Radius: 3}))
  event.createCustom('thermal:machine_efficiency_augment',() =>new $AugmentItem(new $Item$Properties(), {Type: 'Machine', MachineEnergy: 0.85, MachineSpeed: -0.1}))
  event.createCustom('thermal:machine_output_augment',() =>new $AugmentItem(new $Item$Properties(), {Type: 'Machine', MachineEnergy: 1.1, MachineSec: 0.15}))
  event.createCustom('thermal:potion_amplifier_augment',() =>new $AugmentItem(new $Item$Properties(), {Type: 'Potion', PotionAmp: 1, PotionDur: -0.5}))

})