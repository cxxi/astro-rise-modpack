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
				item: 'minecraft:redstone_block'
			},
			count: 1
		},
		result: {
			fluid: 'thermal:redstone',
			count: 900
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

	event.custom({
		type: 'bigreactors:fluidizersolid',
		ingredient: {
			ingredient: {
				item: 'minecraft:glowstone'
			},
			count: 1
		},
		result: {
			fluid: 'thermal:glowstone',
			count: 900
		}
	})

	event.custom({
		type: 'bigreactors:fluidizersolid',
		ingredient: {
			ingredient: {
				item: 'create:experience_nugget'
			},
			count: 1
		},
		result: {
			fluid: 'enderio:xp_juice',
			count: 250
		}
	})

	event.custom({
		type: 'bigreactors:fluidizersolid',
		ingredient: {
			ingredient: {
				item: 'create:experience_block'
			},
			count: 1
		},
		result: {
			fluid: 'enderio:xp_juice',
			count: 2250
		}
	})

})