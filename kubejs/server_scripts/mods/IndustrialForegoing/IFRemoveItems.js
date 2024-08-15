ServerEvents.recipes(event => {

    //Ore Dupe Machinery
    event.remove({id:'industrialforegoing:fluid_sieving_machine'})
    event.remove({id:'industrialforegoing:fermentation_station'})
    event.remove({id:'industrialforegoing:washing_factory'})

    //Conveyors & Transporters
    event.remove({id:/industrialforegoing:conveyo.+/})
    event.remove({id:/industrialforegoing:.+_transporter_type/})

    //Tiny Dry Rubber
    event.remove({id:'industrialforegoing:dryrubber'})

    //Mycelial Stuff
    event.remove({id:/industrialforegoing:mycelial_.+/})
    event.remove({id:'industrialforegoing:dissolution_chamber/mycelial_reactor'})

    //Infinity Stuff
    event.remove({id:/industrialforegoing:dissolution_chamber.+infinity_.+/})
    event.remove({id:'industrialforegoing:infinity_charger'})

    //Biofuel Generator
    event.remove({id:'industrialforegoing:biofuel_generator'})
    event.remove({id:'industrialforegoing:resourceful_furnace'})
})