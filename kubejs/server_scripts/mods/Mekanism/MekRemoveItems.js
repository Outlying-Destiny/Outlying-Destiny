ServerEvents.recipes(event => {

    //Formulaic Assembler
    event.remove({id:'mekanism:formulaic_assemblicator'})
    event.remove({id:'mekanism:crafting_formula'})

    //Enriched Tin
    event.remove({id:'mekanism:enriching/enriched/tin'})

    //Mekanism Transport Stuff
    event.remove({id:/mekanism:transmitter\/(restrictive|diversion)_transporter/})

    //QIO Stuff
    event.remove({id:/mekanism:qio_(drive_array|dashboard|exporter|importer|redstone_adapter)/})
    event.remove({id:'mekanism:portable_qio_dashboard'})
    event.remove({id:/mekanism:qio_drive_(base|hyper_dense|time_dilating|supermassive)/})
    event.remove({id:/mekanism_extras:qio_drive_(collapse|gamma|black_hole|singularity)/})

    //Radioactive Stuff
    event.remove({id:/mekanism(_extras:expand_|:)radioactive_waste_barrel/})

    //Bins
    event.remove({id:/mekanism(_extras){0,1}:bin/})

    //Meka-Suit / Tool (Temporary)
    event.remove({id:'mekanism:modification_station'})
    event.remove({id:'mekanism:meka_tool'})
    event.remove({id:/mekanism:mekasuit_/})
    event.remove({id:/mekanism:module/})
    event.remove({id:/ad_astra_giselle_addon:compat\/mekanism\/crafting\/module.+/})

    //Dynamic Tank
    event.remove({id:/mekanism:dynamic_(tank|valve)/})

    //Enriched Lead
    event.remove({id:'mekanism_extras:enriching/enriched/dust_lead'})

    //Enriched Mekanism Extras Stuff
    event.remove({id:'mekanism_extras:enriching/enriched/dust_radiance'})
    event.remove({id:'mekanism_extras:reaction/enriched_radiance_gasification/enriched_thermonuclear'})
    event.remove({id:'mekanism_extras:nucleosynthesizing/enriched_shining'})
    event.remove({id:'mekanism_extras:processing/enriched_spectrum/from_enriched_shining'})
    
})