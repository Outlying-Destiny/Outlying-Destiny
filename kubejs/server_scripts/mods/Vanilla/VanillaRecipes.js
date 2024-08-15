ServerEvents.recipes(event => {

    //Crafting Table
    event.remove({ output: 'minecraft:crafting_table' })
    event.shaped(
        'minecraft:crafting_table', [
        'AA ',
        'BB ',
        '   '
        ], {
        A: '#minecraft:planks',
        B: '#minecraft:logs'
        }
    )

    //First Iron
    event.campfireCooking('kubejs:iron_fragment', 'minecraft:raw_iron').cookingTime(600)
    event.shapeless('3x minecraft:iron_nugget', 'kubejs:iron_fragment')

    //Furnaces
    event.remove({ output: ['minecraft:furnace', 'quark:deepslate_furnace', 'quark:blackstone_furnace' ] })
    event.shaped(
        'minecraft:furnace', [
        'AAA',
        'BCB',
        'AAA'
        ], {
        A: '#forge:cobblestone',
        B: 'minecraft:iron_ingot',
        C: 'minecraft:campfire'
        }
    )
    event.shaped(
        'nethersdelight:blackstone_furnace', [
        'AAA',
        'BCB',
        'AAA'
        ], {
        A: 'minecraft:blackstone',
        B: 'minecraft:iron_ingot',
        C: 'minecraft:campfire'
        }
    )

    //Blast Furnace
    event.replaceInput(
        {output:['minecraft:blast_furnace', 'nethersdelight:blackstone_blast_furnace']},
        'minecraft:iron_ingot',
        'thermal:steel_ingot'
      )

    //Enchanting Table
    event.remove({ output: 'minecraft:enchanting_table' })
    event.shaped(
        'minecraft:enchanting_table', [
        ' A ',
        'BCB',
        'CDC'
        ], {
        A: 'minecraft:book',
        B: 'minecraft:diamond',
        C: 'compressium:obsidian_1',
        D: 'forbidden_arcanus:rune_block'
        }
    )

    //Flint and steel
    event.replaceInput(
        { output: 'minecraft:flint_and_steel' },
        'minecraft:iron_ingot',
        'thermal:steel_ingot'         
    )

    //Iron Bars
    event.remove({output:'minecraft:iron_bars'})
    event.shaped(
        '8x minecraft:iron_bars', [
        'AAA',
        'AAA',
        '   '
        ], {
        A: 'immersiveengineering:stick_iron'
        }
    )

    //Piston
    event.remove({id:'minecraft:piston'})
    event.remove({id:'aether:skyroot_piston'})
    
    //Cauldron
    event.replaceInput(
        {output:'minecraft:cauldron'},
        'minecraft:iron_ingot',
        'thermal:iron_plate'
    )

    //Hopper
    event.replaceInput(
        { output: 'minecraft:hopper' },
        'minecraft:iron_ingot',
        'thermal:iron_plate'         
    )

    //Netherite
    event.remove({id:'minecraft:netherite_ingot'})


})