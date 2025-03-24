/**
 * unify chipped since they dont do that anymore
 * @private
 * @param {TagEvent.Item & TagEvent.Block} event
 */
const unifyChisel = (event) => {
    // regex here means
    // `^` = beginning, `$` = end, `.+` = anything that isnt whitespace, any length

    const IRON_TAG = '#chipped:iron_block';
    const GOLD_TAG = '#chipped:gold_block';
    const COAL_TAG = '#chipped:coal_block';
    const DIAMOND_TAG = '#chipped:diamond_block';
    const EMERALD_TAG = '#chipped:emerald_block';
    const GLOWSTONE_TAG = '#chipped:glowstone';
    const LAPIS_TAG = '#chipped:lapis_block';
    const REDSTONE_TAG = '#chipped:redstone_block';

    const RAW_COPPER_TAG = '#chipped:raw_copper_block';
    const RAW_IRON_TAG = '#chipped:raw_iron_block';
    const RAW_GOLD_TAG = '#chipped:raw_gold_block';

    const COBBLESTONE_TAG = '#chipped:cobblestone';
    const MOSSY_COBBLESTONE_TAG = '#chipped:mossy_cobblestone';

    const SANDSTONE_TAG = '#chipped:sandstone';
    const RED_SANDSTONE_TAG = '#chipped:red_sandstone';
    
    // event.add('forge:glass/colorless', /^chipped:(.+){0,1}glass$/) // most of the glass here only have fancy trims, but they are all not dyed
    event.add('minecraft:planks', /^#chipped:.+_planks$/)
    event.add('forge:glass', '#chipped:glass')
    event.add('forge:cobblestone', [COBBLESTONE_TAG, MOSSY_COBBLESTONE_TAG])
    event.add('forge:cobblestone/normal', COBBLESTONE_TAG)
    event.add('forge:cobblestone/mossy', MOSSY_COBBLESTONE_TAG)
    event.add('minecraft:stone_crafting_materials', COBBLESTONE_TAG)
    event.add('forge:sandstone', [SANDSTONE_TAG, RED_SANDSTONE_TAG])
    event.add('forge:sandstone/colorless', SANDSTONE_TAG)
    event.add('forge:sandstone/red', RED_SANDSTONE_TAG)
    event.add('forge:storage_blocks/iron', IRON_TAG)
    event.add('forge:storage_blocks/gold', GOLD_TAG)
    event.add('forge:storage_blocks/coal', COAL_TAG)
    event.add('forge:storage_blocks/diamond', DIAMOND_TAG)
    event.add('forge:storage_blocks/emerald', EMERALD_TAG)
    event.add('forge:storage_blocks/redstone', REDSTONE_TAG)
    event.add('forge:storage_blocks/lapis', LAPIS_TAG)
    event.add('forge:storage_blocks/glowstone', GLOWSTONE_TAG)
    event.add('forge:storage_blocks/raw_copper', RAW_COPPER_TAG)
    event.add('forge:storage_blocks/raw_iron', RAW_IRON_TAG)
    event.add('forge:storage_blocks/raw_gold', RAW_GOLD_TAG)
    event.add('forge:storage_blocks', [IRON_TAG, GOLD_TAG, COAL_TAG, DIAMOND_TAG, EMERALD_TAG, LAPIS_TAG, REDSTONE_TAG, GLOWSTONE_TAG, RAW_COPPER_TAG, RAW_IRON_TAG, RAW_GOLD_TAG])
    event.add('forge:storage_blocks/raw_materials', [RAW_COPPER_TAG, RAW_IRON_TAG, RAW_GOLD_TAG])
    event.add('minecraft:piglin_loved', [GOLD_TAG, RAW_GOLD_TAG])
}

ServerEvents.tags('item', unifyChisel)

ServerEvents.tags('block', unifyChisel)