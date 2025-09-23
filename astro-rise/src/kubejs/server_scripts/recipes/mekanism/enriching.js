ServerEvents.recipes(event => {

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forges:ores/coal'
			}
		},
		output: {
			count: 2,
			item: 'mekanism:dust_coal'
		}
	})

})