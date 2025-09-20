ServerEvents.recipes(event => {

	// latex

	event.custom({
		type: 'createdieselgenerators:bulk_fermenting',
		ingredients: [
			{
				fluid: 'thermal:resin',
				amount: 1000
			}
		],
		heatRequirement: 'heated',
		processingTime: 400,
		results: [
			{
				fluid: 'thermal:latex',
				amount: 500
			}
		]
	})

})