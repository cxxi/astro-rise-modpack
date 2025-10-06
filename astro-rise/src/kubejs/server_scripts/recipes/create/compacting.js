ServerEvents.recipes(event => {

	event.remove({ id: 'create_ultimate_factory:compacting_blazepowder' })

	// resonarium_plate
	
	event.remove({ id: 'deeperdarker:resonarium_plate' })

	event.recipes.create.compacting(
		'deeperdarker:resonarium_plate',
		[
			Fluid.of('tconstruct:molten_electrum', 1000),
			'deeperdarker:resonarium'
		]
	)

	// beetroot_soup

	event.recipes.create.compacting(
		Fluid.of('tconstruct:beetroot_soup', 100),
		[
			Fluid.of('minecraft:water', 100),
			'minecraft:beetroot'
		]
	)

})