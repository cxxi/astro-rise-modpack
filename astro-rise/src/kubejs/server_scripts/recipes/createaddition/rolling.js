ServerEvents.recipes(event => {

	// half_base_component
	
	event.custom({
		type: 'createaddition:rolling',
		input: {
	      	item: 'extendedcrafting:black_iron_slate'
		},
		result: {
			item: 'astro_rise:half_base_component'
		}
	})

	// base_component
	
	event.custom({
		type: 'createaddition:rolling',
		input: {
	      	item: 'astro_rise:half_base_component'
		},
		result: {
			item: 'astro_rise:base_component'
		}
	})
})