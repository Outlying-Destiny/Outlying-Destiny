ServerEvents.recipes(event => {

    //Function


    //Remove Ore Proc ARC
    event.remove({id:/bloodmagic:arc\/dustsfrom/})
    event.remove({id:/bloodmagic:smelting\/(blasting_)?ingot_netherite_scrap/})

    //Remove Reverse Recipes
    event.remove({id:/bloodmagic:arc\/reversion/})

    //Remove Miscellanous
    event.remove({id:'bloodmagic:arc/clay_from_terracotta'})
    event.remove({id:'bloodmagic:arc/netherrack_to_sulfer'})
    event.remove({id:'bloodmagic:arc/clay_from_sand'})

})