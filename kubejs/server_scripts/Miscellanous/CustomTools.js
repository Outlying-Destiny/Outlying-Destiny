ServerEvents.recipes(event => {

    const custommaterials = [
        {
            item: 'kubejs:evil_infused'
        },
        {
            item: 'kubejs:demon'
        }
    ]

    custommaterials.forEach((mat) => {
        event.shaped(
            mat.item+'_sword', [
            ' A ',
            ' A ',
            ' B '
            ], {
            A: mat.item+'_ingot',
            B: '#balm:wooden_rods'
            }
        )
        event.shaped(
            mat.item+'_pickaxe', [
            'AAA',
            ' B ',
            ' B '
            ], {
            A: mat.item+'_ingot',
            B: '#balm:wooden_rods'
            }
        )
        event.shaped(
            mat.item+'_axe', [
            'AA ',
            'AB ',
            ' B '
            ], {
            A: mat.item+'_ingot',
            B: '#balm:wooden_rods'
            }
        )
        event.shaped(
            mat.item+'_shovel', [
            ' A ',
            ' B ',
            ' B '
            ], {
            A: mat.item+'_ingot',
            B: '#balm:wooden_rods'
            }
        )
        event.shaped(
            mat.item+'_hoe', [
            'AA ',
            ' B ',
            ' B '
            ], {
            A: mat.item+'_ingot',
            B: '#balm:wooden_rods'
            }
        )
    })
})