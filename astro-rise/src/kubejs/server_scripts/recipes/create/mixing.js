ServerEvents.recipes(event => {

	// seed_oil + sugar

	event.recipes.create.mixing(
		[
			Fluid.of('createaddition:seed_oil', 250),
	 	 	'2x minecraft:sugar',
	 	 	Item.of('minecraft:sugar').withChance(0.5),
		], 
		Fluid.of('tconstruct:beetroot_soup', 500)
	).heated()

})