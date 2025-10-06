ServerEvents.recipes(event => {

	// cinder_flour
	
	event.recipes.create.pressing(
	    'create:cinder_flour',
	    'minecraft:nether_wart'
	)

	// plate

	event.recipes.create.pressing(
	    'astro_rise:soularium_plate',
	    'enderio:soularium_ingot'
	)

})