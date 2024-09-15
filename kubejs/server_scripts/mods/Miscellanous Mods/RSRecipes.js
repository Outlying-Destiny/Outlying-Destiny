ServerEvents.recipes(event => {

    //Rain Shield
    event.remove({id:'rainshield:rain_shield'})
    event.shaped('rainshield:rain_shield', [
        ' A ',
        ' B ',
        'CCC'
        ], {
        A:'enderio:weather_crystal',
        B:'powah:capacitor_blazing',
        C:'compressium:netherrack_1'
    })
})