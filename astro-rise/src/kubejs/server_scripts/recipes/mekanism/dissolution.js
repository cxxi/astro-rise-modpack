ServerEvents.recipes(event => {

	event.remove({ id: 'mekanism:processing/copper/slurry/dirty/from_ore' })
	event.remove({ id: 'mekanism:processing/iron/slurry/dirty/from_ore' })
	event.remove({ id: 'mekanism:processing/gold/slurry/dirty/from_ore' })

	const slurries = [
		['astro_rise', 'aerolyte'],
		['simplemetals_aluminum', 'aluminum'],
		['ad_astra', 'calorite'],
		['tconstruct', 'cobalt'],
		['ad_astra', 'desh'],
		['thermal', 'nickel'],
		['ad_astra', 'ostrum'],
		['platinum_mod', 'platinum'],
		['thermal', 'silver'],
		['create', 'zinc']
	]

	slurries.forEach(([ns, slurry]) => {

		event.custom({
			type: 'mekanism:dissolution',
			gasInput: {
				amount: 2,
				gas: 'mekanism:sulfuric_acid'
			},
			itemInput: {
				ingredient: {
					tag: `forge:storage_blocks/raw_${slurry}`
				}
			},
			output: {
				amount: 6000,
				chemicalType: 'slurry',
				slurry: `${ns}:dirty_${slurry}`
			}
		})

		event.custom({
			type: 'mekanism:dissolution',
			gasInput: {
				amount: 1,
				gas: 'mekanism:sulfuric_acid'
			},
			itemInput: {
				amount: 3,
				ingredient: {
					tag: `forge:raw_materials/${slurry}`
				}
			},
			output: {
				amount: 2000,
				chemicalType: 'slurry',
				slurry: `${ns}:dirty_${slurry}`
			}
		})

	})
})