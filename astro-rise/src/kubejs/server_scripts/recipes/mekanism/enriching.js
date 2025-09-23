ServerEvents.recipes(event => {

	event.remove({ id: 'mekanism:processing/coal/from_ore' })

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/coal'
			}
		},
		output: {
			count: 2,
			item: 'mekanism:dust_coal'
		}
	})

})