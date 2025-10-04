PlayerEvents.loggedIn(event => {
    
    let player = event.player

    if (!player.persistentData.firstJoin) {
        player.persistentData.firstJoin = true
        player.give(Item.of('ftbquests:book'))
    }
    
})

ServerEvents.load(event => {

    const Registries = Java.type("net.minecraft.core.registries.Registries");
    const RegistryAccess = event.server.registryAccess();
    const entityRegistryOptional = RegistryAccess.registry(Registries.ENTITY_TYPE);

    if (entityRegistryOptional.isPresent()) {
        const entityRegistry = entityRegistryOptional.get();
        entityRegistry.forEach(entityType => {
            console.log(entityType.getDescriptionId());
        });
    }
    
});