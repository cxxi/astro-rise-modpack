ServerEvents.recipes(event => {

	// event.remove({ id: 'mekanism:processing/copper/slurry/dirty/from_ore' })
	// event.remove({ id: 'mekanism:processing/iron/slurry/dirty/from_ore' })
	// event.remove({ id: 'mekanism:processing/gold/slurry/dirty/from_ore' })

	event.remove({ type: 'mekanism:dissolution',  })

	global.CUSTOM_SLURRIES.forEach(slurry => {

		event.custom({
			type: 'mekanism:dissolution',
			gasInput: {
				amount: 1,
				gas: 'mekanism:sulfuric_acid'
			},
			itemInput: {
				ingredient: {
					tag: `forge:ores/${slurry}`
				}
			},
			output: {
				amount: 1000,
				chemicalType: 'slurry',
				slurry: `astro_rise:dirty_${slurry}`
			}
		})

		// event.custom({
		// 	type: 'mekanism:dissolution',
		// 	gasInput: {
		// 		amount: 2,
		// 		gas: 'mekanism:sulfuric_acid'
		// 	},
		// 	itemInput: {
		// 		ingredient: {
		// 			tag: `forge:storage_blocks/raw_${slurry}`
		// 		}
		// 	},
		// 	output: {
		// 		amount: 6000,
		// 		chemicalType: 'slurry',
		// 		slurry: `astro_rise:dirty_${slurry}`
		// 	}
		// })

		// event.custom({
		// 	type: 'mekanism:dissolution',
		// 	gasInput: {
		// 		amount: 1,
		// 		gas: 'mekanism:sulfuric_acid'
		// 	},
		// 	itemInput: {
		// 		amount: 3,
		// 		ingredient: {
		// 			tag: `forge:raw_materials/${slurry}`
		// 		}
		// 	},
		// 	output: {
		// 		amount: 2000,
		// 		chemicalType: 'slurry',
		// 		slurry: `astro_rise:dirty_${slurry}`
		// 	}
		// })

	})
})