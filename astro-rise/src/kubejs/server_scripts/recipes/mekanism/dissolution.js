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

		event.recipes.mekanismDissolution(
			`astro_rise:dirty_${slurry}`, 
			{ amount: 200, gas: 'mekanism:sulfuric_acid' },
			`${ns}:raw_${slurry}_block`
		)

		event.recipes.mekanismDissolution(
			`astro_rise:dirty_${slurry}`, 
			{ amount: 100, gas: 'mekanism:sulfuric_acid' },
			`3x ${ns}:raw_${slurry}`
		)
	})
})