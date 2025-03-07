ServerEvents.loaded(event => {

    if (!event.persistentData.getBoolean('first_launch')) {
        event.gameRules.set('tfEnforcedProgression', 'false');
        event.gameRules.set('doTraderSpawning', 'false');
        event.gameRules.set('doWeatherCycle', 'false');
        event.persistentData.putBoolean('first_launch', true);
    }

})