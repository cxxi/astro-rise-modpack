ServerEvents.recipes(event => {

	event.remove({ type: 'create:crushing',  input: '#create:stone_types/tuff' })
	event.remove({ type: 'create:crushing',  input: '#create:stone_types/ochrum' })
	event.remove({ type: 'create:crushing',  input: '#create:stone_types/crimsite' })
	event.remove({ type: 'create:crushing',  input: '#create:stone_types/veridium' })
	event.remove({ type: 'create:crushing',  input: '#create:stone_types/asurine' })
	event.remove({ type: 'create:crushing',  input: '#create:stone_types/quartz' })
	event.remove({ type: 'create:crushing',  input: '#create:stone_types/diorite' })

	event.remove({ type: 'create:crushing',  output: 'createdieselgenerators:wood_chip' })

	event.remove({ id: 'create_ultimate_factory:crushing_netherite' })
	event.remove({ id: 'create_ultimate_factory:crushing_endstone' })
	event.remove({ id: 'create_ultimate_factory:crushing_scoria' })
	event.remove({ id: 'create_ultimate_factory:crushing_limestone' })
	event.remove({ id: 'create_ultimate_factory:crushing_soulsand' })
	event.remove({ id: 'create_ultimate_factory:crushing_blackstone' })

	event.remove({ id: 'create_deeper_darker:crushing_sculk_vein' })
	event.remove({ id: 'create_deeper_darker:crushing_sculk_sensor' })
	event.remove({ id: 'create_deeper_darker:crushing_sculk_shrieker' })
	event.remove({ id: 'create_deeper_darker:crushing_sculk_catalyst' })

	event.remove({ id: 'create:crushing/gilded_blackstone' })
	event.remove({ id: 'create:crushing/prismarine_crystals' })
	event.remove({ id: 'create:crushing/netherrack' })

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'astro_rise:raw_lapis_lazuli' }
		],
		processingTime: 150,
		results: [
			{ item: 'mekanism:dust_lapis_lazuli', count: 4 }
		]
	})
	
	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'minecraft:netherrack' }
		],
		processingTime: 150,
		results: [
			{ item: 'astro_rise:crushed_netherrack' }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'minecraft:end_stone' }
		],
		processingTime: 500,
		results: [
			{ item: 'createsifter:crushed_end_stone' }
		]
	})

	// ores

	event.remove({ type: 'create:crushing',  input: /.*_ore/ })

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/coal' }
		],
		processingTime: 150,
		results: [
			{ item: 'minecraft:coal' },
			{ item: 'minecraft:coal', chance: 0.75 }
		]
	})

	// redstone

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/redstone' }
		],
		processingTime: 200,
		results: [
			{ item: 'minecraft:redstone', count: 6 },
			{ item: 'minecraft:redstone', count: 3, chance: 0.50 }
		]
	})

	// lapis

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/lapis' }
		],
		processingTime: 200,
		results: [
			{ item: 'minecraft:lapis_lazuli', count: 6 },
			{ item: 'minecraft:lapis_lazuli', count: 3, chance: 0.50 }
		]
	})

	// quartz

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/quartz' }
		],
		processingTime: 200,
		results: [
			{ item: 'minecraft:quartz', count: 6 },
			{ item: 'minecraft:quartz', count: 3, chance: 0.50 }
		]
	})

	// emerald

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/emerald' }
		],
		processingTime: 500,
		results: [
			{ item: 'minecraft:emerald' },
			{ item: 'minecraft:emerald', chance: 0.25 }
		]
	})

	// diamond

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/diamond' }
		],
		processingTime: 500,
		results: [
			{ item: 'minecraft:diamond' },
			{ item: 'minecraft:diamond', chance: 0.25 }
		]
	})

	// fluorite

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/fluorite' }
		],
		processingTime: 500,
		results: [
			{ item: 'mekanism:fluorite_gem' },
			{ item: 'mekanism:fluorite_gem', chance: 0.25 }
		]
	})

		// apatite

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/apatite' }
		],
		processingTime: 500,
		results: [
			{ item: 'thermal:apatite' },
			{ item: 'thermal:apatite', chance: 0.25 }
		]
	})

	// cinnabar

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/cinnabar' }
		],
		processingTime: 500,
		results: [
			{ item: 'thermal:cinnabar' },
			{ item: 'thermal:cinnabar', chance: 0.25 }
		]
	})

	// sapphire

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/sapphire' }
		],
		processingTime: 500,
		results: [
			{ item: 'thermal:sapphire' },
			{ item: 'thermal:sapphire', chance: 0.25 }
		]
	})

	// ruby

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/ruby' }
		],
		processingTime: 500,
		results: [
			{ item: 'thermal:ruby' },
			{ item: 'thermal:ruby', chance: 0.25 }
		]
	})

	// niter

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/niter' }
		],
		processingTime: 250,
		results: [
			{ item: 'thermal:niter' },
			{ item: 'thermal:niter', chance: 0.25 }
		]
	})

	// sulfur

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/sulfur' }
		],
		processingTime: 250,
		results: [
			{ item: 'thermal:sulfur' },
			{ item: 'thermal:sulfur', chance: 0.25 }
		]
	})

	// ice shard

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/ice_shard' }
		],
		processingTime: 250,
		results: [
			{ item: 'ad_astra:ice_shard' },
			{ item: 'ad_astra:ice_shard', chance: 0.25 }
		]
	})

	global.ORES.forEach(([ns, ore]) => {

		let crushedOre

		if (ns === 'ad_astra') {

			event.remove({ id: `create_ad_astra_compat:crushing/${ore}/raw_${ore}_ore` })
			event.remove({ id: `create_ad_astra_compat:crushing/${ore}/raw_${ore}_block` })

			crushedOre = `create_ad_astra_compat:crushed_${ore}_ore`

		} else if (['astro_rise', 'tconstruct'].includes(ns)) {

			crushedOre = `astro_rise:crushed_raw_${ore}`

		} else {

			event.remove({ id: `create:crushing/raw_${ore}_block` })
			event.remove({ id: `create:crushing/raw_${ore}` })

			crushedOre = `create:crushed_raw_${ore}`
		}

		event.custom({
			type: 'create:crushing',
			ingredients: [
				{ tag : `forge:ores/${ore}` }
			],
			processingTime: 350,
			results: [
				{ item: crushedOre },
				{ item: crushedOre, chance: 0.75 }
			]
		})

		event.custom({
			type: 'create:crushing',
			ingredients: [
				{ item : `${ns}:raw_${ore}` }
			],
			processingTime: 350,
			results: [
				{ item: crushedOre }
			]
		})

		event.custom({
			type: 'create:crushing',
			ingredients: [
				{ 
					item: ns === 'mekanism' 
						? `${ns}:block_raw_${ore}`
						: `${ns}:raw_${ore}_block`
				}
			],
			processingTime: 350,
			results: [
				{ item: crushedOre, count: 9 }
			]
		})

	})

})