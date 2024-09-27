ServerEvents.recipes(event => {

    //Functions
    function box(output, input1, input2, input3){
        event.shaped(
            output, [
            'ABA',
            'BCB',
            'ABA'
            ], {
            A: input1,
            B: input2,
            C: input3
            }
        )
    }

    function cross(output, input1, input2){
        event.shaped(
            output, [
            ' A ',
            'ABA',
            ' A '
            ], {
            A: input1,
            B: input2
            }
        )
    }
    //Machinarium Casing
    cross('kubejs:machinarium_casing', 'kubejs:machinarium_ingot', 'mekanism:steel_casing')

    //Item Port
    event.shapeless('mm:base_tiny_item_port_input', ['kubejs:machinarium_casing', '#balm:wooden_chests', 'functionalstorage:puller_upgrade'])
    event.shapeless('mm:base_tiny_item_port_output', ['kubejs:machinarium_casing', '#balm:wooden_chests', 'functionalstorage:pusher_upgrade'])
    

    //Fluid Port
    event.shapeless('mm:base_tiny_fluid_port_input', ['kubejs:machinarium_casing', 'enderio:fluid_tank', 'functionalstorage:puller_upgrade'])
    event.shapeless('mm:base_tiny_fluid_port_output', ['kubejs:machinarium_casing', 'enderio:fluid_tank', 'functionalstorage:pusher_upgrade'])
    cross('mm:base_small_fluid_port_input', 'ae2:capacity_card', 'mm:base_tiny_fluid_port_input')
    cross('mm:base_small_fluid_port_output', 'ae2:capacity_card', 'mm:base_tiny_fluid_port_output')

    //Energy Port
    box('mm:base_tiny_energy_port_input', 'thermal:signalum_ingot', 'enderio:basic_capacitor', 'kubejs:machinarium_casing')
    box('mm:base_small_energy_port_input', 'actuallyadditions:empowered_enori_crystal', 'enderio:double_layer_capacitor', 'mm:base_tiny_energy_port_input')

    
})