PlayerEvents.loggedIn(event => {
    
    let player = event.player

    if (!player.persistentData.firstJoin) {
        player.persistentData.firstJoin = true
        player.give(Item.of('ftbquests:book'))
    }
    
})

// ServerEvents.loaded(event => {

//     const BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")
//     const MobCategory = Java.loadClass("net.minecraft.world.entity.MobCategory")

//     console.log("List of all creature entity types:")

//     for (const entityType of BuiltInRegistries.ENTITY_TYPE) {
//         if (entityType.getCategory() !== MobCategory.MISC) {
//             console.log(BuiltInRegistries.ENTITY_TYPE.getKey(entityType).toString())
//         }
//     }

// })

ServerEvents.loaded(event => {

    const BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")
    const MobCategory = Java.loadClass("net.minecraft.world.entity.MobCategory")
    const LootTable = Java.loadClass("net.minecraft.world.level.storage.loot.LootTable")

    const lootDataManager = event.server.getLootData();

    console.log("List of all creature entity types:")

    for (const entityType of BuiltInRegistries.ENTITY_TYPE) {
        if (entityType.getCategory() !== MobCategory.MISC) {
            const lootTableLocation = entityType.getDefaultLootTable();
            const lootTable = lootDataManager.getLootTable(lootTableLocation);
            console.log(BuiltInRegistries.ENTITY_TYPE.getKey(entityType).toString())
        }
    }

})

// ServerEvents.loaded(event => {
//     const BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries");
//     const MobCategory = Java.loadClass("net.minecraft.world.entity.MobCategory");
//     const LootTable = Java.loadClass("net.minecraft.world.level.storage.loot.LootTable");
    
//     const lootDataManager = event.server.getLootData();
//     const entityTypeRegistry = BuiltInRegistries.ENTITY_TYPE;
//     const entityIds = entityTypeRegistry.keySet().toArray();

//     console.log("List of all creature entity types (1 = has loot, 0 = no loot):");
//     for (const entityId of entityIds) {
//         const entityType = entityTypeRegistry.get(entityId);
//         if (entityType.getCategory() !== MobCategory.MISC) {
//             const lootTableLocation = entityType.getDefaultLootTable();
//             const lootTable = lootDataManager.getLootTable(lootTableLocation);
//             const hasLoot = lootTable !== LootTable.EMPTY;
//             const prefix = hasLoot ? "1" : "0";
//             console.log(`${prefix} ${entityId}`);
//         }
//     }
//     console.log('end')
// });

