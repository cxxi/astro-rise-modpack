ServerEvents.recipes(event => {

	const mekanismOres = [
		'tin',
		'lead',
		'osmium',
		'uranium'
	]

	mekanismOres.forEach(ore => {

		event.custom({
			type: 'mekanism:purifying',
			chemicalInput: {
				amount: 1,
				gas: 'mekanism:oxygen'
			},
			itemInput: {
				ingredient: {
					tag: `forge:ores/${ore}`
				}
			},
			output: {
				count: 3,
				item: `astro_rise:clump_${ore}`
			}
		})

	})

	global.CUSTOM_SLURRIES.forEach(slurry => {

		event.custom({
			type: 'mekanism:purifying',
			chemicalInput: {
				amount: 1,
				gas: 'mekanism:oxygen'
			},
			itemInput: {
				ingredient: {
					tag: `forge:ores/${slurry}`
				}
			},
			output: {
				count: 3,
				item: `astro_rise:clump_${slurry}`
			}
		})

		event.custom({
			type: 'mekanism:purifying',
			chemicalInput: {
				amount: 2,
				gas: 'mekanism:oxygen'
			},
			itemInput: {
				ingredient: {
					tag: `forge:storage_blocks/raw_${slurry}`
				}
			},
			output: {
				count: 18,
				item: `astro_rise:clump_${slurry}`
			}
		})

		event.custom({
			type: 'mekanism:purifying',
			chemicalInput: {
				amount: 1,
				gas: 'mekanism:oxygen'
			},
			itemInput: {
				ingredient: {
					tag: `forge:raw_materials/${slurry}`
				}
			},
			output: {
				count: 2,
				item: `astro_rise:clump_${slurry}`
			}
		})

		event.custom({
			type: 'mekanism:purifying',
			chemicalInput: {
				amount: 1,
				gas: 'mekanism:oxygen'
			},
			itemInput: {
				ingredient: {
					tag: `mekanism:shards/${slurry}`
				}
			},
			output: {
				item: `astro_rise:clump_${slurry}`
			}
		})

	})

})