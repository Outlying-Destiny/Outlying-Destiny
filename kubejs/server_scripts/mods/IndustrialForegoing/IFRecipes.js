ServerEvents.recipes(event => {

    //Plastic conversion to PNC
    event.replaceOutput(
        { output: 'industrialforegoing:plastic' },
        'industrialforegoing:plastic',
        'pneumaticcraft:plastic'         
      )


})