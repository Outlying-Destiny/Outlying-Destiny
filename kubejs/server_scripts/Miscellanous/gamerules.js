ServerEvents.loaded(event => {
    event.server.runCommandSilent('gamerule tfEnforcedProgression false');
})