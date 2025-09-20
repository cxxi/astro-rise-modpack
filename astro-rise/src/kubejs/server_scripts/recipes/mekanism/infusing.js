ServerEvents.recipes(event => {

	// alloy_infused

	event.remove({ id: 'mekanism:metallurgic_infusing/alloy/infused' })

	event.recipes.mekanismMetallurgicInfusing('mekanism:alloy_infused', 'create:andesite_alloy', 'mekanism:redstone', 10)

})