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

	global.ORE_GEMS.forEach(([ns, gem, difficulty]) => {

		const processingTime = d => { switch(d) {
			case 0: return 150
			case 1: return 200
			case 2: return 500
		}}

		const chance = d => { switch(d) {
			case 0: return 0.75
			case 1: return 0.50
			case 2: return 0.25
		}}

		event.custom({
			type: 'create:crushing',
			ingredients: [
				{ 
					tag: ['lapis_lazuli', 'fluorite_gem'].includes(gem)
						? `forge:ores/${gem.split('_')[0]}`
						: `forge:ores/${gem}`
				}
			],
			processingTime: processingTime(difficulty),
			results: [
				{ item: `${ns}:${gem}`, count: difficulty === 1 ? 6 : 1 },
				{ item: `${ns}:${gem}`, count: difficulty === 1 ? 3 : 1, chance: chance(difficulty) }
			]
		})

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