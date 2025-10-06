ServerEvents.recipes(event => {

	event.custom({
		type: 'createaddition:rolling',
		input: {
	      	item: 'extendedcrafting:black_iron_slate'
		},
		result: {
			item: 'astro_rise:half_base_component',
			count: 2
		}
	})

	event.custom({
		type: 'createaddition:rolling',
		input: {
	      	item: 'astro_rise:half_base_component'
		},
		result: {
			item: 'astro_rise:base_component',
			count: 2
		}
	})
})