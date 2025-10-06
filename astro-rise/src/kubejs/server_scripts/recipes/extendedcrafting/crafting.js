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

	event.remove({ id: 'extendedcrafting:basic_component' })

	global.craft(event, 'extendedcrafting:basic_component', [
		'astro_rise:base_component',
		'astro_rise:quartz_mechanism',
   		'2x minecraft:iron_ingot'
	])

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
		event.remove({ id: `extendedcrafting:crafting_${type}_component` })
	})

	// tables

	event.remove({ id: 'extendedcrafting:basic_table' })
	event.remove({ id: 'extendedcrafting:advanced_table' })

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

})