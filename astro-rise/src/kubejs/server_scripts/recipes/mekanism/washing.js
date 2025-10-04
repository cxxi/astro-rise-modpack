ServerEvents.recipes(event => {

	const mekanismSlurries = [
		'iron',
		'copper',
		'gold',
		'tin',
		'lead',
		'osmium',
		'uranium'
	]

	mekanismSlurries.forEach(slurry => {

		event.remove({ id: `mekanism:processing/${slurry}/slurry/clean` })

		event.custom({
            type: 'mekanism:washing',
            slurryInput: {
                amount: 1,
                slurry: `mekanism:dirty_${slurry}`
            },
            output: {
                amount: 1,
                slurry: `mekanism:clean_${slurry}`
            },
            fluidInput: {
                amount: 5,
                fluid: 'minecraft:water'
            }
        })

	})

	global.CUSTOM_SLURRIES.forEach(slurry => {

		event.custom({
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
                fluid: 'minecraft:water'
            }
        })

	})

})