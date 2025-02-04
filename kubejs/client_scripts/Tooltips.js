ItemEvents.tooltip(event => {

    //Disabled Immersive Multis
    event.add(['immersiveengineering:sawmill', 'immersiveengineering:crusher', 'immersiveengineering:lightning_rod'], 'Disabled in this pack')

    //Dynamos
    event.add(/thermal:dynamo_(magmatic|stirling|lapidary|compression|gourmand)/, ['Energy Production is disabled', 'Used in Jetpack crafting'])

    //Subtitute Drill Auto-Smelt Augment
    event.add('kubejs:drill_upgrade_auto_smelt', ['Cannot be used inside a drill', 'Used as a crafting component'])

    //Quantum Modifiers
    event.add('kubejs:blank_quantum_modifier', 'The base modifier for your Quantum Miner, doesn\'t do anything by itself but can be used to fill the gaps')
    event.add('kubejs:overworld_quantum_modifier', 'Instruct your Quantum Miner to mine in a simulated Overworld.')
    event.add('kubejs:nether_quantum_modifier', 'Instruct your Quantum Miner to mine in a simulated Nether.')
    event.add('kubejs:auto_smelt_quantum_modifier', 'Instruct your Quantum Miner to automatically smelt ores when mined.')
    event.add('kubejs:silk_touch_quantum_modifier', 'Instruct your Quantum Miner to carefully mine ores.')
    event.add('kubejs:fortune_quantum_modifier', ['How lucky can it get? It isn\'t, it\'s just better at its task', 'Mimics the effect of Fortune III, increases energy input by x2'])
    
    //WIP Stuff
    event.add([/botania:/, /bloodmagic:/, /elementalcraft:/, /evilcraft:/, /alchemistry:/, /bigreactors:/, /thermalendergy:/, /mysticalagr/, /forbidden_arcanus:/, /hostilenetworks:/, /ad_astra:/], ['Work In Progress. No touchy!', "Generally if an item isn't mentionned in", "the QB and looks unmodified, it's WIP"])
})