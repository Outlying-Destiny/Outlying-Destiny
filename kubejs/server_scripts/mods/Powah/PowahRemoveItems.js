ServerEvents.recipes(event => {

    //Machines
    event.remove({id:/powah:crafting\/(thermo_generator|furnator|magmator|solar_panel|ender_gate|reactor|ender_cell)_.+/})

    //Photoelectric Pane
    event.remove({id:'powah:crafting/photoelectric_pane'})
})