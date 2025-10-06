ServerEvents.recipes(event => {

	event.remove({ id: 'extendedcrafting:redstone_ingot' })
	event.remove({ id: 'extendedcrafting:ender_ingot' })
	event.remove({ id: 'extendedcrafting:luminessence' })

	// black_iron_ingot

	event.remove({ id: 'extendedcrafting:black_iron_ingot' })

	global.craft(event, 'extendedcrafting:black_iron_ingot', [
		'minecraft:iron_ingot',
		'twilightforest:knightmetal_ingot',
   		'enderio:grains_of_infinity'
	])

	// component

	const componentTypes = [
		'basic',
		'advanced',
		'elite',
		'ultimate',
		'redstone',
		'enhanced_redstone',
		'ender',
		'enhanced_ender',
		'crystaltine',
		'the_ultimate'
	]

	componentTypes.forEach(type => {
		event.remove({ id: `extendedcrafting:${type}_component` })
	})

	// tables

	event.remove({ id: 'extendedcrafting:basic_table' })

	global.craft(event, 'extendedcrafting:basic_table', [
		' ABA ',
		'ACDCA',
		'BD DB',
		'ACDCA',
		' ABA '
	], {
		A: 'extendedcrafting:basic_component',
		B: 'astro_rise:quartz_mechanism',
		C: 'extendedcrafting:basic_catalyst',
		D: 'minecraft:crafting_table'
	})

	event.remove({ id: 'extendedcrafting:advanced_table' })

	global.craft(event, 'extendedcrafting:advanced_table', [
		' ABA ',
		'ACDCA',
		'ED DF',
		'ACDCA',
		' AGA '
	], {
		A: 'extendedcrafting:advanced_component',
		B: 'astro_rise:earth_mechanism',
		C: 'extendedcrafting:advanced_catalyst',
		D: 'extendedcrafting:basic_table',
		E: 'astro_rise:sky_mechanism',
		F: 'astro_rise:ichor_mechanism',
		G: 'astro_rise:ender_mechanism'
	})

	event.remove({ id: 'extendedcrafting:elite_table' })

	global.craft(event, 'extendedcrafting:elite_table', [
		'HABAH',
		'ACDCA',
		'EDHDF',
		'ACDCA',
		'HAGAH'
	], {
		A: 'extendedcrafting:elite_component',
		B: 'astro_rise:earth_steel_mechanism',
		C: 'extendedcrafting:elite_catalyst',
		D: 'extendedcrafting:advanced_table',
		E: 'astro_rise:sky_steel_mechanism',
		F: 'astro_rise:ichor_steel_mechanism',
		G: 'astro_rise:ender_steel_mechanism',
		H: 'extendedcrafting:luminessence'
	})

})