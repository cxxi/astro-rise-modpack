ServerEvents.recipes(event => {

	// primitive_alloy_smelter & alloy_smelter

	event.remove({ type: 'enderio:alloy_smelting' })

	// crafter

	event.remove({ id: 'enderio:crafter' })

	event.shaped('enderio:crafter', [
	    'AAA', 
	    'BCB',
	    'DED'
	], {
	    A: 'mekanism:enriched_redstone', 
	    B: 'mekanism:ingot_osmium',
	    C: 'enderio:void_chassis',
	    D: 'enderio:iron_gear',
	    E: 'create:mechanical_crafter'
	})
	
})