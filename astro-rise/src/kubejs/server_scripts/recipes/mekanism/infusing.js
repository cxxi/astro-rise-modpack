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
			ingredient: {
				item: 'create:andesite_alloy'
			}
		},
		output: {
			item: 'mekanism:alloy_infused'
		}
	})

	event.custom({
		type: 'mekanism:metallurgic_infusing',
		chemicalInput: {
			amount: 10,
			tag: 'mekanism:fluorite'
		},
		itemInput: {
			ingredient: {
				item: 'mekanism:ingot_refined_glowstone'
			}
		},
		output: {
			item: 'extendedcrafting:luminessence'
		}
	})

})