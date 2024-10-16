ServerEvents.recipes(event => {

    //Purifier
    event.remove({output:'elementalcraft:purifier'})
    event.remove({id:/elementalcraft:forge.+_to_pure_ore/})

})