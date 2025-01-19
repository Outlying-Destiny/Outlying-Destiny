ServerEvents.recipes(event => {

    //Spawner Stuff
    event.remove({id:'rftoolsutility:spawner'})
    event.remove({id:'rftoolsutility:matter_beamer'})
    event.remove({id:'rftoolsutility:syringe'})

    //Wire
    event.remove({id:'rftoolsutility:wire'})

    //Environmental Controller Stuff
    event.remove({id:'rftoolsutility:environmental_controller'})
    event.remove({id:/rftoolsutility:module(plus){0,1}_template/})
    event.remove({id:/rftoolsutility:(blindness|featherfalling|haste|flight|glowing|luck|nightvision|noteleport|peaceful|poison|regeneration|saturation|slowness|speed|waterbreathing|weakness)(plus){0,1}_module/})

    //Shape Card (Void) (doesn't use energy)
    event.remove({id:'rftoolsbuilder:shape_card_void'})

    //Vehicle Stuff
    event.remove({id:/rftoolsbuilder:(mover|vehicle)/})

    //Shield Projectors
    event.remove({id:/rftoolsbuilder:.+shield/})
})