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

coal

netherite

iron
copper
gold
tin
lead
osmium
uranium
zinc
cobalt
silver
nickel
aluminum
platinum

desh
ostrum
calorite
aerolyte

redstone
lapis
quartz

emerald
diamond
ruby
sapphire
fluorite
apatite
cinnabar

anglesite
benitoite

niter
sulfur
ice_shard


```js
Ingredient.of({tag: 'minecraft:flowers'}).getItemIds().forEach(flower => {
	console.log(`ASTRO_DEBUG : ${flower}`)
    event.remove({ type: 'create:crushing', input: flower.toString() })
})
```