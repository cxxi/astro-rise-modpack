// This script handles custom ore generation for the AstroRise modpack.

// WorldgenEvents.remove(event => {
//   event.removeOres(o => {
//     o.mods = ['mekanism', 'thermal']
//   })
// })

WorldgenEvents.add(event => {
  // Add Mekanism ores to the Otherside dimension
  const mekanismOres = [
    'mekanism:ore_fluorite_buried',
    'mekanism:ore_fluorite_normal',
    'mekanism:ore_uranium_buried',
    'mekanism:ore_uranium_small'
  ]

  mekanismOres.forEach(ore => {
    event.addOre(o => {
      o.id = `kubejs:add_${ore.replace(':', '_')}`
      o.ore = ore
      o.biomes = { dimension: 'deeperdarker:otherside' }
    })
  })

  // Add Thermal ores to their respective dimensions
  event.addOre(o => {
    o.id = 'kubejs:add_apatite_ore'
    o.ore = 'thermal:apatite_ore'
    o.biomes = { dimension: 'minecraft:the_end' }
  })

  event.addOre(o => {
    o.id = 'kubejs:add_cinnabar_ore'
    o.ore = 'thermal:cinnabar_ore'
    o.biomes = { dimension: 'minecraft:the_nether' }
  })

  event.addOre(o => {
    o.id = 'kubejs:add_niter_ore'
    o.ore = 'thermal:niter_ore'
    o.biomes = { dimension: 'ad_astra:venus' }
  })

  event.addOre(o => {
    o.id = 'kubejs:add_sulfur_ore'
    o.ore = 'thermal:sulfur_ore'
    o.biomes = { dimension: 'ad_astra:mercury' }
  })
})