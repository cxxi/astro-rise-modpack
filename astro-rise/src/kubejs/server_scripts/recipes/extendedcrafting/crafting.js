ServerEvents.recipes(event => {
	
	// black_iron_ingot

	event.remove({ id: 'extendedcrafting:black_iron_ingot' })

	event.shapeless('extendedcrafting:black_iron_ingot', [
		'minecraft:iron_ingot',
		'twilightforest:knightmetal_ingot',
   		'enderio:grains_of_infinity'
	])

	// luminessence

	event.remove({ id: 'extendedcrafting:luminessence' })

})