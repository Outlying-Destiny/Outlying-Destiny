ServerEvents.tags('item', event => {

    //Uraninite Stuff
    event.removeAllTagsFrom([/powah:(deepslate_){0,1}uraninite_ore(_poor|_dense){0,1}/, /powah:uraninite_(raw|block)/])

})