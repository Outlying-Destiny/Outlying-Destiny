ServerEvents.recipes(event => {

    //Function
    function soulbind(output, input, entity, exp, energy){event.custom({"type": "enderio:soul_binding","energy": energy,"entity_type": entity,"exp": exp,"input": {"item": input},"output": output})}

    //EnderIO Stuff
    event.remove({id:/enderio:soulbinding\/(frank_n_zombie|sentient_ender|ender_crystal|prescient_crystal)/})
    soulbind('enderio:frank_n_zombie', 'enderio:z_logic_controller', 'minecraft:zombie', 8, 102400)
    soulbind('enderio:sentient_ender', 'enderio:ender_resonator', 'minecraft:witch', 8, 102400)
    soulbind('enderio:ender_crystal', 'enderio:vibrant_crystal', 'minecraft:enderman', 4, 51200)
    soulbind('enderio:prescient_crystal', 'enderio:vibrant_crystal', 'minecraft:shulker', 6, 76800)

    //Spawner
    const spawner = [['broken'], ['powered']]

    spawner.forEach((spawner) => {
        event.remove({id:'enderio:soulbinding/'+spawner+'_spawner'})
        event.custom({"type": "enderio:soul_binding","energy": 256000,"exp": 16,"input": {"item": "enderio:"+spawner+"_spawner"},"output": "enderio:"+spawner+"_spawner"})
    })

    //Powah Stuff
    event.remove({id:'powah:crafting/binding_card'})
    soulbind('powah:player_aerial_pearl', 'powah:aerial_pearl', 'minecraft:zombie', 4, 102400)
    soulbind('powah:binding_card', 'powah:blank_card', 'minecraft:enderman', 4, 102400)
    
})