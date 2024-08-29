ServerEvents.recipes(event => {

    //Energy Prod
    event.remove({id:/powah:crafting.+thermo_generator_.+/})
    event.remove({id:/powah:crafting.+furnator_.+/})
    event.remove({id:/powah:crafting.+magmator.+/})
    event.remove({id:/powah:crafting.+solar_panel.+/})
    event.remove({id:/powah:crafting.+ender_gate_.+/})
})