ItemEvents.toolTierRegistry(event => {

    event.add('evil_infused', tier => {
      tier.uses = 1280
      tier.speed = 9.0
      tier.attackDamageBonus = 5.0
      tier.level = 4
      tier.enchantmentValue = 11
      tier.repairIngredient = 'kubejs:evil_infused_ingot'
    })

    event.add('demon', tier => {
      tier.uses = 480
      tier.speed = 13.0
      tier.attackDamageBonus = 2.0
      tier.level = 2
      tier.enchantmentValue = 20
      tier.repairIngredient = 'kubejs:demon_ingot'
    })

})