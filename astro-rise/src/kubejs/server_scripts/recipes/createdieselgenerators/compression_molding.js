ServerEvents.recipes(event => {

	// rubber

	event.custom({
		type: 'createdieselgenerators:compression_molding',
		ingredients: [
			{
				fluid: 'thermal:latex',
				amount: 1000
			}
		],
		mold: 'createdieselgenerators:bowl',
		results: [
			{
				item: 'thermal:rubber'
			}
		]
	})

})