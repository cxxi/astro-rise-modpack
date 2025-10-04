PlayerEvents.loggedIn(event => {
    
    let player = event.player

    if (!player.persistentData.firstJoin) {
        player.persistentData.firstJoin = true
        player.give(Item.of('ftbquests:book'))
    }
    
})

ServerEvents.loaded(event => {
    const entityTypes = event.server.registryAccess().registry("minecraft:entity_type").get()
    console.log("List of all entity types:")
    entityTypes.forEach(entityType => {
        console.log(entityType.arch$registryName())
    })
})