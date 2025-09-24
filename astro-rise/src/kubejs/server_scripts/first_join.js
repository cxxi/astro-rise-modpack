PlayerEvents.loggedIn(event => {

    if (!event.player.persistentData.firstJoin) {
        event.player.persistentData.firstJoin = true
        event.player.inventory.clear()
        event.player.inventory.set(0, Item.of('ftbquests:book'))
    }

})