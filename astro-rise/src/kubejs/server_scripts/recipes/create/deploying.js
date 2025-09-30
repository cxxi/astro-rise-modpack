ServerEvents.recipes(event => {

	// ichor_mechanism

	event.custom({
		type: "create:deploying",
		ingredients: [
		    {
		    	item: 'astro_rise:quartz_mechanism'
		    },
		    {
		    	item: 'tconstruct:ichor_slime_crystal'
		    }
		],
		results: [
			{
				item: 'astro_rise:ichor_mechanism'
			}
		]
	})

	// ichor_steel_mechanism

	event.custom({
		type: "create:deploying",
		ingredients: [
		    {
		    	item: 'astro_rise:quartz_steel_mechanism'
		    },
		    {
		    	item: 'tconstruct:ichor_slime_crystal_block'
		    }
		],
		results: [
			{
				item: 'astro_rise:ichor_steel_mechanism'
			}
		]
	})

	// earth_mechanism

	event.custom({
		type: "create:deploying",
		ingredients: [
		    {
		    	item: 'astro_rise:quartz_mechanism'
		    },
		    {
		    	item: 'tconstruct:earth_slime_crystal'
		    }
		],
		results: [
			{
				item: 'astro_rise:earth_mechanism'
			}
		]
	})

	// earth_steel_mechanism

	event.custom({
		type: "create:deploying",
		ingredients: [
		    {
		    	item: 'astro_rise:quartz_steel_mechanism'
		    },
		    {
		    	item: 'tconstruct:earth_slime_crystal_block'
		    }
		],
		results: [
			{
				item: 'astro_rise:earth_steel_mechanism'
			}
		]
	})

	// end_mechanism

	event.custom({
		type: "create:deploying",
		ingredients: [
		    {
		    	item: 'astro_rise:quartz_mechanism'
		    },
		    {
		    	item: 'tconstruct:ender_slime_crystal'
		    }
		],
		results: [
			{
				item: 'astro_rise:ender_mechanism'
			}
		]
	})

	// end_steel_mechanism

	event.custom({
		type: "create:deploying",
		ingredients: [
		    {
		    	item: 'astro_rise:quartz_steel_mechanism'
		    },
		    {
		    	item: 'tconstruct:ender_slime_crystal_block'
		    }
		],
		results: [
			{
				item: 'astro_rise:ender_steel_mechanism'
			}
		]
	})

	// sky_mechanism

	event.custom({
		type: "create:deploying",
		ingredients: [
		    {
		    	item: 'astro_rise:quartz_mechanism'
		    },
		    {
		    	item: 'tconstruct:sky_slime_crystal'
		    }
		],
		results: [
			{
				item: 'astro_rise:sky_mechanism'
			}
		]
	})

	// sky_steel_mechanism

	event.custom({
		type: "create:deploying",
		ingredients: [
		    {
		    	item: 'astro_rise:quartz_steel_mechanism'
		    },
		    {
		    	item: 'tconstruct:sky_slime_crystal_block'
		    }
		],
		results: [
			{
				item: 'astro_rise:sky_steel_mechanism'
			}
		]
	})

	// certus_mechanism

	event.custom({
		type: "create:deploying",
		ingredients: [
		    {
		    	item: 'astro_rise:quartz_steel_mechanism'
		    },
		    {
		    	item: 'ae2:charged_certus_quartz_crystal'
		    }
		],
		results: [
			{
				item: 'astro_rise:certus_steel_mechanism'
			}
		]
	})

})