ServerEvents.recipes(event => {

	global.CUSTOM_SLURRIES.forEach(slurry => {

		event.custom({
			type: 'mekanism:washing',
			fluidInput: {
				amount: 5,
				tag: 'minecraft:water'
			},
			output: {
				amount: 1,
				slurry: `astro_rise:clean_${slurry}`
			},
			slurryInput: {
				amount: 1,
				slurry: `astro_rise:dirty_${slurry}`
			}
		})

	})

})