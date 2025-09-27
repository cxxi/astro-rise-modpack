ServerEvents.recipes(event => {

	event.custom({
		type: 'bigreactors:fluidizersolid',
		ingredient: {
			ingredient: {
				item: 'minecraft:redstone'
			},
			count: 1
		},
		result: {
			fluid: 'thermal:redstone',
			count: 100
		}
	})

	event.custom({
		type: 'bigreactors:fluidizersolid',
		ingredient: {
			ingredient: {
				item: 'minecraft:glowstone_dust'
			},
			count: 1
		},
		result: {
			fluid: 'thermal:glowstone',
			count: 100
		}
	})

})