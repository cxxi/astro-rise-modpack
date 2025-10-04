PlayerEvents.loggedIn(event => {
    
    let player = event.player

    if (!player.persistentData.firstJoin) {
        player.persistentData.firstJoin = true
        player.give(Item.of('ftbquests:book'))
    }
    
})

ServerEvents.loaded(event => {
    const BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries");
    console.log("List of all entity types:");
    for (const entityType of BuiltInRegistries.ENTITY_TYPE) {
        console.log(BuiltInRegistries.ENTITY_TYPE.getKey(entityType).toString());
    }
});