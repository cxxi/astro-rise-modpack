ServerEvents.recipes(event => {

	event.remove({ id: 'mekanism:injecting/gunpowder_to_sulfur' })

	const mekanismOres = [
		'tin',
		'lead',
		'osmium',
		'uranium'
	]

	mekanismOres.forEach(ore => {

		event.custom({
			type: 'mekanism:injecting',
			chemicalInput: {
				amount: 1,
				gas: 'mekanism:hydrogen_chloride'
			},
			itemInput: {
				ingredient: {
					tag: `forge:ores/${ore}`
				}
			},
			output: {
				count: 4,
				item: `astro_rise:shard_${ore}`
			}
		})

	})

	global.CUSTOM_SLURRIES.forEach(slurry => {

		event.custom({
			type: 'mekanism:injecting',
			chemicalInput: {
				amount: 1,
				gas: 'mekanism:hydrogen_chloride'
			},
			itemInput: {
				ingredient: {
					tag: `mekanism:crystals/${slurry}`
				}
			},
			output: {
				item: `astro_rise:shard_${slurry}`
			}
		})

		event.custom({
			type: 'mekanism:injecting',
			chemicalInput: {
				amount: 1,
				gas: 'mekanism:hydrogen_chloride'
			},
			itemInput: {
				ingredient: {
					tag: `forge:ores/${slurry}`
				}
			},
			output: {
				count: 4,
				item: `astro_rise:shard_${slurry}`
			}
		})

		event.custom({
			type: 'mekanism:injecting',
			chemicalInput: {
				amount: 2,
				gas: 'mekanism:hydrogen_chloride'
			},
			itemInput: {
				ingredient: {
					tag: `forge:storage_blocks/raw_${slurry}`
				}
			},
			output: {
				count: 24,
				item: `astro_rise:shard_${slurry}`
			}
		})

		event.custom({
			type: 'mekanism:injecting',
			chemicalInput: {
				amount: 1,
				gas: 'mekanism:hydrogen_chloride'
			},
			itemInput: {
				amount: 3,
				ingredient: {
					tag: `forge:raw_materials/${slurry}`
				}
			},
			output: {
				count: 8,
				item: `astro_rise:shard_${slurry}`
			}
		})

	})

})