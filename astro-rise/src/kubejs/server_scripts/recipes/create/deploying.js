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

	// certus_mechanism

	event.custom({
		type: "create:deploying",
		ingredients: [
		    {
		    	item: 'astro_rise:quartz_mechanism'
		    },
		    {
		    	item: 'ae2:charged_certus_quartz_crystal'
		    }
		],
		results: [
			{
				item: 'astro_rise:certus_mechanism'
			}
		]
	})

	// fluix_mechanism

	event.custom({
		type: "create:deploying",
		ingredients: [
		    {
		    	item: 'astro_rise:quartz_mechanism'
		    },
		    {
		    	item: 'ae2:charged_certus_quartz_crystal'
		    }
		],
		results: [
			{
				item: 'astro_rise:certus_mechanism'
			}
		]
	})

})