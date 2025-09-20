ServerEvents.recipes(event => {

	// alloy_infused

	event.remove({ id: 'mekanism:metallurgic_infusing/alloy/infused' })

	event.custom({
		type: 'mekanism:metallurgic_infusing',
		chemicalInput: {
			amount: 10,
			tag: 'mekanism:redstone'
		},
		itemInput: {
			ingred1ient: {
				item: 'create:andesite_alloy'
			}
		},
		output: {
			item: 'mekanism:alloy_infused'
		}
	})

})