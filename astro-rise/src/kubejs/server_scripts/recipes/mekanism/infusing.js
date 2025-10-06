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

	// luminessence

	event.custom({
		type: 'mekanism:metallurgic_infusing',
		chemicalInput: {
			amount: 450,
			infuse_type: 'astro_rise:fluorite'
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

	// conduit_binder_composite

	event.custom({
		type: 'mekanism:metallurgic_infusing',
		chemicalInput: {
			amount: 10,
			tag: 'mekanism:carbon'
		},
		itemInput: {
			ingredient: {
				item: 'tconstruct:grout'
			}
		},
		output: {
			item: 'enderio:conduit_binder_composite'
		}
	})
	
})