ServerEvents.recipes(event => {

	event.remove({ id: 'extendedcrafting:redstone_ingot' })
	event.remove({ id: 'extendedcrafting:ender_ingot' })
	event.remove({ id: 'extendedcrafting:luminessence' })

	// black_iron_ingot

	event.remove({ id: 'extendedcrafting:black_iron_ingot' })

	event.shapeless('extendedcrafting:black_iron_ingot', [
		'minecraft:iron_ingot',
		'twilightforest:knightmetal_ingot',
   		'enderio:grains_of_infinity'
	])

	// luminessence

	// event.shaped('extendedcrafting:luminessence', [
	//     'AAA', 
	//     'ABA',
	//     'AAA'  
	// ], {
	// 	A: 'mekanism:dust_fluorite',
	//     B: 'mekanism:ingot_refined_glowstone'
	// })

})