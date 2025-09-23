ServerEvents.recipes(event => {

	event.recipes.createoreexcavation.drilling([
			Item.of('tconstruct:raw_cobalt'),
			Item.of('minecraft:netherrack').withChance(0.40)
		], 'astro_rise:cobalt_vein', 300)
		.fluid('minecraft:lava')
		.drill('createoreexcavation:diamond_drill')
		.stress(192)
		.id("astro_rise:drilling/cobalt")

	event.recipes.createoreexcavation.drilling('thermal:raw_silver', 'astro_rise:silver_vein', 300)
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("astro_rise:drilling/silver")

	event.recipes.createoreexcavation.drilling('thermal:raw_nickel', 'astro_rise:nickel_vein', 300)
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("astro_rise:drilling/nickel")

	event.recipes.createoreexcavation.drilling('mekanism:raw_tin', 'astro_rise:tin_vein', 300)
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("astro_rise:drilling/tin")

	event.recipes.createoreexcavation.drilling('mekanism:raw_osmium', 'astro_rise:osmium_vein', 300)
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("astro_rise:drilling/osmium")

	event.recipes.createoreexcavation.drilling('mekanism:raw_uranium', 'astro_rise:uranium_vein', 300)
		.fluid('tconstruct:molten_lumium')
		.drill('createoreexcavation:netherite_drill')
		.stress(192)
		.id("astro_rise:drilling/uranium")

	event.recipes.createoreexcavation.drilling('mekanism:fluorite_gem', 'astro_rise:fluorite_vein', 300)
		.fluid('tconstruct:molten_lumium')
		.drill('createoreexcavation:netherite_drill')
		.stress(192)
		.id("astro_rise:drilling/fluorite")

	event.recipes.createoreexcavation.drilling('mekanism:raw_lead', 'astro_rise:lead_vein', 300)
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("astro_rise:drilling/lead")

	event.recipes.createoreexcavation.drilling('thermal:apatite', 'astro_rise:apatite_vein', 300)
		.fluid('minecraft:lava')
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("astro_rise:drilling/apatite")

	event.recipes.createoreexcavation.drilling('thermal:cinnabar', 'astro_rise:cinnabar_vein', 300)
		.fluid('minecraft:lava')
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("astro_rise:drilling/cinnabar")

	event.recipes.createoreexcavation.drilling('thermal:ruby', 'astro_rise:ruby_vein', 300)
		.fluid('minecraft:water')
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("astro_rise:drilling/ruby")

	event.recipes.createoreexcavation.drilling('thermal:sapphire', 'astro_rise:sapphire_vein', 300)
		.fluid('minecraft:water')
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("astro_rise:drilling/sapphire")

	event.recipes.createoreexcavation.drilling('thermal:nither', 'astro_rise:nither_vein', 300)
		// .fluid('mekanism:hydrogen')
		.drill('createoreexcavation:netherite_drill')
		.stress(192)
		.id("astro_rise:drilling/nither")

	event.recipes.createoreexcavation.drilling('thermal:sulfur', 'astro_rise:sulfur_vein', 300)
		// .fluid('mekanism:hydrogen')
		.drill('createoreexcavation:netherite_drill')
		.stress(192)
		.id("astro_rise:drilling/sulfur")

	event.recipes.createoreexcavation.drilling('ad_astra:raw_desh', 'astro_rise:desh_vein', 300)
		.fluid('mekanism:sulfuric_acid')
		.drill('createoreexcavation:netherite_drill')
		.stress(256)
		.id("astro_rise:drilling/desh")

	event.recipes.createoreexcavation.drilling('ad_astra:ice_shard', 'astro_rise:ice_shard_vein', 300)
		.fluid('mekanism:oxygen')
		.drill('createoreexcavation:netherite_drill')
		.stress(192)
		.id("astro_rise:drilling/ice_shard")

	event.recipes.createoreexcavation.drilling('ad_astra:raw_ostrum', 'astro_rise:ostrum_vein', 300)
		.fluid('mekanism:sulfuric_acid')
		.drill('createoreexcavation:netherite_drill')
		.stress(256)
		.id("astro_rise:drilling/ostrum")

	event.recipes.createoreexcavation.drilling('ad_astra:raw_calorite', 'astro_rise:calorite_vein', 300)
		.fluid('mekanism:sulfuric_acid')
		.drill('createoreexcavation:netherite_drill')
		.stress(256)
		.id("astro_rise:drilling/calorite")
})