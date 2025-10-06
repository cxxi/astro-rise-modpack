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
			item: '2x enderio:infinity_rod'
		}
	})

	event.custom({
		type: 'createaddition:rolling',
		input: {
	      	item: 'mekanism:ingot_steel'
		},
		result: {
			item: '2x ad_astra:steel_rod'
		}
	})

	event.custom({
		type: 'createaddition:rolling',
		input: {
	      	item: 'ad_astra:etrium_ingot'
		},
		result: {
			item: '2x ad_astra:etrium_rod'
		}
	})
	
})