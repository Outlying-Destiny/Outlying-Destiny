ServerEvents.recipes(event => {

    //Spawner
    event.remove({id:'mob_grinding_utils:recipe_entity_spawner'})
    event.remove({id:'mob_grinding_utils:recipe_spawner_upgrade_height'})
    event.remove({id:'mob_grinding_utils:recipe_spawner_upgrade_width'})

    //Jumbo Tank
    event.remove({output:'mob_grinding_utils:jumbo_tank'}) //output to include tank reset recipe
})