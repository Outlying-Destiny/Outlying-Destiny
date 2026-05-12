WorldgenEvents.remove(event => {

    event.removeOres(props => {

      props.blocks = ['elementalcraft:inert_crystal_ore', 'elementalcraft:deepslate_inert_crystal_ore', /rftoolsbase:dimensionalshard_.+/, /draconicevolution:.+draconium_ore/, 'thermal:ruby_ore', 'thermal:deepslate_ruby_ore', 'thermal:sapphire_ore', 'thermal:deepslate_sapphire_ore', 'bigreactors:yellorite_ore', 'bigreactors:deepslate_yellorite_ore', 'bigreactors:benitoite_ore', 'bigreactors:anglesite_ore', 'forbidden_arcanus:xpetrified_ore', 'forbidden_arcanus:stella_arcanum', 'forbidden_arcanus:arcane_crystal_ore', 'forbidden_arcanus:deepslate_arcane_crystal_ore', 'forbidden_arcanus:runic_stone', 'forbidden_arcanus:runic_deepslate', 'forbidden_arcanus:runic_darkstone', 'forbidden_arcanus:darkstone', 'mekanism_extras:naquadah_ore', 'mekanism_extras:end_naquadah_ore']
    })
})