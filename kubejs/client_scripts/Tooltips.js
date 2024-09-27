ItemEvents.tooltip(event => {

    //Disabled Immersive Multis
    event.add(['immersiveengineering:sawmill', 'immersiveengineering:crusher', 'immersiveengineering:lightning_rod'], 'Disabled in this pack')

    //Dynamos
    event.add(/thermal:dynamo_(magmatic|stirling|lapidary|compression|gourmand)/, ['Energy Production is disabled', 'Used in Jetpack crafting'])
})