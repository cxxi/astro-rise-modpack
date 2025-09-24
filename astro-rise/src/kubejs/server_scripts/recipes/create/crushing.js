ServerEvents.recipes(event => {

	// event.remove({ id: 'create:crushing/tuff' })
	// event.remove({ id: 'create:crushing/tuff_recycling' })

	event.remove({ type: 'create:crushing',  input: '#create:stone_types/ochrum' })
	event.remove({ type: 'create:crushing',  input: '#create:stone_types/crimsite' })
	event.remove({ type: 'create:crushing',  input: '#create:stone_types/veridium' })
	event.remove({ type: 'create:crushing',  input: '#create:stone_types/asurine' })

	event.remove({ type: 'create:crushing',  input: '#minecraft:flowers' })
	event.remove({ type: 'create:crushing',  input: '#createaddition:plants' })
	event.remove({ type: 'create:crushing',  output: 'createdieselgenerators:wood_chip' })

	event.remove({ id: 'create_ultimate_factory:crushing_netherite' })
	event.remove({ id: 'create_ultimate_factory:crushing_endstone' })
	event.remove({ id: 'create:crushing/netherrack' })
	
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

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/iron' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_iron' },
			{ item: 'create:crushed_raw_iron', chance: 0.75 }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/copper' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_copper' },
			{ item: 'create:crushed_raw_copper', chance: 0.75 }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/gold' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_gold' },
			{ item: 'create:crushed_raw_gold', chance: 0.75 }
		]
	})

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

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/zinc' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_zinc' },
			{ item: 'create:crushed_raw_zinc', chance: 0.75 }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/silver' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_silver' },
			{ item: 'create:crushed_raw_silver', chance: 0.75 }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/nickel' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_nickel' },
			{ item: 'create:crushed_raw_nickel', chance: 0.75 }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/tin' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_tin' },
			{ item: 'create:crushed_raw_tin', chance: 0.75 }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/lead' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_lead' },
			{ item: 'create:crushed_raw_lead', chance: 0.75 }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/osmium' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_osmium' },
			{ item: 'create:crushed_raw_osmium', chance: 0.75 }
		]
	})

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

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/uranium' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_uranium' },
			{ item: 'create:crushed_raw_uranium', chance: 0.75 }
		]
	})

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

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/aluminum' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_aluminum' },
			{ item: 'create:crushed_raw_aluminum', chance: 0.75 }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/platinum' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_platinum' },
			{ item: 'create:crushed_raw_platinum', chance: 0.75 }
		]
	})

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

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/desh' }
		],
		processingTime: 350,
		results: [
			{ item: 'create_ad_astra_compat:crushed_desh_ore' },
			{ item: 'create_ad_astra_compat:crushed_desh_ore', chance: 0.75 }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/ostrum' }
		],
		processingTime: 350,
		results: [
			{ item: 'create_ad_astra_compat:crushed_ostrum_ore' },
			{ item: 'create_ad_astra_compat:crushed_ostrum_ore', chance: 0.75 }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/calorite' }
		],
		processingTime: 350,
		results: [
			{ item: 'create_ad_astra_compat:crushed_calorite_ore' },
			{ item: 'create_ad_astra_compat:crushed_calorite_ore', chance: 0.75 }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/aerolyte' }
		],
		processingTime: 350,
		results: [
			{ item: 'astro_rise:crushed_raw_aerolyte' },
			{ item: 'astro_rise:crushed_raw_aerolyte', chance: 0.75 }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ tag : 'forge:ores/cobalt' }
		],
		processingTime: 350,
		results: [
			{ item: 'astro_rise:crushed_raw_cobalt' },
			{ item: 'astro_rise:crushed_raw_cobalt', chance: 0.75 }
		]
	})

})