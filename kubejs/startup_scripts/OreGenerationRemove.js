WorldgenEvents.remove(event => {

    event.removeOres(props => {

      props.blocks = ['elementalcraft:inert_crystal_ore', 'elementalcraft:deepslate_inert_crystal_ore', /rftoolsbase:dimensionalshard_.+/, /draconicevolution:.+draconium_ore/, 'thermal:ruby_ore', 'thermal:deepslate_ruby_ore', 'thermal:sapphire_ore', 'thermal:deepslate_sapphire_ore', 'bigreactors:yellorite_ore', 'bigreactors:deepslate_yellorite_ore', 'bigreactors:benitoite_ore', 'bigreactors:anglesite_ore', 'forbidden_arcanus:xpetrified_ore', 'forbidden_arcanus:stella_arcanum', 'actuallyadditions:black_quartz_ore']
    })
})