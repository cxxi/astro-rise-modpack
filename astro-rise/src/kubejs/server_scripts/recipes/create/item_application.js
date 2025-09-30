ServerEvents.recipes(event => {

	// osmium casing

	event.custom({
		type: "create:item_application",
		ingredients: [
		    {
		    	item: 'mekanism:block_osmium'
		    },
		    {
		    	item: 'create:brass_ingot'
		    }
		],
		results: [
			{
				item: 'astro_rise:osmium_casing'
			}
		]
	})

	// steel casing

	event.remove({ id: 'mekanism:steel_casing' })

	event.custom({
		type: "create:item_application",
		ingredients: [
		    {
		    	item: 'astro_rise:osmium_casing'
		    },
		    {
		    	item: 'mekanism:ingot_steel'
		    }
		],
		results: [
			{
				item: 'mekanism:steel_casing'
			}
		]
	})

})