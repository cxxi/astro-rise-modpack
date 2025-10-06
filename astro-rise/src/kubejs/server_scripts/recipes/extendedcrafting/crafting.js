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
		event.replaceInput({ output: `extendedcrafting:${type}_component` }, 'extendedcrafting:black_iron_slate', 'astro_rise:base_component')
	})

	// tables

	event.remove({ id: 'extendedcrafting:basic_table' })
	event.remove({ id: 'extendedcrafting:advanced_table' })

	const tablePatterns = [
		' ABA ',
		'ACDCA',
		'ED DF',
		'ACDCA',
		' AGA '
	]

	global.craft(event, 'extendedcrafting:basic_table', tablePatterns, {
		A: 'extendedcrafting:basic_component',
		B: 'astro_rise:earth_mechanism',
		C: 'extendedcrafting:basic_catalyst',
		D: 'minecraft:crafting_table',
		E: 'astro_rise:sky_mechanism',
		F: 'astro_rise:ichor_mechanism',
		G: 'astro_rise:ender_mechanism'
	})

	global.craft(event, 'extendedcrafting:advanced_table', tablePatterns, {
		A: 'extendedcrafting:advanced_component',
		B: 'astro_rise:earth_steel_mechanism',
		C: 'extendedcrafting:advanced_catalyst',
		D: 'extendedcrafting:basic_table',
		E: 'astro_rise:sky_steel_mechanism',
		F: 'astro_rise:ichor_steel_mechanism',
		G: 'astro_rise:ender_steel_mechanism'
	})

})