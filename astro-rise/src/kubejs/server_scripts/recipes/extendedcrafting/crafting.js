ServerEvents.recipes(event => {

	event.remove({ id: 'extendedcrafting:redstone_ingot' })
	event.remove({ id: 'extendedcrafting:ender_ingot' })
	event.remove({ id: 'extendedcrafting:luminessence' })

	// black_iron_ingot

	event.remove({ id: 'extendedcrafting:black_iron_ingot' })

	event.shapeless('extendedcrafting:black_iron_ingot', [
		'minecraft:iron_ingot',
		'twilightforest:knightmetal_ingot',
   		'enderio:grains_of_infinity'
	])

	// basic component

	event.remove({ id: 'extendedcrafting:basic_component' })

	event.shapeless('extendedcrafting:basic_component', [
		'extendedcrafting:black_iron_slate',
		'astro_rise:quartz_mechanism',
   		'2x minecraft:iron_ingot'
	])

	// basic table

	event.remove({ id: 'extendedcrafting:basic_table' })

	event.recipes.create.mechanical_crafting('extendedcrafting:basic_table', [
		' ABA ',
		'ACDCA',
		'ED DF',
		'ACDCA',
		' AGA '
	], {
		A: 'extendedcrafting:basic_component',
		B: 'astro_rise:earth_mechanism',
		C: 'extendedcrafting:basic_catalyst',
		D: 'minecraft:crafting_table',
		E: 'astro_rise:sky_mechanism',
		F: 'astro_rise:ichor_mechanism',
		G: 'astro_rise:ender_mechanism'
	})

})