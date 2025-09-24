PlayerEvents.loggedIn(event => {

    const player = event.player

    if (!player.persistentData.gotStarterItems) {
        player.persistentData.gotStarterItems = true
        player.inventory.clear()
        player.inventory.set(0, Item.of('ftbquests:book'))
    }

})