ServerEvents.tags('item', event => {

    //Ores
    event.add('forge:ores/dark', '#evilcraft:dark_ores')

    //Remove Tags from Poison Sac / Werewolf Bones
    event.removeAllTagsFrom(['evilcraft:poison_sac', 'evilcraft:werewolf_bone'])
})

ServerEvents.tags('block', event => {

    //Ores
    event.add('forge:ores/dark', '#evilcraft:dark_ores')

})