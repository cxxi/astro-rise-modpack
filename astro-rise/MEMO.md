https://www.curseforge.com/minecraft/mc-mods/ad-astra-distant-horizons
https://www.curseforge.com/minecraft/mc-mods/applied-mekanistics
https://www.curseforge.com/minecraft/mc-mods/create-northstar
https://www.curseforge.com/minecraft/mc-mods/mekanism-x-create-northstar
https://www.curseforge.com/minecraft/mc-mods/roost-re-hatched
https://www.curseforge.com/minecraft/mc-mods/better-archeology
https://www.curseforge.com/minecraft/mc-mods/mutant-monsters
https://www.curseforge.com/minecraft/mc-mods/elemental-beasts
https://www.curseforge.com/minecraft/mc-mods/ancient-elements
https://www.curseforge.com/minecraft/mc-mods/mekanism-elements
https://www.curseforge.com/minecraft/mc-mods/modulargolems
https://www.curseforge.com/minecraft/mc-mods/extra-golems
https://www.curseforge.com/minecraft/mc-mods/ancient-golems

// createexcavation -> heart
// enderstorage/elevator -> ender

coal

iron
copper
zinc
gold
cobalt
silver
nickel
tin
lead
osmium
uranium
aluminum
platinum

netherite

redstone
lapis
quartz

anglesite
benitoite

emerald
diamond
ruby
sapphire
fluorite
apatite
cinnabar

niter
sulfur
ice_shard

desh
ostrum
calorite
aerolyte


```js
Ingredient.of({tag: 'minecraft:flowers'}).getItemIds().forEach(flower => {
	console.log(`ASTRO_DEBUG : ${flower}`)
    event.remove({ type: 'create:crushing', input: flower.toString() })
})
```