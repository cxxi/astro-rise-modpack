ServerEvents.recipes(event => {

	event.custom({
		type: 'createdieselgenerators:wire_cutting',
		ingredients: [
			{ item: 'astro_rise:infinity_ingot' }
		],
		results: [
			{ item: 'enderio:infinity_rod' }
		]
	})

	event.custom({
		type: 'createdieselgenerators:wire_cutting',
		ingredients: [
			{ item: 'mekanism:ingot_steel' }
		],
		results: [
			{ item: 'ad_astra:steel_rod' }
		]
	})

	event.custom({
		type: 'createdieselgenerators:wire_cutting',
		ingredients: [
			{ item: 'ad_astra:etrium_ingot' }
		],
		results: [
			{ item: 'ad_astra:etrium_rod' }
		]
	})

	event.custom({
		type: 'createdieselgenerators:wire_cutting',
		ingredients: [
			{ item: 'create:brass_ingot' }
		],
		results: [
			{ item: 'createaddition:brass_rod' }
		]
	})

})