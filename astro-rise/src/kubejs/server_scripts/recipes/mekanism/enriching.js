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

	event.remove({ id: 'mekanism:processing/redstone/from_ore' })

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/redstone'
			}
		},
		output: {
			count: 2,
			item: 'minecraft:redstone'
		}
	})

	event.remove({ id: 'mekanism:processing/emerald/from_ore' })

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/emerald'
			}
		},
		output: {
			count: 2,
			item: 'mekanism:dust_emerald'
		}
	})

	event.remove({ id: 'mekanism:processing/lapis_lazuli/from_ore' })

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/lapis'
			}
		},
		output: {
			count: 2,
			item: 'mekanism:dust_lapis_lazuli'
		}
	})

	event.remove({ id: 'mekanism:processing/diamond/from_ore' })

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/diamond'
			}
		},
		output: {
			count: 2,
			item: 'mekanism:dust_diamond'
		}
	})

	event.remove({ id: 'mekanism:processing/quartz/from_ore' })

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/quartz'
			}
		},
		output: {
			count: 2,
			item: 'mekanism:dust_quartz'
		}
	})

})