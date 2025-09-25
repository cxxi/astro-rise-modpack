ServerEvents.recipes(event => {

	event.remove({ type: 'create:crushing',  input: '#create:stone_types/tuff' })

	event.remove({ type: 'create:crushing',  input: '#create:stone_types/ochrum' })
	event.remove({ type: 'create:crushing',  input: '#create:stone_types/crimsite' })
	event.remove({ type: 'create:crushing',  input: '#create:stone_types/veridium' })
	event.remove({ type: 'create:crushing',  input: '#create:stone_types/asurine' })
	event.remove({ type: 'create:crushing',  input: '#create:stone_types/quartz' })

	console.log(Ingredient.of({tag: 'minecraft:flowers'}).toJson())
	// forEach(flower => {
	// 	console.log(`ASTRO_DEBUG : ${flower}`)
	//     // event.remove({ type: 'create:crushing', input: flower })
	// })

	console.log(Ingredient.of({tag: 'createaddition:plants'}).toJson())
	// forEach(plant => {
	// 	console.log(`ASTRO_DEBUG : ${plant}`)
	//     // event.remove({ type: 'create:crushing', input: plant })
	// })

	event.remove({ type: 'create:crushing',  output: 'createdieselgenerators:wood_chip' })

	event.remove({ id: 'create_ultimate_factory:crushing_netherite' })
	event.remove({ id: 'create_ultimate_factory:crushing_endstone' })
	event.remove({ id: 'create_ultimate_factory:crushing_scoria' })
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

	// iron

	event.remove({ id: 'create:crushing/raw_iron_block' })
	event.remove({ id: 'create:crushing/raw_iron' })

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
			{ item : 'minecraft:raw_iron' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_iron' }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'minecraft:raw_iron_block' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_iron', count: 9 }
		]
	})

	// copper

	event.remove({ id: 'create:crushing/raw_copper_block' })
	event.remove({ id: 'create:crushing/raw_copper' })

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
			{ item : 'minecraft:raw_copper' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_copper' }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'minecraft:raw_copper_block' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_copper', count: 9 }
		]
	})

	// gold

	event.remove({ id: 'create:crushing/raw_gold_block' })
	event.remove({ id: 'create:crushing/raw_gold' })

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
			{ item : 'minecraft:raw_gold' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_gold' }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'minecraft:raw_gold_block' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_gold', count: 9 }
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

	// zinc

	event.remove({ id: 'create:crushing/raw_zinc_block' })
	event.remove({ id: 'create:crushing/raw_zinc' })

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
			{ item : 'create:raw_zinc' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_zinc' }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'create:raw_zinc_block' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_zinc', count: 9 }
		]
	})

	// silver

	event.remove({ id: 'create:crushing/raw_silver_block' })
	event.remove({ id: 'create:crushing/raw_silver' })

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
			{ item : 'thermal:raw_silver' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_silver' }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'thermal:raw_silver_block' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_silver', count: 9 }
		]
	})

	// nickel

	event.remove({ id: 'create:crushing/raw_nickel_block' })
	event.remove({ id: 'create:crushing/raw_nickel' })

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
			{ item : 'thermal:raw_nickel' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_nickel' }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'thermal:raw_nickel_block' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_nickel', count: 9 }
		]
	})

	// tin

	event.remove({ id: 'create:crushing/raw_tin_block' })
	event.remove({ id: 'create:crushing/raw_tin' })

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
			{ item : 'mekanism:raw_tin' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_tin' }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'mekanism:block_raw_tin' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_tin', count: 9 }
		]
	})

	// lead

	event.remove({ id: 'create:crushing/raw_lead_block' })
	event.remove({ id: 'create:crushing/raw_lead' })

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
			{ item : 'mekanism:raw_lead' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_lead' }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'mekanism:block_raw_lead' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_lead', count: 9 }
		]
	})

	// osmium

	event.remove({ id: 'create:crushing/raw_osmium_block' })
	event.remove({ id: 'create:crushing/raw_osmium' })

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
			{ item : 'mekanism:raw_osmium' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_osmium' }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'mekanism:block_raw_osmium' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_osmium', count: 9 }
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

	// uranium

	event.remove({ id: 'create:crushing/raw_uranium_block' })
	event.remove({ id: 'create:crushing/raw_uranium' })

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
			{ item : 'mekanism:raw_uranium' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_uranium' }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'mekanism:block_raw_uranium' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_uranium', count: 9 }
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

	// aluminum

	event.remove({ id: 'create:crushing/raw_aluminum_block' })
	event.remove({ id: 'create:crushing/raw_aluminum' })

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
			{ item : 'simplemetals_aluminum:raw_aluminum' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_aluminum' }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'simplemetals_aluminum:raw_aluminum_block' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_aluminum', count: 9 }
		]
	})

	// platinum

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
			{ item : 'platinum_mod:raw_platinum' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_platinum' }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'platinum_mod:raw_platinum_block' }
		],
		processingTime: 350,
		results: [
			{ item: 'create:crushed_raw_platinum', count: 9 }
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

	// desh

	event.remove({ id: 'create_ad_astra_compat:crushing/desh/raw_desh_ore' })
	event.remove({ id: 'create_ad_astra_compat:crushing/desh/raw_desh_block' })

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
			{ item : 'ad_astra:raw_desh' }
		],
		processingTime: 350,
		results: [
			{ item: 'create_ad_astra_compat:crushed_desh_ore' }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'ad_astra:raw_desh_block' }
		],
		processingTime: 350,
		results: [
			{ item: 'create_ad_astra_compat:crushed_desh_ore', count: 9 }
		]
	})

	// ostrum

	event.remove({ id: 'create_ad_astra_compat:crushing/ostrum/raw_ostrum_ore' })
	event.remove({ id: 'create_ad_astra_compat:crushing/ostrum/raw_ostrum_block' })

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
			{ item : 'ad_astra:raw_ostrum' }
		],
		processingTime: 350,
		results: [
			{ item: 'create_ad_astra_compat:crushed_ostrum_ore' }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'ad_astra:raw_ostrum_block' }
		],
		processingTime: 350,
		results: [
			{ item: 'create_ad_astra_compat:crushed_ostrum_ore', count: 9 }
		]
	})

	// calorite

	event.remove({ id: 'create_ad_astra_compat:crushing/calorite/raw_calorite_ore' })
	event.remove({ id: 'create_ad_astra_compat:crushing/calorite/raw_calorite_block' })

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
			{ item : 'ad_astra:raw_calorite' }
		],
		processingTime: 350,
		results: [
			{ item: 'create_ad_astra_compat:crushed_calorite_ore' }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'ad_astra:raw_calorite_block' }
		],
		processingTime: 350,
		results: [
			{ item: 'create_ad_astra_compat:crushed_calorite_ore', count: 9 }
		]
	})

	// aerolyte

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
			{ item : 'astro_rise:raw_aerolyte' }
		],
		processingTime: 350,
		results: [
			{ item: 'astro_rise:crushed_raw_aerolyte' }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'astro_rise:raw_aerolyte_block' }
		],
		processingTime: 350,
		results: [
			{ item: 'astro_rise:crushed_raw_aerolyte', count: 9 }
		]
	})

	// cobalt

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

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'tconstruct:raw_cobalt' }
		],
		processingTime: 350,
		results: [
			{ item: 'astro_rise:crushed_raw_cobalt' }
		]
	})

	event.custom({
		type: 'create:crushing',
		ingredients: [
			{ item : 'tconstruct:raw_cobalt_block' }
		],
		processingTime: 350,
		results: [
			{ item: 'astro_rise:crushed_raw_cobalt', count: 9 }
		]
	})

})