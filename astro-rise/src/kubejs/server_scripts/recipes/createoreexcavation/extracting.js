ServerEvents.recipes(event => {

	event.recipes.createoreexcavation.extracting('minecraft:lava 1000', 'astro_rise:lava_vein', 60)
		.id("astro_rise:extracting/lava")
})