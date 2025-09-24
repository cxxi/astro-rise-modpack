ServerEvents.recipes(event => {

	event.recipes.createoreexcavation.extracting('minecraft:lava 1000', 'astro_rise:ore_vein_type/lava', 60)
		.id("astro_rise:extracting/lava")
})