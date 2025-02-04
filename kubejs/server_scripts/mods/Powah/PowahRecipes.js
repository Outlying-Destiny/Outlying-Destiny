ServerEvents.recipes(event => {

  //Function Energizing Orb
  function orb2(output, outputcount, input1, input2, energy){
      event.custom({
          "type": "powah:energizing",
          "ingredients": [
            {"item": input1},
            {"item": input2}
          ],
          "energy": energy,
          "result": {
            "item": output,
            "count": outputcount
          }
        })
  }

  function orb4(output, outputcount, input1, input2, input3, input4, energy){
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
          {"item": input1},
          {"item": input2},
          {"item": input3},
          {"item": input4}
        ],
        "energy": energy,
        "result": {
          "item": output,
          "count": outputcount
        }
      })
  }

  //Function Material to Block
  function mattoblo(block, material){
    event.shapeless(block, material)
    event.shapeless(material, block)
  }

  //Iron is Steel now
  event.replaceInput(
      {output:/powah:.+/},
      'minecraft:iron_ingot',
      'thermal:steel_ingot'
  )

  //Energizing Orb
  event.remove({id:'powah:crafting/energizing_orb'})
  event.shaped('powah:energizing_orb', [
    'DAD',
    'CBC',
    'BBB'
    ], {
    A:'powah:dielectric_casing',
    B:'kubejs:dielectric_paste_block',
    C:'immersiveengineering:heavy_engineering',
    D:'#forge:glass'
  })

  //Dielectric Paste
  event.remove({output:'powah:dielectric_paste'})
  mattoblo('kubejs:dielectric_paste_block', '9x powah:dielectric_paste')

  //Soul Binding Items
  function soulbind(output, input, entity){
    event.custom({
      "type": "enderio:soul_binding",
      "energy": 51200,
      "entity_type": entity,
      "exp": 4,
      "input": {
        "item": input
      },
      "output": output
    })
  }
  soulbind('powah:player_aerial_pearl', 'powah:aerial_pearl', 'minecraft:zombie')
  soulbind('powah:binding_card', 'powah:blank_card', 'minecraft:enderman')
  event.remove({id:'powah:crafting/binding_card'})

  //From using machines to using blocks (I'm horrible at coding lmfao)
  const tier = [{tier:'basic', material:'thermal:steel_ingot', materialblock:'kubejs:dielectric_paste_block'},{tier:'hardened', material:'powah:steel_energized', materialblock:'powah:energized_steel_block'},{tier:'blazing', material:'powah:crystal_blazing', materialblock:'powah:blazing_crystal_block'},{tier:'niotic', material:'powah:crystal_niotic', materialblock:'powah:niotic_crystal_block'},{tier:'spirited', material:'powah:crystal_spirited', materialblock:'powah:spirited_crystal_block'},{tier:'nitro', material:'powah:crystal_nitro', materialblock:'powah:nitro_crystal_block'},]

  tier.forEach((tier) => {
    event.shaped('powah:energizing_rod_'+tier.tier, [
      ' A ',
      'BCB',
      ' D '
      ], {
      A:'#forge:storage_blocks/quartz',
      B:'powah:capacitor_'+tier.tier,
      C:'powah:dielectric_casing',
      D:tier.materialblock
    })
    event.shaped('powah:player_transmitter_'+tier.tier, [
      ' A ',
      'BCB',
      ' D '
      ], {
      A:'powah:player_aerial_pearl',
      B:'powah:capacitor_'+tier.tier,
      C:'powah:dielectric_casing',
      D:tier.materialblock
    })
    //event.shaped('4x powah:reactor_'+tier.tier, [
    //  'ABA',
    //  'BCB',
    //  'ABA'
    //  ], {
    //  A:tier.materialblock,
    //  B:'powah:capacitor_'+tier.tier,
    //  C:'powah:uraninite'
    //})
    event.shaped('powah:energy_cell_'+tier.tier, [
      'ABA',
      'CDC',
      'ABA'
      ], {
      A:tier.material,
      B:'powah:capacitor_'+tier.tier,
      C:tier.materialblock,
      D:'powah:dielectric_casing'
    })
    event.shaped('powah:battery_'+tier.tier, [
      'ABA',
      'CDC',
      'AEA'
      ], {
      A:'powah:dielectric_paste',
      B:tier.material,
      C:'powah:capacitor_'+tier.tier,
      D:'#forge:storage_blocks/redstone',
      E:tier.materialblock
    })
    event.shaped('powah:energy_hopper_'+tier.tier, [
      'AAA',
      'BCB',
      'ADA'
      ], {
      A:'powah:dielectric_paste',
      B:'powah:capacitor_'+tier.tier,
      C:'powah:dielectric_casing',
      D:tier.materialblock
    })
  })

  event.remove({id:'minecraft:kjs/powah_energy_cell_basic'})
  event.replaceInput({output:'powah:battery_basic'},'powah:capacitor_basic_large','powah:capacitor_basic')
  event.replaceInput({output:'powah:reactor_basic'},'powah:capacitor_basic_large','powah:capacitor_basic')
  event.replaceInput({output:'powah:battery_starter'},'powah:capacitor_basic','powah:capacitor_basic_tiny')

  //Tiered Capacitors (At least it's not if else spamming)
  const capacitor = [{tier:'blazing', prevtier:'hardened'},{tier:'niotic', prevtier:'blazing'},{tier:'spirited', prevtier:'niotic'},{tier:'nitro', prevtier:'spirited'},]

  capacitor.forEach((capacitor) => {
    event.remove({id:'powah:crafting/capacitor_'+capacitor.tier})
    event.shaped('powah:capacitor_'+capacitor.tier, [
      'ABA',
      'BCB',
      'ABA'
      ], {
      A:'powah:dielectric_paste',
      B:'powah:crystal_'+capacitor.tier,
      C:'powah:capacitor_'+capacitor.prevtier
    })
  })

  event.remove({id:'powah:crafting/capacitor_hardened'})
  event.shaped('powah:capacitor_hardened', [
    'ABA',
    'BCB',
    'ABA'
    ], {
    A:'powah:dielectric_paste',
    B:'powah:steel_energized',
    C:'powah:capacitor_basic_large'
  })

  //Empowered Material to Block
  //mattoblo('kubejs:empowered_energized_steel_block', '9x kubejs:empowered_energized_steel')
  //mattoblo('kubejs:empowered_blazing_crystal_block', '9x kubejs:empowered_blazing_crystal')
  //mattoblo('kubejs:empowered_niotic_crystal_block', '9x kubejs:empowered_niotic_crystal')
  //mattoblo('kubejs:empowered_spirited_crystal_block', '9x kubejs:empowered_spirited_crystal')
  //mattoblo('kubejs:empowered_nitro_crystal_block', '9x kubejs:empowered_nitro_crystal')

  //Energized Steel
  event.remove({id:'powah:energizing/energized_steel'})
  orb2("powah:steel_energized", 2, "thermal:steel_ingot", "thermal:electrum_ingot", 20000)

  //Blazing Crystal
  event.remove({id:/powah:energizing.+blazing_crysta.+/})
  orb4("powah:crystal_blazing", 1, "kubejs:pyrotheum_dust", "kubejs:cryotheum_dust", "kubejs:aerotheum_dust", "kubejs:petrotheum_dust", 100000)
})