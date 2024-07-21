StartupEvents.registry('block', event => {

  event.create('dielectric_paste_block').displayName('Dielectric Paste Block').soundType('wool')
    .hardness(3.0).resistance(1.0).requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool')
  event.create('empowered_energized_steel_block').displayName('Empowered Energized Steel Block').soundType('amethyst')
    .hardness(6.0).resistance(1.0).requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').item(gl=>{gl.glow(true)})
  event.create('empowered_blazing_crystal_block').displayName('Empowered Blazing Crystal Mix Block').soundType('amethyst')
    .hardness(6.0).resistance(2.0).requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').item(gl=>{gl.glow(true)})
  event.create('empowered_niotic_crystal_block').displayName('Empowered Niotic Crystal Block').soundType('amethyst')
    .hardness(8.0).resistance(3.0).requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').item(gl=>{gl.glow(true)})
  event.create('empowered_spirited_crystal_block').displayName('Empowered Spirited Crystal Block').soundType('amethyst')
    .hardness(8.0).resistance(4.0).requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').item(gl=>{gl.glow(true)})
  event.create('empowered_nitro_crystal_block').displayName('Empowered Nitro Crystal Block').soundType('amethyst')
    .hardness(10.0).resistance(5.0).requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').item(gl=>{gl.glow(true)})
  event.create('demon_block').displayName('Demon Block').soundType('metal')
    .hardness(5.0).resistance(2.0).requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').item(fr=>{fr.fireResistant(true)})
  event.create('enchanted_block').displayName('Enchanted Block').soundType('metal')
    .hardness(4.0).resistance(2.0).requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool')
  event.create('evil_infused_block').displayName('Evil Infused Block').soundType('metal')
    .hardness(6.0).resistance(3.0).requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool')
  event.create('neptune_block').displayName('Neptune Block').soundType('metal')
    .hardness(4.0).resistance(1.0).requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool')
  event.create('valkyrie_block').displayName('Valkyrie Block').soundType('metal')
    .hardness(5.0).resistance(2.0).requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool')
  event.create('phoenix_block').displayName('Phoenix Block').soundType('metal')
    .hardness(5.0).resistance(2.0).requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool')
  event.create('dark_soularium_block').displayName('Dark Soularium Block').soundType('metal')
    .hardness(7.0).resistance(3.0).requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool').item(gl=>{gl.glow(true)})
    event.create('crystalline_alloy_block').displayName('Crystalline Alloy Block').soundType('metal')
    .hardness(5.0).resistance(2.5).requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool')
    event.create('crystalline_pink_slime_block').displayName('Crystalline Pink Slime Block').soundType('metal')
    .hardness(5.0).resistance(2.5).requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_iron_tool')
  
})