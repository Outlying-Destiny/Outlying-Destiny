ServerEvents.recipes(event => {

    //Machinery
    event.remove({id:'industrialforegoing:fluid_sieving_machine'})
    event.remove({id:'industrialforegoing:fermentation_station'})
    event.remove({id:'industrialforegoing:washing_factory'})
    event.remove({id:'industrialforegoing:biofuel_generator'})
    event.remove({id:'industrialforegoing:resourceful_furnace'})
    event.remove({id:'industrialforegoing:spores_recreator'})
    event.remove({id:'industrialforegoing:dye_mixer'})
    event.remove({id:'industrialforegoing:dissolution_chamber/mechanical_dirt'})
    event.remove({id:'industrialforegoing:water_condensator'})
    event.remove({id:'industrialforegoing:hydroponic_bed'})


    //Conveyors & Transporters
    event.remove({id:/industrialforegoing:conveyo.+/})
    event.remove({id:/industrialforegoing:.+_transporter_type/})

    //Tiny Dry Rubber
    event.remove({id:'industrialforegoing:dryrubber'})

    //Mycelial Stuff
    event.remove({id:'industrialforegoing:pitiful_generator'})
    event.remove({id:/industrialforegoing:mycelial_.+/})
    event.remove({id:'industrialforegoing:dissolution_chamber/mycelial_reactor'})

    //Infinity Stuff
    event.remove({id:/industrialforegoing:dissolution_chamber.+infinity_.+/})
    event.remove({id:'industrialforegoing:infinity_charger'})

    //Black Hole Stuff
    event.remove({id:/industrialforegoing:.+_black_hole_.+/})
    event.remove({id:'industrialforegoing:black_hole_controller'})
})