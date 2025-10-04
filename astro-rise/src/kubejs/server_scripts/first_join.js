PlayerEvents.loggedIn(event => {
    
    let player = event.player

    if (!player.persistentData.firstJoin) {
        player.persistentData.firstJoin = true
        player.give(Item.of('ftbquests:book'))
    }
    
})