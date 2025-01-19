ServerEvents.recipes(event => {

    //Elevators
    event.remove({id:/elevatorid:elevator_/})
    event.shaped('2x elevatorid:elevator_white', ['AAA','ABA','AAA'], {A: 'minecraft:white_wool',B: 'enderio:ender_crystal'})
    //The recipe already exists idiot
    //const color = [{color:'white'},{color:'light_gray'},{color:'gray'},{color:'black'},{color:'brown'},{color:'red'},{color:'orange'},{color:'yellow'},{color:'lime'},{color:'green'},{color:'cyan'},{color:'light_blue'},{color:'blue'},{color:'purple'},{color:'magenta'},{color:'pink'}]
    //color.forEach((color) => {event.shapeless('elevatorid:elevator_'+color.color, ['#elevatorid:elevators', 'minecraft:'+color.color+'_dye'])})

})