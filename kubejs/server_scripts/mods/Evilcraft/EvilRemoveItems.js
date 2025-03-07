ServerEvents.recipes(event => {

    //Exalted Crafters
    event.remove({id:/evilcraft:.+exalted_crafte.+/})

    //Entangled Chalice
    event.remove({id:/evilcraft:special\/entangled_chalice_/})

    //Broom Part
    event.remove({id:/evilcraft:crafting\/broom_part_/})

    //Werewolf Loots
    event.remove({id:'evilcraft:crafting/minecraft_leather'})
    event.remove({id:'evilcraft:crafting/minecraft_bone_meal'})

})