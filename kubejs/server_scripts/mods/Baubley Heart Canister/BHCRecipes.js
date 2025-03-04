ServerEvents.recipes(event => {

    //Canister
    event.remove({id:'bhc:canister'})
    event.shapeless('bhc:canister', '9x thermal:iron_plate')

    //Heart Amulet
    event.replaceInput({ output: 'bhc:heart_amulet'},'#c:glass_blocks','thermal:lumium_glass')
    
    //Relic Apple
    event.remove({id:'bhc:relic_apple'})
    event.shaped('bhc:relic_apple', [' A ','BCB',' A '], {A:'enderio:pulsating_crystal',B:'enderio:vibrant_crystal',C:'minecraft:apple'})


    //Red Heart Canister
    event.remove({id:'bhc:red_heart_canister'})
    event.shapeless('bhc:red_heart_canister', ['bhc:red_heart', 'kubejs:evil_infused_ingot', 'bhc:relic_apple', 'bhc:canister'])


})