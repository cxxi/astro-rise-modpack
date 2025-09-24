ServerEvents.recipes(event => {

	event.remove({ id: 'createoreexcavation:drilling/nether_gold' })

	event.remove({ id: 'createoreexcavation:drilling/netherite' })

	event.recipes.createoreexcavation.drilling([
			Item.of('minecraft:netherrack').withChance(0.80),
			Item.of('minecraft:magma_block').withChance(0.50),
			Item.of('minecraft:ancient_debris').withChance(0.20)
		], 'astro_rise:ore_vein_type/netherite', 4000)
		.fluid('mekanism:sulfuric_acid')
		.drill('createoreexcavation:netherite_drill')
		.stress(256)
		.id("astro_rise:drilling/netherite")

	event.recipes.createoreexcavation.drilling([
			Item.of('tconstruct:raw_cobalt').withChance(0.40),
			Item.of('minecraft:netherrack').withChance(0.40)
		], 'astro_rise:ore_vein_type/cobalt', 1200)
		.fluid('minecraft:lava')
		.drill('createoreexcavation:diamond_drill')
		.stress(192)
		.id("astro_rise:drilling/cobalt")

	event.recipes.createoreexcavation.drilling('thermal:raw_silver', 'astro_rise:ore_vein_type/silver', 600)
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("astro_rise:drilling/silver")

	event.recipes.createoreexcavation.drilling('thermal:raw_nickel', 'astro_rise:ore_vein_type/nickel', 600)
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("astro_rise:drilling/nickel")

	event.recipes.createoreexcavation.drilling('mekanism:raw_tin', 'astro_rise:ore_vein_type/tin', 600)
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("astro_rise:drilling/tin")

	event.recipes.createoreexcavation.drilling('mekanism:raw_lead', 'astro_rise:ore_vein_type/lead', 600)
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("astro_rise:drilling/lead")

	event.recipes.createoreexcavation.drilling('mekanism:raw_osmium', 'astro_rise:ore_vein_type/osmium', 600)
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("astro_rise:drilling/osmium")

	event.recipes.createoreexcavation.drilling('simplemetals_aluminum:raw_aluminum', 'astro_rise:ore_vein_type/aluminum', 600)
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("astro_rise:drilling/aluminum")

	event.recipes.createoreexcavation.drilling(Item.of('platinum_mod:raw_platinum').withChance(0.35), 'astro_rise:ore_vein_type/platinum', 1200)
		.fluid('minecraft:lava')
		.drill('createoreexcavation:netherite_drill')
		.stress(192)
		.id("astro_rise:drilling/platinum")

	event.recipes.createoreexcavation.drilling([
			Item.of('deeperdarker:sculk_stone').withChance(0.50),
			Item.of('mekanism:fluorite_gem').withChance(0.30)
		], 'astro_rise:ore_vein_type/fluorite', 2400)
		.fluid('tconstruct:molten_lumium')
		.drill('createoreexcavation:netherite_drill')
		.stress(192)
		.id("astro_rise:drilling/fluorite")

	event.recipes.createoreexcavation.drilling([
			Item.of('deeperdarker:gloomslate').withChance(0.50),
			Item.of('mekanism:raw_uranium').withChance(0.30)
		], 'astro_rise:ore_vein_type/uranium', 2400)
		.fluid('tconstruct:molten_lumium')
		.drill('createoreexcavation:netherite_drill')
		.stress(192)
		.id("astro_rise:drilling/uranium")

	event.recipes.createoreexcavation.drilling([
			Item.of('minecraft:end_stone').withChance(0.65),
			Item.of('bigreactors:anglesite_crystal').withChance(0.15)
		], 'astro_rise:ore_vein_type/anglesite', 4800)
		.fluid('tconstruct:molten_uranium')
		.drill('createoreexcavation:netherite_drill')
		.stress(256)
		.id("astro_rise:drilling/anglesite")

	event.recipes.createoreexcavation.drilling([
			Item.of('minecraft:netherrack').withChance(0.65),
			Item.of('bigreactors:benitoite_crystal').withChance(0.15)
		], 'astro_rise:ore_vein_type/benitoite', 4800)
		.fluid('tconstruct:molten_uranium')
		.drill('createoreexcavation:netherite_drill')
		.stress(256)
		.id("astro_rise:drilling/benitoite")

	event.recipes.createoreexcavation.drilling('thermal:apatite', 'astro_rise:ore_vein_type/apatite', 1200)
		.fluid('minecraft:lava')
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("astro_rise:drilling/apatite")

	event.recipes.createoreexcavation.drilling('thermal:cinnabar', 'astro_rise:ore_vein_type/cinnabar', 1200)
		.fluid('minecraft:lava')
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("astro_rise:drilling/cinnabar")

	event.recipes.createoreexcavation.drilling('thermal:ruby', 'astro_rise:ore_vein_type/ruby', 1200)
		.fluid('minecraft:water')
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("astro_rise:drilling/ruby")

	event.recipes.createoreexcavation.drilling('thermal:sapphire', 'astro_rise:ore_vein_type/sapphire', 1200)
		.fluid('minecraft:water')
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("astro_rise:drilling/sapphire")

	event.recipes.createoreexcavation.drilling([
			Item.of('ad_astra:venus_stone').withChance(0.35),
			Item.of('thermal:niter').withChance(0.15)
		], 'astro_rise:ore_vein_type/niter', 3200)
		.fluid('mekanism:hydrogen')
		.drill('createoreexcavation:netherite_drill')
		.stress(192)
		.id("astro_rise:drilling/niter")

	event.recipes.createoreexcavation.drilling([
			Item.of('ad_astra:mercury_stone').withChance(0.35),
			Item.of('thermal:sulfur').withChance(0.15)
		], 'astro_rise:ore_vein_type/sulfur', 3200)
		.fluid('mekanism:hydrogen')
		.drill('createoreexcavation:netherite_drill')
		.stress(192)
		.id("astro_rise:drilling/sulfur")

	event.recipes.createoreexcavation.drilling('ad_astra:raw_desh', 'astro_rise:ore_vein_type/desh', 4000)
		.fluid('mekanism:sulfuric_acid')
		.drill('createoreexcavation:netherite_drill')
		.stress(256)
		.id("astro_rise:drilling/desh")

	event.recipes.createoreexcavation.drilling([
			Item.of('ad_astra:moon_stone').withChance(0.35),
			Item.of('ad_astra:ice_shard').withChance(0.15)
		], 'astro_rise:ore_vein_type/ice_shard', 3200)
		.fluid('mekanism:oxygen')
		.drill('createoreexcavation:netherite_drill')
		.stress(192)
		.id("astro_rise:drilling/ice_shard")

	event.recipes.createoreexcavation.drilling('ad_astra:raw_ostrum', 'astro_rise:ore_vein_type/ostrum', 4000)
		.fluid('mekanism:sulfuric_acid')
		.drill('createoreexcavation:netherite_drill')
		.stress(256)
		.id("astro_rise:drilling/ostrum")

	event.recipes.createoreexcavation.drilling('ad_astra:raw_calorite', 'astro_rise:ore_vein_type/calorite', 4000)
		.fluid('mekanism:sulfuric_acid')
		.drill('createoreexcavation:netherite_drill')
		.stress(256)
		.id("astro_rise:drilling/calorite")

	event.recipes.createoreexcavation.drilling('astro_rise:raw_aerolyte', 'astro_rise:ore_vein_type/aerolyte', 4000)
		.fluid('mekanism:sulfuric_acid')
		.drill('createoreexcavation:netherite_drill')
		.stress(256)
		.id("astro_rise:drilling/aerolyte")

})