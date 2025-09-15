ServerEvents.recipes(event => {

	// molten_necrotic_bone

	event.custom({
	    type: 'tconstruct:melting',
	    ingredient: { 
	    	item: 'tconstruct:necrotic_bone' 
		},
	    result: {
		    amount: 100,
		    fluid: 'astro_rise:molten_necrotic_bone'
		},
	    temperature: 950,
	    time: 171
	})

	// liquid_sculk

	event.custom({
	    type: 'tconstruct:melting',
	    ingredient: { 
	    	item: 'minecraft:sculk' 
		},
	    result: {
		    amount: 1000,
		    fluid: 'astro_rise:liquid_sculk'
		},
	    temperature: 800,
	    time: 171
	})

	// molten_fluix

	event.custom({
	    type: 'tconstruct:melting',
	    ingredient: { 
	    	item: 'ae2:fluix_crystal' 
		},
	    result: {
		    amount: 100,
		    fluid: 'astro_rise:molten_fluix'
		},
	    temperature: 950,
	    time: 171
	})

	event.custom({
	    type: 'tconstruct:melting',
	    ingredient: { 
	    	item: 'ae2:fluix_dust' 
		},
	    result: {
		    amount: 100,
		    fluid: 'astro_rise:molten_fluix'
		},
	    temperature: 950,
	    time: 171
	})


	// test raw

	event.remove({id: 'tconstruct:smeltery/melting/metal/iron/chain_boots'})

	event.custom({
		type: 'tconstruct:damagable_melting',
		// byproducts: [
		// 	{
		// 		amount: 120,
		// 		tag: 'forge:molten_steel',
		// 		unit_size: 10
		// 	}
		// ],
		ingredient: {
			item: 'minecraft:chainmail_boots'
		},
		result: {
			amount: 240,
			tag: 'forge:molten_iron',
			unit_size: 10
		},
		temperature: 800,
		time: 98
	})

	event.remove({id: 'tconstruct:smeltery/melting/metal/iron/chain_chestplate'})

	event.custom({
		type: 'tconstruct:damagable_melting',
		// byproducts: [
		// 	{
		// 		amount: 240,
		// 		tag: 'forge:molten_steel',
		// 		unit_size: 10
		// 	}
		// ],
		ingredient: {
			item: 'minecraft:chainmail_chestplate'
		},
		result: {
			amount: 480,
			tag: 'forge:molten_iron',
			unit_size: 10
		},
		temperature: 800,
		time: 139
	})

	event.remove({id: 'tconstruct:smeltery/melting/metal/iron/chain_helmet'})

	event.custom({
		type: 'tconstruct:damagable_melting',
		// byproducts: [
		// 	{
		// 		amount: 150,
		// 		tag: 'forge:molten_steel',
		// 		unit_size: 10
		// 	}
		// ],
		ingredient: {
			item: 'minecraft:chainmail_helmet'
		},
		result: {
			amount: 300,
			tag: 'forge:molten_iron',
			unit_size: 10
		},
		temperature: 800,
		time: 110
	})

	event.remove({id: 'tconstruct:smeltery/melting/metal/iron/chain_leggings'})

	event.custom({
		type: 'tconstruct:damagable_melting',
		// byproducts: [
		// 	{
		// 		amount: 210,
		// 		tag: 'forge:molten_steel',
		// 		unit_size: 10
		// 	}
		// ],
		ingredient: {
			item: 'minecraft:chainmail_leggings'
		},
		result: {
			amount: 420,
			tag: 'forge:molten_iron',
			unit_size: 10
		},
		temperature: 800,
		time: 130
	})

	event.remove({id: 'tconstruct:smeltery/melting/metal/iron/ore_singular'})

	event.custom({
		type: 'tconstruct:ore_melting',
		// byproducts: [
		// 	{
		// 		amount: 180,
		// 		rate: 'metal',
		// 		tag: 'forge:molten_steel'
		// 	}
		// ],
		conditions: [
			{
				type: 'mantle:tag_combination_filled',
				ignore: 'tconstruct:non_singular_ore_rates',
				match: 'forge:ores/iron'
			}
		],
		ingredient: {
			type: 'forge:difference',
			base: {
				tag: 'forge:ores/iron'
			},
			subtracted: {
				tag: 'tconstruct:non_singular_ore_rates'
			}
		},
		// rate: 'metal',
		result: {
			amount: 180,
			tag: 'forge:molten_iron'
		},
		temperature: 800,
		time: 150
	})

	event.remove({id: 'tconstruct:smeltery/melting/metal/iron/raw'})

	event.custom({
		type: 'tconstruct:ore_melting',
		// byproducts: [
		// 	{
		// 		amount: 90,
		// 		rate: 'metal',
		// 		tag: 'forge:molten_steel'
		// 	}
		// ],
		ingredient: {
			tag: 'forge:raw_materials/iron'
		},
		// rate: 'metal',
		result: {
			amount: 90,
			tag: 'forge:molten_iron'
		},
		temperature: 800,
		time: 90
	})

	event.remove({id: 'tconstruct:smeltery/melting/metal/iron/raw_block'})

	event.custom({
		type: 'tconstruct:ore_melting',
		// byproducts: [
		// 	{
		// 		amount: 810,
		// 		rate: 'metal',
		// 		tag: 'forge:molten_steel'
		// 	}
		// ],
		ingredient: {
			tag: 'forge:storage_blocks/raw_iron'
		},
		// rate: 'metal',
		result: {
			amount: 810,
			tag: 'forge:molten_iron'
		},
		temperature: 800,
		time: 361
	})

})