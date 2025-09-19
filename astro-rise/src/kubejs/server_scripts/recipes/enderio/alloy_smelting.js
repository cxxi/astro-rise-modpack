// ServerEvents.recipes(event => {

// 	// cake_base

// 	event.remove({ id: 'enderio:alloy_smelting/cake_base' })

// 	// dark_steel_ingot

// 	event.remove({ id: "enderio:alloy_smelting/dark_steel_ingot" })

// 	event.recipes.enderio.alloy_smelting(
// 		'enderio:dark_steel_ingot', 
// 		[
// 			'mekanism:ingot_steel',
// 			'bigreactors:graphite_dust',
// 			'mekanism:block_refined_obsidian'
// 		],
// 		6400
// 	)

// })

ServerEvents.recipes(event => {

  event.remove({ type: 'enderio:alloy_smelting' })

})