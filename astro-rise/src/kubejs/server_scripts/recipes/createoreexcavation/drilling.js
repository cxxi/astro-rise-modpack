ServerEvents.recipes(event => {

	// raw_cobalt

	event.recipes.createoreexcavation.drilling('tconstruct:raw_cobalt', 'kubejs:cobalt_vein', 100)
		.fluid('minecraft:lava')
		.drill('createoreexcavation:diamond_drill')
		.stress(128)
		.id("kubejs:cobalt_vein2")

})