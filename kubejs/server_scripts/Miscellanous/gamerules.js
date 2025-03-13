ServerEvents.loaded(event => {

    const {server} = event;

    if (!server.persistentData.getBoolean('first_launch')) {
        server.gameRules.set('tfEnforcedProgression', 'false');
        server.gameRules.set('doTraderSpawning', 'false');
        server.gameRules.set('doWeatherCycle', 'false');
        server.persistentData.putBoolean('first_launch', true);
    }

})