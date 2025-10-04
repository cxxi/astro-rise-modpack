PlayerEvents.loggedIn(event => {
    
    let player = event.player

    if (!player.persistentData.firstJoin) {
        player.persistentData.firstJoin = true
        player.give(Item.of('ftbquests:book'))
    }
    
})

// ServerEvents.started(event => {
//     const Registry = Java.loadClass("net.minecraft.core.Registry");

//     // Tous les types d'entités
//     const entityRegistry = Registry.ENTITY_TYPE;

//     entityRegistry.keySet().forEach(key => {
//         console.log(key.toString()); // Ex: "minecraft:zombie"
//     });
    
// });