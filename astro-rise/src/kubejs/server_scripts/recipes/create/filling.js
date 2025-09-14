ServerEvents.recipes(event => {

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

})