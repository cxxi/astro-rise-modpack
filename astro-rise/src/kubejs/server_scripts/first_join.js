PlayerEvents.loggedIn(event => {
    
    let player = event.player

    if (!player.persistentData.firstJoin) {
        player.persistentData.firstJoin = true
        player.give(Item.of('ftbquests:book'))
    }
    
})

ServerEvents.ready(event => {

    const Registry = Java.loadClass("net.minecraft.core.Registry");
    const ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");

    // Registry.ENTITY_TYPE contient toutes les entités
    const entityRegistry = Registry.ENTITY_TYPE;

    entityRegistry.keySet().forEach(key => {
        console.log(key.toString()); // Ex: "minecraft:zombie"
    });

});