// minecraft:allay
// minecraft:axolotl
// minecraft:bat
// minecraft:bee
// minecraft:blaze
// minecraft:camel
// minecraft:cat
// minecraft:cave_spider
// minecraft:chicken
// minecraft:cod
// minecraft:cow
// minecraft:creeper
// minecraft:dolphin
// minecraft:donkey
// minecraft:drowned
// minecraft:elder_guardian
// minecraft:ender_dragon
// minecraft:enderman
// minecraft:endermite
// minecraft:evoker
// minecraft:fox
// minecraft:frog
// minecraft:ghast
// minecraft:giant
// minecraft:glow_squid
// minecraft:goat
// minecraft:guardian
// minecraft:hoglin
// minecraft:horse
// minecraft:husk
// minecraft:illusioner
// minecraft:llama
// minecraft:magma_cube
// minecraft:mooshroom
// minecraft:mule
// minecraft:ocelot
// minecraft:panda
// minecraft:parrot
// minecraft:phantom
// minecraft:pig
// minecraft:piglin
// minecraft:piglin_brute
// minecraft:pillager
// minecraft:polar_bear
// minecraft:pufferfish
// minecraft:rabbit
// minecraft:ravager
// minecraft:salmon
// minecraft:sheep
// minecraft:shulker
// minecraft:silverfish
// minecraft:skeleton
// minecraft:skeleton_horse
// minecraft:slime
// minecraft:sniffer
// minecraft:spider
// minecraft:squid
// minecraft:stray
// minecraft:strider
// minecraft:tadpole
// minecraft:trader_llama
// minecraft:tropical_fish
// minecraft:turtle
// minecraft:vex
// minecraft:vindicator
// minecraft:wandering_trader
// minecraft:warden
// minecraft:witch
// minecraft:wither
// minecraft:wither_skeleton
// minecraft:wolf
// minecraft:zoglin
// minecraft:zombie
// minecraft:zombie_horse
// minecraft:zombie_villager
// minecraft:zombified_piglin
// tconstruct:sky_slime
// tconstruct:ender_slime
// tconstruct:terracube
// mekanismadditions:baby_creeper
// mekanismadditions:baby_enderman
// mekanismadditions:baby_skeleton
// mekanismadditions:baby_stray
// mekanismadditions:baby_wither_skeleton
// ad_astra:lunarian
// ad_astra:corrupted_lunarian
// ad_astra:star_crawler
// ad_astra:martian_raptor
// ad_astra:pygro
// ad_astra:zombified_pygro
// ad_astra:pygro_brute
// ad_astra:mogler
// ad_astra:zombified_mogler
// ad_astra:lunarian_wandering_trader
// ad_astra:sulfur_creeper
// ad_astra:glacian_ram
// twilightforest:adherent
// twilightforest:alpha_yeti
// twilightforest:armored_giant
// twilightforest:bighorn_sheep
// twilightforest:blockchain_goblin
// twilightforest:boar
// twilightforest:carminite_broodling
// twilightforest:carminite_ghastguard
// twilightforest:carminite_ghastling
// twilightforest:carminite_golem
// twilightforest:death_tome
// twilightforest:deer
// twilightforest:dwarf_rabbit
// twilightforest:fire_beetle
// twilightforest:giant_miner
// twilightforest:harbinger_cube
// twilightforest:hedge_spider
// twilightforest:helmet_crab
// twilightforest:hostile_wolf
// twilightforest:hydra
// twilightforest:ice_crystal
// twilightforest:king_spider
// twilightforest:knight_phantom
// twilightforest:kobold
// twilightforest:lich
// twilightforest:lich_minion
// twilightforest:lower_goblin_knight
// twilightforest:loyal_zombie
// twilightforest:maze_slime
// twilightforest:minoshroom
// twilightforest:minotaur
// twilightforest:mist_wolf
// twilightforest:mosquito_swarm
// twilightforest:naga
// twilightforest:penguin
// twilightforest:pinch_beetle
// twilightforest:plateau_boss
// twilightforest:quest_ram
// twilightforest:raven
// twilightforest:redcap
// twilightforest:redcap_sapper
// twilightforest:rising_zombie
// twilightforest:roving_cube
// twilightforest:skeleton_druid
// twilightforest:slime_beetle
// twilightforest:snow_guardian
// twilightforest:snow_queen
// twilightforest:squirrel
// twilightforest:stable_ice_core
// twilightforest:swarm_spider
// twilightforest:tiny_bird
// twilightforest:towerwood_borer
// twilightforest:troll
// twilightforest:unstable_ice_core
// twilightforest:upper_goblin_knight
// twilightforest:ur_ghast
// twilightforest:winter_wolf
// twilightforest:wraith
// twilightforest:yeti
// deeperdarker:angler_fish
// deeperdarker:sculk_centipede
// deeperdarker:sculk_leech
// deeperdarker:sculk_snapper
// deeperdarker:shattered
// deeperdarker:shriek_worm
// deeperdarker:sludge
// deeperdarker:stalker
// alexsmobs:grizzly_bear
// alexsmobs:roadrunner
// alexsmobs:bone_serpent
// alexsmobs:bone_serpent_part
// alexsmobs:gazelle
// alexsmobs:crocodile
// alexsmobs:fly
// alexsmobs:hummingbird
// alexsmobs:orca
// alexsmobs:sunbird
// alexsmobs:gorilla
// alexsmobs:crimson_mosquito
// alexsmobs:rattlesnake
// alexsmobs:endergrade
// alexsmobs:hammerhead_shark
// alexsmobs:lobster
// alexsmobs:komodo_dragon
// alexsmobs:capuchin_monkey
// alexsmobs:centipede_head
// alexsmobs:warped_toad
// alexsmobs:moose
// alexsmobs:mimicube
// alexsmobs:raccoon
// alexsmobs:blobfish
// alexsmobs:seal
// alexsmobs:cockroach
// alexsmobs:shoebill
// alexsmobs:elephant
// alexsmobs:soul_vulture
// alexsmobs:snow_leopard
// alexsmobs:spectre
// alexsmobs:crow
// alexsmobs:alligator_snapping_turtle
// alexsmobs:mungus
// alexsmobs:mantis_shrimp
// alexsmobs:guster
// alexsmobs:warped_mosco
// alexsmobs:straddler
// alexsmobs:stradpole
// alexsmobs:emu
// alexsmobs:platypus
// alexsmobs:dropbear
// alexsmobs:tasmanian_devil
// alexsmobs:kangaroo
// alexsmobs:cachalot_whale
// alexsmobs:leafcutter_ant
// alexsmobs:enderiophage
// alexsmobs:bald_eagle
// alexsmobs:tiger
// alexsmobs:tarantula_hawk
// alexsmobs:void_worm
// alexsmobs:void_worm_part
// alexsmobs:frilled_shark
// alexsmobs:mimic_octopus
// alexsmobs:seagull
// alexsmobs:froststalker
// alexsmobs:tusklin
// alexsmobs:laviathan
// alexsmobs:cosmaw
// alexsmobs:toucan
// alexsmobs:maned_wolf
// alexsmobs:anaconda
// alexsmobs:anteater
// alexsmobs:rocky_roller
// alexsmobs:flutter
// alexsmobs:gelada_monkey
// alexsmobs:jerboa
// alexsmobs:terrapin
// alexsmobs:comb_jelly
// alexsmobs:cosmic_cod
// alexsmobs:bunfungus
// alexsmobs:bison
// alexsmobs:giant_squid
// alexsmobs:sea_bear
// alexsmobs:devils_hole_pupfish
// alexsmobs:catfish
// alexsmobs:flying_fish
// alexsmobs:skelewag
// alexsmobs:rain_frog
// alexsmobs:potoo
// alexsmobs:mudskipper
// alexsmobs:rhinoceros
// alexsmobs:sugar_glider
// alexsmobs:farseer
// alexsmobs:skreecher
// alexsmobs:underminer
// alexsmobs:murmur
// alexsmobs:murmur_head
// alexsmobs:skunk
// alexsmobs:banana_slug
// alexsmobs:blue_jay
// alexsmobs:caiman
// alexsmobs:triops
// thermal:basalz
// thermal:blizz
// thermal:blitz