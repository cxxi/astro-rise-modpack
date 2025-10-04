ServerEvents.recipes(event => {

	global.CUSTOM_SLURRIES.forEach(slurry => {

		const recipe = {
            type: 'mekanism:washing',
            slurryInput: {
                amount: 1,
                slurry: `astro_rise:dirty_${slurry}`
            },
            output: {
                amount: 1,
                slurry: `astro_rise:clean_${slurry}`
            },
            fluidInput: {
                amount: 5,
                fluid: '#minecraft:water'
            }
        }

        console.log(JSON.stringify(recipe, null, 2))

        event.custom(recipe)

	})

})