ServerEvents.tags('item', event => {

    //Axes
    event.add('forge:tools/axes', ['ae2:certus_quartz_axe', 'ae2:fluix_axe', 'ae2:nether_quartz_axe', 'botania:manasteel_axe', 'botania:elementium_axe', 'evilcraft:vengeance_pickaxe', 'forbidden_arcanus:reinforced_deorum_axe', 'naturesaura:infused_iron_axe', 'naturesaura:sky_axe', 'naturesaura:depth_axe', 'aether:skyroot_axe', 'aether:holystone_axe', 'aether:zanite_axe', 'undergarden:cloggrum_axe', 'undergarden:froststeel_axe', 'undergarden:utherium_axe', 'undergarden:forgotten_axe', 'lost_aether_content:phoenix_axe'])

    //Fertilizers
    event.add('forge:fertilizer', ['thermal:compost', 'thermal:phytogro', 'immersiveengineering:fertilizer'])

    //Make Dyes
    event.add('outlying:makes_dye/white', ['minecraft:bone_meal', 'minecraft:lily_of_the_valley', 'botania:white_petal', 'aether:white_flower', 'undergarden:veil_mushroom'])
    event.add('outlying:makes_dye/light_gray', ['minecraft:azure_bluet', 'minecraft:oxeye_daisy', 'white_tulip', 'botania:light_gray_petal'])
    event.add('outlying:makes_dye/gray', 'botania:gray_petal')
    event.add('outlying:makes_dye/black', ['minecraft:ink_sac', 'minecraft:charcoal', 'minecraft:wither_rose', 'botania:black_petal', 'undergarden:ink_mushroom', 'architects_palette:withered_bone'])
    event.add('outlying:makes_dye_shapeless/black', ['minecraft:ink_sac', 'minecraft:charcoal', 'minecraft:wither_rose', 'botania:black_petal', 'undergarden:ink_mushroom'])
    event.add('outlying:makes_dye/brown', ['minecraft:cocoa_beans', 'botania:brown_petal'])
    event.add('outlying:makes_dye/red', ['minecraft:poppy', 'minecraft:red_tulip', 'minecraft:beetroot', 'minecraft:fire_coral', 'minecraft:fire_coral_fan', 'botania:red_petal', 'twilightforest:thorn_rose', 'undergarden:blood_mushroom'])
    event.add('outlying:makes_dye/orange', ['minecraft:orange_tulip', 'minecraft:torchflower', 'botania:orange_petal'])
    event.add('outlying:makes_dye/yellow', ['minecraft:dandelion', 'minecraft:horn_coral', 'minecraft:horn_coral_fan', 'botania:yellow_petal', 'undergarden:butterbunch'])
    event.add('outlying:makes_dye/lime', ['minecraft:sea_pickle', 'botania:lime_petal'])
    event.add('outlying:makes_dye/green', ['minecraft:cactus', 'botania:green_petal'])
    event.add('outlying:makes_dye/cyan', ['botania:cyan_petal', 'thermal:apatite'])
    event.add('outlying:makes_dye/light_blue', ['minecraft:blue_orchid', 'botania:light_blue_petal', 'undergarden:miserabell'])
    event.add('outlying:makes_dye/blue', ['minecraft:cornflower', 'minecraft:lapis_lazuli', 'minecraft:tube_coral', 'minecraft:tube_coral_fan', 'botania:blue_petal', 'undergarden:indigo_mushroom'])
    event.add('outlying:makes_dye/purple', ['botania:purple_petal', 'aether:purple_flower'])
    event.add('outlying:makes_dye/magenta', ['minecraft:allium', 'minecraft:bubble_coral', 'minecraft:bubble_coral_fan', 'botania:magenta_petal', 'twilightforest:huge_water_lily'])
    event.add('outlying:makes_dye/pink', ['minecraft:pink_tulip', 'minecraft:pink_petals', 'minecraft:brain_coral', 'minecraft:brain_coral_fan', 'botania:pink_petal', 'undergarden:amorous_bristle'])

})