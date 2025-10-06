ServerEvents.recipes(event => {

	// sculk_mechanism

	event.custom({
		type: "create:filling",
		ingredients: [
		    {
		    	item: 'create:precision_mechanism'
		    },
		    {
		    	amount: 500,
		    	fluid: 'astro_rise:liquid_sculk'
		    }
		],
		results: [
			{
				item: 'astro_rise:sculk_mechanism'
			}
		]
	})

	// sculk_steel_mechanism

	event.custom({
		type: "create:filling",
		ingredients: [
		    {
		    	item: 'astro_rise:steel_mechanism'
		    },
		    {
		    	amount: 500,
		    	fluid: 'astro_rise:liquid_sculk'
		    }
		],
		results: [
			{
				item: 'astro_rise:sculk_steel_mechanism'
			}
		]
	})

	// quartz_mechanism
	
	event.custom({
		type: "create:filling",
		ingredients: [
		    {
		    	item: 'create:precision_mechanism'
		    },
		    {
		    	amount: 400,
		    	fluid: 'tconstruct:molten_quartz'
		    }
		],
		results: [
			{
				item: 'astro_rise:quartz_mechanism'
			}
		]
	})

	// quartz_steel_mechanism

	event.custom({
		type: "create:filling",
		ingredients: [
		    {
		    	item: 'astro_rise:steel_mechanism'
		    },
		    {
		    	amount: 400,
		    	fluid: 'tconstruct:molten_quartz'
		    }
		],
		results: [
			{
				item: 'astro_rise:quartz_steel_mechanism'
			}
		]
	})

	// fluix_mechanism

	event.custom({
		type: "create:filling",
		ingredients: [
		    {
		    	item: 'astro_rise:certus_steel_mechanism'
		    },
		    {
		    	amount: 400,
		    	fluid: 'astro_rise:molten_fluix'
		    }
		],
		results: [
			{
				item: 'astro_rise:fluix_steel_mechanism'
			}
		]
	})

	// xp_bottle

	event.custom({
		type: "create:filling",
		ingredients: [
		    {
		    	item: 'minecraft:glass_bottle'
		    },
		    {
		    	amount: 250,
		    	fluid: 'sophisticatedcorexp:xp_still'
		    }
		],
		results: [
			{
				item: 'minecraft:experience_bottle'
			}
		]
	})

})