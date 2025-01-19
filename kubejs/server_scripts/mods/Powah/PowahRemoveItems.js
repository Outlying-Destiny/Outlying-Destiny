ServerEvents.recipes(event => {

    //Machines
    event.remove({id:/powah:crafting\/(thermo_generator|furnator|magmator|solar_panel|ender_gate|reactor|ender_cell)_.+/})

    //Photoelectric Pane
    event.remove({id:'powah:crafting/photoelectric_pane'})

    //Uraninite Stuff
    event.remove({id:/powah:(energizing|smelting|crafting)\/uraninite/})
    event.remove({id:'powah:energizing/uranium_to_uraninite'})
    
})