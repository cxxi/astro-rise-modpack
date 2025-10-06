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

	// rods

	event.custom({
		type: 'createaddition:rolling',
		input: {
	      	item: 'astro_rise:infinity_ingot'
		},
		result: {
			item: 'enderio:infinity_rod',
			count: 2
		}
	})

	event.custom({
		type: 'createaddition:rolling',
		input: {
	      	item: 'mekanism:ingot_steel'
		},
		result: {
			item: 'ad_astra:steel_rod',
			count: 2
		}
	})

	event.custom({
		type: 'createaddition:rolling',
		input: {
	      	item: 'ad_astra:etrium_ingot'
		},
		result: {
			item: 'ad_astra:etrium_rod',
			count: 2
		}
	})
	
})