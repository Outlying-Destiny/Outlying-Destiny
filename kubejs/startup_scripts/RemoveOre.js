WorldgenEvents.remove(event => {

    event.removeOres(props => {

      props.blocks = ['elementalcraft:inert_crystal_ore', /rftoolsbase:dimensionalshard_.+/, /draconicevolution:.+draconium_ore/]
    })
})