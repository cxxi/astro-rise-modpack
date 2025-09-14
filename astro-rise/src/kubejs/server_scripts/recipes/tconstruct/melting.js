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

	// test raw

	// event.custom({
	// 	type: 'tconstruct:ore_melting',
	// 	// byproducts: [
	// 	// 	{
	// 	// 		amount: 90,
	// 	// 		rate: 'metal',
	// 	// 		tag: 'forge:molten_steel'
	// 	// 	}
	// 	// ],
	// 	ingredient: {
	// 		tag: 'forge:raw_materials/iron'
	// 	},
	// 	// rate: 'metal',
	// 	result: {
	// 		amount: 90,
	// 		tag: 'forge:molten_iron'
	// 	},
	// 	temperature: 800,
	// 	time: 90
	// })

})